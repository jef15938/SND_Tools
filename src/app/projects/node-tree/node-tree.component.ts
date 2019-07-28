import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-node-tree',
  templateUrl: './node-tree.component.html',
  styleUrls: ['./node-tree.component.scss']
})
export class NodeTreeComponent implements OnInit {

  public inputNodeName: string = '';
  public inputJSONTextArea: string = '';
  public rootNode: Node = null;
  public isAddNodeFromJSONSuccess: boolean = true;
  public isRemoveNodeSuccess: boolean = true;
  private _whoelTreeNodeList: Array<Node> = [];
  constructor(
  ) { }


  private defaultJSON = {
    'Root12': ['A', 'B', 'C'],
    'A': ['A1', 'A2', 'A3'],
    'A2': ['A21', 'A22', 'A23'],
    'A3': ['A31', 'A32'],
    'B': ['B1', 'B2'],
    'B1': ['B11', 'B12'],
    'B2': ['B21'],
    'C': ['C1']
  }

  ngOnInit() {


    this.isAddNodeFromJSONSuccess = this._addNodeFromJSON(this.defaultJSON);

    this.inputJSONTextArea = this._transformJSON(this.defaultJSON);



    this._drawOriginNodeTree();

    this._drawAfterRemoveNodeTree();

    //console.log('this.html: ', this.treeHtml);

  }

  private _drawOriginNodeTree() {
    this._drawNodeTreeByClassName('tree');
  }

  private _drawAfterRemoveNodeTree() {
    this._drawNodeTreeByClassName('afterTree');
  }

  private _transformJSON(json) {
    return JSON.stringify(json).split('],').reduce((acc, cur) => acc + '],\n' + cur);
  }

  private _drawNodeTreeByClassName(className: string) {
    let treeHtml = this._generateHtmlTreeByNode(this.rootNode);
    //console.log('this.html: ', afterDrawTreeHtml.outerHTML);
    let treeDIv = document.getElementsByClassName(className)[0];
    treeDIv.innerHTML = '';
    if (treeHtml) {
      treeDIv.appendChild(treeHtml);
    }
  }

  public removeNode() {
    this._removeNode(this.inputNodeName);
    this._drawAfterRemoveNodeTree();
  }

  public submit() {
    //console.warn("this.inputJSONTextArea: ", JSON.parse(this.inputJSONTextArea));
    this.inputJSONTextArea = this.inputJSONTextArea.replace('\'', '"');
    //console.warn("after rep[lacethis.inputJSONTextArea: ", JSON.parse(this.inputJSONTextArea));

    try {
      let paresJSON = JSON.parse(this.inputJSONTextArea);
      this._resetNodeTreeByJSON(paresJSON);
    } catch (error) {
      this.isAddNodeFromJSONSuccess = false;
    }
  }

  public resetNodeTree() {
    console.warn("this.defaultJSON: ", this.defaultJSON);

    this.inputJSONTextArea = this._transformJSON(this.defaultJSON);
    this._resetNodeTreeByJSON(this.defaultJSON);
  }

  private _resetNodeTreeByJSON(JSON) {
    if (this.rootNode) {
      this.rootNode.clearChildList();
      this.rootNode = null;
    }

    this._whoelTreeNodeList = [];
    this.isAddNodeFromJSONSuccess = this._addNodeFromJSON(JSON);
    this._drawOriginNodeTree();
    this._drawAfterRemoveNodeTree();
  }


  private _generateHtmlTreeByNode(node: Node): HTMLElement {


    if (node !== null) {

      let nodeul: HTMLElement = document.createElement('ul');
      let nodeli: HTMLElement = document.createElement('li');
      let nodea: HTMLElement = document.createElement('a');
      nodea.innerHTML = node.name;
      nodeli.appendChild(nodea);
      nodeul.appendChild(nodeli);

      if (!node.isHasChild()) {
        return nodeul;
      }

      else {
        node.getFirstChildList().forEach(item => {
          let result = this._generateHtmlTreeByNode(item);

          if (result !== undefined) {

            nodea.appendChild(result);
          };
        });
        return nodeul;
      }
    }
    // <ul>
    //     <li *ngFor="let rootChild of rootNode.getFirstChildList()">
    //       <a>{{rootChild.name}}</a>
    //     </li>
    //   </ul>
  }

  private _addNodeFromJSON(JSON): boolean {

    let isSuccess: boolean = false;
    let entry = Object.entries(JSON);
    console.log(entry);
    entry.forEach(item => {
      let fatherNodeName = item[0];
      let childNodeNameList: Array<any> = <Array<any>>item[1];
      childNodeNameList.forEach((childNodeName: string) => {
        this._doAddNode(fatherNodeName, childNodeName);
      });
      isSuccess = true;
    });

    return isSuccess;

  }

  private _doAddNode(fatherNodeName: string, childNodeName: string): void {
    let fathetNode = this._getNodeByNameOrCreate(fatherNodeName);
    let childNode = this._getNodeByNameOrCreate(childNodeName);
    fathetNode.addChild(childNode);
    if (this.rootNode === null) {
      this.rootNode = fathetNode;
    }

  }


  private _getNodeByName(nodeName: string): Node {
    let resultNode: Node;
    if (this.rootNode) {
      if (nodeName === this.rootNode.name) {
        resultNode = this.rootNode;
      }
      else {
        let filterWhoelTreeNodeList =  this._whoelTreeNodeList.filter(item => item.name === nodeName);
        resultNode = filterWhoelTreeNodeList.length > 0 ? filterWhoelTreeNodeList[0] : null;
      }
    }

    return resultNode;
  }

  private _getNodeByNameOrCreate(nodeName: string): Node {
    let result = this._getNodeByName(nodeName);
    if(!result) {
      let newNode = new Node(nodeName);
      this._whoelTreeNodeList.push(newNode);
      result = newNode;
    } 
    return result;
  }


  private _removeNode(nodeName: string): void {
    let getNodeNyName = this._getNodeByName(nodeName);
    if (!getNodeNyName) {
      this.isRemoveNodeSuccess = false;
    }
    else if (getNodeNyName.name === this.rootNode.name && this.rootNode.getFirstChildList().length === 0) {
      this.rootNode = null;
    }

    else {

      if (!getNodeNyName || (getNodeNyName && getNodeNyName.isHasChild())) {
        this.isRemoveNodeSuccess = false;
      }
      else {
        this.isRemoveNodeSuccess = true;
        let father = this._getNodeFatherByName(nodeName);
        if (father) {

          father.removeFirstChildByName(nodeName);
          if (father.getChildList().length == 0) {
            this._removeNode(father.name);
          }
        }
      }
    }
  }

  private _getNodeFatherByName(childName: string): Node {
    let resultNode: Node;

    let rootNodeFirstChildList = this.rootNode.getFirstChildList();
    if (rootNodeFirstChildList.length == 0 || rootNodeFirstChildList.filter(item => item.name === childName).length > 0) {
      resultNode = this.rootNode;
    }

    else {
      this.rootNode.getChildList().forEach(child => {
        if (child.getFirstChildList().filter(item => item.name === childName).length > 0) {
          resultNode = child;
        }
      });
    }

    return resultNode;

  }







}

export class Node {
  private _name: string;
  private _childNodeList: Array<Node> = [];
  constructor(name: string) {
    this._name = name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get name() {
    return this._name;
  }

  public addChild(node: Node): void {
    this._childNodeList.push(node);
  }

  public getChildList(): Array<Node> {
    let allChildList: Array<Node> = [];
    this._childNodeList.forEach(child => {
      allChildList.push(child);
      if (child.isHasChild) {
        allChildList.push(...child.getChildList());
      }
    })
    return allChildList;
  }

  public getFirstChildList() {
    return this._childNodeList;
  }

  public removeFirstChildByName(childName: string): void {
    console.log('class: ', this._childNodeList);
    this._childNodeList = this._childNodeList.filter(node => node.name !== childName);
    console.log('after class: ', this._childNodeList);
  }

  public isHasChild(): boolean {
    return this._childNodeList.length !== 0;
  }

  public getFirstChildByName(childName: string): Node {
    return this._isHasChildByName(childName) ? this._childNodeList.filter(node => node.name == childName)[0] : null;
  }

  private _isHasChildByName(childName: string): boolean {
    return this._childNodeList.filter(node => node.name == childName).length > 0;
  }

  public clearChildList() {
    this.getChildList().forEach(child => {
      child = null;
    });
    this._childNodeList = [];
  }
}

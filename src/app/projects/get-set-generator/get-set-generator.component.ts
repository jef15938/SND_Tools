import { Component, OnInit } from '@angular/core';
import { StringUtil } from '../../utils/StringUtil'
import { SelectOption } from 'src/app/ui/bean/selectOption';

@Component({
  selector: 'app-get-set-generator',
  templateUrl: './get-set-generator.component.html',
  styleUrls: ['./get-set-generator.component.scss']
})
export class GetSetGeneratorComponent implements OnInit {

  public textArea: string;
  public result: string = '';
  public typeSelectEnum = typeSelect;
  public readonly typeSelectOptionList: Array<SelectOption> = [
    new SelectOption('All', typeSelect.ALL),
    new SelectOption('Get', typeSelect.GET),
    new SelectOption('Set', typeSelect.SET)
  ];
  public readonly sortSelectOptionList: Array<SelectOption> = [
    new SelectOption('Get => Set', sortSelect.GETFIRT),
    new SelectOption('Set => Get', sortSelect.SETFIRST)
  ];

  public typeSelect: typeSelect = <typeSelect>this.typeSelectOptionList[0].code;
  public sortSelect: sortSelect = <sortSelect>this.sortSelectOptionList[0].code;

  constructor() { }

  ngOnInit() {
    this.textArea = "private _text: string;\nprivate _hello: boolean";
    this.onClickSubmit();
  }

  public onChangeSelect(selectType:string, selectOptionCode: string) {
    if(selectType === 'type') {
      this.typeSelect = <typeSelect>selectOptionCode;
    }
    else if(selectType === 'sort') {
      this.sortSelect = <sortSelect>selectOptionCode;
    }

    this.onClickSubmit();
  }

  public onClickSubmit() {
    this.result = '';
    this.textArea.split('\n');
    let splitEnterList = this.textArea.split('\n');
    splitEnterList.forEach(item => {

      let name = this._findPropertyName(item);
      let type = this._findTypeName(item);
      console.log(name, type);


      if(this.typeSelect === typeSelect.ALL) {
        if(this.sortSelect === sortSelect.GETFIRT) {
          this.genGetSet(name, type, typeSelect.GET);
          this.genGetSet(name, type, typeSelect.SET);
        }

        else if(this.sortSelect === sortSelect.SETFIRST) {
          this.genGetSet(name, type, typeSelect.SET);
          this.genGetSet(name, type, typeSelect.GET);
        }
      }

      else {
        this.genGetSet(name, type, this.typeSelect);
      }

    
      this.result += '\n';
    });
  }

  private genGetSet(name: string, type: string, genType: typeSelect) {
    // alert("name:"+name+ ' tpye:'+type);
    if (genType === typeSelect.SET) {
      this.result += "public " + genType + " " + name + "(" + name + ": " + type + ") {\n\tthis._" + name + " = " + name + ";\n}\n";
    }
    else if (genType === typeSelect.GET) {
      this.result += "public " + genType + " " + name + "(): " + type + " {\n\treturn this._" + name + ";\n}\n";
    }
  }

  private _findPropertyName(str: string): string {
    let dashPosition = str.indexOf('_');
    let propertyNameStartIndex = dashPosition + 1;
    let propertyNameEndIndex = propertyNameStartIndex + this._findNotEnglishOrNumberEndIndex(str.slice(propertyNameStartIndex));
    return str.slice(propertyNameStartIndex, propertyNameEndIndex);
  }

  private _findTypeName(str: string): string {
    let colonIndex = str.indexOf(':');
    let typeStartIndex = colonIndex + 1 + this._findSpaceEndIndex(str.slice(colonIndex + 1));
    let typeEndIndex = typeStartIndex + 1 + this._findNotEnglishOrNumberEndIndex(str.slice(typeStartIndex)) - 1;
    typeEndIndex = typeEndIndex <= typeStartIndex ? str.length : typeEndIndex;
    return str.slice(typeStartIndex, typeEndIndex);
  }

  private _findSpaceEndIndex(str: string): number {
    let charArr = str.split('');
    let result = -1;
    for (var i = 0; i < charArr.length && result === -1; i++) {
      if (charArr[i] !== ' ') {
        result = i;
      }
    }

    return result;
  }

  private _findNotEnglishOrNumberEndIndex(str: string): number {
    let charArr = str.split('');
    let result = -1;
    for (var i = 0; i < charArr.length && result === -1; i++) {
      if (!StringUtil.isAllEnglishChar(charArr[i]) && !StringUtil.isAllNumberChar(charArr[i])) {
        result = i;
      }
    }

    return result;
  }

}

enum typeSelect {
  ALL = 'all',
  GET = 'get',
  SET = 'set'
}

enum sortSelect {
  GETFIRT = 'getFirst',
  SETFIRST = 'setFirst'
}

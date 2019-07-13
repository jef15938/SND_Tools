import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { element } from '@angular/core/src/render3/instructions';
import { TypeScriptEmitter } from '@angular/compiler';
import { AppStore } from 'src/app/appSore/appStore';

@Component({
  selector: 'app-paint-board',
  templateUrl: './paint-board.component.html',
  styleUrls: ['./paint-board.component.scss']
})
export class PaintBoardComponent implements OnInit {

  @ViewChild('canvasEl') canvasEl: ElementRef;
  public isWholeAreaPaint: boolean = false;
  public isShowBtn: boolean = true;

  public func;
  private context: CanvasRenderingContext2D;
  public myCanvas: HTMLCanvasElement;

  public imgSrc: string;
  public isShowImg: boolean = false;
  public isDisabledSave: boolean = true;
  constructor(
    private store: AppStore
  ) {
    this.store.setCurrentMenuItem('paintBoard');
   }

  ngOnInit() {

   // this.isDisabledSave = true;
    //this.myCanvas = this.canvasEl.nativeElement;
    this.myCanvas = document.querySelector('canvas');
    //this.myCanvas.height = 10;
    
    this.myCanvas.width = window.innerWidth;
    this.myCanvas.height = window.innerHeight;
    

    //this.myCanvas.height = window.innerHeight;
    //this.myCanvas.height = document.querySelector('.menu').getBoundingClientRect().height;
    this.context = (this.canvasEl.nativeElement as HTMLCanvasElement).getContext('2d');
    //this.context.translate(100,1000);

    // document.body.addEventListener('resize', ()=>{
    //   console.error("resize");
    //   this.myCanvas.width = window.innerWidth;
    //   this.myCanvas.height = window.innerHeight;
    // });


  }


  onClick(func: string) {
    if(func == 'changeToWholeArea') {
      if(this.isShowBtn) {
        this.isShowBtn = false;
      }
      this.wholeAreaPaint(true);
    }

    else if(func == 'clear'){
  
      //document.body.querySelector('button').style.cursor = "url('../../../assets/pencil.png'), auto";

      this.context.clearRect(0,0,this.myCanvas.width,this.myCanvas.height);
      this.isDisabledSave = true;
    }

    else if(func == 'save'){
      let src = this.myCanvas.toDataURL("image/png");
      //change cursor
      // var resizedCanvas = document.createElement("canvas");
      // var resizedContext = resizedCanvas.getContext("2d");
      // resizedCanvas.height = 50;
      // resizedCanvas.width = 50;
      // resizedContext.drawImage(this.myCanvas,0,0,50,50);
      // let resizeSrc = resizedCanvas.toDataURL("image/png");

  

      // document.body.querySelector('canvas').style.cursor = "url(" + resizeSrc + "),auto";

      //end of change cursor
      this.imgSrc = src;
      this.isShowImg = true;
    }
  }

  wholeAreaPaint(isWholeAreaPaint: boolean) {

    console.error("isWholeAreaPaint: ", isWholeAreaPaint);
    if(isWholeAreaPaint) {
      document.body.onmousedown =  () =>{
        console.log("down",event);
        
        document.body.addEventListener('mousemove',move);
  
      }
  
  
      document.body.onmouseup =  () =>{
        console.log("up",event);
        document.body.removeEventListener('mousemove', move, false);
      }
  
      var move = function(event) {
       
        
        //whole area
        console.log("move: ",event);
        let myDiv = document.createElement('div');
        myDiv.style.position = "absolute";
        myDiv.style.left = event.clientX+'px';
        myDiv.style.top = event.clientY+'px';
        myDiv.style.backgroundColor = 'black';
        myDiv.style.width = '2px';
        myDiv.style.height = '2px';
        document.body.appendChild(myDiv);
        //end og area
      
       
  
      }
    }

    else {
      //document.body.outerHTML = document.body.outerHTML
    }



    
      
    
    
  }


  
  draw(x, y) {

    if(this.isDisabledSave) {
      this.isDisabledSave = false;
    }
    this.context.fillRect(x,y,5,5);
  }


  onPan(event) {
    var rect = (<HTMLCanvasElement>this.canvasEl.nativeElement).getBoundingClientRect();
    console.error(event);
    console.error("rect: ", rect);
    let x = event.srcEvent.clientX - rect.left;
    let y = event.srcEvent.clientY - rect.top;
    console.error(x, ' ', y);
    this.draw(x,y);

  }

  
    

  

  

}

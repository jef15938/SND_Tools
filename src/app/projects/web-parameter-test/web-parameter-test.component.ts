import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-web-parameter-test',
  templateUrl: './web-parameter-test.component.html',
  styleUrls: ['./web-parameter-test.component.scss']
})
export class WebParameterTestComponent implements OnInit {

  public pencilPicUrl = '../../../assets/pencil.png';

  constructor(
    private route: ActivatedRoute
  ) {
    window.onmessage = function (e) {
      if (e.data == 'test') {
        alert('come from parent postmessage');
       
      }
    };

  }

  ngOnInit() {
    
  }

}

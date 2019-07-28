import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-sort',
  templateUrl: './array-sort.component.html',
  styleUrls: ['./array-sort.component.scss']
})
export class ArraySortComponent implements OnInit {

  constructor() { }

  public arrayBeSort = [
    {
      data: {
        firstName: 'Jack',
        lastName: 'A'
      },
      score: {
        math: 90
      }
    },
    {
      data: {
      firstName: 'Mary',
      lastName: 'B'
      },
      score: {
        math: 90
      }
    },
    {
      data: {
      firstName: 'Bill',
      lastName: 'C'
      },
      score: {
        math: 90
      }
    },
    {
      data: {
      firstName: 'Zebra',
      lastName: 'D'
      },
      score: {
        math: 90
      }
    },
    {
      data: {
      firstName: 'Allen',
      lastName: 'E'
      },
      score: {
        math: 90
      }
    },
    {
      data: {
      firstName: 'Allen',
      lastName: 'G'
      },
      score: {
        math: 90
      }
    },
    {
      data: {
      firstName: 'Allen',
      lastName: 'B'
      },
      score: {
        math: 100
      }
    },
    {
      data: {
      firstName: 'Allen',
      lastName: 'B'
      },
      
      score: {
        math: 90
      }
    }

  ]

  ngOnInit() {

    console.warn('original array: ', this.arrayBeSort);
    let cloneArray = Object.assign([], this.arrayBeSort);
   
    this.sort(cloneArray, [['data','firstName'], ['data','lastName'],['score','math']],'desc');
    console.warn('after sort: ', cloneArray);


  }

  sort(array: Array<any>, sortParameter: Array<Array<any>>, mode: string) {
    let base = mode == 'asc' ? -1 : 1;
    array.sort((n1, n2) => {
      let returnResult;
      let isHasResult: boolean = false;
      for (var i = 0; i < sortParameter.length && !isHasResult; i++) {

        let n1BeCompare = n1;
        let n2BeCompare = n2;
        sortParameter[i].forEach(element => {
          // console.warn('ele: ',element);
          n1BeCompare = n1BeCompare[element]; 
          n2BeCompare = n2BeCompare[element]; 
        });
        // console.warn(n1BeCompare, ' ',n2BeCompare);
        if (n1BeCompare < n2BeCompare) {
          isHasResult = true;
          returnResult = base;
        }
        else if (n1BeCompare < n2BeCompare) {
          isHasResult = true;
          returnResult = !base;
        }
        else {
          if (i == sortParameter.length - 1) {
            isHasResult = true;
            returnResult = 0;
          }
        }
      }
      // sortParameter.forEach(parameter => {

      //   if (n1.firstName < n2.firstName) {
      //     returnResult = -1;
      //   }
      //   else if (n1.firstName > n2.firstName) {
      //     returnResult = 1;
      //   }
      //   else {
      //     returnResult = 0;
      //   }
      // });
      return returnResult;

    });
  }

}

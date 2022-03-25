import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.arrayValue()
    //arrayValue()
  }

  name:string= "123"
  menuItem :any[]= [
    { content : "登記",router : "form"},
    { content : "紀錄",router : "table"},
    { content : "調查",router : "survey"}
  ]

  menuItem_content = [
    "登記",
    "紀錄"
  ]
  menuItem_router = ["form","table"]

  array:any[] = ["1","2"]

  arrayValue(){
   // let  array = [4,5,6]
    for(let i in this.array){
      // console.log("陣列位址",i)
      // console.log("陣列的值",this.array[i])
      console.log("*")
    }

    for( var i in this.menuItem_content){
      console.log(this.menuItem_content[i])
    }

    for(let i in this.menuItem){
      console.log(this.menuItem[i].router)
    }

    // for(let i = 0 ;i < this.array.length ;i++){
    //   console.log("陣列的值",this.array[i])
    // }
  }

  test:any = []
}

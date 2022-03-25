import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  gradeForm:number = 5
  addFormBtnSta:boolean = false
  ngOnInit(): void {

  }

  addFormBtn(){
    // this.addFormBtnSta = !this.addFormBtnSta
    this.gradeForm ++
    console.log(this.gradeForm)
  }

  addTable(){
    location.href = "/table"
  }


}

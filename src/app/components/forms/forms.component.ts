import { Component, OnInit } from '@angular/core';


type field = {
  name: string;
  type: string;
  placeholder:string;
  isRequired:boolean;
}
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  fields:Array<field>;
  
  constructor() { 
    this.fields = [
      {
        name: "First Name", 
        type: 'text',
        placeholder:' Enter Your Name',
        isRequired: true
      },
      {
        name: "Last Name", 
        type: 'text',
        placeholder:' Enter Last Your Name',
        isRequired: false
      },
      {
        name: "Age", 
        type: 'text',
        placeholder:' Enter Age',
        isRequired: false
      }
    ]
  }
  ngOnInit(): void {
  }

}

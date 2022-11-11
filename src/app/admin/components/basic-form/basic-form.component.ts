import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  nameField = new FormControl('Soy un control');
  emailField = new FormControl('');
  phoneField = new FormControl('');

  colorField = new FormControl('');
  dateField = new FormControl('');
  numberField = new FormControl('');
  categoryField = new FormControl('category-1');
  tagField = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  getNameValue (){
    console.log(this.nameField.value);
  }

  

}

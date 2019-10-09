import {Component, OnInit} from '@angular/core';
import {NgModel} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactMethods = [
    {id: 1, name: 'Email'},
    {id: 2, name: 'Phone'}
  ];

  constructor() {
  }

  ngOnInit() {
  }

  log(firstName) {
    console.log(firstName);
  }

  submit(f) {
    console.log(f);
  }
}

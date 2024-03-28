import { Component, NgModule } from '@angular/core';
import { StudentgridService } from './studentgrid.service';
import { FormGroup,  FormBuilder,  Validators, NgForm } from '@angular/forms';
import { Injectable } from '@angular/core';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
   
    constructor(public spinnerService: NgxSpinnerService){}
    title = 'Students Dashboard';
}
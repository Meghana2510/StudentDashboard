import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoaderInterceptor } from './loader.interceptor';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentsComponent } from './students/students.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './auth.service';

const routes: Routes = [
  
  { path: 'appcomponent', component: AppComponent },
  { path: '', redirectTo: '/app.component', pathMatch: 'full' },
  

];

@NgModule({
 declarations: [
  AppComponent,
  LoginComponent,
  AddStudentComponent,
  HeaderComponent,
  ErrorComponent,
  StudentDetailsComponent,
  StudentsComponent,
  HomeComponent
 ],

  imports: [
    
    BrowserModule,
    RouterModule.forRoot([
       {path: 'home', component: HomeComponent}
      ]),
    AppRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
 
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true}],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
function enableRipple(arg0: boolean) {
  throw new Error('Function not implemented.');
}


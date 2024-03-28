
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddStudentComponent } from './add-newstudent/add-student.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailsComponent } from './student-info/student-details.component';
import { ErrorComponent } from './er message/error.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

{path:'', redirectTo:"students", pathMatch: "full" },


{
  path: 'add-student',
  component:AddStudentComponent
},
{path:'students', 
component: StudentsComponent 
},

{
  path: 'login', 
  component: LoginComponent 
},
{
  path: 'home', 
  component:HomeComponent
},
  
  {path:'students/:id', component: StudentDetailsComponent },
  {path:'update/:id', component: StudentDetailsComponent },
  {path: 'app', component: AppComponent},
  {path:'**', component: ErrorComponent }
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


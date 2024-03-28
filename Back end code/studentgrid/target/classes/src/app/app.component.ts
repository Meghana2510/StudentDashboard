import { Component } from '@angular/core';
import { StudentgridService } from './studentgrid.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'studentdashboard';


    constructor(private StudentgridService: StudentgridService) { }
    register(registerForm: { value: any; }) {
        this.StudentgridService.registerStudent(registerForm.value).subscribe(
            (resp: any) => {
                console.log(resp);
            },
            (err) => {
                console.log(err);
            }

        );
    }
}

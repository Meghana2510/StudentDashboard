import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentgridService } from '../studentgrid.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentForm!: FormGroup;
  student!: any;

  constructor(
    private service: StudentgridService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initFormAdd();

    
    
  }

  initFormAdd() {
    this.studentForm = this.formBuilder.group({
      studentID: [null, [Validators.required]],
      sName: [, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      sAddress: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      email: [null, [Validators.required, Validators.email]],
      sPhone: [null, [Validators.required, Validators.pattern(/[0-9]{10}$/)]],
      percentage: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      username: [null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]]
    });
  }
  
  getAllStudents() {
    this.service.getAllStudents().subscribe({
      next: (std: any) => {
        this.student = std;
        this.initFormUpdate();
      },
      error: (err: any) => console.log(err)
    });
  }

  initFormUpdate() {
    this.studentForm.patchValue(this.student);
  }

  submitAdd() {
    if (this.studentForm.valid) {
      const newStudent = this.studentForm.value;
      this.service.addStudent(newStudent).subscribe({
        next: () => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Student has been Added',
            showConfirmButton: false,
            timer: 1500
          });
          this.router.navigateByUrl("/students");
        },
        error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Can't add, check out data again`,
            footer: '<a href="/~">Back to Home</a>'
          });
        }
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `Can't add, check out data again`,
        footer: '<a href="/~">Back to Home</a>'
      });
    }
  }
}

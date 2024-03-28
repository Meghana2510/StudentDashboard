import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentgridService } from '../studentgrid.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  studentID!: number;
  student!: any;

  constructor(private activatedRoute: ActivatedRoute, private service: StudentgridService, private router: Router) {}

  ngOnInit(): void {
    this.studentID = this.activatedRoute.snapshot.params["ID"];
    this.getAllStudents(this.studentID);
  }

  updateStudent() {
    this.service.updateStudent(this.student).subscribe({
      next: () => {
        Swal.fire(
          'Updated!',
          'Student details have been updated.',
          'success'
        );
        this.router.navigate(['students']);
      },
      error: (err: any) => {
        console.log(err);
        Swal.fire(
          'Error!',
          'Failed to update student details.',
          'error'
        );
      }
    });
  }

  getAllStudents(studentID: number) {
    this.service.getStudentByID(studentID).subscribe({
      next: (data: any) => {
        this.student = data;
      },
      error: (err: any) => console.log(err)
    });
  }

  deleteStudent(studentID: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteStudent(studentID).subscribe({
          next: () => {
            // Assuming student is an array of students
            this.student = this.student.filter((s: any) => s.studentID !== studentID);
            Swal.fire(
              'Deleted!',
              'Student has been deleted.',
              'success'
            );
          },
          error: (err: any) => {
            console.log(err);
            Swal.fire(
              'Error!',
              'Failed to delete student.',
              'error'
            );
          }
        });
      }
    });
  }
}

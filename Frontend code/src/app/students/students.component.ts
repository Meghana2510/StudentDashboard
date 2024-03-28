import { Component, OnInit, signal } from '@angular/core';
import { StudentgridService } from '../studentgrid.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit{
  constructor(public service:StudentgridService){}
  students:any;
  deleteShow:boolean = false;
  deleteAnswer = false;
  ngOnInit(): void {
    this.getAllStudents();
  }
  deleteStudent(studentID: any){
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
          next:()=>{this.students = this.students.filter((s: any)=> s.studentID !== studentID)}
        });
        Swal.fire(
          'Deleted!',
          'Student has been deleted.',
          'success'
        )
      }
    })
  }
  getAllStudents(){
    this.service.getAllStudents().subscribe({
      next:(data: any)=>{
        // console.log(data);
        this.students = data;
      },
      error:(err: any)=>console.log(err)
    });
  }
  clickYes(){
    // console.log('yessss');
    this.deleteAnswer = true;
    this.deleteShow = false;
  }
  clickNo(){
    this.deleteAnswer = false;
    this.deleteShow = false;
  }
}

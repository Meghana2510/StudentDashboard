import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentgridService {
  getStudentBystudentID: any;
  

  
  constructor(private http:  HttpClient) {}

  private Base_URL = 'http://localhost:9090';
  // Handling All request methods
  // Get all students
  addStudent(student:any){
    return this.http.post<any>(`${this.Base_URL}/addStudent`, student);
  }
  getAllStudents(): Observable<any> {
    return this.http.get<any[]>(`${this.Base_URL}/getAllStudents`);

  }
  getStudentByID(studentId: number): Observable<any> {
    return this.http.get(`${this.Base_URL}/${studentId}`);
  }
  deleteStudent(studentID: any): Observable<any> {
    return this.http.delete(`${this.Base_URL}/deleteStudent?studentID=${studentID}`);
  }
  
  updateStudent(student: any): Observable<any> {
    return this.http.put<any>(`${this.Base_URL}/updateStudent`, student);
}

}
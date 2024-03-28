import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentgridService {

  constructor(private http: HttpClient) { }

API = ' http://localhost:3306'

  public registerStudent(StudentData: any) {
    return this.http.post(this.API + ' /registerStudent',StudentData)
  }
}

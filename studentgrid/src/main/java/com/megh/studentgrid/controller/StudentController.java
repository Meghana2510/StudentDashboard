package com.megh.studentgrid.controller;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import com.megh.studentgrid.model.Student;
import com.megh.studentgrid.service.StudentService;


@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")

public class  StudentController {
	
	private final StudentService studentService;
	
	
    @Autowired
    public StudentController(StudentService studentService) {
	this.studentService = studentService;
}



  
  
  @PostMapping("/addStudent")
  public Student addStudent(@RequestBody Student student) {
    return studentService.addStudent(student);
  }
  
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/getAllStudents")
  public List<Student> getAllStudents() {
    return studentService.getAllStudents();
  }
  
  @DeleteMapping("/deleteStudent")
  public ResponseEntity<?> deleteStudent(@RequestParam Integer studentID) {
      studentService.deleteStudent(studentID);
      return ResponseEntity.ok().build();
  }
  
  @PutMapping("/updateStudent")
  public Student updateStudent(@RequestBody Student student) {
    return studentService.updateStudent(student);
  }
}


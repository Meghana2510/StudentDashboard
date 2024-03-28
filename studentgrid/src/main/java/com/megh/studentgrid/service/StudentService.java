package com.megh.studentgrid.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.megh.studentgrid.model.Student;
import com.megh.studentgrid.repository.StudentRepository;

@Service
public class StudentService {
	

    private final StudentRepository studentRepository;
    
   @Autowired
    StudentService(StudentRepository studentRepository) {
    	this.studentRepository = studentRepository;
    }
	
    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }
	
	public List<Student> getAllStudents() {
		return (List<Student>) studentRepository.findAll();
	
	}
	public void deleteStudent (Integer studentID) {
		studentRepository.deleteById(studentID);
	}
	public Student updateStudent(Student student) {
		Integer studentID= student.getStudentID();
		Student std = studentRepository.findById(studentID).get();
		std.setsName(student.getsName());
		std.setsAddress(student.getsAddress());
		std.setsPhone(student.getsPhone());
		std.getEmail();
		std.setUsername(student.getUsername());
		std.setPassword(student.getPassword());
		std.setPercentage(student.getPercentage());
		return studentRepository.save(std);
		
	}

}

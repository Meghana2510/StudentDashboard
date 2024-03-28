package com.megh.studentgrid.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.megh.studentgrid.model.Student;

@Repository
public interface StudentRepository extends CrudRepository<Student, Integer> {
	
}

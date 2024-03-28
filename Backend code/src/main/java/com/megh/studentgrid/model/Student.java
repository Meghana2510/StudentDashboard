package com.megh.studentgrid.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity


public class Student {
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	private int studentID;
	private String sName;
	private String sAddress;
	private long sPhone;
	private double percentage;
	private String email;
	private String username;
    private String password;

	
    public int getStudentID() {
		return studentID;
	}
	public void setStudentID(int studentID) {
		this.studentID = studentID;
	}
	public String getsName() {
		return sName;
	}
	public void setsName(String sName) {
		this.sName = sName;
	}
	public String getsAddress() {
		return sAddress;
	}
	public void setsAddress(String sAddress) {
		this.sAddress = sAddress;
	}
	public long getsPhone() {
		return sPhone;
	}
	public void setsPhone(long sPhone) {
		this.sPhone = sPhone;
	}
	public double getPercentage() {
		return percentage;
	}
	public void setPercentage(double percentage) {
		this.percentage = percentage;
	}
    public String getEmail() {
        return email;
    }
    public void setEmail() {
    	
    	
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
	

}


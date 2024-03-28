package com.megh.studentgrid;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class sampleclass {
	@GetMapping("/getMessage")
	
	public String getMessage()
	{
		return "Hello , This is Meghana";
	}
}

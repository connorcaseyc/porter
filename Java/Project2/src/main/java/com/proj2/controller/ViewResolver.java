package com.proj2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewResolver {
	
	@GetMapping(value="nextPage.app")
	public String nextPage() {
		return "two";
	}
	
	@GetMapping(value="home.app")
	public String home() {
		return "index";
	}

}

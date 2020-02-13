package com.proj2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.proj2.model.Users;
import com.proj2.service.UsersService;

@Controller
public class UsersController {
	
	private UsersService us;
	
	@Autowired
	public void setUs(UsersService us) {
		this.us = us;
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/list.app",
			produces="application/json")
	public ResponseEntity<List<Users>> getAllAsList() {
		return new ResponseEntity<>(us.getAll(), HttpStatus.ACCEPTED);
	}

}

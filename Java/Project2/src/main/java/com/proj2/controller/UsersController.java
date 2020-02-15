package com.proj2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.proj2.model.Users;
import com.proj2.service.UsersService;

@Controller
@CrossOrigin(origins={"http://localhost:3000"})
@RequestMapping(value="/user.app")
public class UsersController {
	
	@Autowired
	UsersService us;
	
	@RequestMapping(method=RequestMethod.GET, value="/userlist.app",
			produces="application/json")
	public ResponseEntity<List<Users>> getAllAsList() {
		return new ResponseEntity<>(us.getAll(), HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/adduser.app", 
			produces="application/json")
	public ResponseEntity<Users> putIn(@ResponseBody Users u) {
		
	}
	
	
	@PostMapping
	public @ResponseBody Users addUser(@RequestBody Users user) {
		return us.insertUser(user);
	}

}

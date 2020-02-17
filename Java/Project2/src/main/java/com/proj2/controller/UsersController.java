package com.proj2.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
<<<<<<< HEAD
=======
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.proj2.model.Users;
import com.proj2.service.UsersService;

@Controller
<<<<<<< HEAD
@CrossOrigin(origins = {"http://localhost:3000"})
=======
@CrossOrigin(origins={"http://localhost:3000"})
//@RequestMapping(value="/user.app")
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
public class UsersController {
	
	@Autowired
	UsersService us;
	
	@RequestMapping(method = RequestMethod.POST, consumes = "application/json", value="/auth.app")
	public @ResponseBody Users authenticate(@RequestBody Users users){
		return users != null ? us.check(users) : users;
	}
	
<<<<<<< HEAD
	@RequestMapping(method=RequestMethod.GET, value="/list.app",produces="application/json")
	public ResponseEntity<List<Users>> getAllAsList() {
=======
	@RequestMapping(method=RequestMethod.GET, value="/userlist.app",
			produces="application/json")
	public ResponseEntity<List<Users>> getAllUsers() {
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
		return new ResponseEntity<>(us.getAll(), HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/adduser.app", 
			produces="application/json")
	public ResponseEntity<Users> putInUser(@RequestBody Users u) {
		us.insertUser(u);
		return new ResponseEntity<>(u, HttpStatus.ACCEPTED);
	}
	
	@GetMapping("{email}/email.app")
	public @ResponseBody Users getByEmail(@PathVariable("email") String email) {
		return us.getByEmail(email);
	}
	
	@GetMapping("{id}/id.app")
	public @ResponseBody Users getById(@PathVariable("id") int id) {
		return us.getById(id);
	}
	
	@GetMapping("{username}/username.app")
	public @ResponseBody Users getByUsername(@PathVariable("username") String username) {
		return us.getByUsername(username);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/deleteuser.app", 
			produces="application/json")
	public ResponseEntity<Users> deleteUser(@RequestBody Users user) {
		us.deleteUser(user);
		return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/updateuser.app", 
			produces="application/json")
	public ResponseEntity<Users> updateUser(@RequestBody Users user) {
		us.updateUser(user);
		return new ResponseEntity<>(user, HttpStatus.ACCEPTED);
	}

	@RequestMapping(method = RequestMethod.POST, consumes = "application/json", value="/auth.app")
	public @ResponseBody Users authenticate(@RequestBody Users users){
		return users != null ? us.check(users) : users;
	}
}

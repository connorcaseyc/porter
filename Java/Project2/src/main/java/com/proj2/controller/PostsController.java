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

import com.proj2.model.Posts;
import com.proj2.model.Users;
import com.proj2.service.PostsService;

@Controller
@CrossOrigin(origins = {"http://localhost:3000"})
//@RequestMapping(value="/post.app")
public class PostsController {
	
	@Autowired 
	PostsService ps;
	
	@RequestMapping(method=RequestMethod.GET, value="/postlist.app",
			produces="application/json")
	public ResponseEntity<List<Posts>> getAllAsList() {
		return new ResponseEntity<>(ps.getAll(), HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/addpost.app", 
			produces="application/json")
	public ResponseEntity<Posts> putInPost(@RequestBody Posts p) {
		ps.insertPost(p);
		return new ResponseEntity<>(p, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.GET, value="/userpostlist.app",
			produces="application/json")
	public ResponseEntity<List<Posts>> getAllUserPosts(@RequestBody Users user_posts) {
		return new ResponseEntity<>(ps.getPostsByUser(user_posts), HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/deletepost.app", 
			produces="application/json")
	public ResponseEntity<Posts> deletePost(@RequestBody Posts post) {
		ps.deletePost(post);
		return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/updatepost.app", 
			produces="application/json")
	public ResponseEntity<Posts> updatePost(@RequestBody Posts post) {
		ps.updatePost(post);
		return new ResponseEntity<>(post, HttpStatus.ACCEPTED);
	}

}

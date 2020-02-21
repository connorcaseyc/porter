package com.proj2.controller;

import java.util.List;

import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.proj2.model.Posts;
import com.proj2.model.Users;
import com.proj2.service.PostsService;
import com.proj2.service.S3Service;
import com.proj2.service.UsersService;

@Controller
@CrossOrigin(origins = { "http://localhost:3000" })
public class PicController {

	@Autowired
	UsersService us;

	@Autowired
	PostsService ps;

	@Autowired
	S3Service s3s;

	@RequestMapping(method = RequestMethod.POST, value = "/pic.app", consumes = "multipart/form-data")
	public String addProfPic(@RequestParam(value = "file") MultipartFile file, @RequestParam (value = "id") int id) {
//		int id = user.getU_id();
		System.out.println(id);
		Users u = us.getById(id);
		String url = file.getOriginalFilename();
		u.setProfpic(url);
		us.updateUser(u);
		return s3s.upload(file);
	}
	
//	@RequestMapping(method = RequestMethod.POST, value = "/pic.app", consumes = "multipart/form-data")
//	public String addPostPic(@RequestParam(value = "file") MultipartFile file, @RequestParam (value = "id") int id) {
////		int id = user.getU_id();
//		Users u = us.getById(id);
//		List<Posts> p = ps.getPostsByUser(u);
//		String url = file.getOriginalFilename();
//		u.setProfpic(url);
//		ps.updatePost(p);
//		return s3s.upload(file);
//	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/addpicpost.app", consumes = "multipart/form-data")
	public String saveWithPic(@RequestParam(value = "file") MultipartFile file, @RequestParam(value = "text")
		String post_text) {
		Posts post = new Posts();
		String url = file.getOriginalFilename();
		post.setPhotopost(url);
		post.setTextpost(post_text);
		ps.insertPost(post);
		System.out.println(post);
		return s3s.upload(file);
	}
}

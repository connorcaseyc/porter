package com.proj2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.proj2.model.Users;
import com.proj2.service.MailService;

@Controller
@CrossOrigin(origins = {"http://localhost:3000"})
public class MailController 
{
	@Autowired
	MailService ms;
	UsersController uc;
	
	
	@RequestMapping(method=RequestMethod.POST, consumes="application/json", value="/forgotpass.app")
	public void test(String email) {
		Users u = uc.getByEmail(email);
		ms.sendEmail("versacekun@gmail.com", u.getEmail(), "Forgot yo pw", "insert a link");
	}
	
	@GetMapping("{email}/forgotpw.app")
	public void grabEmail(@PathVariable("email") String email) {
		ms.sendEmail("versacekun@gmail", email, "forgot pw", "here's a link");
	}
}

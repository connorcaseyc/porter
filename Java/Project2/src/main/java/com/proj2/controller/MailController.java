package com.proj2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.proj2.model.Users;
import com.proj2.service.MailService;
import com.proj2.service.UsersService;

@Controller
@CrossOrigin(origins = {"http://localhost:3000"})
public class MailController 
{
	@Autowired
	MailService ms;
	
	@Autowired
	UsersService us;
	
	@RequestMapping(method = RequestMethod.POST,value = "/forgotpass.app", consumes = "application/json" )
	public @ResponseBody void sendEmail(@RequestBody Users user) {
		String email = user.getEmail();
		Users u = us.getByEmail(email);
		String mail = u.getEmail();
	
		try {
			ms.sendEmail(mail);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
//	@PostMapping("{email}/forgotpassword.app")
//	public @ResponseBody void sendMail(@PathVariable("email") String email)
//	{
//		Users u = us.getByEmail(email);
//		System.out.println(u);
//		String mail = u.getEmail();
//		System.out.println(mail);
//		try {
//			System.out.println(mail);
//			ms.sendEmail(mail);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
}

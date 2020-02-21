package com.proj2.controller;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import com.proj2.model.Users;
//import com.proj2.service.MailService;
//import com.proj2.service.UsersService;
//
//@Controller
//@CrossOrigin(origins = {"http://localhost:3000"})
//public class MailController
//{
//	@Autowired
//	MailService ms;
//	@Autowired
//	UsersService us;
//	@RequestMapping(method = RequestMethod.POST, consumes = "application/json", value = "/forgotpass.app"  )
//	public void sendEmail(@RequestBody String email) {
//		Users u = us.getByEmail(email);
//		String mail = u.getEmail();
//		try {
//			ms.sendEmail(mail);
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	}
//}
package com.proj2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proj2.dao.UsersDao;
import com.proj2.model.Users;

@Service
public class UsersService {
	
	
	private UsersDao ud;

	@Autowired
	public void setUd(UsersDao ud) {
		this.ud = ud;
	}
	
//	public Users verify(Users u) {
//		Users dbu = ud.getByUsername(u.getUsername());
//		
//		if(dbu != null) {
//			return (u.getPassword().equals(dbu.getPassword()))? dbu:null;
//		}
//		return null;
//	}
	
	public Users check(Users u) {
<<<<<<< HEAD
		Users dbu = ud.findByUsername(u.getUsername());
//		System.out.println("Database hash:  "+dbu.getPassword());
		System.out.println(dbu);
=======
		Users dbu = ud.getByUsername(u.getUsername());
		System.out.println("Database hash:  "+dbu.getPassword());
>>>>>>> 14277a14599463dd5b7a4f4be3638b1ec9bd166d
		if(dbu != null) {
			String pass = ud.hashPassword(u.getUsername(), u.getPassword());
			System.out.println("password hashed: "+pass);
			System.out.println(dbu.getPassword().equals(pass));
			return dbu.getPassword().equals(pass) ? dbu:null;
		}
		return null;
	}
	public List<Users> getAll() {
		return ud.findAll();
	}
	
	
}

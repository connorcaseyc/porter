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
//	public Users authenticate(Users u) {
//		Users dbu = ud.getByUsername(u.getUsername());
//		
//		if(dbu != null) {
//			return (u.getPassword().equals(dbu.getPassword()))? dbu:null;
//		}
//		return null;
//	}
	
	
	public List<Users> getAll() {
		return ud.findAll();
	}
	
}

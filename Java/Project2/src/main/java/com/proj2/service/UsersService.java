package com.proj2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proj2.dao.UsersDao;
import com.proj2.model.Users;

@Service
public class UsersService {

	@Autowired
	UsersDao ud;
	
	public List<Users> getAll() {
		return ud.findAll();
	}
	
	public Users insertUser(Users user) {
		return ud.insert(user);
	}
	
	public Users getByEmail(String email) {
		return ud.findByEmail(email);
	}
	
	public Users getById(int id) {
		return ud.findById(id);
	}
	
	public Users getByUsername(String username) {
		return ud.findByUsername(username);
	}
	
	public void deleteUser(Users user) {
		ud.delete(user);
	}
	
	public Users updateUser(Users user) {
		return ud.update(user);
	}
	
	

	public Users check(Users u) {
		Users dbu = ud.findByUsername(u.getUsername());
//		System.out.println("Database hash:  "+dbu.getPassword());
		System.out.println(dbu);
		if(dbu != null) {
			String pass = ud.hashPassword(u.getUsername(), u.getPassword());
			System.out.println("password hashed: "+pass);
			System.out.println(dbu.getPassword().equals(pass));
			return dbu.getPassword().equals(pass) ? dbu:null;
		}
		return null;
	}
	
}

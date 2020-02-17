package com.proj2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proj2.dao.UsersDao;
import com.proj2.model.Users;

@Service
public class UsersService {
<<<<<<< HEAD
	
	
	private UsersDao ud;
=======
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d

	@Autowired
	UsersDao ud;
	
//	public Users verify(Users u) {
//		Users dbu = ud.getByUsername(u.getUsername());
//		
//		if(dbu != null) {
//			return (u.getPassword().equals(dbu.getPassword()))? dbu:null;
//		}
//		return null;
//	}
	
	public Users check(Users u) {
		Users dbu = ud.getByUsername(u.getUsername());
		System.out.println("Database hash:  "+dbu.getPassword());
		if(dbu != null) {
			String pass = ud.hashPassword(u.getUsername(), u.getPassword());
			System.out.println("password hashed: "+pass);
			System.out.println(dbu.getPassword().equals(pass));
			return (dbu.getPassword().equals(pass) ? dbu:null);
		}
		return null;
	}
	public List<Users> getAll() {
		return ud.findAll();
	}
	
<<<<<<< HEAD
=======
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
		System.out.println("Database hash:  "+dbu.getPassword());
		if(dbu != null) {
			String pass = ud.hashPassword(u.getUsername(), u.getPassword());
			System.out.println("password hashed: "+pass);
			System.out.println(dbu.getPassword().equals(pass));
			return (dbu.getPassword().equals(pass) ? dbu:null);
		}
		return null;
	}
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
	
}

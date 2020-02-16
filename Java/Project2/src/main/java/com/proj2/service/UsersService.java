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
	
}

package com.proj2.service;

import java.util.ArrayList;
import java.util.List;

import com.proj2.dao.UsersDao;
import com.proj2.model.Users;

public class UsersService {

	public static List<Users> seeAllUsers() {
		
		return UsersDao.readUserList();
	}
}

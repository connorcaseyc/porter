package com.proj2.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.proj2.model.Users;
import com.proj2.util.ConnectionUtil;

public class UsersDao implements DaoBase<Users> {
	
//	Create
	
	
	
//	Read
	public static List<Users> readUserList() {
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "select * from users";
			List<Users> userList = new ArrayList<>();
			Statement s = conn.createStatement();
			ResultSet rs = s.executeQuery(sql);
			while(rs.next()) {
				userList.add(new Users(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5), rs.getString(6)));
			}
			s.close();
			conn.close();
			return userList;
		} catch(SQLException e) {
			e.printStackTrace();
		}
		return null;
	}	
	
	public static void printUserList() {
		List<Users> userList = readUserList();
		for(int i=0; i<userList.size(); i++) {
			System.out.println(userList.get(i));
		}
	}

	@Override
	public int create(Users t) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public List<Users> readAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int update(Users t) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int shadowRealm(Users t) {
		// TODO Auto-generated method stub
		return 0;
	}
	
	
//	Update
	
//	Delete

}

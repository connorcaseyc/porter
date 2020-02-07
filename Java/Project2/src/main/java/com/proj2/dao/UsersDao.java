package com.proj2.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
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
	public void create(Users t) {
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "insert into users (firstname, lastname, username, password, email)"
					+ "values (?,?,?,?,?)";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, t.getFirstname());
			ps.setString(2, t.getLastname());
			ps.setString(3, t.getUsername());
			ps.setString(4, t.getPassword());
			ps.setString(5, t.getEmail());
			ps.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Override
	public List<Users> readAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(String s) {
		// TODO Auto-generated method stub
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "update users set password where username = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, s);
			ps.executeUpdate();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	@Override
	public void shadowRealm(String s) {
		// TODO Auto-generated method stub
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "delete from users where username = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, s);
			ps.executeUpdate();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	
}

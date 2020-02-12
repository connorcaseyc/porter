package com.proj2.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.proj2.model.Content;
import com.proj2.util.ConnectionUtil;

public class ContentDao implements DaoBase<Content> 
{

	@Override
	public void create(Content t) {
		// TODO Auto-generated method stub
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "insert into content (author, textpost, photopost, likes)"
					+ "values (?,?,?,?)";
			PreparedStatement ps = conn.prepareStatement(sql);
//			ps.setString(1, t.getAuthor());
			ps.setString(2, t.getTextpost());
			ps.setBytes(3, t.getPhotopost());
//			ps.setInt(4, t.getLikes());
			ps.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public List<Content> readAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void update(String s) {
		// TODO update this just for likes
		
	}
	
	public void updateLikes (int i) {
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "update content set likes where content_id = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, i);
			ps.executeUpdate();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Override
	public void shadowRealm(String s) {
		// TODO Auto-generated method stub
		
	}
	
	public void shadowRealm(int i) {
		try {
			Connection conn = ConnectionUtil.connect();
			String sql = "delete from content where content_id = ?";
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setInt(1, i);
			ps.executeUpdate();
		
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
}

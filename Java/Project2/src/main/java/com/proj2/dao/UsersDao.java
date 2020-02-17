package com.proj2.dao;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
import java.util.List;

import javax.sql.DataSource;
import javax.transaction.Transactional;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.hql.spi.id.persistent.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.SqlParameter;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

import com.proj2.model.Users;

@Repository
@Transactional
public class UsersDao {

	@Autowired
	private SessionFactory sesfact;

	public UsersDao(SessionFactory sesfact) {
		super();
		this.sesfact = sesfact;
	}
	
	public List<Users> findAll() {
//		List<Users> usersList = sesfact.openSession().createQuery("from Users", Users.class).list();
//		sesfact.close();
//		return usersList;
		return sesfact.getCurrentSession().createQuery("from Users", Users.class).list();
	}

	public Users getByUsername(String username) {
		List<Users> list = (List<Users>)sesfact.getCurrentSession().createQuery(
				"from Users where username = '"+username+"'").list();
		if(list.size()>0) {
			System.out.println(list.get(0).getUsername());
			return list.get(0);
		}
		return null;
	}
	

	public String hashPassword(String username, String password) {
//		boolean val = (Boolean) sesfact.getCurrentSession().createNativeQuery(
//				" select function('validate',"+username+","+password+")").list().get(0);
//		System.out.println("SQL Validate: "+ val);
		 String toHash = username + password + "bet";
			String hashText = "";
			try
			{
				MessageDigest md = MessageDigest.getInstance("md5");
				
				// digest() method is called to calculate message digest 
	         //  of an input digest() return array of byte 
	         byte[] messageDigest = md.digest(toHash.getBytes()); 

	         // Convert byte array into signum representation 
	         BigInteger no = new BigInteger(1, messageDigest); 

	         // Convert message digest into hex value 
	         hashText = no.toString(16); 
	         while (hashText.length() < 32) { 
	             hashText = "0" + hashText; 
	         }
			} catch (NoSuchAlgorithmException e)
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			return hashText;
	}

	
}

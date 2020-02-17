package com.proj2.dao;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
<<<<<<< HEAD
import java.sql.CallableStatement;
import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Types;
=======
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
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
<<<<<<< HEAD

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
=======
	
	@Autowired
	SessionFactory sesfact;
	
	public List<Users> findAll() {
		return sesfact.getCurrentSession().createQuery("from Users", Users.class).list();
	}

	public Users insert(Users user) {
		sesfact.getCurrentSession().save(user);
		return user;
	}
	
	public Users findByEmail(String email) {
		return sesfact.getCurrentSession().get(Users.class, email);
	}
	
	public Users findById(int id) {
		return sesfact.getCurrentSession().get(Users.class, id);
	}
	
//	public Users findByUsername(String username) {
//		return sesfact.getCurrentSession().get(Users.class, username);
//	}
	
	public Users findByUsername(String username) {		
		List<Users> list = (List<Users>)sesfact.getCurrentSession().createQuery(
				"from Users where username = '"+username+"'", Users.class).list();
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
		if(list.size()>0) {
			System.out.println(list.get(0).getUsername());
			return list.get(0);
		}
		return null;
	}
	
<<<<<<< HEAD

	public String hashPassword(String username, String password) {
//		boolean val = (Boolean) sesfact.getCurrentSession().createNativeQuery(
//				" select function('validate',"+username+","+password+")").list().get(0);
//		System.out.println("SQL Validate: "+ val);
=======
	
	
	public Users update(Users user) {
		sesfact.getCurrentSession().update(user);
		return user;
	}
	
	public void delete(Users user) {
		sesfact.getCurrentSession().delete(user);
	}
	
	public String hashPassword(String username, String password) {
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d
		 String toHash = username + password + "bet";
			String hashText = "";
			try
			{
				MessageDigest md = MessageDigest.getInstance("md5");
				
<<<<<<< HEAD
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
=======
			 // digest() method is called to calculate message digest 
	         // of an input digest() return array of byte 
	         byte[] messageDigest = md.digest(toHash.getBytes()); 
>>>>>>> a33c2a8aef5cfc2ac44ffa2ebfa6295a1087957d

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

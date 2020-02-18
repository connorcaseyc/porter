package com.proj2.dao;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proj2.model.Users;

@Repository
@Transactional
public class UsersDao {
	
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
				"from Users where username = '"+username+"'").list();
		
		if(list.size()>0) {
			System.out.println("User Info: "+list.get(0).getUsername());
			return list.get(0);
		}
		return null;
	}
	
	
	
	public Users update(Users user) {
		sesfact.getCurrentSession().update(user);
		return user;
	}
	
	public void delete(Users user) {
		sesfact.getCurrentSession().delete(user);
	}
	
	public String hashPassword(String username, String password) {
		 String toHash = username + password + "bet";
			String hashText = "";
			try {
				MessageDigest md = MessageDigest.getInstance("md5");
				
	         byte[] messageDigest = md.digest(toHash.getBytes()); 

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

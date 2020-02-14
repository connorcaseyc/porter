package com.proj2.dao;

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
	private SessionFactory sesfact;

//	@Autowired
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
		@SuppressWarnings("unchecked")
		List<Users> list = (List<Users>)sesfact.getCurrentSession().createQuery(
				"from Users where username = '"+username+"'").list();
		if(list.size()>0) {
			System.out.println(list.get(0).getUsername());
			return list.get(0);
		}
		return null;
	}
	
}

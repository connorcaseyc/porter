package com.proj2.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.proj2.model.Users;
import com.proj2.util.HibernateUtil;

public class UserDao implements DaoContract<Users> {

	@Override
	public List<Users> findAll() {
		
		return null;
	}

	@Override
	public Users findById(int id) {
		Session sess = HibernateUtil.getSessionFactory().openSession();
		Transaction tx = sess.beginTransaction();
		Users u = sess.get(Users.class, id);
		tx.commit();
		sess.close();
		return u;
	}

	@Override
	public Users update(Users t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users save(Users t) {
		SessionFactory sesfact = HibernateUtil.getSessionFactory();
		Session sess = sesfact.openSession();
		Transaction tx = sess.beginTransaction();
		sess.save(t);
		tx.commit();
		return t;
	}

	@Override
	public Users delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Users findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}
	
	

}

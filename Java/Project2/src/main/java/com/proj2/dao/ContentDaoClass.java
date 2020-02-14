package com.proj2.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.proj2.model.Content;
import com.proj2.util.HibernateUtil;

public class ContentDaoClass implements DaoContract<Content> {

	@Override
	public List<Content> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Content findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Content update(Content t) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Content save(Content t) {
		SessionFactory sesfact = HibernateUtil.getSessionFactory();
		Session sess = sesfact.openSession();
//		Session sess = sesfact.getCurrentSession();
		Transaction tx = sess.beginTransaction();
		sess.save(t);
//		sess.persist(t);
		tx.commit();
		return t;
	}

	@Override
	public Content delete(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Content findByName(String name) {
		// TODO Auto-generated method stub
		return null;
	}

}

package com.proj2.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proj2.model.Posts;

@Repository
@Transactional
public class PostsDao {

	@Autowired
	SessionFactory sesfact;
	
	public List<Posts> findAll() {
		return sesfact.getCurrentSession().createQuery("from Posts", Posts.class).list();
	}

	public Posts insert(Posts t) {
		sesfact.getCurrentSession().save(t);
		return t; 
	}

}

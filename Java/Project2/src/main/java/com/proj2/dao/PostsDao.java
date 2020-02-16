package com.proj2.dao;

import java.util.List;

import javax.transaction.Transactional;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.proj2.model.Posts;
import com.proj2.model.Users;

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
	
	public List<Posts> findByUser(Users user_posts) {
		List<Posts> userPostList =
				(List<Posts>)sesfact.getCurrentSession().createQuery("from Posts where user_posts='"+user_posts+"'", Posts.class).list();
		if(userPostList.size() > 0) {
			return userPostList;
		} 
		return null;
	}
	
	public Posts update(Posts p) {
		sesfact.getCurrentSession().update(p);
		return p;
	}
	
	public void delete(Posts p) {
		sesfact.getCurrentSession().delete(p);
	}

}

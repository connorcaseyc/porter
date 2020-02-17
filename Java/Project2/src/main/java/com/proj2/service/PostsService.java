package com.proj2.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.proj2.dao.PostsDao;
import com.proj2.model.Posts;
import com.proj2.model.Users;

@Service
public class PostsService {
	
	@Autowired
	PostsDao pd;
	
	public List<Posts> getAll() {
		return pd.findAll();
	}
	
	public Posts insertPost(Posts post) {
		return pd.insert(post);
	}
	
	public List<Posts> getPostsByUser(Users user_posts) {
		return pd.findByUser(user_posts);
	}
	
	public Posts updatePost(Posts post) {
		return pd.update(post);
	}
	
	public void deletePost(Posts post) {
		pd.delete(post);
	}

}

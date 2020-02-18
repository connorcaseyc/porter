package com.proj2.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.proj2.model.Posts;
import com.proj2.model.Users;

@Entity
@Table(name = "likes")
public class Likes {
	
	@Id
	@Column(name = "like_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int like_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "like_author")
	private Users like_author;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "post_likes")
	private Posts post_likes;

	public int getLike_id() {
		return like_id;
	}

	public void setLike_id(int like_id) {
		this.like_id = like_id;
	}

	public Users getLike_author() {
		return like_author;
	}

	public void setLike_author(Users like_author) {
		this.like_author = like_author;
	}

	public Posts getPost_likes() {
		return post_likes;
	}

	public void setPost_likes(Posts post_likes) {
		this.post_likes = post_likes;
	}

	@Override
	public String toString() {
		return "Likes [like_id=" + like_id + ", post_likes=" + post_likes + "]";
	}

	public Likes(int like_id, Users like_author, Posts post_likes) {
		super();
		this.like_id = like_id;
		this.like_author = like_author;
		this.post_likes = post_likes;
	}
	
	public Likes() {}
}

package com.porter.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.porter.model.Posts;
import com.porter.model.Users;

@Entity
@Table(name = "comments")
public class Comments {
	
	@Id
	@Column(name = "comment_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int comment_id;
	
	@Column(name = "comment_text")
	private String comment_text;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "comment_author")
	private Users comment_author;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "post_comments")
	private Posts post_comments;

	public int getComment_id() {
		return comment_id;
	}

	public void setComment_id(int comment_id) {
		this.comment_id = comment_id;
	}

	public String getComment_text() {
		return comment_text;
	}

	public void setComment_text(String comment_text) {
		this.comment_text = comment_text;
	}

	public Users getComment_author() {
		return comment_author;
	}

	public void setComment_author(Users comment_author) {
		this.comment_author = comment_author;
	}

	public Posts getPost_comments() {
		return post_comments;
	}

	public void setPost_comments(Posts post_comments) {
		this.post_comments = post_comments;
	}

	@Override
	public String toString() {
		return "Comments [comment_id=" + comment_id + ", comment_text=" + comment_text + ", comment_author="
				+ comment_author + "]";
	}
	
	public Comments() {}

	public Comments(int comment_id, String comment_text, Users comment_author, Posts post_comments) {
		super();
		this.comment_id = comment_id;
		this.comment_text = comment_text;
		this.comment_author = comment_author;
		this.post_comments = post_comments;
	}
	
	

}

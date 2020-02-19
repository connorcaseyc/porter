package com.proj2.model;


import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="posts")
public class Posts {
	
	@Id
	@Column(name = "post_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int content_id;
	
	@Column(name="textpost")
	private String textpost;
	
	@Column(name="photopost")
	private String photopost;
	
	@Column(name="timesubmit")
	@CreationTimestamp
	private Timestamp timesubmit;
	
	@JsonIgnore
	@OneToMany(mappedBy = "post_likes", fetch = FetchType.EAGER)
	private Set<Likes> post_likes;
	
	@JsonIgnore
	@OneToMany(mappedBy = "post_comments", fetch = FetchType.EAGER)
	private Set<Comments> post_comments;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "user_posts")
	private Users user_posts;

	public int getContent_id() {
		return content_id;
	}

	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}

	public String getTextpost() {
		return textpost;
	}

	public void setTextpost(String textpost) {
		this.textpost = textpost;
	}

	public String getPhotopost() {
		return photopost;
	}

	public void setPhotopost(String photopost) {
		this.photopost = photopost;
	}

	public Set<Likes> getPost_likes() {
		return post_likes;
	}

	public void setPost_likes(Set<Likes> post_likes) {
		this.post_likes = post_likes;
	}

	public Set<Comments> getPost_comments() {
		return post_comments;
	}

	public void setPost_comments(Set<Comments> post_comments) {
		this.post_comments = post_comments;
	}

	public Users getUser_posts() {
		return user_posts;
	}

	public void setUser_posts(Users user_posts) {
		this.user_posts = user_posts;
	}

	public Timestamp getTimesubmit() {
		return timesubmit;
	}

	public void setTimesubmit(Timestamp timesubmit) {
		this.timesubmit = timesubmit;
	}

	@Override
	public String toString() {
		return "Posts [content_id=" + content_id + ", textpost=" + textpost + ", photopost=" + photopost + "]";
	}

	public Posts() {}

	public Posts(int content_id, String textpost, String photopost, Timestamp timesubmit, Users user_posts) {
		super();
		this.content_id = content_id;
		this.textpost = textpost;
		this.photopost = photopost;
		this.timesubmit = timesubmit;
		this.user_posts = user_posts;
	}

	public Posts(int content_id, String textpost, Timestamp timesubmit, Users user_posts) {
		super();
		this.content_id = content_id;
		this.textpost = textpost;
		this.timesubmit = timesubmit;
		this.user_posts = user_posts;
	}
	
	

}

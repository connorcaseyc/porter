package com.proj2.model;

import java.util.Arrays;
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

//TODO: change the cascade type from all as it will delete the user
		//change this in all of the tables that are not the user.

@Entity
@Table(name="content")
public class Content {
	
	@Id
	@Column(name = "content_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int content_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="u_id")
	private Users u_id;
	
	@Column(name="textpost")
	private String textpost;
	
	@Column(name="photopost")
	private byte[] photopost;
	
	@OneToMany(mappedBy = "like_post", fetch = FetchType.LAZY)
	private Set<Likes> like_post;
	
	@OneToMany(mappedBy = "comment_post", fetch = FetchType.LAZY)
	private Set<Comments> comment_post;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "content_post")
	private Users content_post;

	
	
	public int getContent_id() {
		return content_id;
	}
	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}
	public Users getU_id() {
		return u_id;
	}
	public void setU_id(Users u_id) {
		this.u_id = u_id;
	}
	public String getTextpost() {
		return textpost;
	}
	public void setTextpost(String textpost) {
		this.textpost = textpost;
	}
	public byte[] getPhotopost() {
		return photopost;
	}
	public void setPhotopost(byte[] photopost) {
		this.photopost = photopost;
	}
	public Set<Likes> getLike_post() {
		return like_post;
	}
	public void setLike_post(Set<Likes> like_post) {
		this.like_post = like_post;
	}
	public Set<Comments> getComment_post() {
		return comment_post;
	}
	public void setComment_post(Set<Comments> comment_post) {
		this.comment_post = comment_post;
	}
	public Users getContent_post() {
		return content_post;
	}
	public void setContent_post(Users content_post) {
		this.content_post = content_post;
	}
	
	@Override
	public String toString() {
		return "Content [content_id=" + content_id + ", u_id=" + u_id + ", textpost=" + textpost + ", photopost="
				+ Arrays.toString(photopost) + ", like_post=" + like_post + ", comment_post=" + comment_post
				+ ", content_post=" + content_post + "]";
	}

	
	
	public Content(int content_id, Users u_id, String textpost, byte[] photopost, Set<Likes> like_post,
			Set<Comments> comment_post, Users content_post) {
		super();
		this.content_id = content_id;
		this.u_id = u_id;
		this.textpost = textpost;
		this.photopost = photopost;
		this.like_post = like_post;
		this.comment_post = comment_post;
		this.content_post = content_post;
	}

	public Content(int content_id, Users u_id, String textpost, Users content_post) {
		super();
		this.content_id = content_id;
		this.u_id = u_id;
		this.textpost = textpost;
		this.content_post = content_post;
	}

	public Content(int content_id, Users u_id, String textpost) {
		super();
		this.content_id = content_id;
		this.u_id = u_id;
		this.textpost = textpost;
	}
	
	public Content(int content_id, String textpost) {
		this.content_id = content_id;
		this.textpost = textpost;
	}
	
	
	

}
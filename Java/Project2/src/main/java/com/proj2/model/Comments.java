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
	@JoinColumn(name = "content_id")
	private Content content_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "comment_author")
	private Users comment_author;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "comment_post")
	private Content comment_post;

}

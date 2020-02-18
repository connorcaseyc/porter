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
@Table(name = "likes")
public class Likes {
	
	@Id
	@Column(name = "like_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int like_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "content_id")
	private Content content_id;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "like_author")
	private Users like_author;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "like_post_id")
	private Content like_post;

}

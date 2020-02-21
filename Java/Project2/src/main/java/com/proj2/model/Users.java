package com.proj2.model;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="users")
public class Users {
	
	@Id
	@Column(name = "u_id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int u_id;
	
	@Column(name = "firstname")
	private String firstname;
	
	@Column(name = "lastname")
	private String lastname;
	
	@Column(name = "username", unique = true)
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "email", unique = true)
	private String email;
	
	@Column(name = "bio")
	private String bio;
	
	@Column(name = "profpic")
	private String profpic;
	
	@JsonIgnore
	@OneToMany(mappedBy = "user_posts", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	private List<Posts> user_posts;

//	@JsonIgnore
//	@OneToMany(mappedBy = "comment_author", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	private List<Comments> comment_author;
//	
//	@JsonIgnore
//	@OneToMany(mappedBy = "like_author", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	private List<Likes> like_author;
	
	public int getU_id() {
		return u_id;
	}

	public void setU_id(int u_id) {
		this.u_id = u_id;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getBio() {
		return bio;
	}

	public void setBio(String bio) {
		this.bio = bio;
	}

	public String getProfpic() {
		return profpic;
	}

	public void setProfpic(String profpic) {
		this.profpic = profpic;
	}

	public List<Posts> getUser_posts() {
		return user_posts;
	}

	public void setUser_posts(List<Posts> user_posts) {
		this.user_posts = user_posts;
	}

//	public List<Comments> getComment_author() {
//		return comment_author;
//	}
//
//	public void setComment_author(List<Comments> comment_author) {
//		this.comment_author = comment_author;
//	}
//
//	public List<Likes> getLike_author() {
//		return like_author;
//	}
//
//	public void setLike_author(List<Likes> like_author) {
//		this.like_author = like_author;
//	}

	@Override
	public String toString() {
		return "Users [u_id=" + u_id + ", firstname=" + firstname + ", lastname=" + lastname + ", username=" + username
				+ ", password=" + password + ", email=" + email + ", bio=" + bio + ", profpic=" + profpic + "]";
	}
	
	public Users() {}

	public Users(int u_id, String firstname, String lastname, String username, String password, String email) {
		super();
		this.u_id = u_id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.email = email;
	}
	
	
		
}

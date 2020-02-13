package com.proj2.model;

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

//	@OneToMany(mappedBy = "content_post", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	private Set<Content> content_post;

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
//	public Set<Content> getContent_post() {
//		return content_post;
//	}
//	public void setContent_post(Set<Content> content_post) {
//		this.content_post = content_post;
//	}
	
	@Override
	public String toString() {
		return "Users [u_id=" + u_id + ", firstname=" + firstname + ", lastname=" + lastname + ", username=" + username
				+ ", password=" + password + ", email=" + email + "]";
	}
	
	public Users(int u_id, String firstname, String lastname, String username, String password, String email) {
		super();
		this.u_id = u_id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.password = password;
		this.email = email;
	}
	public Users() {}
	
//	public Users(int u_id, String firstname, String lastname, String username, String password, String email,
//			String bio, String profpic, Set<Content> content_post) {
//		super();
//		this.u_id = u_id;
//		this.firstname = firstname;
//		this.lastname = lastname;
//		this.username = username;
//		this.password = password;
//		this.email = email;
//		this.bio = bio;
//		this.profpic = profpic;
//		this.content_post = content_post;
//	}
	
}


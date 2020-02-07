package com.proj2.model;

public class Users {
	
	private int u_id;
	private String firstname;
	private String lastname;
	private String username;
	private String password;
	private String email;
	
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
	
	public Users(Users u) {
		super();
		this.u_id = u.u_id;
		this.firstname = u.firstname;
		this.lastname = u.lastname;
		this.username = u.username;
		this.password = u.password;
		this.email = u.email;
	}

}

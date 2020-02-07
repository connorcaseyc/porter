package com.proj2.model;

import java.util.Arrays;

public class Content {
	
	private int content_id;
	private String author;
	private String textpost;
	private byte[] photopost;
	private int likes;
	
	public int getContent_id() {
		return content_id;
	}
	public void setContent_id(int content_id) {
		this.content_id = content_id;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
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
	public int getLikes() {
		return likes;
	}
	public void setLikes(int likes) {
		this.likes = likes;
	}
	
	@Override
	public String toString() {
		return "Content [content_id=" + content_id + ", author=" + author + ", textpost=" + textpost + ", photopost="
				+ Arrays.toString(photopost) + ", likes=" + likes + "]";
	}
	
	public Content(int content_id, String author, String textpost, byte[] photopost, int likes) {
		super();
		this.content_id = content_id;
		this.author = author;
		this.textpost = textpost;
		this.photopost = photopost;
		this.likes = likes;
	}
	public Content() {}
	
	public Content(Content cont) {
		this.content_id = cont.content_id;
		this.author = cont.author;
		this.textpost = cont.textpost;
		this.photopost = cont.photopost;
		this.likes = cont.likes;
	}
	
}

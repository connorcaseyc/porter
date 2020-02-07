package com.proj2.dao;

import java.util.List;

public interface DaoBase <T>
{
		public void create(T t);
		
		public List<T> readAll(); 
		
		public void update (String s);
		
		public void shadowRealm(String s);
		
//		T findById(int id);
		

}

package com.proj2.dao;

import java.util.List;

public interface DaoBase <T>
{
		public int create(T t);
		
		public List<T> readAll(); 
		
		public int update (T t);
		
		int shadowRealm(T t);
		
//		T findById(int id);
		

}

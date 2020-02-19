package com.proj2.dao;

import java.util.List;

public interface DaoContract<T> {
	
	List<T> findAll();
	
	T findById(int id);
	
	T update(T t);
	
	T insert(T t);
	
	void delete(int id);
	

}

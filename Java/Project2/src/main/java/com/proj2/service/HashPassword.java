package com.proj2.service;

import java.security.SecureRandom;

import org.springframework.stereotype.Service;

@Service
public class HashPassword {

	SecureRandom rand = new SecureRandom();
	
	String salt;
	
	
}

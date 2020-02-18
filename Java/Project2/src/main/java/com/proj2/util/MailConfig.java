package com.proj2.util;

import java.util.Properties;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;



@Configuration
@ComponentScan
public class MailConfig 
{
	public JavaMailSender getMailSender() 
	{
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		
		mailSender.setHost("smtp.gmail.com");
		mailSender.setPort(587);
		
		mailSender.setUsername("versacekun@gmail.com");
		mailSender.setPassword("bigchungus420");
		
		Properties javaMailProperties = new Properties();
		javaMailProperties.put("mail.smtp.starttls.enable", "true");
		javaMailProperties.put("mail.smtp.off", "true");
		javaMailProperties.put("mail.transport.protocol", "smtp");
		javaMailProperties.put("mail.debug", "true");
		
		mailSender.setJavaMailProperties(javaMailProperties);
		return mailSender;
		
	}
}

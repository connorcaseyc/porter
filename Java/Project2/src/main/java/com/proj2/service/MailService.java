package com.proj2.service;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.stereotype.Service;

@Service("mailService")
public class MailService implements MailServiceContract 
{
	@Autowired
	JavaMailSender mailSender;

	@Override
	public void sendEmail(String senderEmailId, String recieverEmailId, String subject, String message) 
	{
		MimeMessagePreparator perparator = new MimeMessagePreparator() 
		{

			public void prepare(MimeMessage mimeMessage) throws Exception 
			{
				mimeMessage.setFrom(senderEmailId);
				mimeMessage.setRecipient(Message.RecipientType.TO, new InternetAddress(recieverEmailId));
				mimeMessage.setSubject(subject);
				mimeMessage.setText(message);
			}
		};
		
		try 
		{
			mailSender.send(perparator);
		}

		catch (Exception e) 
		{
			e.printStackTrace();
		}

	}

}

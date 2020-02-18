package com.proj2.service;

public interface MailServiceContract 
{
	public void sendEmail(final String senderEmailId, final String recieverEmailId, final String subject, 
			final String message);
}

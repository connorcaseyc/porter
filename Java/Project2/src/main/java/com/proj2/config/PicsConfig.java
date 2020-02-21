package com.proj2.config;

import org.springframework.context.annotation.Configuration;

import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;

@Configuration
public class PicsConfig
{
	 private AWSCredentials cred;
	    private String accessKey = "AKIA4GGH7TLVNBDVXCFK";
	    private String secretKey = "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";
	    private AmazonS3 s3;
	    private String bucketName = "porterpics";
	    public PicsConfig() {
	        cred = new BasicAWSCredentials(accessKey, secretKey);
	        s3 = AmazonS3ClientBuilder
	            .standard()
	            .withCredentials(new AWSStaticCredentialsProvider(cred))
	            .withRegion(Regions.US_EAST_1)
	            .build();
	    }
	    public AmazonS3 gets3() {
	        return this.s3;
	    }
	    public String getBucketName() {
	        return this.bucketName;
	    }
	
	
}

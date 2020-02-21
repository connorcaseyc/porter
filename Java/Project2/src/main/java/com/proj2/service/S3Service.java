package com.proj2.service;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.AmazonS3Exception;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;

import com.proj2.config.PicsConfig;

@Service
public class S3Service {

	@Autowired
	PicsConfig pc;
	

    public String upload(MultipartFile file) {
        File f;
        try {
         f = convertIntoFile(file);
         pc.gets3().putObject(
             new PutObjectRequest(pc.getBucketName(), f.getName(), f)
                 .withCannedAcl(CannedAccessControlList.PublicRead));
             return "http://" + pc.getBucketName() + "/s3.us-east-1.amazonaws.com/" + f.getName();
        } catch (IOException e) {
         e.printStackTrace();
        }
        return null;
     }
    
     private File convertIntoFile(MultipartFile file) throws IOException {
         File converted = new File(file.getOriginalFilename());
         FileOutputStream fos = new FileOutputStream(converted);
         fos.write(file.getBytes());
         fos.close();
         return converted;
     }
}

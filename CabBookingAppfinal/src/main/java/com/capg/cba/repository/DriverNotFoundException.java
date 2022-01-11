package com.capg.cba.repository;

public class DriverNotFoundException extends RuntimeException{
	

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public DriverNotFoundException(String msg){
	        super(msg);
	    }

	    public DriverNotFoundException(String msg,Throwable e){
	        super(msg,e);
	    }
	}


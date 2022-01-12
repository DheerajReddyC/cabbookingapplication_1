package com.capg.cba.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.capg.cba.entities.Driver;
import com.capg.cba.repository.IDriverRepository;


@Service
//@Service annotation is used in your service layer and annotates classes that perform service tasks

public class IDriverServiceImpl implements IDriverService{
	
	@Autowired
	//Autowiring makes the container to search the bean configurations and do the collaboration among beans,

	private IDriverRepository dao;
	
	public Driver insertDriver(Driver driver) {
		return dao.insertDriver(driver);
	}
	
	public Driver updateDriver(Driver driver) {
		return dao.updateDriver(driver);
	}
//	public Driver findDriverById(int driverId) {
//		return dao.findDriverById(driverId);
//	}
	
	public List<Driver> viewBestDrivers(){
		 return dao.viewBestDrivers();
	}
	public Driver viewDriver(int driverId) {
		return dao.viewDriver(driverId);
	}
	public Driver deleteDriver(int driverId) {
		 return dao.deleteDriver(driverId);
	}

	}
	
	
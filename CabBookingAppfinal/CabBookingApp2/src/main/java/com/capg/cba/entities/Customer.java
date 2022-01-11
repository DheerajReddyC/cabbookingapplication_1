package com.capg.cba.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@JsonIgnoreProperties("inspection")
public class Customer extends AbstractUser{
	@Id
	private int customerId;
	private String username;
	private String password;
	private String address;
	private int mobileNumber;
	private String email;
	@JsonManagedReference(value="user-person1")
	@OneToMany(mappedBy="customer",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
	private List<TripBooking> tripbooking;
	
	
	
	public List<TripBooking> getTripbooking() {
		return tripbooking;
	}

	public void setTripbooking(List<TripBooking> tripbooking) {
		this.tripbooking = tripbooking;
	}

	public int getCustomerId() {
		// TODO Auto-generated method stub
		return customerId;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getAddress() {
		// TODO Auto-generated method stub
		return address;
	}

	@Override
	public int getMobileNumber() {
		// TODO Auto-generated method stub
		return mobileNumber;
	}

	@Override
	public String getEmail() {
		// TODO Auto-generated method stub
		return email;
	}

	@Override
	public void setUsername(String username) {
		// TODO Auto-generated method stub
		this.username=username;
	}

	@Override
	public void setPassword(String password) {
		// TODO Auto-generated method stub
		this.password=password;
	}

	@Override
	public void setAddress(String address) {
		// TODO Auto-generated method stub
		this.address=address;
	}

	@Override
	public void setEmail(String email) {
		// TODO Auto-generated method stub
		this.email=email;
	}
	@Override
	public void setMobileNumber(int mobileNumber) {
		// TODO Auto-generated method stub
		this.mobileNumber=mobileNumber;
	}
	
	Customer()
	{
		super();
	}
	@Override
	public String toString() {
		return "Customer [customerId=" + customerId + ", username=" + username + ", password=" + password + ", address="
				+ address + ", mobileNumber=" + mobileNumber + ", email=" + email + "]";
	}

	
}

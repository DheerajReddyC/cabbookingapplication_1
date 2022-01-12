package com.capg.cba.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.cba.entities.TripBooking;
import com.capg.cba.repository.ITripBookingRepository;

@Service
public class ITripBookingServiceImpl implements ITripBookingService {
	
	@Autowired
	ITripBookingRepository itripbookingrepositoryi;

	@Override
	public void insertTripBooking(TripBooking pro) {
		itripbookingrepositoryi.insertTripBooking(pro);
		return ;
	}

	@Override
	public List<TripBooking> ViewAllTripsCustomer(int id) {
		return itripbookingrepositoryi.ViewAllTripsCustomer(id);
	}

	@Override
	public TripBooking updateTripBooking(TripBooking booking) {
		return itripbookingrepositoryi.updateTripBooking(booking);
	}

	@Override
	public String deleteTripBooking(int id) {
		return itripbookingrepositoryi.deleteTripBooking(id);
	}

	@Override
	public float calculateBill(int id) {
		return itripbookingrepositoryi.calculateBill(id);
	}
	
	
	
	
	
	
	
}

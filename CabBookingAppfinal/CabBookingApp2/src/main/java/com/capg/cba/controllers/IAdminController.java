import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.cba.entities.Admin;
import com.capg.cba.entities.TripBooking;
import com.capg.cba.exception.CabNotFoundException;
import com.capg.cba.exception.DriverNotFoundException;
import com.capg.cba.services.IAdminServiceI;

import io.swagger.annotations.Api;

@RestController
@RequestMapping(value="admin")
@CrossOrigin("http://localhost:4200")
@Api(value="IAdminController")
public class IAdminController {
	
	@Autowired
	IAdminServiceI iadminservicei;
	
	
	@PostMapping("/insert")
	public ResponseEntity<Boolean> insert(@RequestBody Admin pro) throws IAdminNotFoundException
	{
		iadminservicei.insertAdmin(pro);
		if(admin.getAdminId()==0)
			throw new IAdminNotFoundException("Oops!!No admin found for given Id");
      ResponseEntity<Boolean> responseEntity = new ResponseEntity<Boolean>(true, HttpStatus.OK);
		System.out.println("response entity=" + responseEntity);
		return responseEntity;
	}
	
	@PutMapping("/update")  //localhost:9090/product/update
	public ResponseEntity<Admin> updateProduct(@RequestBody Admin admin) throws IAdminNotFoundException
	{
		admin=iadminservicei.updateAdmin(admin);
		if(admin.getAdminId()==0)
			throw new IAdminNotFoundException("Oops!!No admin found for given Id");

		return new ResponseEntity<Admin>(admin,new HttpHeaders(),HttpStatus.OK);
	}
	
	@DeleteMapping(path="/delete/{id}") //localhost:9090/delete/{empId}
	public ResponseEntity<String> deleteProduct(@PathVariable int id)
	{
		iadminservicei.deleteAdmin(id);
		return new ResponseEntity<String>("Record TripBooking Deleted",HttpStatus.OK);
	}
	
	@GetMapping("/alltrips/{id}")  //localhost:9090/product/getall
	public ResponseEntity<List<TripBooking>> getAllTrips(@PathVariable int id) throws IAdminNotFoundException
	{
		List<TripBooking> list=iadminservicei.getAllTrips(id);
		if(list.isEmpty())
		throw new IAdminNotFoundException("Oops!!The List is Empty");
		return new ResponseEntity<List<TripBooking>>(list,new HttpHeaders(),HttpStatus.OK);
	}
	
	@GetMapping("/tripscabwise")  //localhost:9090/product/getall
	public ResponseEntity<List<TripBooking>> getTripsCabwise() throws IAdminNotFoundException
	{
		List<TripBooking> list=iadminservicei.getTripsCabwise();
		if(list.isEmpty())
			throw new IAdminNotFoundException("Oops!!The List is Empty");
		return new ResponseEntity<List<TripBooking>>(list,new HttpHeaders(),HttpStatus.OK);
	}
	
	@GetMapping("/tripscustomerwise")  //localhost:9090/product/getall
	public ResponseEntity<List<TripBooking>> getTripsCustomerwise() throws IAdminNotFoundException
	{
		List<TripBooking> list=iadminservicei.getTripsCustomerwise();
		if(list.isEmpty())
			throw new IAdminNotFoundException("Oops!!The List is Empty");
		return new ResponseEntity<List<TripBooking>>(list,new HttpHeaders(),HttpStatus.OK);
	}
	
	@GetMapping("/tripsdatewise")  //localhost:9090/product/getall
	public ResponseEntity<List<TripBooking>> getTripsDatewise() throws IAdminNotFoundException
	{
		List<TripBooking> list=iadminservicei.getTripsDa…
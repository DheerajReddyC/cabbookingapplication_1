import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.capg.cba.entities.Driver;
import com.capg.cba.exception.CabNotFoundException;
import com.capg.cba.exception.DriverNotFoundException;
import com.capg.cba.services.DriverService;
@RestController
//accepts request from outside sources like webbrowser
//controller+HTTP protocals
@RequestMapping(value="driver")
/*The @RequestMapping annotation ensures that HTTP requests to /Product are mapped to the Product() method or Product class.
It is used to map web requests onto specific handler classes and/or handler methods*/
@CrossOrigin("http://localhost:4200")
//@CrossOrigin annotation enables cross-origin resource sharing only for this specific method.
 public class DriverController {
	@Autowired
	//Autowiring makes the container to search the bean configurations and do the collaboration among beans,
    private DriverService service;
	
	/*The @PostMapping annotated methods in the @Controller annotated classes handle the HTTP POST
	requests matched with given URI expression.*/

	@PostMapping(path="/insert")
	public ResponseEntity<Boolean> insertDriver(@RequestBody Driver driver) throws DriverNotFoundException {
		service.insertDriver(driver);
		if(driver.getDriverId()==0)
			throw new DriverNotFoundException("Oops!!No Driver found for given Id");

		ResponseEntity<Boolean> responseEntity = new ResponseEntity(true, HttpStatus.OK);
		System.out.println("response entity=" + responseEntity);
		return responseEntity;
	}
/*	The @GetMapping annotated methods in the @Controller annotated classes handle the HTTP GET 
 * requests matched with given URI expression.
 */
	@GetMapping(path="/getdetails/{driverId}")
 	public ResponseEntity<Driver> findDriverById(@PathVariable int driverId)
	{
		Driver driver=service.findDriverById(driverId);
		if(driver==null)
		{
			throw new DriverNotFoundException("product not found for id=" + driverId);
		}
		
		return new ResponseEntity<Driver>(driver,new HttpHeaders(),HttpStatus.OK);
	}

//mapping HTTP PUT requests onto specific handler methods.

	@PutMapping(path="/update")
	public ResponseEntity<Driver> updateDriver(@RequestBody Driver driver) throws DriverNotFoundException
	{
		if((driver.getDriverId()==0)||(driver.getLicenceNo()==null)||(driver.getRating()==0||(driver.getLicenceNo().length()==0)))
			return new ResponseEntity("enter the Driver Details to be updated",HttpStatus.NOT_FOUND);
          driver=service.updateDriver(driver);
		return new ResponseEntity<Driver>(driver,new HttpHeaders(),HttpStatus.OK);
	}

	
     @GetMapping(path="/getbestdrivers")
	public  ResponseEntity<List<Driver>> viewBestDrivers()
     {
        List<Driver> list=service.viewBestDrivers();
        if(list.isEmpty())
 		throw new CabNotFoundException("Oops!!The List is Empty");

		return new ResponseEntity<List<Driver>>(list,new HttpHeaders(),HttpStatus.OK);
	}
	
      @DeleteMapping(path="/delete/{driverId}")
	public String deleteDriver(@PathVariable("driverId") int driverId) {
		service.deleteDriver (driverId);
		return "Deleted";
		
		
		
	}
}

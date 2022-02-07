import axios from 'axios';


 export const addCustomerToServer = (customer) =>{
    return axios.post("http://localhost:9995/insertCustomer",customer);
  }

  export const getAllCustomersFromServer = ()=>{
      return axios.get("http://localhost:9995/viewCustomers");
  }

  export const getValidationAtServer = (credentials)=>{
    console.log(credentials)
    return axios.post("http://localhost:9995/validateCustomer/",credentials);
}

//   export const updateStudentToServer =(student) =>{
//       return axios.put("http://localhost:8000/updateStudent",student);
//   }

//   export const getStudentByRollFromServer = (roll)=>{
//       return axios.get("http://localhost:8000/students/"+roll);
//   }

//   export const deleteStudentFromServer = (roll)=>{
//     return axios.delete("http://localhost:8000/deleteStudent/"+roll);
//   }

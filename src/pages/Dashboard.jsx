
import React, { useState} from 'react';
import validator from 'validator';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import View from '../componenets/View';
import InputGroup from 'react-bootstrap/InputGroup';






const getDatafromLS=()=>{
  const data = localStorage.getItem('userinfos');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


function Dashboard() {
  const[userinfo,setuserinfo]=useState(getDatafromLS());
  const [filterdata, setFilterdata]= useState(getDatafromLS());
  const initialValue={username:"",email:"",pasword:"",phoneNo:""};
  const [foamValue, setFormValue]= useState(initialValue);
  const [userError, setUserError]= useState('');
  const [emailError, setEmailError]= useState('');
  const [paswordError, setPaswordError]= useState('');
  const [phoneError, setPhoneError]= useState('');
  const [issubmit, setissubmit]= useState(false);
  const [visible, setvisible]= useState(false);
  
  
  
  const handleOnChange=(e)=>{
   
    const {name,value}=e.target;
    setFormValue({...foamValue,[name]:value});
    console.log(foamValue);
  }
 
 
  const handleupclick=(e)=>{
      e.preventDefault(); 

    

      
      if(foamValue.username===""){
        
        setUserError ('enter user name');
        issubmit(false);
        console.log(issubmit);
        console.log(foamValue.username);
      }
      else{
        setUserError ('');
        console.log(foamValue.username);

        setissubmit(true);
        console.log(issubmit);
      }
      if(validator.isEmail(foamValue.email)) {
        setEmailError('')
        setissubmit(true);
        console.log(issubmit);
        console.log(foamValue.email);
      } else {
        setEmailError('Enter valid Email!')
        issubmit(false);
        console.log(issubmit);
        console.log(foamValue.email);
      }
      if(foamValue.pasword.length<5){
        setPaswordError('pasword must be six character')
        issubmit(false);
        console.log(issubmit);
        console.log(foamValue.pasword);
      }else{
      setPaswordError('')
      setissubmit(true);
      console.log(issubmit);
      console.log(foamValue.pasword);

      }
      if(foamValue.phoneNo===""){
        setPhoneError('Phone# is required')
        issubmit(false);
        console.log(issubmit);
        console.log(foamValue.phoneNo);
      }
      else{
        setPhoneError('')
        setissubmit(true);
        console.log(issubmit);
        console.log(foamValue.phoneNo);
      }
      if(issubmit===false){
        console.log(issubmit);
       // alert("some thing is missing")

      }
      else{
        console.log(issubmit);
        const userNames=foamValue.username;
        const useremails=foamValue.email;
        const userpass=foamValue.pasword;
        const userphone=foamValue.phoneNo;
        let userinformation={
          userNames,
          useremails,
          userpass,
          userphone
        }
        setuserinfo([...userinfo,userinformation])
        setFilterdata([...filterdata,userinformation]);
       // alert("entered sucessfully")
        localStorage.setItem("userinfos",JSON.stringify(userinfo)); 
        
        setvisible(false) ; 
      }
      
    }
    const adduserbtn =()=>{
      setvisible(true);
      foamValue.username="";
      foamValue.email="";
      foamValue.pasword="";
      foamValue.phoneNo="";


  }
    const deleteuserinfo=(useremail)=>{
      console.log(useremail);
        const filteredUser=userinfo.filter((userdata)=>{
        return userdata.useremails!==useremail
       
        
        
      })
      setuserinfo(filteredUser);
      localStorage.setItem("userinfos",JSON.stringify(filteredUser));
    }

    const edituserinfo=(userNames, useremail,userpas,userphone)=>{
       console.log(userNames);
       console.log(useremail);
      console.log(userpas);
      console.log(userphone);
      foamValue.username=userNames;
      foamValue.email=useremail;
      foamValue.pasword=userpas;
      foamValue.phoneNo=userphone;
      
      
      
      const filteredUser=userinfo.filter((userdata)=>{
        return userdata.useremails!==useremail
       
        
        
      })
      setuserinfo(filteredUser);
      localStorage.setItem("userinfos",JSON.stringify(filteredUser));
      setvisible(true);
  }
  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= userinfo.filter( (item)=> item.userNames.toLowerCase().includes(getSearch));
     setuserinfo(searchdata);
    } else {
      setuserinfo(filterdata);
    }
   
  }
   
      
  

  
  
  return (
    <div className="container">
   
       {visible &&
      <div className="foamcontainerss">
       

    <Form>
    <h1> Registration Form</h1>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control id='username' type="username" name= "username" placeholder="Enter User Name" value={foamValue.username} onChange={handleOnChange}/>
      
      </Form.Group>
      <span style={{
          fontSize:15,
          color: 'red',
        }}>{userError}</span>
      

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        
        <Form.Control id='email' type="email" name= "email" placeholder="Enter email" value={foamValue.email} onChange={handleOnChange}/>

        <span style={{
          fontSize:15,
          color: 'red',
        }}>{emailError}</span>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        
        <Form.Control id='paswords' type="password" name= "pasword" placeholder="password" value={foamValue.pasword} onChange={handleOnChange}/>

        <span style={{
          fontSize:15,
          color: 'red',
        }}>{paswordError}</span>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control id='phone' type="phoneNo" name= "phoneNo" placeholder="phoneNo" value={foamValue.phoneNo} onChange={handleOnChange}/>
        <span style={{
          fontSize:15,
          color: 'red',
        }}>{phoneError}</span>
      </Form.Group>
    
      <Button variant="primary" className="submitbtn" type="submit" on onClick={handleupclick} style={{
         margin:10,
         marginLeft:40
      }}>
        Submit
      </Button>
      
      <Button variant="primary" type="submit" >
        Cancel
      </Button>
      
    </Form>
    </div> 
}
   {!visible &&

  
    <div className="view_container">
      
      <div className="searchuser">
       <h1 className='text-center mt-4'>User Information</h1>
      
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control onChange={(e)=>handlesearch(e)} placeholder='Search...'/>
          </InputGroup>
        </Form>
      
        </div>
        <div className="mainuser">
        <div className='table_cont'>
          {userinfo.length>0&&<>
            <div className='table-responsive'>
              <table border={3} width="30px" cellPadding={10} className='table'>
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View userinfo={userinfo} deleteuserinfo={deleteuserinfo} edituserinfo={edituserinfo}/>
                </tbody>
              </table>
            </div>

          </>}
          </div>
          
          <div className="tablebtn">
          
         
          <Button variant="primary" className="adduserbtn" type="adduserbtn" on onClick={adduserbtn} 
          style={{
         
        marginLeft:10,

      //  width:100
       
       }}
       >
        Add User 
       </Button>
       </div>
        </div>
      
    </div>

}
    </div> 
    
    

  )
}

export default Dashboard

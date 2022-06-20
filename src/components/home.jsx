import styles from  "./styles/home.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../context/userContext";
import validator from 'validator';



export const Home = () => {
  const [nameError, setNameError] = useState(false);
  const [signError, setSignError] = useState(false);
  const [dayError, setDayError] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [userData, setUserData] = useState([]);
  const [emailError, setEmailError] = useState(false);  
  const [user, setUser] = useState({
    name: '',
    email: '',
    sign: '',
    day:"",
  })

  const navigate = useNavigate();

  // Use data from context 
  const {handleUser} = useContext(UserContext)


  //handle form inputs..
  const handleInput = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value});

    
    //Validating Email Address
    if (validator.isEmail(user.email)) {
      setEmailError(true);
      setDirty(false)
    } else {
      setEmailError(false)
    }
  } 

 
  // handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false); 
    setSignError(false);
    setDayError(false);

 
    //Validating user inputs

    if(user.name === ""){
      setNameError(true);
    }

  

    if(user.sign === ""){
      setSignError(true);
    }

    if(user.day === ""){
      setDayError(true);
    }

    if(user.name && emailError && user.sign && user.day){
      setUserData(user)
      handleUser(user)
      navigate("/horo")

    }
  }
  
  
  return (
      <div className = {styles.background}>
          <h1 className = {styles.h1}>Horoscope App</h1>
          <Box
              
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit = {handleSubmit}
          className = {styles.box}
        >
        <p className = {styles.p}>Enter your details to know about your horoscope.</p>
      <div>
        <TextField  
          style ={{width: '100%'}}
          fullWidth
          shrink = "true"
          color = "primary"
          error = {nameError}
          onChange = {handleInput}
          required
          id="outlined-required"
          label="Enter your name"
          name = "name"
          value = {user.name}
        />
      </div>
      <div>
        <TextField
         error={dirty && emailError === false}  
         style ={{width: '100%'}}
         onChange = {handleInput}

         onBlur={() => setDirty(true)}
         required
         id="outlined-required"
         label="Enter your Email"
         name = "email"
         value = {user.email}
         
        />
      </div>
      <div>
      <FormControl required style ={{width: '100%'}} sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-required-label">Select Horoscope</InputLabel>
        
        <Select
          error = {signError}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Select Horoscope"
          onChange={handleInput}
          name = "sign"
          value = {user.sign}
          
        >
          <MenuItem value={"Aries"}>Aries</MenuItem>
          <MenuItem value={"Taurus"}>Taurus</MenuItem>
          <MenuItem value={"Gemini"}>Gemini</MenuItem>
          <MenuItem value={"Cancer"}>Cancer</MenuItem>
          <MenuItem value={"Leo"}>Leo</MenuItem>
          <MenuItem value={"Virgo"}>Virgo</MenuItem>
          <MenuItem value={"Libra"}>Libra</MenuItem>
          <MenuItem value={"Scorpio"}>Scorpio</MenuItem>
          <MenuItem value={"Sagittarius"}>Sagittarius</MenuItem>
          <MenuItem value={"Capricorn"}>Capricorn</MenuItem>
          <MenuItem value={"Aquarius"}>Aquarius</MenuItem>
          <MenuItem value={"Pisces"}>Pisces</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl required style ={{width: '100%'}} sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-required-label">Select Day</InputLabel>
        <Select
          error = {dayError}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Select Day"
          onChange={handleInput}
          name = "day"
          value = {user.day}
        >
          <MenuItem value={"today"}>Today</MenuItem>
          <MenuItem value={"tomorrow"}>Tomorrow</MenuItem>
          <MenuItem value={"yesterday"}>Yesterday</MenuItem>
        </Select>
      </FormControl>
      </div>
      <Button  style ={{width: '100%'}} sx={{ m: 1}} type  = "submit" variant = "contained">Submit</Button>
    </Box>
      </div>
  )
}
import styles from  "./styles/home.module.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../context/userContext";
import validator from 'validator';



export const Home = () => {
  const [nameError, setNameError] = useState(false);
  const [signError, setSignError] = useState(false);
  const [dayError, setDayError] = useState(false);
  const [dirty, setDirty] = useState(false);
  const [userData, setUserData] = useState([]);
  const [emailError, setEmailError] = useState(false);  
  const [user, setUser] = useState({
    name: '',
    email: '',
    sign: '',
    day:"",
  })

  const navigate = useNavigate();

  // Use data from context 
  const {handleUser} = useContext(UserContext)


  //handle form inputs..
  const handleInput = (e) => {
    const {name,value} = e.target;
    setUser({...user,[name]:value});

    
    //Validating Email Address
    if (validator.isEmail(user.email)) {
      setEmailError(true);
      setDirty(false)
    } else {
      setEmailError(false)
    }
  } 

 
  // handling form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false); 
    setSignError(false);
    setDayError(false);

 
    //Validating user inputs

    if(user.name === ""){
      setNameError(true);
    }

  

    if(user.sign === ""){
      setSignError(true);
    }

    if(user.day === ""){
      setDayError(true);
    }

    if(user.name && emailError && user.sign && user.day){
      setUserData(user)
      handleUser(user)
      navigate("/horo")

    }
  }
  
  
  return (
      <div className = {styles.background}>
          <h1 className = {styles.h1}>Horoscope App</h1>
          <Box
              
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit = {handleSubmit}
          className = {styles.box}
        >
        <p className = {styles.p}>Enter your details to know about your horoscope.</p>
      <div>
        <TextField  
          style ={{width: '100%'}}
          fullWidth
          shrink = "true"
          color = "primary"
          error = {nameError}
          onChange = {handleInput}
          required
          id="outlined-required"
          label="Enter your name"
          name = "name"
          value = {user.name}
        />
      </div>
      <div>
        <TextField
         error={dirty && emailError === false}  
         style ={{width: '100%'}}
         onChange = {handleInput}

         onBlur={() => setDirty(true)}
         required
         id="outlined-required"
         label="Enter your Email"
         name = "email"
         value = {user.email}
         
        />
      </div>
      <div>
      <FormControl required style ={{width: '100%'}} sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-required-label">Select Horoscope</InputLabel>
        
        <Select
          error = {signError}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Select Horoscope"
          onChange={handleInput}
          name = "sign"
          value = {user.sign}
          
        >
          <MenuItem value={"Aries"}>Aries</MenuItem>
          <MenuItem value={"Taurus"}>Taurus</MenuItem>
          <MenuItem value={"Gemini"}>Gemini</MenuItem>
          <MenuItem value={"Cancer"}>Cancer</MenuItem>
          <MenuItem value={"Leo"}>Leo</MenuItem>
          <MenuItem value={"Virgo"}>Virgo</MenuItem>
          <MenuItem value={"Libra"}>Libra</MenuItem>
          <MenuItem value={"Scorpio"}>Scorpio</MenuItem>
          <MenuItem value={"Sagittarius"}>Sagittarius</MenuItem>
          <MenuItem value={"Capricorn"}>Capricorn</MenuItem>
          <MenuItem value={"Aquarius"}>Aquarius</MenuItem>
          <MenuItem value={"Pisces"}>Pisces</MenuItem>
        </Select>
      </FormControl>
      </div>
      <div>
      <FormControl required style ={{width: '100%'}} sx={{ m: 1}}>
        <InputLabel id="demo-simple-select-required-label">Select Day</InputLabel>
        <Select
          error = {dayError}
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          label="Select Day"
          onChange={handleInput}
          name = "day"
          value = {user.day}
        >
          <MenuItem value={"today"}>Today</MenuItem>
          <MenuItem value={"tomorrow"}>Tomorrow</MenuItem>
          <MenuItem value={"yesterday"}>Yesterday</MenuItem>
        </Select>
      </FormControl>
      </div>
      <Button  style ={{width: '100%'}} sx={{ m: 1}} type  = "submit" variant = "contained">Submit</Button>
    </Box>
      </div>
  )
}
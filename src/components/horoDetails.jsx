import {UserContext} from "../context/userContext";
import {useContext, useState, useEffect} from "react";
import axios from "axios";
import styles from "./homeDetails.module.css";
import Box from '@mui/material/Box';

export const HoroDetails = () => {
  const [horscopicData, setHoroscopicData] = useState([]);

   

    // const startDate = dateRange[0];
    // const endDate = dateRange[1];



    const {userDetails} = useContext(UserContext);
    // console.log(userDetails)

    const sign = userDetails.sign;
    const day = userDetails.day;
    // console.log(sign,day);

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = () => {
        axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`).then((res)=>{setHoroscopicData(res.data)})

    }





    // console.log(startDate,endDate);

  return (
    <div className = {styles.background}>
        <h1 className = {styles.h1}>Horoscope Details</h1>
        <Box className = {styles.box}>
          <p>Name : {userDetails.name}</p>
          <p>Email : {userDetails.email}</p>
          <p>Horoscopic Sign : {userDetails.sign}</p>
          <p>Day : {horscopicData.current_date}</p>
          <p>Color : {horscopicData.color}</p>
          <p>Lucky Number : {horscopicData.lucky_number}</p>
          <p>Lucky Time : {horscopicData.lucky_time}</p>
          <p>Mood : {horscopicData.mood}</p>
          <p>Description : {horscopicData.description}</p>
        </Box>

    </div>
  )
}

import {UserContext} from "../context/userContext";
import {useContext, useState, useEffect} from "react";
import axios from "axios";
import styles from "./styles/homeDetails.module.css";
import Box from '@mui/material/Box';

export const HoroDetails = () => {
  const [horoscopicData, setHoroscopicData] = useState([]);

    const {userDetails} = useContext(UserContext);

    const sign = userDetails.sign;
    const day = userDetails.day;

    useEffect(() =>{
        fetchData();

    },[])

    const fetchData = () => {
        axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`).then((res)=>{setHoroscopicData(res.data)})

    }

   
    if(horoscopicData.length != 0){
      let dummy = horoscopicData.date_range;
      let dates = dummy.split("-");
      let x = dates[0].split(" ");
      let y = dates[1].split(" ");
    
      let divideX = 2022 + "-" + x[0] + "-" + x[1];

      let divideY = 2022 + "-" + y[1] + "-" + y[2];
    
      let startDate = new Date(divideX);
      let endDate = new Date(divideY);


      let dateX = horoscopicData.current_date;

      let date = new Date(dateX);


      if (date > startDate && date < endDate) {
        console.log('✅ date is between the 2 dates');
       
        return(
          <div className = {styles.inBetween}>
            <h2 className =  {styles.h1}>Horoscope Details (Date lies in bewtween range)</h2>
            <Box className = {styles.inBetweenBox}>
              <p>Name : {userDetails.name}</p>
              <p>Email : {userDetails.email}</p>
              <p>Horoscopic Sign : {userDetails.sign}</p>
              <p>Day : {horoscopicData.current_date}</p>
              <p>Date Range : {horoscopicData.date_range}</p>
              <p>Color : {horoscopicData.color}</p>
              <p>Lucky Number : {horoscopicData.lucky_number}</p>
              <p>Lucky Time : {horoscopicData.lucky_time}</p>
              <p>Mood : {horoscopicData.mood}</p>
              <p>Description : {horoscopicData.description}</p>
            </Box>
          </div>
        )
      }
      else {
        console.log('⛔️ date is not in the range');
      } 
    }  

  
  return (
    <div  className = {styles.background}>
        <h1 className =  {styles.h1}>Horoscope Details</h1>
        <Box className = {styles.box}>
          <p>Name : {userDetails.name}</p>
          <p>Email : {userDetails.email}</p>
          <p>Horoscopic Sign : {userDetails.sign}</p>
          <p>Day : {horoscopicData.current_date}</p>
          <p>Date Range : {horoscopicData.date_range}</p>
          <p>Color : {horoscopicData.color}</p>
          <p>Lucky Number : {horoscopicData.lucky_number}</p>
          <p>Lucky Time : {horoscopicData.lucky_time}</p>
          <p>Mood : {horoscopicData.mood}</p>
          <p>Description : {horoscopicData.description}</p>
        </Box>

    </div>
  )
}

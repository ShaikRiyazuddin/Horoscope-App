import {UserContext} from "../context/userContext";
import {useContext, useState, useEffect} from "react";
import axios from "axios"

export const HoroDetails = () => {

    const {userDetails} = useContext(UserContext);
    console.log(userDetails)

    const sign = userDetails.sign;
    const day = userDetails.day;
    console.log(sign,day);

    useEffect(() =>{
        fetchData();
    },[])

    const fetchData = () => {
        axios.post(`https://aztro.sameerkumar.website/?sign=${sign}&day=${day}`).then((res)=>{console.log(res.data)})
    }

  return (
    <div>
        <h1>Horoscope Details page</h1>
    </div>
  )
}

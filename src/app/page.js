
"use client";
import React,{useState} from "react";
import Image from "next/image";
import {useSelector,useDispatch} from "react-redux"
import NavBar from "../../components/navbar/Navbar";
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
const _data=useSelector((state) => {return state});
const [textColor, setTextColor] = useState('black');
const _dispatch=useDispatch()
const _text=`
Welcome to our application in Barleber. 
This application has been developed now and is not available for public use, 
but we promise to make it available to all people. Thank you.
`
return (
<>
<div className="container flex flex-row items-center justify-center mt-28">
<div className={`text-[35px] font-light leading-[4rem] ${textColor} px-[3rem]`}>
<TypeAnimation
sequence={[
  // Same substring at the start will only be typed once, initially
  _text,
  1000,
  () => setTextColor('text-green-300'),
]}
speed={50}
repeat={false}
/>



</div>
</div>
</>
);
}

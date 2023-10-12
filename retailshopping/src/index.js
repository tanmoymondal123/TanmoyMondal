// var React=require("react");
 import React from "react";
 //var ReactDom=require('react-dom');
 //import ReactDom  from 'react-dom';
 let currDate=new Date(2022,5,5,14);
 currDate=currDate.getHours();
 let greeting ='';

 if(currDate>=1 && currDate<12){
    greeting="Good morning";

 }
 else if(currDate>=12 && currDate<19){
    greeting="Good afternoon";
 }
 else{
    greeting="good Night";
 }
 //const currtime=new Date().toLocaleTimeString();
 ReactDom.render(<h1> Hello Sir, {greeting}  </h1>,document.getElementById("root"));


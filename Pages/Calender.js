import React from "react";
import './Calender.css';
import Noclass from '../Noclass.svg'
import FetchData2 from "../Components/FetchDatat2";
import { FaMizuni } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";
import Documents from './Documents'
const CalenderComponent = (prop) => {
 
  const livclass = 1750;
  return (<>
    <div class="FullContainers">
      <div class="row justify-content-center d-flex">
        <div class="  Livecard Livecard1"> {livclass} <br />Total Class</div>
        <div class=" Livecard Livecard2"> {livclass} <br />Scheduled Class</div>
        <div class="  Livecard Livecard3"> {livclass} <br />Ended Class</div>
        <div class="  Livecard Livecard4"> {livclass} <br />Running Class</div>
      </div>
      <div class="row ml-5 carD4">
        <span class="col-xl-2 col-lg-2 col-md-12 col-sm-12"> <button type="button" class="btn-lg " onClick={<Documents/>}> <FaMizuni /><b> Creat Live Class </b></button> </span>
      </div>
      <div class="row gx-0 justify-content-center">
        <div class="card col-sm-11 col-xl col-md-6 col-lg-6 carD3">
          <div class="card-body ">
            <div className="card-header Header">Currently Running Classes</div>
            <h5 class="card-title"></h5>
            <p class="gx-0 text-center">

              <img class="IMG" src="https://image.shutterstock.com/image-photo/portrait-schoolchild-looking-above-glasses-260nw-1168623613.jpg"></img>
            </p>
          </div>
        </div>
        <div class="card col-sm-11 col-xl col-md-6 col-lg-6 carD3">
          <div class="card-body ">
            <div className="card-header Header ">Today's Classes</div>
            <h5 class="card-title"></h5>
            <p class="gx-0  text-center">
              <img class="IMG" src="https://image.shutterstock.com/image-photo/portrait-schoolchild-looking-above-glasses-260nw-1168623613.jpg"></img>
            </p>
          </div>
        </div>

      </div>

      <div class="row gx-0 justify-content-center">
        <div class="card col-sm col-xl col-md-6 col-lg-6 carD3">
          <div class="card-body ">
            <div className="card-header Header"><b>Scheduled Live Classes</b></div>
            <div className="card-header ">
              <div class="row mt-1">
                <div class="col-xl-2">  <input type="text" placeholder="Search.." name="search" />
                  <button type="submit"><i class="">Search</i></button>
                </div>
                <div class="col-xl-10 col-sm-12 col-md-6"> <button class="BTN"><i class="fa fa-folder"></i><b>Export </b></button> 
                </div>
              </div>
             <div class="row mt-1"><div class="col-xl-3 col-sm-12 col-md-12 col-lg-4">Selct Status</div></div>
              <div class="row mb-3 gx-0">
                <div class=" mt-1 col-xl-3 col-md-4 col-sm-5 col-lg-4">
                  <select class="p-1">
                    <option>All</option>
                    <option>Live class</option>
                    <option>Running class</option>
                    <option>Ended Class</option>
                    <option>Sheduled</option>
                  </select>
                </div>
                <div class="mt-1 col-xl-3 col-md-4 col-sm-5 col-lg-4"> <input placeholder="From" class="Date" type="month"/>
                </div>
                <div class="mt-1 col-xl-3 col-md-4 col-sm-5 col-lg-4" > <input placeholder="To" class="Date" type="month"/> 
                </div>
                <div class="mt-1 col-xl-3 col-md-4 col-sm-5 col-lg-4"> <button class="BTN">Clear</button> 
                </div>
              </div>
            </div>
            <h5 class="card-title"></h5>
            <p class="gx-0 text-center gx-0 RESP">
              
              <FetchData2/>
              
            </p>
          </div>
        </div>
      </div>

    </div>



  </>)
};



export default CalenderComponent;
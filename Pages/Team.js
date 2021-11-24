import MotionHoc from "./MotionHoc";
import React, { useState } from 'react';
import './Team.css';
import student from '../student.svg';
import FetchData from "../Components/FetchData";
import FetchData1 from "../Components/FetchData1";
import Noclass from '../Noclass.svg';


const TeamComponent = (props) => {

  const num = 402;

  return (
    <>
      <div class="FullContainers">
        <div class="row Ddowns">
          <div class="col-sm-4 col-xl-1 col-md-1 mt-4 "><b>Course</b></div>
          <div class="col-sm-4 col-xl-11 col-md-10  mt-4">
            
              <select class="Ddown">
              <option>All</option>
              <option>student</option>
              <option>student</option>
              <option>student</option>
              <option>student</option>
              <option>student</option>
              <option>student</option>
              </select>
            

          </div>
        </div>
        <div className="d-flex  firstbox">
          <div className="card text-black card1" >
            <div className="card-body">
              <h5 className="card-title pt-3 text-center">Live Class<hr></hr></h5>
              <p className="card-text text-center"><img src={Noclass} /></p>
            </div>
          </div>
          <div className="card text-black card1 " >
            <h5 className="card-title pt-3 text-center">Assignment<hr></hr></h5>
            <div className="card-body">
              <p className="card-text text-center"><img src={Noclass} /></p>
            </div>
          </div>
          <div className="card text-black card1 " >
            <h5 className="card-title pt-3 text-center">Assessment<hr></hr></h5>
            <div className="card-body">
              <p className="card-text text-center"><img src={Noclass} /></p>
            </div>
          </div>
          <div className="card text-black card1  " >
            <div className="card-body">
              <h5 className="card-title pt-3 text-center">Video<hr></hr></h5>
              <p className="card-text text-center"><img src={Noclass} /></p>
            </div>
          </div>
          <div className="card text-black card1  " >
            <div className="card-body">
              <h5 className="card-title pt-3 text-center">Notes<hr></hr></h5>
              <p className="card-text text-center"><img src={Noclass} /></p>
            </div>
          </div>
        </div>
        <div class="p-3 d-flex row2">
          <div class="card card2 ">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">Student<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">Faculty<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">Lecture video<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">liveclass<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">Assessment<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">Audio<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">video<br />{num}</p>
            </div>
          </div>
          <div class="card card2">
            <div class="card-body">
              <h5 class="card-title"><img className="imgS" src={student} /></h5>
              <p class="card-text">Student<br />{num}</p>
            </div>
          </div>
        </div>

        <div class="row gx-0">
          <div class="card col-sm col-xl col-md-6 col-lg-6 card3">
            <div class="card-body ">
              <div className="card-header header p-3">Today's Live Class</div>
              <h5 class="card-title"></h5>
              <p class="gx-0  cards3"><FetchData1 /></p>
            </div>
          </div>
          <div class="card col-sm col-xl col-md-6 col-lg-6  card3">
            <div class="card-body">
              <div className="card-header header">Recently Added
                <div class="row p-3">
                  <div class="col-sm-6 p-2 col-md-6 col-xl-6 ">
                    <select class="dropdown1 " >
                      <option>MBBS 1st year</option>
                      <option>MBBS 1st year</option>
                      <option>MBBS 1st year</option>
                      <option>MBBS 1st year</option>
                    </select>
                  </div>
                  <div class="col-sm-6 col-md-6 col-xl-6 p-2">
                    <select class="dropdown1 " >
                      <option>MBBS 1st year</option>
                      <option>MBBS 1st year</option>
                      <option>MBBS 1st year</option>
                      <option>MBBS 1st year</option>
                    </select>
                  </div>

                </div>
              </div>

              <p class="cards3">
                <FetchData />
              </p>
            </div>
          </div>

        </div>
        <div class="row gx-0" style={{ width: "100%", padding: "auto" }}>
          <div class="card col-sm-12 col-md col-xl col-lg card4">
            <div class="card-body cardbody">
              <div className="card-header header">Recently added Members</div>
              <div className="card-header header row gx-0  p-2 ">
                <div class="col-sm-12 col-xl-6 col-md-12 p-2  "><a class="cards4 " href="#">Faculty</a></div>
                <div class="col-sm-12 col-xl-6 col-md-12  p-2"><a class="cards4 " href="#">Student</a></div>
              </div>
              <h5 class="card-title"></h5>
              <p class="card-text">
                <table class="Table">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Griffin</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Griffin</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Swanson</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
          <div class="card col-sm-12 col-md col-xl col-lg  card4">
            <div class="card-body">
              <div className="card-header header">Announcement</div>
              <p class="card-text">
                <table class="Table">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Griffin</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Griffin</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Swanson</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
          <div class="card col-sm-12 col-md col-xl col-lg  card4 ">
            <div class="card-body">
              <div className="card-header header">Groups</div>
              <h5 class="card-title"></h5>
              <p class="card-text">
                <table class="Table">
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Griffin</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Griffin</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Swanson</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                  <tr>
                    <td><span><img class="imagespace" className="imgS" src={student} /></span>Peter</td>
                    <td>Brown</td>
                  </tr>
                </table>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamComponent;
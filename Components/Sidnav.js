import React, { useState } from 'react';
import './Sidnave.css';
import student from '../student.svg';
import eyeSolid from '../eyeSolid.svg';
import Noclass from '../Noclass.svg';
import Nav from './Nav';
import FetchData from "./FetchData";
import FetchData1 from "./FetchData1";


const Sidenav = (props) => {
  // const [isSideNavOpen,setIsSideNavOpen]=useState(true)


   const num = 402;

  return (
    <>
      <div class="row Main">
        {/* <div class={ isSideNavOpen?"col-md-2 col-sm-2 col-xl-2":"col-md-0 col-sm-0 col-xl-0"}>
          <Nav setIsSideNavOpen={setIsSideNavOpen} />
        </div> */}
        <div id="Sidenav" class="col-md-10 col-sm-10 col-xl-10 ">
          <div class="row Course gx-0">
            <div class="col-sm-2  col-xl-1 col-md-1 mt-4 "><b>Course</b></div>
            <div class="col-sm-8 col-xl-11 col-md-11  mt-4">
              <select class="Ddown " >
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
          <div className="d-flex  FirstBox">
            <div className="card text-black card1  " >

              <div className="card-body">
                <h5 className="card-title pt-3 text-center">Student<hr></hr></h5>
                <p className="card-text"></p>
              </div>
            </div>
            <div className="card text-black card1 " >
              <h5 className="card-title pt-3 text-center">Assignment<hr></hr></h5>
              <div className="card-body">
                <p className="card-text">Video</p>
              </div>
            </div>
            <div className="card text-black card1 " >
              <h5 className="card-title pt-3 text-center">Assessment<hr></hr></h5>
              <div className="card-body">
                <p className="card-text">Lecture video</p>
              </div>
            </div>
            <div className="card text-black card1 " >
              <div className="card-header ">Assessment</div>
              <div className="card-body">
                <h5 className="card-title">10000</h5>
                <p className="card-text">notes</p>
              </div>
            </div>
            <div className="card text-black card1 ">
              <div className="card-header ">Notes</div>
              <div className="card-body">
                <h5 className="card-title">10000</h5>
                <p className="card-text">Audio</p>
              </div>
            </div>
          </div>
          <div class=" p-2 d-flex row2">
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

          <div class="row gx-0 ">
            <div class="card col-sm card3">
              <div class="card-body ">
                <div className="card-header header p-3">Today's Live Class</div>
                <h5 class="card-title"></h5>
                <p class="gx-0  cards3"><FetchData1 /></p>
              </div>
            </div>
            <div class="card col-sm card3">
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
            <div class="card col-sm   card4">
              <div class="card-body cardbody">
                <div className="card-header header">Recently added Members</div>
                <div className="card-header header row gx-0  p-2 ">
                  <div class="col-sm-12 col-xl-6 col-md-12 p-2  "><a class="cards4 " href="#">Faculty</a></div>
                  <div class="col-sm-12 col-xl-6 col-md-12  p-2"><a class="cards4 " href="#">Student</a></div>
                </div>
                <h5 class="card-title"></h5>
                <p class="card-text">
                  <table>
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
            <div class="card col-sm  card4">
              <div class="card-body">
                <div className="card-header header">Announcement</div>
                <p class="card-text">
                  <table>
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
            <div class="card col-sm  card4">
              <div class="card-body">
                <div className="card-header header">Groups</div>
                <h5 class="card-title"></h5>
                <p class="card-text">
                  <table>
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
      </div>


    </>
  );
};
export default Sidenav;
import MotionHoc from "./MotionHoc";
import "./Projects.css";
import { FaMizuni } from "react-icons/fa";
import Swal from 'sweetalert2'
import { useState } from "react";
import Box from '@material-ui/core/Box'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
const ProjectsComponent = () => {
  const [open, setOpen] = useState(false);
  const [selectData, setSelectData] = useState(['MBBS! Year', 'MBBS! Year', 'MBBS! Year', 'MBBS! Year', 'MBBS! Year', "MBBS! Year"])
  const [showModal, setShowModal] = useState(false)
  const opensweetalert = () => {
    handleOpen()
    setShowModal(true)
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (<>
    <div class="FullContainers" >
      <div className="row ">
        <div className="col col-lg col-md col-sm-11 Dropdown " onClick={opensweetalert} data-toggle="modal" data-target="#exampleModalLong"> <FaMizuni class="m-2" /> h </div>
        <div className="col col-lg col-md col-sm-11 Dropdown" onClick={opensweetalert}> <FaMizuni class="m-2" />  Subject</div>
        <div className="col col-lg col-md col-sm-11  Dropdown" onClick={opensweetalert}><FaMizuni class="m-2" /> Chapters</div>
        <div className="col col-lg col-md col-sm-11  Dropdown" onClick={opensweetalert}><FaMizuni class="m-2" />Topic </div>
        <div className="col col-lg col-md col-sm-11  Dropdown" onClick={opensweetalert}><FaMizuni class="m-2" /> Sub Topic</div>
      </div>
      <div class="row gx-0 mt-2">
        <div class="col-xl-9 col-lg-8 col-md-8 col-sm-12 First ">
          <div class="col m-2 BigCard p-2">
            <div class="row  gx-0">
              <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgA" src="https://picsum.photos/200"></img> </div>
              <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
            </div>
            <div class="row gx-0">
              <div class="col-1 mt-4"> <h1><b>Medwhiz</b></h1></div>
              <div class="col-2 text-center mt-5">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <div class="col-9"><p>As a medical student, I would recommend that my classmates look
                into Medwhiz LMS. I believe that visualising is crucial in the medical profession,
                and Medwhiz has brought this facility close to us. When illustrating any topic,
                3-D videos are extremely helpful in clearly teaching every concept.</p></div>
            </div>
          </div>
          <div class="col m-2 BigCard p-2">
            <div class="row  gx-0">
              <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgA" src="https://picsum.photos/200"></img> </div>
              <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
            </div>
            <div class="row gx-0">
              <div class="col-1 mt-4"> <h1><b>Medwhiz</b></h1></div>
              <div class="col-2 text-center mt-5">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
              </div>
              <div class="col-9"><p>As a medical student, I would recommend that my classmates look
                into Medwhiz LMS. I believe that visualising is crucial in the medical profession,
                and Medwhiz has brought this facility close to us. When illustrating any topic,
                3-D videos are extremely helpful in clearly teaching every concept.</p></div>
            </div>
          </div>
          <div class="col m-2 BigCard p-2">
            <div class="row  gx-0">
              <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgA" src="https://picsum.photos/200"></img> </div>
              <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
            </div>
            <div class="row gx-0">
              <div class="col-1 mt-4"> <h1><b>Medwhiz</b></h1></div>
              <div class="col-2 text-center mt-5">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star" ></span>
                <span class="fa fa-star"></span>
              </div>
              <div class="col-9"><p>As a medical student, I would recommend that my classmates look
                into Medwhiz LMS. I believe that visualising is crucial in the medical profession,
                and Medwhiz has brought this facility close to us. When illustrating any topic,
                3-D videos are extremely helpful in clearly teaching every concept.</p></div>
            </div>
          </div>
          <div class="col m-2 BigCard p-2">
            <div class="row  gx-0">
              <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgA" src="https://picsum.photos/200"></img> </div>
              <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
            </div>
            <div class="row gx-0">
              <div class="col-1 mt-4"> <h1><b>Medwhiz</b></h1></div>
              <div class="col-2 text-center mt-5">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </div>
              <div class="col-9"><p>As a medical student, I would recommend that my classmates look
                into Medwhiz LMS. I believe that visualising is crucial in the medical profession,
                and Medwhiz has brought this facility close to us. When illustrating any topic,
                3-D videos are extremely helpful in clearly teaching every concept.</p></div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 ">
          <h5 class="text-center">Recent Added subject
          </h5>
          <div class="Second p-2 m-3">
            <div class="col m-2 mb-4">
              <div class=" cards SmallCard  ">
                <div class="row gx-0">
                  
                  <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgB" src="https://picsum.photos/200"></img></div>
                  <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
                </div>
              </div>
            </div>
            <div class="col m-2 mb-4">
              <div class=" cards SmallCard  ">
                <div class="row gx-0">
                  <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgB" src="https://picsum.photos/200"></img></div>
                  <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
                </div>
              </div>
            </div>
            <div class="col m-2 mb-4">
              <div class=" cards SmallCard  ">
                <div class="row gx-0">
                  <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgB" src="https://picsum.photos/200"></img></div>
                  <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
                </div>
              </div>
            </div>
            <div class="col m-2 mb-4">
              <div class=" cards SmallCard  ">
                <div class="row gx-0">
                  <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgB" src="https://picsum.photos/200"></img></div>
                  <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
                </div>
              </div>
            </div>
            <div class="col m-2 mb-4">
              <div class=" cards SmallCard  ">
                <div class="row gx-0">
                  <div class="col-md-5 col-xl-3 col-sm-6"><img class="imgB" src="https://picsum.photos/200"></img></div>
                  <div class="col-md-6 col-xl-9 col-sm-6"><h3>Sahil V Soni</h3><br /><h6>J.J.M. Medical College, Davanagere</h6></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal === true ?
        <Modal open={open}>
          <Box class="model">
            <h2 class="header p-3 text-align-left ModelItem">Course</h2>
            <div >
              {selectData.map((item) => {
                return (
                  <div>
                    <a class="ModelItem" href="#" onClick={handleClose}>{item}</a>
                  </div>
                )
              })}
            </div>

          </Box>
        </Modal> : null}
    </div>

  </>);
};
export default ProjectsComponent;
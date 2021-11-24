import React from 'react'
import './Announcement.css';
import { useState, useEffect } from 'react';
import { GrAnnounce } from "react-icons/gr";
import { MdAddCircle } from "react-icons/md";
import { ImFilePdf } from 'react-icons/im';
import { AiOutlineDownload } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import { Alert, Modal } from 'react-bootstrap';
import ImgsViewer from "react-images-viewer";


const getDatafromLS = () => {
    const adata = localStorage.getItem('Adata');
    if (adata) {
        return JSON.parse(adata);
    }
    else {
        return []
    }
}
function Announcement() {
    const [Adata, setAdata] = useState(getDatafromLS());
    const [Title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const [Expire, setExpire] = useState('');
    const [getTitle, setGetTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [Files, setFiles] = useState('')
    const handleAddAnnouncement = (e) => {
        if (Expire == '') {
            alert('plz select expr dt')
            setViewAddUi(true)
            return
        } else {
            e.preventDefault();
            let Announcement = {
                Title,
                Description,
                file,
                Expire
            }
            setAdata([...Adata, Announcement]);
            setTitle('');
            setDescription('');
            setFile('');
            setExpire('');
            setViewA('');
        }
        // document.getElementById('one').value = ''

    }
    useEffect(() => {
        localStorage.setItem('Adata', JSON.stringify(Adata))
        console.log(Adata)
    }, [Adata]);
    //model close/open state
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        console.log('modal closed');
    }
    const handleShow = () => setShow(true);
    //Selct box State
    const [check, setCheck] = useState(false);
    const [select, setSelect] = useState(false);
    // Select All Course function
    const Data = [' bgs 1st year', ' bgs 2nd year', ' bgs 3rd year', ' bgs 4th year', ' bgs 5th year', ' bgs 6th year', ' bgs 7th year', ' bgs 8th year'];
    const toggle = (source) => {
        (check == false) ? setCheck(true) : setCheck(false);
        (select == true) ? setSelect(false) : setSelect(true);
    }
    //Show State of View And Creat Announcement 
    const [viewAddUi, setViewAddUi] = useState(false)
    const handleOnChange = () => {
        setCheck(!check);
    };
    const [ViewA, setViewA] = useState(false);
    const [expireDateArray, setExpireDateArray] = useState(['Select', 'After 1week', 'After  2week', 'After  3week', 'After  4week'])

    
    return (
        <>
            <div class="FullContainer1 mt-5 ">
                <div class="container-fluid">
                    <div class="row ">
                        <div class="col-xl-3 col-md-12 col-lg-12 col-sm-12 FORMBOX1 text-center">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 Header1 "><GrAnnounce class="align-self-center" /> <b>Announcement</b></div>
                            <div class="mt-3">
                                <div class="Filter">Sort by <select>
                                    <option>Newwest</option>
                                    <option>Oldest</option>
                                </select>
                                </div>
                            </div>
                            <div class="AnnouncementView" >
                                {console.log("datasssasasas", ViewA)}
                                {Adata && Adata.length > 0 ? Adata.map((item, index) => {
                                    return (
                                        <div
                                            onClick={() => {
                                                setGetTitle(item.Title);
                                                setDesc(item.Description);
                                                setFiles(item.file);
                                                
                                            }
                                            }
                                            class="ViewAssignment" key={index}>
                                            <div class="row gx-0 justify-content-end ">New College</div>
                                            <div class="row gx-0 b" Title={item.Title}> {item.Title}</div>
                                            <div class="row gx-0 b" Title={item.Description}> {item.Description}</div>
                                            <div class="row gx-0 justify-content-end">{item.Expire}</div>
                                        </div>
                                    )
                                }) :
                                    null}
                            </div>

                        </div>
                        <div class="col-xl-9 col-lg-12 col-md-12 col-sm-12  FORMBOX2 gx-0 ">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 Header2"><b>Make An Announcement <MdAddCircle class="ADDNEW" cursor="pointer" onClick={() => setViewAddUi(!viewAddUi)} /></b></div>
                            {viewAddUi == false ?
                                <div class="card CARD" style={{ height: "70ch", width: "85%" }}>
                                    <div class="card-header HEADER">
                                        <h3>{getTitle.length > 0 ? getTitle : 'Title'}</h3>
                                    </div>
                                    <div class="card-body CardBody">
                                        <p class="card-text text-center">{desc}</p>
                                    </div>
                                    <div class="card-footer text-muted">
                                        <div class="row">
                                            <div class="col-2"><ImFilePdf fontSize="35" /></div>
                                            <div class="col-6"><h3>File Attached</h3></div>
                                            <div class="col-2"><BsFillEyeFill fontSize="35" cursor="pointer"data-toggle="modal" data-target="#exampleModalCenter"  /></div>
                                            <div class="col-2"><AiOutlineDownload fontSize="35" cursor="pointer" /></div>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div class="card CARDS" style={{ height: "85%", width: "85%" }}>
                                    <form autoComplete="off" onSubmit={handleAddAnnouncement}  >
                                        <div class="form-group mt-3 col-xl-6 col-sm-11 col-md-5 col-lg-5 m-2">
                                            <input type="text" className="form-control Tooltip" value={Title} placeholder="Enter Announcement Title here" required onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div class="form-group mt-3 m-2" >
                                            <textarea class="form-control textArea" value={Description} placeholder="Enter Description here" required onChange={(e) => setDescription(e.target.value)} />
                                        </div>
                                        <div class="form-group mt-3 col-xl-2 col-sm-6">
                                            <input type="file" accept='.jpg, .png, .jpeg' class="form-control" required
                                                onChange={(e) => {
                                                    // console.log('e',e)
                                                    // console.log('eval',e.target.files[0])
                                                    // console.log('url == ',URL.createObjectURL(e.target.files[0]))
                                                    setFile(URL.createObjectURL(e.target.files[0]))
                                                    // setFile(e.target.files[0])
                                                }}
                                            />
                                        </div>
                                        <div class="row m-2">
                                            <div class="Filters  col-xl-8 col-md-3 col-lg-8 col-sm-4 mt-3 ">Set Expire Date
                                                <select class="m-1" value={Expire} onChange={(e) => setExpire(e.target.value)} required>
                                                    {expireDateArray.map((item, index) => {
                                                        return (
                                                            <option>{item}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 "><button class="btn btn-primary m-3 " onClick={handleShow}>Add Users</button></div>
                                            <div class="col-xl-2 col-lg-2 col-md-3 col-sm-4 "><button class="btn btn-primary m-3 " type="submit">Announce</button></div>
                                        </div>
                                    </form>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </div>
            <Modal show={show} backdrop="static">
                <Modal.Header style={{ backgroundColor: "rgb(28,37,60)" }}>
                    <button variant="primary" onClick={handleClose}> Course </button>
                    <button variant="primary" onClick={handleClose}> Group </button>
                </Modal.Header>
                <Modal.Header style={{}}>
                    <form action="youtube.com">
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit"><i class="fa fa-search"></i></button>

                    </form>
                    <input type="checkbox" onClick={toggle} checked={select} /> Select All<br />
                </Modal.Header>
                <div class="ModelSelctAll">

                    {Data.length > 0 ? Data.map((data, index) => {

                        return (
                            <div >
                                <input type="checkbox" label={index} key={index} value="bar1" checked={check} onChange={handleOnChange} />{data}<br />
                            </div>
                        )
                    }) : <img height="100" width="100" src="https://picsum.photos/1000" alt="img"></img>}

                </div>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <form>
                        <div class="row">
                            <div class="col-5"><button variant="secondary" onClick={handleClose}>
                                Close
                            </button>
                            </div>
                            <div class="col-5"><button variant="primary" type="submit" onChange={handleAddAnnouncement} >
                                Announce
                            </button>
                            </div>
                        </div>
                    </form>
                </Modal.Footer>
            </Modal>


            <div class="modal fade" id="exampleModalCenter"  role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Image View</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-center">
                            
                           {(Files)?<img style={{width:400,height:500}} src={Files}/>:<img class="IMG" src="https://image.shutterstock.com/image-photo/portrait-schoolchild-looking-above-glasses-260nw-1168623613.jpg"></img>} 
                            {console.log("images inside the file",Files)}
                        </div>
                        
                    </div>
                </div>
            </div>


        </>
    )
}

export default Announcement;


import { useState, useEffect } from 'react';
import Noclass from '../Noclass.svg';
import { HiDotsHorizontal } from "react-icons/hi";
const FetchData = () => {
    const [users, setUsers] = useState([]);


    const getUsers = async () => {
        try {
            const response = await fetch('https://api.github.com/users')
            if (response) {
                hideloader();
            }
            const data = setUsers(await response.json());
            console.log(data);
        }
        catch (err) {
            console.log('error', err)
        }

        // const data = await response.json();

    }
    useEffect(() => {
        getUsers();
    }, [])

    function hideloader() {
        document.getElementById('loading').style.display = 'none';
    }
    return (
        <>
            <div className="row text-center card-header HS p-2 gx-0"  >
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg  "><b>No.</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Course</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Subject</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Class Name</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Educator</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Date</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Time</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Status</b></div>
                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><b>Action</b></div>

            </div >
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status" id="loading" >
                </div>
            </div>
            {users && users.length ?
                users.map((value) => {
                    return (
                        <div class="RESP">
                            <div className="row  text-center gx-0 ">
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.id}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.login}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.type}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.login}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.login}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><img src={value.avatar_url} style={{ height: "30px", width: "30px" }} /></div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.type}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg ">{value.login}</div>
                                <div className="col-sm-2 p-2 col-xl col-md-4 col-lg "><a href="#" style={{ fontSize: "30px", border: "1px" }}><HiDotsHorizontal style={{ border: "1px", width: "20px", height: "20px" }} /></a></div>
                            </div>
                        </div>
                    )
                })
                : <p class="card-text text-center p-5"><img src={Noclass} /></p>
            }
        </>
    )
}
export default FetchData;
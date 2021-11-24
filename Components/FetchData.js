
import { useState, useEffect } from 'react';
import './Sidnave.css';
import Noclass from '../Noclass.svg';
import eyeSolid from '../eyeSolid.svg';
const FetchData = () => {
    const [users, setUsers] = useState([]);

    const getUsers =async () => {
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
            <div className="row text-center card-header HS p-2 gx-0" >
                <div className="col-3"><b>Subject</b></div>
                <div className="col-2"><b>Id</b></div>
                <div className="col-2"><b>Name</b></div>
                <div className="col-2"><b>Type</b></div>
                <div className="col-3"><b>Action</b></div>
            </div>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status" id="loading" >
                </div>
            </div>
            {users && users.length ?
                users.map((value) => {
                    return (
                        <div>
                            <div className="row  text-center HS gx-0">
                                <div className="col-3"><img className="imgS" src={value.avatar_url}/></div>
                                <div className="col-2">{value.id}</div>
                                <div className="col-2">{value.login}</div>
                                <div className="col-2">{value.type}</div>
                                <div className="col-3"><a href="#"> <img className="imgS" src={eyeSolid} /></a></div>
                            </div>
                        </div>
                    )
                })
                : <p class="card-text text-center p-5"><img src={Noclass}/></p>
            }
        </>
    )
}
export default FetchData;
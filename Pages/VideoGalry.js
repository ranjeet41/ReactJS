
import { useEffect, useState } from 'react';
import './VideoGalry.css';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";



//getting values from local storages
const getDatafromLS = () => {
    const Data = localStorage.getItem('Data');
    if (Data) {
        return JSON.parse(Data);
    }
    else {
        return []
    }
}


const VideoGalry = () => {
    const [Data, setData] = useState(getDatafromLS());
    const [Name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [Video, setVideo] = useState('');

    //delete Video 
    const deleteVideo = (id) => {
        const filteredBook = Data.filter((element, index) => {
            return element.Name !== id
        })
        setData(filteredBook);
    }
    //submit form

    const handleAddVideoSubmit = (e) => {
        e.preventDefault();
        let data = {
            Video,
            Name,
            description
        }
        setData([...Data, data]);
        setVideo('');
        setDescription('');
        setName('');
    }



    //set data in to local storage 

    useEffect(() => {
        localStorage.setItem('Data', JSON.stringify(Data))
    }, [Data]);
    console.log('data set in localStore===========', Data);



    return (
        <>
            <div class="FullContainerS mt-5 ">
                <div class="container-fluid">
                    <h2><div class="row">
                        <div class="col-xl-2 col-lg-6 col-md-6 col-sm text-center"> Add Video</div>
                        <div class="col-xl-10 col-lg-6 col-md-4 col-sm text-center"> View Video</div></div></h2>
                    <div class="row p-2">
                        <div class="col-xl-2 col-md-12 col-lg-12 col-sm-12  FORMBox1  mt-5">
                            <form autoComplete="off" onSubmit={handleAddVideoSubmit}>

                                <div class="form-group mt-3">
                                    <label>Name</label>
                                    <input type="text" class="form-control" value={Name} required onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div class="form-group mt-3">
                                    <label>Video </label>
                                    <input type="file" accept="video/*" class="form-control" required
                                        onChange={(e) => { // console.log('e',e) // console.log('eval',e.target.files[0])
                                            // console.log('url == ',URL.createObjectURL(e.target.files[0]))
                                            setVideo(URL.createObjectURL(e.target.files[0]))
                                        }} />
                                </div>
                                <div class="form-group mt-3" height="240">
                                    <label>description</label>
                                    <textarea class="form-control" value={description} required onChange={(e) => setDescription(e.target.value)} />
                                </div>
                                <button type="submit" class="btn btn-primary m-3">Add Video</button>
                            </form>
                        </div>
                        {/* <div class="col-xl-1"></div> */}
                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 mt-5 FORMBox2 gx-0">
                            {Data?.length > 0 && <>
                                <div class="row gx-0 justify-content-center">
                                    {
                                        Data.map((value, index) => {
                                            return (

                                                <div class="card text-white m-4 col-xl-3 col-lg-3 col-sm-12 col-md-4  FullCard"key={value.Name}>
                                                    <div class="row p-3">
                                                        <div class="col-10">{index+1 +". "}{value.Name}</div>
                                                        <div class="col-1"><FaRegTrashAlt style={{cursor: "pointer" }} onClick={() => deleteVideo(value.Name)}/>
                                                        <div class="col-1"><a class="" href={value.Video}><FaRegEye/></a></div>
                                                        </div>
                                                    </div>
                                                    <div class="card-body">
                                                        <p class="card-text text-center">
                                                            <video class="col-12" height="240" controls>
                                                                <source src={value.Video} type="video/ogg" />
                                                            </video>
                                                        </p>
                                                        <div class="card-header">{value.description}</div>
                                                       
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </>}
                            {Data.length < 1 && <div class="text-center"> <img height="700" width="1200" src="https://picsum.photos/1000"></img></div>}

                        </div>
                    </div>

                </div>


            </div>



        </>
    );

};
export default VideoGalry;

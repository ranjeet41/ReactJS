import { useEffect, useState } from 'react';
import './Document.css';
import View from '../Components/View'
//getting values from local storages
const getDatafromLS=()=>{
  const data =localStorage.getItem('datas');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}


const DocumentsComponent = () => {
  const [datas, setDatas] = useState(getDatafromLS());

  const [name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Number, setNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [Profile, setProfile] = useState('');
  const [Course,setCourse]= useState('');
  const [Gender,setGender]= useState('');



//delete book 
const deleteBook = (id) =>{
const filteredBook = datas.filter((element ,index)=>{
  return element.name !== id
})
setDatas(filteredBook);
}

  const handleAddBookSubmit = (e) => {
    e.preventDefault();
    let data = {
      name,
      Email,
      Number,
      Password,
      Course,
      Gender,
      Profile
    }
    setDatas([...datas, data]);
    setName('');
    setEmail('');
    setNumber('');
    setPassword('');
    setProfile('');
    setCourse('');
    setGender('');
  }

  useEffect(() => {
    localStorage.setItem('datas', JSON.stringify(datas))
  }, [datas]);
  console.log('data set in localStore===========',datas);
  

  return (
    <>
      <div class="FullContainer mt-5 ">
        <div class="container-fluid">
          <h2><div class="row">
            <div class="col-xl-2 col-lg-6 col-md-12 col-sm-12 text-center"> Add Student</div>
            <div class="col-xl-10 col-lg-6 col-md-12 col-sm-12 text-center"> View Student</div></div></h2>
          <div class="row p-2">
            <div class="col-xl-2 col-md-12 col-lg-4 col-sm-12  FORMBox1  mt-5">
              <form autoComplete="off" onSubmit={handleAddBookSubmit}>
                <div class="form-group">
                  <label>Name</label>
                  <input type="text" class="form-control" value={name} required onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="form-group ">
                  <label>Email</label>
                  <input type="email" class="form-control" value={Email} required onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="form-group ">
                  <label>Number</label>
                  <input type="number" class="form-control" value={Number} required onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div class="form-group ">
                  <label>Password</label>
                  <input type="password" class="form-control" value={Password} required onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="form-group ">
                  <label>Course</label>
                  <select class="form-control" placeholder="Select Course" value={Course} required onChange={(e) =>setCourse(e.target.value)}>
                  <option type="radio">select_Course</option>
                    <option type="radio">BGS 1st year</option>
                    <option type="radio">BGS 2nd year</option>
                    <option type="radio">BGS 3rd year</option>
                    <option type="radio">BGS 4th year</option>
                    <option type="radio">BGS 5th year</option>
                    <option type="radio">BGS 6th year</option>
                  </select>
                </div>
                <div class="form-group ">
                  <label>Gender</label>
                  <select class="form-control" value={Gender} required onChange={(e) =>setGender(e.target.value)}>
                  <option type="radio">Select_your_Gender</option>
                    <option type="radio">Male</option>
                    <option type="radio">Female</option>
                    <option type="radio">Other</option>
                  </select>
                </div>

                <div class="form-group">
                  <label>Profile</label>
                  <input type="file" accept="image/*" class="form-control" required  
                  onChange={(e) => {
                    // console.log('e',e)
                    // console.log('eval',e.target.files[0])
                    // console.log('url == ',URL.createObjectURL(e.target.files[0]))
                    setProfile(URL.createObjectURL(e.target.files[0]))
                  }}
                    />
                   
                </div>
                <br />
                <button type="submit" class="btn btn-primary m-3">Submit</button>
               
              </form>
            </div>
            {/* <div class="col-xl-1"></div> */}
            <div class="col-xl-10 col-lg-7 col-md-12 col-sm-12 mt-5 FORMBox2 gx-0 ">
              <div class="">
                {datas.length>0 && <>
                <table className="table ">
                      <thead>
                        <tr>
                          <th>Si No.</th>
                          <th>Name</th>               
                          <th>Email </th>
                          <th>Gender</th>
                          <th>Number</th>
                          <th>Password</th>
                          <th>Course</th>
                          <th>Profile</th>
                          <th>Action</th>

                        </tr>
                      </thead>
                      <tbody>
                        <View profile={Profile} datas={datas} deleteBook={deleteBook}/>
                      </tbody>
                </table>
                </>}
                {datas.length < 1 && <div class="text-center"> <img height="700" width="1400" src="https://picsum.photos/1000"></img></div>}
              </div>
            </div>
          </div>

        </div>


      </div>



    </>
  );
};
export default DocumentsComponent;
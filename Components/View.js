
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEye} from "react-icons/fa";

const View = ({datas,profile ,deleteBook})=> {
   
    return datas.map((book, index) =>{
        console.log('book.Profile----',book.Profile)
      
        return(<tr key={book.name}>
           <td>{index+1}</td>
            <td>{book.name}</td>
            <td >{book.Email }</td>
            <td>{book.Gender}</td>
            <td>{book.Number}</td>
            <td>{book.Password}</td>
            <td>{book.Course}</td>
            <td><img style={{width:70,height:70,borderRadius:"50px"}} src={book.Profile}/></td>          
            <td><FaRegTrashAlt style={{cursor:"pointer"}} onClick={()=>deleteBook(book.name)}/>
            <a class="m-3" href={book.Profile}><FaRegEye/></a>
            
            </td>
           
        </tr>)
    })
}

export default View

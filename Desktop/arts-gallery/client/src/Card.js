import react from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Card(props) {

const deleteCard = () =>{

   //     πβ€οΈβπ₯πγπ© HAPPY NEW YEAR  πβ€οΈβπ₯πγπ©
//πβ€οΈβπ₯πγπ©β₯β₯ Modalβ₯β₯ Zoubi β₯β₯ Dridi β₯β₯ Merci β₯β₯ bcppp β₯β₯ πβ€οΈβπ₯πγπ©
//πβ€οΈβπ₯πγπ©β₯β₯ Modalβ₯β₯ Yah β₯β₯ Bous β₯β₯ Merci β₯β₯ bcppp β₯β₯ πβ€οΈβπ₯πγπ©
//πβ€οΈβπ₯πγπ©β₯β₯ Modalβ₯β₯ El β₯β₯ Boh β₯β₯ Merci β₯β₯ bcppp β₯β₯ππβ€οΈβπ₯πγπ©
//πβ€οΈβπ₯πγπ©β₯β₯ Modalβ₯β₯ Promiscuous β₯β₯ koko β₯β₯ Merci β₯β₯ bcppp β₯β₯ ππβ€οΈβπ₯πγπ©





  const confirmBox = window.confirm(

    "Do you really want to delete this ?"

  )

  if (confirmBox === true) {
  axios.delete(`http://localhost:8000/api/paintings/${props.info._id}`)
  .then(res=>console.log(res.data))
  .catch(err => console.log(err.message))

}

}

  return  (
   <div className='bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'  > 
      <img alt='robots' height='200' src={props.info.image} />
      <div>
      <h1 className='art' > {props.info.name}</h1> 
      <h5 >The Artist : {props.info.artist}</h5>
       <div>Year : {props.info.year}</div>
       <div>ID : {props.info.id} </div>
       <button class="button" onClick={deleteCard}><span>Delete </span></button> <Link to={`/edit/${props.info._id}`}><button class="button1"><span> Edit </span></button></Link> 
      </div>
      
    </div>
  )
}
export default Card

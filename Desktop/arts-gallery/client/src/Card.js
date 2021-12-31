import react from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

function Card(props) {

const deleteCard = () =>{

   //     💚❤️‍🔥🎂㊗🍩 HAPPY NEW YEAR  💚❤️‍🔥🎂㊗🍩
//💚❤️‍🔥🎂㊗🍩♥♥ Modal♥♥ Zoubi ♥♥ Dridi ♥♥ Merci ♥♥ bcppp ♥♥ 💚❤️‍🔥🎂㊗🍩
//💚❤️‍🔥🎂㊗🍩♥♥ Modal♥♥ Yah ♥♥ Bous ♥♥ Merci ♥♥ bcppp ♥♥ 💚❤️‍🔥🎂㊗🍩
//💚❤️‍🔥🎂㊗🍩♥♥ Modal♥♥ El ♥♥ Boh ♥♥ Merci ♥♥ bcppp ♥♥💙💚❤️‍🔥🎂㊗🍩
//💚❤️‍🔥🎂㊗🍩♥♥ Modal♥♥ Promiscuous ♥♥ koko ♥♥ Merci ♥♥ bcppp ♥♥ 💛💚❤️‍🔥🎂㊗🍩





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

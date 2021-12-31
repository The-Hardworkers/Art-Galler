
import {useState, useEffect} from 'react' ;
import dummy_data from './dummy_data';
import Card from "./Card";
import axios from 'axios';


function Information () {
    const [data, setdata] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/paintings')
        .then(res => {
            setdata(res.data)
            console.log(res.data)
        })
        .catch(e => console.log(e))
    }, [])
    return(
        <div className='row'>
       
       { !data.length? "No Paintings in Gallery":data.map( info => <Card 
            info={info} 
               
        />)}
        
    
        
        
        </div>
       
    )
}

export default Information
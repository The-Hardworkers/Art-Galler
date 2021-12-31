import react, {useState} from "react";
import "tachyons";
import { BrowserRouter, Route } from "react-router-dom";
import axios from 'axios'


const Form = () => {
  const [name, setname] = useState("");
  const [artist, setartist] = useState("");
  const [image, setimage] = useState("");
  const [year, setyear] = useState("");
  const [id, setid] = useState("");
  
  const submit = () => {
      axios.post('http://localhost:8000/api/paintings', {
            id,    
        name,
          artist,
          image,
          
          year
      }).then(res => console.log(res))
      .catch(error =>console.log(error.message))
  }

  // const [imageselected,setImageSelected]=useState("");
  const [loading,setLoading]=useState(false);

  const uploadImage = e =>{
    const files= e.target.files[0];
    const formData = new FormData() ;
       formData.append("upload_preset","i3izldyl")
       formData.append("file",files);
       setLoading(true);

       axios.post('https://api.cloudinary.com/v1_1/ahmedfedzadazdadad/image/upload',formData )
        .then(res => setimage(res.data.secure_url))
        .then(setLoading(false))
        .catch(err => console.log(err));


  }

  return (
    <div>
      <form class="pa4 black-80">
        <div class="measure center">
          <label for="name" class="f6 b db mb2">
            Name {/*<span class="normal black-60">(optional)</span>*/}
          </label>
          <input
            id="name"
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            value={name}
            onChange={e=>setname(e.target.value)}
          />
          <small id="name-desc" class="f6 black-60 db mb2">
            Please enter the Name of the Painting.
          </small>

          <label for="name" class="f6 b db mb2">
            Artist {/*<span class="normal black-60">(optional)</span>*/}
          </label>
          <input
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            value={artist}
            onChange={e=>setartist(e.target.value)}
          />
          <small id="name-desc" class="f6 black-60 db mb2">
            Please enter the Artist of the Painting.
          </small>

          <label for="name" class="f6 b db mb2">
            {" "}
            Image {/*<span class="normal black-60">(optional)</span>*/}
          </label>

          <input type="file"  onChange={uploadImage}/> 
          {loading ? <h1>loading....</h1> : <img className="settingimage" src={image}/>}
          
          
          <input
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            value={image}
            onChange={e=>setimage(e.target.value)}
          />

          <small id="name-desc" class="f6 black-60 db mb2">
            Please enter the image of the Painting. 
          </small>

          {/* partie choose file */}

          


          

          <label for="name" class="f6 b db mb2">
            Year {/*<span class="normal black-60">(optional)</span>*/}
          </label>
          <input
            id="name"
            class="input-reset ba b--black-20 pa2 mb2 db w-100"
            type="text"
            aria-describedby="name-desc"
            value={year}
            onChange={e=>setyear(e.target.value)}
          />
          <small id="name-desc" class="f6 black-60 db mb2">
            Please enter the Year of the Painting.
          </small>

          <div class="">
            <button
              class="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              onClick={submit}
            >add+</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form

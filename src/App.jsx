import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import APIForm from './Components/APIform';
import BanList from './Components/BanList'
import History from './Components/History';

function App() {
  const URL = `https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=${ACCESS_KEY}`;
  
  
  const [imageURL, setImageURL] = useState("");

  const [features, setFeatures] = useState({
    name: "",
    url: "",
    width: "",
    height: "",
    life_span: "",
    bred_for: "",
  });

  
  const [height, setHeight] = useState("")
  const [name, setName] = useState("")
  const [weight, setWeight] = useState()
  const [lifeSpan, setLifeSpan] = useState("")
  const [breedGroup, setBreedGroup] = useState("")
  const [prevImages, setPrevImages] = useState([]);
  const [prevNames, setPrevNames] = useState([])


//useEffect(() => {
  const fetchData = async () => {
    const response = await axios.get(URL);
    const data = response.data[0].breeds[0];

    if(response == null) {
      alert("Oops! Something went wrong with that query, let's try again!")

    } else {
      if(!banAttributes.includes(data.breed_group) && data.breed_group != null ) {
        setBreedGroup(data.breed_group)
        
        setImageURL(response.data[0].url)      
        
        setHeight(data.height.imperial)
        setWeight(data.weight.imperial)
        setName(data.name)
        setLifeSpan(data.life_span)
       
        setPrevImages((images) => [...images, response.data[0].url]);
        setPrevNames((names) => [...names, data.name])
      }
        
    }
    
  }
  //fetchData();
//}, [])
const [banAttributes, setBanAttributes] = useState([])
const [banHeights, setBanHeights] = useState([])
const [banWeights, setBanWeights] = useState([])
const [banLifeSpans, setBanLifeSpans] = useState([])
const banItem = () => {
    setBanAttributes((banAttributes) => [...banAttributes, breedGroup])
    
}
const banHeight = () => {
  setBanHeights((heights) => [...heights, height])
}
const banWeight = () => {
  setBanWeights((Weights) => [...Weights, weight])
}

const banLifeSpan = () => {
  setBanLifeSpans((banLifeSpans) => [...banLifeSpans, lifeSpan])
}

const removeAttribut = () => {
  banAttributes.pop()
 setBreedGroup(banAttributes)    
}

  return (
    <div className="home-page">
      <History images={prevImages} names={prevNames} />
      <div>
        <h1> Trippin' on Dogs </h1>
        <h3> Discover Dogs from your wildest dreams! </h3>
        😺😸😹😻😼😽🙀😿😾
        
        <APIForm
          imageURL = {imageURL}
          name = {name} 
          weight={weight} 
          height={height} 
          life_span = {lifeSpan} 
          breedGroup = {breedGroup}
          onSubmit={fetchData}
          onBreed={banItem}
          onHeight={banHeight}
          onWeight={banWeight}
          onLifeSpan={banLifeSpan}
        />
      </div>

        <br></br>
      <BanList banAttributes = {banAttributes}  
               banHeights={banHeights}
               banWeights={banWeights}
               banLifeSpans={banLifeSpans}
               onRemove={removeAttribut}
      />
    </div>
  )
}

export default App

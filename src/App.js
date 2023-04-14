import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

// use the google maps api in order to use the lattitude and
// longitude to find curr location of where the click took place 
// position.coords.latitude && position.coords.longitude represent the two vals needed
// API key: AIzaSyBsXIa5728x_DUgdR-AcrL9DBhCY7kYJv8

function MyButton() {
  const [count, setCount] = useState(localStorage.getItem("count") || 0);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);

  function componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
  }

  useEffect(() => {
    const storedCount = localStorage.getItem('count');
    if (storedCount) {
      setCount(Number(storedCount));
    }
  }, []);

  const handleClick = () => {
    componentDidMount();
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', newCount.toString());
  };

  return (
    <>
    <div>
      <button onClick={handleClick}>
        Click me!
      </button>   
      <componentDidMount/>
    </div>
    <div>
      <text>You have clicked the button {count} times.</text>
      <div> </div>
      <text>Your Latitude: {latitude}, Your Longitude: {longitude}. </text>
    </div>
    </>
  );
}
export default function App() {
  return (
    <div>
      <h1>Counting the Number of Clicks</h1>
      <MyButton />
    </div>
  );
}
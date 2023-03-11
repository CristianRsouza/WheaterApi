import {
  useState
} from 'react'
import './App.css'

function App() {

  const [weater, setWeater] = useState({})
  const [city, setCity] = useState("")

  const HandleInputChange = (e) => {
    setCity(e.target.value)
    console.log(e.target.value);
  }

  const handleSearch = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=key&q=${city}&lang=pt`)
      .then(response => response.json())
      .then(data => {
        console.log('data => ', data);
        setWeater(data)
        if (data.current.temp_c > 20) {
          document.body.classList.add('background');
        } else {
          document.body.classList.remove('background');
        }
      })
  }

  return (   
   <div className="App">
     {weater.current && (
     <>
       <h1>{weater.current.temp_c} °C</h1>
       <h1>{weater.current.temp_f} °F</h1>
     </>
     )}

     <input type="text" value={city} onChange={HandleInputChange} />
     <button onClick={handleSearch}>Search</button>

   </div>
  )
}

export default App

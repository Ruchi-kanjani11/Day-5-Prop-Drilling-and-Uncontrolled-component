import React ,{useState} from 'react'
import Country from './components/Country'

const App = () => {
  const [country, setCountry] = useState("Bharat");
  const [state, setState] = useState("Gujarat");
  const [city, setCity] = useState("Navsari");

  return (
    <>
    <Country country={country} state={state} city={city}/>
    </>
  )
}

export default App;

import React, { useState, useEffect } from "react"
import axios from "axios"
import Country from "./components/Country"
import Countries from "./components/Countries"
import Filter from "./components/Filter"
import Weather from "./components/Weather"
import "./App.css"

function App() {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState("")
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')
  

  let filteredCountries = []
  if (filter) {
    filteredCountries = countries.filter(
      country => country.name.toLocaleLowerCase().indexOf(filter.toLocaleLowerCase()) !== -1
    )
  }

  const showCountry = (name) => {
    setFilter(name)
  }

  return (
    <div>
      <Filter value={filter} onChange={setFilter} />

      <div>
        {filteredCountries.length === 1 ? (
          <div>
          <Country country={filteredCountries[0]} />
          <Weather capital={filteredCountries[0].capital} />
          </div>
        ) : (
          <Countries 
            countries={filteredCountries ? filteredCountries : []}
            showCountry={showCountry}
          />
        )}
      </div>
    </div>
  )
}


export default App;

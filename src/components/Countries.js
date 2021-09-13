import React from 'react'

const Countries = ( { countries, showCountry }) => {

    return (
        <div>
            {countries.length >= 10 ? (
                <div>Too many matches, specify another filter</div>
            ) : (
            <ul>
                {countries.map(country => 
                    <li key={country.alpha3Code}>{country.name}
                    <button onClick={() => showCountry(country.name)}>show
                    </button>                                
                    </li>
                )}
            </ul>
            )}   
        </div>
    )
}

export default Countries
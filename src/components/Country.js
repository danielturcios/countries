import React from 'react'

const Country = ({ country }) => {
    
    
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>

            <h2>Languages</h2>
            {country.languages.map((language) => (
                <li key={language.name}>{language.name}</li>
            ))}

            <img
                style={{ margina: "20px 0"}}
                width="200px"
                src={country.flag}
                alt={`${country.name} flag`}
            />            
        </div>
    )
}

export default Country
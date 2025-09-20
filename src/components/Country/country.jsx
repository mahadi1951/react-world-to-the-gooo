import React, { useState } from "react";
import './Country.css'

const Country = ({country,handleVisitedCountries,handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false);
    console.log();
    const handleVisited = () => {
        // 1st wey condition ar maddhome
        // if(visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }
        // 2nd wey tarnary oparator ar maddhome
        // setVisited(visited ? false : true)
        setVisited(!visited);
        handleVisitedCountries(country);

    }
    return (
        <div className={`country ${visited && `country-visited`}`}>
            <img src={country?.flags?.flags?.png} alt="" />
           <h3> Name:{country?.name?.common}</h3>
        <p>Population: {country?.population?.population}</p>
        <p>Area: {country?.area?.area} {country.area.area>300000 ? 'Big Country' : 'Small country'} </p>
        <button onClick={handleVisited}>
            {visited ? 'Visited' : 'Not Visited'}
        </button>
        <button onClick={() =>{handleVisitedFlag(country?.flags?.flags?.png)}}>Add visited Flag</button>
        </div>
    );
};

export default Country;
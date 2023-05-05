import './country.styles.css';
import { useState } from 'react';
import Info from '../Country info/info.component';


const Country = (country) => {

    const countryInfo = {
        countryName: country.country.name.common, //didnt really understand that json format, but figured it out (trial and error)
        countryContinent: country.country.continents,
        countryFlag: country.country.flags.svg,
        countryCapital: country.country.capital,
        countryCurrencySymbol: Object.values(country.country.currencies)[0].name,
        countryBorders: country.country.borders,
        countryLanguages: Object.values(country.country.languages), //get only values, no keys so that we get an array instead of an object
        countryPopulation: country.country.population,
        countryRoadSide: Object.values(country.country.car)[1]
    }

    const [displayInfo, setDisplayInfo] = useState(false)

    return (
        <div className='country-info-container'> 
            <div class="card" style={{width: "18rem", height: '22rem', display:"flex"}}>
            <img src={countryInfo.countryFlag} class="card-img-top" alt="Country's flag"/>
                <div class="card-body">
                    <h4 style={{textAlign:'center'}} class="card-title">{countryInfo.countryName}</h4>
                    <p  class="card-text">{countryInfo.countryName} is a country from {countryInfo.countryContinent}</p>
                    <button onClick={ () => setDisplayInfo(true)} class="btn btn-primary">More info</button>
                </div>
            </div>
            {displayInfo && <Info countryInfo = {countryInfo}/>}
        </div>
        
        

    )
}

export default Country;
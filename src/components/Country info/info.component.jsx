import { useState, useContext } from "react"
import { CountriesContext } from "../../contexts/coutries.context"

const Info = ({countryInfo}) => {

    const {countryName} = countryInfo
    const {countries} = useContext(CountriesContext)

    const [infoCard, setInfoCard] = useState(countryName)

    const handleDisplay = (e) => {
        const value = e.target.name
        if (countryInfo[value] == null){
            setInfoCard("No Info")
            return
        }

        if (countryInfo[value].length > 1 && value !== 'countryRoadSide' && value!== 'countryCurrencySymbol' && value!== 'countryBorders') {
            setInfoCard(countryInfo[value].join(", ")); //if its an array, we separate values by commas
        }
        else if (value == 'countryPopulation'){
            setInfoCard(countryInfo[value].toLocaleString()); //population needs to be formatted, comma after every 3 digits
        }
        else if (value == 'countryBorders'){
            const fullNameBorders = []
            countryInfo[value].map((border)=>{
                countries.map((country) => {
                    if (border === country.cca3){ //did this with no assistance, BIG BRAAAIIIN!!!
                        fullNameBorders.push(country.name.common)
                    }
                })
            })
            setInfoCard(fullNameBorders.join(", "))
        }
        
        else {
            setInfoCard(countryInfo[value]); //if just a single variable, just set
        }
    }

    return (
        <div>
            <div style={{width: "18rem", height: '22rem'}} class="card text-center">
                <div class="card-header">
                    <ul class="nav nav-pills card-header-pills">
                    <li class="nav-item">
                            <button onClick={(event) => handleDisplay(event)} 
                            class="nav-link" 
                            name='countryCapital'>Capital</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={(event) => handleDisplay(event)}
                             class="nav-link" 
                             name='countryCurrencySymbol'>Currency</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={(event) => handleDisplay(event)}
                             class="nav-link" 
                             name='countryBorders'>Borders</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={(event) => handleDisplay(event)}
                             class="nav-link" 
                             name='countryLanguages'>Languages</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={(event) => handleDisplay(event)}
                             class="nav-link" 
                             name='countryPopulation'>Population</button>
                        </li>
                        <li class="nav-item">
                            <button onClick={(event) => handleDisplay(event)}
                             class="nav-link" 
                             name='countryRoadSide'>Road Side</button>
                        </li>
                    </ul>
                </div>
                <div style={{overflow:'auto'}} class="card-body d-flex justify-content-center align-items-center">
                    <h1 style={{padding:'5px'}} class="card-title">{infoCard}</h1>
                </div>
            </div>
        </div>
    )
}



export default Info;
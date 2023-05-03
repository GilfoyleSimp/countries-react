import './country.styles.css';
// import Info from '../Country info/info.component';


const Country = (country) => {

    const countryName = country.country.name.common;
    const countryContinent = country.country.continents;
    const countryFlag = country.country.flags.svg;
    const countryCapital = country.country.capital;
    const countryCurrencySymbol = country.country.currencies;
    // const countryCurrencyName = country.country.currencies.countryCurrencySymbol.name;
    const countryBorders = country.country.borders;



    return (
        <div style={{display:"flex"}}> 
            <div class="card" style={{width: "18rem", height: '22rem', display:"flex"}}>
            <img src={countryFlag} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h4 style={{textAlign:'center'}} class="card-title">{countryName}</h4>
                    <p  class="card-text">{countryName} is a country from {countryContinent}</p>
                    <button class="btn btn-primary">More info</button>
                </div>
                {/* {console.log(name)} */}
            </div>
            {/* <Info/> */}
        </div>
        
        

    )
}

export default Country;
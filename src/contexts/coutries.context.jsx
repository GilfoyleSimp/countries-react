import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const CountriesContext = createContext({
    countries: [],
    setCountries: () => {}
});



export const CountriesProvider = ({children}) => {
    const [countries, setCountries] = useState([])
    const value = {countries, setCountries}

    useEffect(() => {

        // fetch({url}).then((response) => response.json())
        // .then((users) => setCountries(users))

        const fetchData = async () => {

            await axios.get('https://restcountries.com/v3.1/all')
                .then((response) => {
                    setCountries(response.data)

                }).catch((error) => {
                    console.log(error)
                })
        }

        fetchData();
    }
        , [])

    return (
        <CountriesContext.Provider value={value}>{children}</CountriesContext.Provider>
    )

}
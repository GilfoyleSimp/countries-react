import './home.styles.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Results from '../Results/results.component';
import { useContext } from 'react';
import { CountriesContext } from '../../contexts/coutries.context';

const Home = () => {

    const {countries} = useContext(CountriesContext); 
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [searchField, setSearchField] = useState('')


    useEffect(() => {
        const newFilteredCountries = countries.filter((country) => {
            return country.name.common.toLowerCase().includes(searchField);
        });

        if (searchField) // if no search entered, results are empty
        {
            setFilteredCountries(newFilteredCountries);
        }
        else {
            setFilteredCountries([])
        }
    }, [countries, searchField]);

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLowerCase();
        setSearchField(searchFieldString);
    };

    const resetSearchField = () => {
        setFilteredCountries("")
    }

    return (
        <div className="home-container">
            <form className='form-container'>
                <input type='search' className='search-box' placeholder='Search for Country'
                    onChange={onSearchChange} />
            </form>

            <Results filteredCountries={filteredCountries.sort((a, b) => a - b)} searchField={searchField} setFilteredCountries={setFilteredCountries} />

        </div>
    );
}




export default Home;
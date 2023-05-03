import './home.styles.css';
import Background from '../../assets/el-classico-wallpaper.png'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Results from '../Results/results.component';

const Home = () => {

    // https://restcountries.com/v3.1/all?fields=name,flags`
    const [countries, setCountries] = useState([])
    const [filteredCountries, setFilteredCountries] = useState(countries)
    const [searchField, setSearchField] = useState('')

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

            <Results filteredCountries={filteredCountries} searchField={searchField} setFilteredCountries={setFilteredCountries} />

        </div>
    );
}




export default Home;
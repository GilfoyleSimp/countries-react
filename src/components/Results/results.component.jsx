import './results.styles.css';
import Country from '../Country/country.component';
import React, { useEffect, useState } from 'react';

const Results = ({ filteredCountries, setFilteredCountries, searchField }) => {
   
    useEffect(() => {
        setSelectedCountry(null); //when searchfield changes, country component is not displayed anymore
    }, [searchField]);

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setFilteredCountries([]); //when country is selected, set filtered to null, thus clearing the mapped out countries
    };

    return (
        <div className='results'>
            {filteredCountries.sort((a, b) => a - b).map(country => {
                const { name } = country;
                return (
                    
                    <ul className='list-items' key={name.common}> {/* couldnt find a key(id) , but this works */}
                        <li className='list-item'>{name.common}</li>
                        <button className='btn btn-outline-info'
                            onClick={() => {
                                handleSelectCountry(country);
                            }}
                        >
                            Select
                        </button>
                    </ul>
                );
            })}
            {selectedCountry && <Country country={selectedCountry} />}
        </div>
    );
};

export default Results;

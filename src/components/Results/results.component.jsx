import './results.styles.css';
import Country from '../Country/country.component';
import React, { useEffect, useState } from 'react';

const Results = ({ filteredCountries, setFilteredCountries, searchField }) => {
   
    useEffect(() => {
        setSelectedCountry(null);
    }, [searchField]);

    const [selectedCountry, setSelectedCountry] = useState(null);

    const handleSelectCountry = (country) => {
        setSelectedCountry(country);
        setFilteredCountries([]);
    };

    return (
        <div className='results'>
            {filteredCountries.map(country => {
                const { name } = country;
                return (
                    
                    <ul className='list-items' key={name.common}>
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

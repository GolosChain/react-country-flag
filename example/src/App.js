import React, { Component } from 'react';

import ReactCountryFlag from 'react-country-flag';
import countryData from './country-data';

export default class App extends Component {
    render() {
        return (
            <>
                {countryData.map(country => (
                    <ReactCountryFlag
                        key={`${country.iso2_cc}_${country.e164_cc}_svg`}
                        code={country.iso2_cc}
                        svg
                        styleProps={{ width: '4rem', height: '3rem' }}
                    />
                ))}
            </>
        );
    }
}

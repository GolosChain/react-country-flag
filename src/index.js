import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ReactCountryFlag extends Component {
    static propTypes = {
        cdnUrl: PropTypes.string,
        code: PropTypes.string.isRequired,
        styleProps: PropTypes.object,
        svg: PropTypes.bool,
        title: PropTypes.string,
    };

    static defaultProps = {
        cdnUrl: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.2.1/flags/4x3/',
        svg: false,
    };

    render() {
        const { cdnUrl, code, styleProps, className } = this.props;

        const flagUrl = `${cdnUrl}${code.toLowerCase()}.svg`;

        return (
            <img
                src={flagUrl}
                aria-label={code}
                alt={code}
                style={{
                    position: 'relative',
                    display: 'inline-block',
                    objectPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                    objectFit: 'contain',
                    fontSize: '1em',
                    lineHeight: '1em',
                    verticalAlign: 'middle',
                    ...styleProps,
                }}
                className={className}
            />
        );
    }
}

import React, { Component } from 'react';

class FilterCountries extends Component {
    render() {
        return (
            <div>
                find countries: <input
                    value={this.props.filterCountries}
                    onChange={this.props.handleFilterChange}
                />
            </div>
        );
    }
}

export default FilterCountries;
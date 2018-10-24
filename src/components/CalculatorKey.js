import React from 'react';

class CalculatorKey extends React.Component {
    keyClickHandler = e => {
        const value = e.target.getAttribute('data-value');
        if (value === '=') {
            this.props.calculate();
        } else {
            this.props.addValue(value);
        }
    };
    render() {
        return (
            <div
                className={`key ${this.props.className}`}
                data-value={this.props.value}
                onClick={this.keyClickHandler}
            >
                {this.props.label}
            </div>
        );
    }
}

export default CalculatorKey;

import React from 'react';

class CalculatorScreen extends React.Component {
    render() {
        return <div className="screen">{this.props.value || '0'}</div>;
    }
}

export default CalculatorScreen;

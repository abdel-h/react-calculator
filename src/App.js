import React, { Component } from 'react';

import CalculatorScreen from './components/CalculatorScreen';
import CalculatorKey from './components/CalculatorKey';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: ''
        };
        this.addValue = this.addValue.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    addValue(value) {
        this.setState({
            results: this.state.results + value
        });
    }
    calculate() {
        let results;
        try {
            results = eval(this.state.results);
        } catch (err) {
            results = this.state.results;
        }
        this.setState({
            results
        });
    }

    render() {
        return (
            <div className="calculator">
                <CalculatorScreen value={this.state.results} />
                <div className="key-pad">
                    <CalculatorKey
                        className="function-key"
                        label="C"
                        value="*0"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="function-key"
                        label="±"
                        value="*(-1)"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="function-key"
                        label="%"
                        value="%"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="operation-key"
                        label="÷"
                        value="/"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="7"
                        value="7"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="8"
                        value="8"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="9"
                        value="9"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="operation-key"
                        label="x"
                        value="*"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="4"
                        value="4"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="5"
                        value="5"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="6"
                        value="6"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="operation-key"
                        label="-"
                        value="-"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="1"
                        value="1"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="2"
                        value="2"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="3"
                        value="3"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="operation-key"
                        label="+"
                        value="+"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key key-width-half"
                        label="0"
                        value="0"
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="digit-key"
                        label="."
                        value="."
                        addValue={this.addValue}
                    />

                    <CalculatorKey
                        className="operation-key"
                        label="="
                        value="="
                        calculate={this.calculate}
                    />
                </div>
            </div>
        );
    }
}

export default App;

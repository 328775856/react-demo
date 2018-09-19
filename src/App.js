import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './components/count.js';
import ButtonNew from './components/button.js';
import r from './components/routerDemo.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: [{name: 1, id: 1}, {name: 2, id: 2}], //此状态机为一个变量,
            status: 'active'
        }
    }

    add() {
        this.state.count.length === 0 ?
            this.setState({
                count: [{name: 0, id: 0}]
            }) : this.setState({
                state: this.state.count.push({name: 1, id: this.state.count[this.state.count.length - 1].id + 1})
                // count: this.state.count
            })
    }

    // this.setState({
    //         state: this.state.count.push({name: 3, id: this.state.count[this.state.count.length - 1].id})
    //     }
    // )


    minus() {
        this.setState({
                state: this.state.count.splice(this.state.count.length - 1, 1)
            }
        )
    }

    Cminus(e) {
        this.setState({
                state: this.state.count.splice(e.target.getAttribute('index'), 1)
            }
        )
    }
    avtive(){
        this.setState({
            status: this.state.status ==='active'?'disable':'active'
        })
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.add.bind(this)}>add</button>
                <button onClick={this.minus.bind(this)}>minus</button>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Count childrenMinus={this.Cminus.bind(this)} count={this.state.count}/>
                <ButtonNew change={this.avtive.bind(this)}  status={this.state.status}></ButtonNew>
                <r></r>
            </div>
        );
    }
}

export default App;

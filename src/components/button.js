import React, {Component} from 'react'
import './button.css'


class button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true
        }
    }
    change(){
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <button onClick={this.props.change}  className={this.state.active?'btn':'active'}>{this.state.active?'off':'on'}{this.props.status}</button>
        )
    }
}

export default button
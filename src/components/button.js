import React, {Component} from 'react'
import './button.css'


class button extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true
        }
    }

    componentDidMount() {
        fetch('http://localhost:8000', {method: 'GET'})
            .then((res) => {
                alert(res.data)
            })
    }

    change() {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        return (
            <button onClick={this.change.bind(this)}
                    className={this.state.active ? 'btn' : 'active'}>{this.state.active ? 'off' : 'on'}{this.props.status}</button>
            // <button onClick={this.props.change}  className={this.state.active?'btn':'active'}>{this.state.active?'off':'on'}{this.props.status}</button>
        )

    }
}

export default button
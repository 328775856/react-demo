import React, {Component} from 'react'

class count extends Component {
    // minus(e) {
    //     console.log(this.props.count.splice(e.target.getAttribute("index"), 1))
    //     this.props.count.splice(e.target.getAttribute("index"), 1)
    // }

    render() {
        return (
            <div>
                <div>{this.props.count.map((item, index) => {
                    return (<div key={item.id.toString()}>
                        <span>name:{item.name}</span>
                        <span>id:{item.id}</span>
                        <span onClick={this.props.childrenMinus} index={index}  style={{color: 'red'}}>x</span>
                    </div>)
                })}</div>
            </div>
        )
    }
}

export default count


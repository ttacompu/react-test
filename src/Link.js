import React from 'react';

class Link extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        var obj = { ...this.state, buttonText: 'OK' };
        this.setState(obj)
    }
    constructor(props) {
        super(props);
        this.state = { buttonText: '' }
        this.handleClick.bind(this);
    }

    render() {
        return (
            <div >
                <div className="buttonText">{this.state.buttonText}</div>
                <a className="test" href="#" onClick={this.handleClick}>Click</a>
            </div>

        )
    }

}
export default Link;
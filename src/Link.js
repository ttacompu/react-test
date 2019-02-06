import React from 'react';

class Link extends React.Component {
    handleClick = (e) => {
        e.preventDefault();
        var obj = { ...this.state, buttonText: 'OK' };
        this.setState(obj)
    }
    constructor(props) {
        super(props);
        this.state = {
            buttonText: '',
            lifeCycle : ''
        }
        this.handleClick.bind(this);
    }
    componentDidMount() {
        this.setState({ ...this.state, lifeCycle: 'ComponentDidMount' })

    }

    render() {
        return (
            <div >
                <div className="buttonText">{this.state.buttonText}</div>
                <a className="test" href="#" onClick={this.handleClick}>Click</a>
                <span className='lifeCycle'>{this.state.lifeCycle}</span>
            </div>

        )
    }

}
export default Link;
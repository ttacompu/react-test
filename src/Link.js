import React from 'react';

class Link extends React.Component{
    constructor(props){
       super(props);
    }

    render(){
        return ( <a className="test" href={this.props.address}>Click</a>)
    }

}
export default Link;
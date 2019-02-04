import React from 'react';
const Title = ({text}) =>( <span>{text}</span>)
const Welcome = () => (<div>
    <h1>header</h1>
    <span className="test">Test</span>
    <Title text="some title" />
</div>)
export default Welcome;
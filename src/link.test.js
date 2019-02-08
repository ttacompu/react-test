import Link from './link';
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'
//import jest from 'jest';



describe('<Link />', () => {
 /* it('Should contain link with test', () => {
    const tree = mount(<Link address='http://www.google.com' />)
    expect(toJson(tree)).toMatchSnapshot();
    tree.unmount();
  });*/

  it('should get ok when click button', ()=>{
    const wrapper = shallow(<Link address='http://www.google.com' />)
    expect(wrapper.find('.buttonText').text()).toBe('');
    wrapper.setState({buttonText : 'ok'});
    expect(wrapper.find('.buttonText').text()).toBe('ok');
  })

  it('link call componentDidMount', () =>{
    jest.spyOn(Link.prototype, 'componentDidMount');
    const wrapper = shallow(<Link address='http://www.google.com' />)
    expect(Link.prototype.componentDidMount.mock.calls.length).toBe(1);
    expect(wrapper.find('.lifeCycle').text()).toBe('ComponentDidMount');
  })

  it('should get true false from hadleStr', ()=>{
    const wrapper = shallow(<Link address='http://www.google.com' />)
    expect(wrapper.instance().hadleStr('hello')).toBe(true);
    expect(wrapper.instance().hadleStr('')).toBe(false);
  })

  
 
});
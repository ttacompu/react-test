import Welcome  from './welcome';
import React from 'react';
import { shallow } from 'enzyme';

function setup() {
    const wrapper = shallow(<Welcome />);
    return { wrapper };
  }

  describe('Welcome Message Test Suite', () => {
    it('Should contain one h1', () => {
      const { wrapper } = setup();
      expect(wrapper.find(".test").exists()).toBe(true);
    });
  });
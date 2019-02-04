import Welcome  from './welcome';
import React from 'react';
import { shallow } from 'enzyme';

function setup() {
    const wrapper = shallow(<Welcome />);
    return { wrapper };
  }

  describe('WelcomeMessage Test Suite', () => {
    it('Should Welcome render', () => {
      const { wrapper } = setup();
      expect(wrapper).toBeDefined();
    });
  });
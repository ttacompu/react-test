import Link  from './link';
import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json'


  describe('<Link />', () => {
    it('Should contain link with test', () => {
      const tree=mount(<Link address='http://www.google.com' />)
      expect(toJson(tree)).toMatchSnapshot();
      tree.unmount();
    });
  });
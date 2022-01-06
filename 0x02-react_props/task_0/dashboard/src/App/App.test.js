import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

describe('<App />', () => {
    it('renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists());
    })
});
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists());
  });
  it('renders a list with three items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find("ul")).to.have.lengthOf(1);
    expect(wrapper.find("li")).to.have.lengthOf(3);
  });
  it('renders description text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').first().text()).to.equal('Here is the list of notifications');
  });
  it('has a close button', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('img')).to.have.lengthOf(1);
  });
});
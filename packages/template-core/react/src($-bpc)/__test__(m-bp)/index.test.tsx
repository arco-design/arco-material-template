import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../../tests/mountTest';
import SidebarDemo from '../index';

mountTest(SidebarDemo);

describe('SidebarDemo', () => {
  it('render SidebarDemo correctly', () => {
    const component = mount(<SidebarDemo />);
    expect(component).toBeTruthy();
  });
});

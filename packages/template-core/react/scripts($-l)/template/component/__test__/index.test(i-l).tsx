import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../tests/mountTest';
import @CONST_COMPONENT_NAME@ from '../index';

mountTest(@CONST_COMPONENT_NAME@);

describe('@CONST_COMPONENT_NAME@', () => {
  it('render button count correctly', () => {
    const component = mount(<@CONST_COMPONENT_NAME@ />);

    expect(component.find('h3').text()).toBe('This is @CONST_COMPONENT_NAME@');
  });
});

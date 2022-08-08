import * as React from 'react';
import { mount } from 'enzyme';
import mountTest from '../../../../tests/mountTest';
import @CONST_COMPONENT_NAME_FROM_PACKAGE@ from '../index';

mountTest(@CONST_COMPONENT_NAME_FROM_PACKAGE@);

describe('@CONST_COMPONENT_NAME_FROM_PACKAGE@', () => {
  it('render button count correctly', () => {
    const component = mount(<@CONST_COMPONENT_NAME_FROM_PACKAGE@ title="Title">Test</@CONST_COMPONENT_NAME_FROM_PACKAGE@>);
    expect(component.find('button').text()).toBe('Test');
  });
});

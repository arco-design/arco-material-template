import { mount } from '@vue/test-utils';
import @CONST_COMPONENT_NAME@ from '../index.vue';

describe('@CONST_COMPONENT_NAME@', () => {
  test('render <@CONST_COMPONENT_NAME@> content correctly', () => {
    const wrapper = mount(@CONST_COMPONENT_NAME@, {
      global: {
        mocks: {
          $t: (msg: string) => msg,
        },
      },
      slots: {
        default: 'test button',
      },
    });

    expect(wrapper.text()).toContain('test button');
  });
});

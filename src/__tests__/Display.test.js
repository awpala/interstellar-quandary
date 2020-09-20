import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../__utilities__/testUtils';
import Display from '../Components/Display';

/**
  * Factory function to create a ShallowWrapper for Display component
  * @function setup
  * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Display />);


test("Display renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, '.display');
    expect(component.length).toBe(1);
});

test("Display renders a message string", () => {
    const wrapper = setup();
    const message = findByTestAttr(wrapper, '.gorbyoyo-validated');
    expect(message.text().length).not.toBe(0);
});

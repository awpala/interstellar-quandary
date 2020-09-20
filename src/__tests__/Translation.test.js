import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../__utilities__/testUtils';
import Translation from '../Components/Translation';

/**
  * Factory function to create a ShallowWrapper for Translation component
  * @function setup
  * @returns {ShallowWrapper}
 */
const setup = () => shallow(<Translation />);


test("Translation renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, '.translation');
    expect(component.length).toBe(1);
});

test("Translation renders a button", () => {
    const wrapper = setup();;
    const component = wrapper.find('button');
    expect(component.length).toBe(1);
});
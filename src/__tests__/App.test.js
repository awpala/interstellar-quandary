import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../__utilities__/testUtils';
import App from '../Components/App';

/**
  * Factory function to create a ShallowWrapper for App component
  * @function setup
  * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />);


test("App renders without error", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, '.App');
    expect(component.length).toBe(1);
});

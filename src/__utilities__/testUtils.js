/**
 * Return node(s) with the given data attribute
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} value - Value of the searched attribute
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, value) => wrapper.find(`${value}`);

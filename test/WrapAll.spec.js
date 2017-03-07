import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import WrapAll from '../src/components/WrapAll';

describe('<WrapAll />', () => {

  it('deve possuir um componente <Hello />', () => {
    const wrapper = mount(<WrapAll />);
    expect(wrapper.find('Hello')).to.have.length(1);
  });

  it('deve possuir um componente <Counter />', () => {
    const wrapper = mount(<WrapAll />);
    expect(wrapper.find('Counter')).to.have.length(1);
  });

});

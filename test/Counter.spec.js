import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Counter from '../src/components/Counter';

describe('<Counter />', () => {

  it('deve possuir o estado inicial, count, como zero', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state('count')).to.equal(0);
  });

  it('deve possuir um botão para incrementar', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('button#increment')).to.have.length(1);
  });

  it('deve possuir um botão para decrementar', () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find('button#decrement')).to.have.length(1);
  });

  it('ao clicar no botão increment o estado count deve ser incrementado uma vez', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('#increment').simulate('click');

    expect(wrapper.state('count')).to.equal(1);
  });

  it('ao clicar no botão decrement o estado count deve ser decrementado uma vez', () => {
    const wrapper = shallow(<Counter />);
    wrapper.find('#decrement').simulate('click');

    expect(wrapper.state('count')).to.equal(-1);
  });

});

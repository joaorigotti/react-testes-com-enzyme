import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Hello from '../src/components/Hello';

describe('<Hello />', () => {

  it('deve possuir uma tag h1 como filho', () => {
    const wrapper = shallow(<Hello text="Olá"/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('deve renderizar o texto passado para a propriedade text', () => {
    const saudacao = "Bem vindo!";
    const wrapper = shallow(<Hello text={saudacao} />);
    expect(wrapper.text()).to.equal(saudacao);
  });

});

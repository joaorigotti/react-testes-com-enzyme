import React, { PropTypes } from 'react';

const Hello = (props) => <h1>{props.text}</h1>;

Hello.propTypes = {
  text: PropTypes.string.isRequired
};

export default Hello;

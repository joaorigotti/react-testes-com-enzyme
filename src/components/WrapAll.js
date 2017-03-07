import React from 'react';
import Hello from './Hello';
import Counter from './Counter';

const WrapAll = () => {
  return(
    <div>
      <Hello text="Contador" />
      <Counter />
    </div>
  )
}

export default WrapAll;

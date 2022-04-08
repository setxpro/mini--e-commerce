import React from 'react';

import { BTN } from './styles';

function Button(props) {
  return (
      <BTN>{props.name}</BTN>
  );
}

export default Button;
import React from 'react';

import * as C from './styles';

function Spinner() {
  return (
      <C.Container>
          <div class="lds-heart"><div></div></div>
      </C.Container>
  );
}

export default Spinner;
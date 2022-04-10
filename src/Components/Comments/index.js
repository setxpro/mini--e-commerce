import React from 'react';

import * as C from './styles';
import * as Icon from './styles';

function Comments() {
  return (
      <C.Container>
          <h3>Patrick Anjos</h3>
             <div className='stars'>
                <Icon.FullStar/><Icon.FullStar/><Icon.FullStar/><Icon.FullStar/><Icon.Star/>
            </div>
            <div className='date'>
                Hoje ás 10h
            </div>
            <C.AreaComment>
                Blá Blá
            </C.AreaComment>
      </C.Container>
  );
}

export default Comments;
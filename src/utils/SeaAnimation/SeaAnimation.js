import React from 'react';

import * as C from './styles';

function SeaAnimation() {
  return (
    <C.Container>
       <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150">
       <defs><linearGradient id="gradient" x1="65%" y1="98%" x2="35%" y2="2%"><stop offset="5%" stop-color="#4444ddff"></stop><stop offset="95%" stop-color="#8ed1fcff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 166.13333333333333,200.93333333333334 332.26666666666665,201.86666666666665 473,211 C 613.7333333333333,220.13333333333335 729.0666666666668,237.4666666666667 886,237 C 1042.9333333333332,236.5333333333333 1241.4666666666667,218.26666666666665 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg>
    </C.Container>
  );
}

export default SeaAnimation;
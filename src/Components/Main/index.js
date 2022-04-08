import React, { useEffect, useState } from 'react';
import { Router } from '../../router';
import { Layout } from '../../Styles/Layout/styles';

import * as Icon from './styles';

function Main() {

  const [arrow, setArrow] = useState(false);

  const handleLeftArrow = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {

    const shadowEvenScrollY = () => {
      if (window.scrollY > 10) {
        setArrow(true);
      } else {
        setArrow(false);
      }
    }
    window.addEventListener('scroll', shadowEvenScrollY);

    return () => window.removeEventListener('scroll', shadowEvenScrollY);

  }, [])

  return (
      <Layout>
          <Router/>
          <Icon.ArrowUp onClick={handleLeftArrow} arrow={arrow}/>
      </Layout>
  );
}

export default Main;
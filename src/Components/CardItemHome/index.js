import React, { useEffect, useState} from 'react';
import Spinner from '../../utils/Spinner';

import * as C from './styles';
import * as Icon from './styles';
import { Link } from 'react-router-dom';

function CardItemHome(props) {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  },[])

  return (
    <>
    {loading ? <Spinner/> : 
      <C.Container>
            <img src={props.photo} alt=''/>
            <p>{props.name}</p>
        <C.StarsArea>
            <div className='stars'>
            <Icon.FullStar/><Icon.FullStar/><Icon.FullStar/><Icon.FullStar/><Icon.Star/>
            </div>
            <div className='total-views'>{props.views} views</div>
        </C.StarsArea>
            <span>R$ {props.price},00</span>
      </C.Container>
    }
    </>
  );
}

export default CardItemHome;
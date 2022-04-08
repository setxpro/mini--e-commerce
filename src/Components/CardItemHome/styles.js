import styled from 'styled-components';

import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';

export const Container = styled.div`
    width: 340px;
    height: 385px;
    padding: 15px;
    border: 1px solid #E0FFFF;
    img {
        width: 310px;
        height: 255px;
        background-color: #DDD;
    }
    
    p {
        margin-top: 10px;
        margin-bottom: 10px;
        color: #444;
    }

    span {
        color: green;
    }
`;
export const StarsArea = styled.div`
    display: flex;
    gap: 1.5rem;
    margin-top: 10px;
    margin-bottom: 10px;

    .stars {
        display: flex;
        gap: 5px;
    }

    .total-views {
        color: #444;
    }
`;

export const Star = styled(FiStar)`
    color: #ff0;
`;
export const FullStar = styled(AiFillStar)`
    color: #ff0;
`;
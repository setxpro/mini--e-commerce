import styled from 'styled-components';

import { FiStar } from 'react-icons/fi';
import { AiFillStar } from 'react-icons/ai';


export const Container = styled.div`
    background: rgb(248,249,250);
    border-radius: 8px;
    margin-top: -50px;
    width: 38%;
    padding: 10px;

    margin-bottom: 5rem;

    .stars {
        display: flex;
        gap: 5px;
        margin-top: 10px;
    }
    .date {
        margin-top: 10px;
    }
`;

export const AreaComment = styled.div`
    padding: 10px;
    color: #055160;
    background-color: #cff4fc;
    border-color: #b6effb;
    border-radius: 8px;

    margin-top: 10px;
    margin-bottom: 10px;
`;

export const Star = styled(FiStar)`
    color: #ff0;
`;
export const FullStar = styled(AiFillStar)`
    color: #ff0;
`;
import styled from 'styled-components';

import { CgArrowUpR } from 'react-icons/cg';

export const ArrowUp = styled(CgArrowUpR)`
    position: fixed;
    bottom: 30px;
    right: 15px;
    color: #87CEEB;
    font-size: 2.5rem;

    transition: all 1s ease-in-out;
    opacity: ${props => props.arrow ? '1' : '0'};

    animation: jump 4s infinite;

    @keyframes jump {
    0% {
        transform: translateY(2px);
    }
    25% {
        transform: rotateX(60deg);
    }
    50% {
        transform: translateX(5px);
    }
    100% {
        transform: translateY(-60px);
    }
}
`;

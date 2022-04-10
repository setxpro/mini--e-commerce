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
        animation: slide-in-fwd-center 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

    @keyframes slide-in-fwd-center {
        0% {
            -webkit-transform: translateZ(-1400px);
                    transform: translateZ(-1400px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateZ(0);
                    transform: translateZ(0);
            opacity: 1;
        }
    }

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
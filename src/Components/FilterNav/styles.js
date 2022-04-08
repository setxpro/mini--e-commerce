import styled from 'styled-components';

import { RiShoppingCartLine } from 'react-icons/ri';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    input {
        border: 1px solid #555;
        width: 40%;
        padding: 1rem;
        font-size: 1rem;
        border-radius: 10px;
        outline: none;
    }

    a {
        text-decoration: none;

        img {
            animation: blc 6s infinite;

            @keyframes blc {

                0% {
                    -webkit-transform: translateY(-500px);
                    transform: translateY(-500px);
                    -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
                    opacity: 0;
                }
                38% {
                    -webkit-transform: translateY(0);
                    transform: translateY(0);
                    -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
                    opacity: 1;
                }
                55% {
                    -webkit-transform: translateY(-65px);
                    transform: translateY(-65px);
                    -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
                }
                72% {
                    -webkit-transform: translateY(0);
                    transform: translateY(0);
                    -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
                }
                81% {
                    -webkit-transform: translateY(-28px);
                    transform: translateY(-28px);
                    -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
                }
                90% {
                    -webkit-transform: translateY(0);
                    transform: translateY(0);
                    -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
                }
                95% {
                    -webkit-transform: translateY(-8px);
                    transform: translateY(-8px);
                    -webkit-animation-timing-function: ease-in;
                    animation-timing-function: ease-in;
                }
                100% {
                    -webkit-transform: translateY(0);
                    transform: translateY(0);
                    -webkit-animation-timing-function: ease-out;
                    animation-timing-function: ease-out;
                }
            }
        }
    }

    border-bottom: 1px solid #DDD;
`;
export const AreaRegister = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
        text-decoration: none;
        color: #444DDD;
        font-weight: 700;
        
    }

    .store-length {
        span {
            position: absolute;
            background-color: #444DDD;
            width: 20px;
            height: 20px;
            border-radius: 50%;

            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;

            margin-top: -40px;
            margin-left: 20px;
        }
    }
`;
export const Cart = styled(RiShoppingCartLine)`
  color: #444DDD;
  font-size: 2rem;
`;
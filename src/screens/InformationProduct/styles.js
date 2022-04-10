import styled from 'styled-components';
import { AiOutlineCreditCard } from 'react-icons/ai';

export const CardIcon = styled(AiOutlineCreditCard)`
    color: #fff;
`;

export const Container = styled.div`

    padding-bottom: 1rem;
    
    section {
        display: flex;

        :nth-child(2) {
            flex-direction: column;
        }
    }
`;
export const AreaImage = styled.div`
    width: 515px;
    height: 500px;
    background-color: #DDD;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 15px #000;
    border-radius: 8px;

    img {
        width: 450px;
        height: 350px;
    }
`;
export const AreaInfo = styled.div`
    width: 100%;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
export const AreaMoreInfo = styled.div`
    display: flex;
    justify-content: space-between;

`;
export const AreaInfoDescription = styled.div`
    > div {
        width: 95%;
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid rgba(77, 77, 155, 0.2);
        border-radius: 5px;


        select {
            width: 45px;
            height: 35px;
            outline: none;
            border: none;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;

            background-color: #eee;
        }
    }

    button {
        width: 200px;
        margin-top: 1.2rem;
        border: none;
        border-radius: 5px;
        padding: 1rem;
        background-color: #444AAA;
        color: #FFF;

        cursor: pointer;
        font-weight: bold;
        transition: all 1s ease;

        &:hover {
            background-color: #44DD;
        }
    }
`;
export const AreaFormPayment = styled.div`
   width: 50%;
   box-shadow: 2px 2px 15px #000;
   padding: 10px 15px;
   border-radius: 8px;

   h3 {
       margin-bottom: 1rem;
   }

   button {
       padding: 10px 1.5rem;
       margin-bottom: 1rem;
       background: green;
       color: #fff;

       border-radius: 8px;
       border: none;

       display: flex;
       align-items: center;
       gap: 1rem;
    }
    p {
        margin-bottom: .5rem;
    }
`;

export const ContainerCardsIcons = styled.div`
    margin-bottom: 1rem;
    display: flex;
    gap: 1rem;
`;
export const AreaMercadoPago = styled.div`
    margin-bottom: 1rem;
    p {
        margin-bottom: 1rem;
    }
`;
export const AreaDebito = styled.div`
    margin-bottom: 1rem;
    p {
        margin-bottom: .5rem;
    }
`;
export const AreaPix = styled.div`
    margin-bottom: 1rem;
    p {
        margin-bottom: 1rem;
    }
`;
export const AreaBoleto = styled.div`
    margin-bottom: 1rem;
    p {
        margin-bottom: 1rem;
    }
`;

export const AreaRegister = styled.div`
      
    background-color: #fff3cd;
    border-color: #ffecb5;
    border-radius: 8px;
    padding: 5px 10px;
    width: 90%;
    
    h5 {
        font-size: 1rem;
        font-weight: 300;
    }

    a {
        text-decoration: none;
        font-size: 1rem;
        color: #664d03;
    }
        
`;
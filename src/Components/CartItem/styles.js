import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom: 1rem;
`;
export const Content = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 70px;
        height: 70px;
    }

    button {
        border: none;
        background-color: transparent;
        
    }
`;

export const ContentTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    h3 {
        font-weight: 500;
    }
`;
export const ContentQuantity = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    border: 1px solid #DDD;
    padding: 0 10px;
    margin-bottom: 1rem;
    margin-top: 1rem;

    button {
        font-size: 1.5rem;
        cursor: pointer;
        color: #00F;
       
        &:nth-child(1) {
            color: ${props => props.mode <= 1 ? '#00F' : '#DDD'};
            cursor: ${props => props.mode <= 1 ? 'pointer' : 'auto'};
        }
    }
   
    
`;
export const ContentQtdMoreTotal = styled.div`
    
    > div {
        margin-bottom: 1rem;
    }
`;
export const Total = styled.div`
    width: 300px;
    font-size: 2rem;
    display: flex;
    justify-content: center;
`;
export const FinishPayment = styled.div`
  
`;

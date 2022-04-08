import styled from 'styled-components';

export const Container = styled.div`
    box-shadow: 1px 1px 15px rgba(0,0,0,0.1);
    padding: .5rem 0;
    margin-bottom: 1rem;
    margin-top: -27px;
    
    h1 {
        padding: 0 15px;
    }
    form {
        width: 40%;
        margin: auto;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        gap: 1rem;

        .form-group {
            display: flex;
            flex-direction: column;

            input {
                padding: 0;
                margin-bottom: 10px;
                border-left: none;
                border-right: none;
                border-top: none;
                border-bottom: 2px solid rgba(77,77,155,0.2);
                outline: none;
                background-color: transparent;
                font-size: 1rem;

                &:focus ~ label,
                &:valid ~ label {
                    margin-top: -30px;
                    font-size: 13px;
                    color: #444DDD;
                }
                    
            }

            label {
                position: absolute;
                margin-top: -10px;
                padding: 10px 0;
                font-size: 16px;
                pointer-events: none;
                background-color: transparent;
                transition: .5s;
                color: rgba(77,77,155,0.8);
            }

        }

        label {
            display: flex;
            p {
                border: 1px solid #DDD;
                padding: 2px;
                background-color: #DDD;
                border-radius: 5px;
                font-size: 12px;
            }
        }

        textarea {
            resize: none;
            padding: 5px;
            outline: none;

            border: 2px solid rgba(77,77,155,0.2);
        }
        
    }
`;

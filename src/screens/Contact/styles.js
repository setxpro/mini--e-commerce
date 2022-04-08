import styled from 'styled-components';

export const Container = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    padding: 2rem 0;
    margin-bottom: 1.9rem;
    margin-top: 1rem;
    form {
        width: 40%;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .form-group {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;

            input {
                padding: 0;
                margin-bottom: 10px;
                border-left: none;
                border-right: none;
                border-top: none;
                border-bottom: 2px solid rgba(0,0,0,0.3);
                outline: none;
                background-color: transparent;
                font-size: 1rem;

                &:focus ~ label {
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
            }

        }

        textarea {
            resize: none;
            padding: 5px;
            outline: none;
        }
        
        button {
            width: 30%;
            padding: 5px 0;
            border-radius: 8px;
            border: 1px solid blue;
            cursor: pointer;
        }
        
    }
`;

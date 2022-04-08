import styled from 'styled-components';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    background-color: #444DDD;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
`;
export const InfoArea = styled.div`
    display: flex;
    gap: 2rem;

    p {
        color: #fff;
    }
`;
export const SocialArea = styled.div`
        display: flex;
        gap: 2rem;
       
        a {
            text-decoration: none;
        }
`;

// Icons

export const FacebookI = styled(FaFacebookF)`
    color: #fff;
    font-size: 1.2rem;
`;

export const InstagramI = styled(FaInstagram)`
    color: #fff;
    font-size: 1.2rem;
`;

export const LinkedinI = styled(FaLinkedinIn)`
    color: #fff;
    font-size: 1.2rem;
`;

export const TwitterI = styled(FaTwitterSquare)`
    color: #fff;
    font-size: 1.2rem;
`;

export const MailI = styled(AiOutlineMail)`
    color: #fff;
    font-size: 1.2rem;
`;


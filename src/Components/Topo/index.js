import { Layout } from '../../Styles/Layout/styles';
import * as C from './styles';
import * as Icon from './styles';


export const Topo = () => {
    return (
            <C.Container>
                <C.InfoArea>
                    <p>+55 21 966077757</p>
                    <p>@artedosSonhos</p>
                 </C.InfoArea>
                <C.SocialArea>
                    <a href=""><C.FacebookI/></a>
                    <a href=""><Icon.InstagramI/></a>
                    <a href=""><Icon.LinkedinI/></a>
                    <a href=""><Icon.TwitterI/></a>
                    <a href=""><Icon.MailI/></a>
                </C.SocialArea>
            </C.Container>
    );
}
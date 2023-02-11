import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import KeyWordsDiv from './KeyWordsDiv';

const Fondation = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
height: 97vh;

font-family: 'Montserrat';
`

const QASystemFrame = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


width: 420px;
height: 672px;
box-shadow: 1px 1px 3px 3px lightgrey;
border-radius: 20px;
overflow-y: scroll;

padding-left: 15px;
`

const Header = styled.h1`
font-size: 23px;
font-weight: 600;
text-align: left;
align-self: start;
padding-left: 40px;
`

export default function QASystem() {
    return(
        <Fondation>
            <QASystemFrame>
                <Header>Частые вопросы</Header>
                {
                    articles.map(elem => elem.popular ? (
                        <MainArticleButton header={elem.title} paragraph={elem.mainText1}/>
                    ) : <></>) }  

                <KeyWordsDiv/>
            </QASystemFrame>
        </Fondation>
    );
};
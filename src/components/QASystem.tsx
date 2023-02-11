import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import KeyWordsDiv from './KeyWordsDiv';
import { adpt } from '../adaptive';

const QASystemFrame = styled.div`
display: flex;
flex-direction: column;
align-items: center;

position: absolute;
right: 0;
bottom: 10px;

font-family: 'Montserrat';
width: ${adpt(420)}px;
height: ${adpt(672)}px;
padding-left: 15px;
box-shadow: 1px 1px 3px 3px lightgrey;
border-radius: 20px;
overflow-y: scroll;
`

const Header = styled.h1`
font-size: 23px;
font-weight: SemiBold;
text-align: left;
align-self: start;
padding-left: 40px;
`

export default function QASystem() {
    return(
            <QASystemFrame>
                <Header>Частые вопросы</Header>
                {
                articles.map(elem => elem.popular ? (
                    <MainArticleButton header={elem.title} paragraph={elem.mainText1}/>
                ) : <></>) }  

                <KeyWordsDiv/>
            </QASystemFrame>
        
    );
};
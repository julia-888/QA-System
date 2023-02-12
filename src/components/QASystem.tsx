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
bottom: ${adpt(10)}px;

font-family: 'Montserrat';
width: ${adpt(420)}px;
height: ${adpt(672)}px;
padding-left: ${adpt(15)}px;
box-shadow: ${adpt(1)}px ${adpt(1)}px ${adpt(3)}px ${adpt(3)}px lightgrey;
border-radius: ${adpt(20)}px;
overflow-y: scroll;
`

const Header = styled.h1`
font-size: ${adpt(23)}px;
font-weight: SemiBold;
text-align: left;
align-self: start;
padding-left: ${adpt(40)}px;
margin: ${adpt(27)}px 0 ${adpt(35)}px 0;
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
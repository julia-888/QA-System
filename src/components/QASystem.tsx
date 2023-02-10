import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { topArticles } from '../data';

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`
const Header = styled.h1`
font-size: 23px;
font-weight: 600;
text-align: left;
padding-left: 40px;
`

export default function QASystem() {
    return(
        <div className='QASystem'>
            <div className='QASystemFrame'>
                <Header>Частые вопросы</Header>
                {
                    topArticles.map(elem => (
                        <MainArticleButton header={elem.header} paragraph={elem.paragraph}/>
                    ))
                }        
            </div>
        </div>
    );
};
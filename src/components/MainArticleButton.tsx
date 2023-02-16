import styled from 'styled-components'
import { IArticle } from '../models';
import { adpt } from '../adaptive';

// Синий блок
const MainArticleButtonDiv = styled.div`
box-sizing: border-box;
width: ${adpt(385)}px;
margin-top: ${adpt(25)}px;
padding: ${adpt(15)}px;
padding-right: ${adpt(40)}px;
border-radius: ${adpt(15)}px;
background: linear-gradient(150deg, #5B7095 30%, #8BA1C8 97%, #5B7095);
color: white;
`

// Заголовок статьи на синем блоке
const MainArticleButtonDivHeader = styled.h1`
white-space: pre-wrap;
font-size: ${adpt(19)}px;
font-weight: 600;
margin: 0;
`

// Подзаголовок статьи на синем блоке
const MainArticleButtonDivPar = styled.p`
font-size: ${adpt(17)}px;
font-weight: normal;
margin: ${adpt(15)}px ${adpt(0)}px ${adpt(7)}px ${adpt(0)}px;
hyphens: auto;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

const MainArticleButton = ({header, paragraph}: {header: string, paragraph: string}) => {
    return(
        <MainArticleButtonDiv>
            <MainArticleButtonDivHeader>{header}</MainArticleButtonDivHeader>
            <MainArticleButtonDivPar>{paragraph}</MainArticleButtonDivPar>
        </MainArticleButtonDiv>
    );
};

export default MainArticleButton;
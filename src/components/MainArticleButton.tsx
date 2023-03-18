import styled from 'styled-components'
import { IArticle } from '../dataForArticles';
import { adpt } from '../adaptive';

type MainArticleButtonProps = {
    openAndCloseArticle: (articleID: number) => void;
    header: string;
    paragraph: string;
    i: number;
};

const MainArticleButton = ({openAndCloseArticle, header, paragraph, i}: MainArticleButtonProps) => {
    return(
        <MainArticleButtonDiv onClick={ () => {
            openAndCloseArticle(i);
        }}>
            <MainArticleButtonHeader>{header}</MainArticleButtonHeader>
            <MainArticleButtonPar>{paragraph}</MainArticleButtonPar>
        </MainArticleButtonDiv>
    );
};
export default MainArticleButton;

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
cursor: pointer;
`

// Заголовок статьи на синем блоке
const MainArticleButtonHeader = styled.h1`
white-space: pre-wrap;
font: ${adpt(19)}px 'Montserrat-SemiBold';
margin: 0;
`

// Подзаголовок статьи на синем блоке
const MainArticleButtonPar = styled.p`
font: ${adpt(17)}px 'Montserrat-Regular';
margin: ${adpt(15)}px ${adpt(0)}px ${adpt(7)}px ${adpt(0)}px;
hyphens: auto;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
`

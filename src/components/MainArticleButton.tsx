import styled from 'styled-components'
import { IArticle } from '../models';
import { adpt } from '../adaptive';

const MainArticleButtonDiv = styled.div`
box-sizing: border-box;
margin-bottom: ${adpt(25)}px;
padding: ${adpt(15)}px;
padding-right: ${adpt(40)}px;
width: ${adpt(385)}px;
border-radius: ${adpt(15)}px;
background: linear-gradient(150deg, #5B7095 30%, #8BA1C8 97%, #5B7095);
`

const MainArticleButtonDivHeader = styled.h1`
color: white;
white-space: pre-wrap;
word-break: normal;
font-size: ${adpt(19)}px;
font-weight: SemiBold;
margin: 0;
`

const MainArticleButtonDivPar = styled.p`
color: white;
font-size: ${adpt(17)}px;
font-weight: Regular;
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
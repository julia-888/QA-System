import styled from 'styled-components'
import { IArticle } from '../models';


const MainArticleButtonDiv = styled.div`
box-sizing: border-box;
margin-bottom: 25px;
padding: 15px;
padding-right: 40px;
width: 385px;
border-radius: 15px;
background: linear-gradient(150deg, #5B7095 30%, #8BA1C8 97%, #5B7095);
`

const MainArticleButtonDivHeader = styled.h1`
color: white;
white-space: pre-wrap;
word-break: normal;
font-size: 19px;
font-weight: SemiBold;
`

const MainArticleButtonDivPar = styled.p`
color: white;
font-size: 17px;
font-weight: Regular;
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
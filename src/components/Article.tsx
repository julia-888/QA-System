import { articles } from "../dataForArticles";
import { Div } from "./Div";
import styled from "styled-components";
import { adpt } from "../adaptive";
import { ReactComponent as BackIcon} from "../img/back.svg";
import { HeaderDiv } from './HeaderDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";
import { ReactComponent as CompressIcon} from "../img/compress.svg";
import { ReactComponent as ExtendIcon} from "../img/extend.svg";
import { ScrolledDiv } from "./ScrolledDiv";


type ArticleProps = {
    //Поле i здесь означает индекс статьи в массиве!!!
    i: number;
    big: boolean;
    openAndCloseArticle: (article: number) => void;
    extendScreen: (big: boolean) => void;
};

export default function Article({i, big, openAndCloseArticle, extendScreen}: ArticleProps) {
    return (
        <>
            <HeaderDiv big={big}>
                <Div>
                <button className='backButton'
                    onClick={() => {
                        openAndCloseArticle(-1);
                    }} >
                    <div className='imgBack'><BackIcon/></div>
                </button>
                <div className='headerText'>
                    {articles[i].title}
                </div>
                </Div>
                {
                    big ? (
                        <button className='backButton'
                            onClick={() => {
                                extendScreen(false);
                            }} >
                            <div className="imgCompress"><CompressIcon/></div>
                        </button>
                    ) : (
                        <button className='backButton'
                            onClick={() => {
                                extendScreen(true);
                            }} >
                            <div className="imgExtend"><ExtendIcon/></div>
                        </button>
                )}
            </HeaderDiv>
            <ContentDiv big={big}>
                <SubtitleForArticle>{articles[i].subtitle}</SubtitleForArticle>                
                {
                    articles[i].content.map(contentElem => 
                        (
                            contentElem.type == 'text' ?
                            (<p>{contentElem.content}</p>) : 
                            contentElem.type == 'img' ?
                            (<div>Картинка!!!</div>) :
                            contentElem.type == 'tezis' ?
                            (<div>Тезис</div>) : (<></>)
                        ))
                }
                <h1>{i}</h1>
            </ContentDiv>
            
        </>
    );
}

const SubtitleForArticle = styled.div`
    font: 300 ${adpt(17)}px 'Montserrat';
`

interface ContentDivProps {
    big: boolean;
};

const ContentDiv = styled(ScrolledDiv)<ContentDivProps>`
    flex-direction: column;
    padding-top: ${adpt(15)}px;
    padding-right: ${p => p.big? adpt(93) : adpt(40)}px;
    padding-bottom: ${adpt(30)}px;
    padding-left: ${p => p.big? adpt(75) : adpt(15)}px;
`

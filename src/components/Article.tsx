import { articles } from "../dataForArticles";
import { Div } from "./Div";
import styled from "styled-components";
import { adpt } from "../adaptive";
import { ReactComponent as BackIcon} from "../icons/back.svg";
import { HeaderDiv } from './HeaderDiv';
import { ReactComponent as MoveIcon} from "../icons/move.svg";
import { ReactComponent as CompressIcon} from "../icons/compress.svg";
import { ReactComponent as ExtendIcon} from "../icons/extend.svg";
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
            <HeaderDiv big={big} isArticle={true}>
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
                            contentElem.type == 'text' ?
                            (<p>{contentElem.content}</p>) : 
                            contentElem.type == 'img' ?
                            (<Image big={big}>
                                <img className="image" src={require(`../img/${contentElem.content}`)} alt="" />
                            </Image>) :
                            contentElem.type =='tezis' ?
                            (<Tezis big={big}>{contentElem.content}</Tezis>)
                            : (<></>)  
                        )
                }
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
    box-sizing: border-box;
    padding-top: ${adpt(15)}px;
    padding-right: ${p => p.big? adpt(108) : adpt(30)}px;
    padding-bottom: ${adpt(30)}px;
    padding-left: ${p => p.big? adpt(75) : adpt(30)}px;
`

const Image = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(335)}px;
    height: ${adpt(219)}px;
    text-align: center;
    overflow-y: ${p => p.big && `hidden`};
    
    .image {
        width: 100%;
    }
`

const Tezis = styled.div<ContentDivProps>`
    border-left: 3px solid #5E7398;
    padding-left: ${adpt(20)}px;
    width: ${p => p.big ? adpt(580) : adpt(335)}px;
    align-self: center;
`
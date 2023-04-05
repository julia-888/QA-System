import { articles } from "../dataForArticles";
import { Div } from "./Div";
import styled from "styled-components";
import { adpt } from "../adaptive";
import { ReactComponent as BackIcon} from "../icons/back.svg";
import { HeaderDiv } from './HeaderDiv';
import { ReactComponent as MoveIcon} from "../icons/move.svg";
import { ReactComponent as CompressIcon} from "../icons/compress.svg";
import { ReactComponent as ExtendIcon} from "../icons/extend.svg";
import { ReactComponent as LinkIcon} from "../icons/link.svg";
import { ScrolledDiv } from "./ScrolledDiv";
import { KeyWord } from "./KeyWord";
import { ArticleButton } from "./Search";
import { FilterArticlesByKeys } from "../functions/FilterArticlesByKeys";
import { ReactComponent as OpenIcon} from "../icons/open.svg";
import { ShowSimilarArticles } from "../functions/ShowSimilarArticles";
import { Tag } from "./Tag";
import { useEffect } from 'react';
import { useDrag } from "react-use-gesture";
import { SelectableText } from "./SelectableText";

type ArticleProps = {
    //Поле i здесь означает индекс статьи в массиве!!!
    i: number;
    big: boolean;
    openAndCloseArticle: (articleID: number, word?: string, fromTag?: boolean, fromArticle?: number, byButton? : boolean) => void;
    extendScreen: (big: boolean) => void;
    setpositionOfWindow: ({x, y}: {x: number, y: number}) => void;
    setClickedTag: (clickedTag: [string, number]) => void;
    artHeader?: number;
};

export default function Article({i, big, openAndCloseArticle, extendScreen, setpositionOfWindow, setClickedTag, artHeader}: ArticleProps) {
    return (
        <div>
            <ContentDiv big={big} artHeader={artHeader}>
                {articles[i].note != undefined && (<Note big={big}>{articles[i].note}</Note>)}
                <Subtitle big={big}>{articles[i].subtitle}</Subtitle>
                {
                    articles[i].content.map(contentElem => 
                            contentElem.type == 'text' ?
                                (<Text big={big}>{contentElem.content}</Text>) : 
                            contentElem.type == 'img' ?
                                (<Image big={big}>
                                    <div className='imgDiv'><img className="image" src={require(`../img/${contentElem.content}`)} alt="" /></div>
                                    {contentElem.imgLabel != undefined && (<div className="imgLabel">{contentElem.imgLabel}</div>)}
                                </Image>) :
                            contentElem.type =='tezis' ?
                                (<Tezis big={big}>{contentElem.content}</Tezis>) :
                            contentElem.type == 'link' ?
                                (<Link big={big}>
                                    <a href={contentElem.content} target='_blank' className="link">
                                        <div className="imgLink"><LinkIcon /></div>
                                        <div className="textLink">{contentElem.linkText}</div>
                                    </a>
                                </Link>) :
                            contentElem.type == 'list' ?
                                contentElem.listType == 'ol' ? (
                                    <OrderedList >

                                    </OrderedList>
                                ) : (
                                    <UnorderedList >

                                    </UnorderedList>
                                )
                            : (<></>)  
                        )
                }
                
                <SimilarQuestionsDiv big={big}>
                        <hr className="hr" />
                        <Subtitle className="similarTitle" big={big}>Похожие вопросы:</Subtitle>
                        {
                            ShowSimilarArticles(i).slice(0,3).map(article => (
                                <ArticleButton big={big} className='question' similar={true}
                                    onClick={() => {
                                        openAndCloseArticle(articles.indexOf(article), undefined, undefined, i, true);
                                    }}>
                                    <div className="articleTitle">{article.title}</div>
                                </ArticleButton>
                            ))
                        }
                    
                </SimilarQuestionsDiv>

                <TagsDiv big={big}>
                    {
                        articles[i].keys.map(tag => 
                            <Tag articleNumber={i} clicked={false} word={tag} openAndCloseArticle={openAndCloseArticle} setClickedTag={setClickedTag} />
                        )
                    }
                </TagsDiv>
            </ContentDiv>
        </div>
    );
}

interface ContentDivProps {
    big: boolean;
    artHeader?: number;
};

const Subtitle = styled(SelectableText)<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    font: ${adpt(18)}px 'Montserrat-Medium';
    line-height: 1.75;
    margin-top: ${adpt(27)}px;
`

const Note = styled(SelectableText)<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    font: ${adpt(17)}px 'Montserrat-Light';
    line-height: 1.5;
`

const ContentDiv = styled(ScrolledDiv)<ContentDivProps>`
    margin: 0 ${p => p.big? adpt(95) : adpt(30)}px 0 ${p => p.big? adpt(75) : adpt(30)}px;
    line-height: 1.75;
    width: ${p => p.big? adpt(743) : adpt(385)}px;
    max-height: ${p => p.artHeader ? (p.big? adpt(714) - p.artHeader : adpt(656) - p.artHeader) : adpt(680)}px;
`

const Text = styled(SelectableText)<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.75;
    margin-top: ${adpt(10)}px;
`

const Image = styled(SelectableText)<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    margin: ${adpt(33)}px 0;

    .imgDiv {
        height: ${p => p.big && adpt(219)}px;
        overflow: hidden;
        text-align: center;
    }

    .image {
        width: 100%;
        height: auto;

        ::-moz-selection{
            background-color:#e9e8e8;
            color:#191919
        }
        ::selection{
            background-color:#e9e8e8;
            color:#191919
        }
    }

    .imgLabel {
        font: ${adpt(15)}px 'Montserrat-Regular';
        line-height: 1.5;
        color: #707070;
        margin-top: ${p => p.big? adpt(8) : adpt(4)}px;

        ::-moz-selection{
            background-color:#e9e8e8;
            color:#191919
        }
        ::selection{
            background-color:#e9e8e8;
            color:#191919
        }
    }

`

const Tezis = styled(SelectableText)<ContentDivProps>`
    border-left: ${adpt(3)}px solid #5E7398;
    padding: ${adpt(20)}px 0 ${adpt(20)}px ${adpt(20)}px;
    margin: ${adpt(33)}px auto ${adpt(40)}px auto;
    width: ${p => p.big ? adpt(580) : adpt(345)}px;
    line-height: 1.5;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.5;
`

const UnorderedList = styled.ul`
    
`

const OrderedList = styled.ol`
    
`

const TagsDiv = styled(Div)<ContentDivProps>`
    flex-wrap: wrap;
    padding-top: ${p => p.big && adpt(13)}px;
`

const Link = styled.div<ContentDivProps>`
    margin-top: ${p => p.big ? adpt(15) : adpt(10)}px;
    width: ${p => p.big? adpt(656) : adpt(313)}px;
    user-select: none;
    .link {
        font: ${adpt(17)}px 'Montserrat-Regular';
        line-height: ${adpt(30)}px;
        text-decoration: none;
        color: black;
        display: flex;

        .imgLink{
            height: ${adpt(17)}px;
            width: ${adpt(17)}px;
            flex-shrink: 0;
            /* задать размеры */
                svg {
                    width: 100%;
                    height: 100%;
                }
        }

        .textLink {
            margin-left: ${adpt(10)}px;
            
        }
    }
`

const SimilarQuestionsDiv = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(580) : adpt(375)}px;
    padding-top: ${p => p.big? adpt(60) : adpt(34)}px;
    .hr {
        width: ${p => p.big ? adpt(519) : adpt(370)}px;
        background-color: #707070;
        color: #707070;
        border: none;
        height: ${adpt(1)}px;
        margin: 0;
    }

    .question {
        /* margin: 0 0 ${adpt(20)}px 0; */
    }

    .similarTitle {
        margin: ${p => p.big? adpt(25) : adpt(18)}px 0 ${adpt(15)}px 0;
    }

    margin: 0 0 ${p => p.big ? adpt(40) : adpt(20)}px 0;

    
`
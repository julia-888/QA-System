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

type ArticleProps = {
    //Поле i здесь означает индекс статьи в массиве!!!
    i: number;
    big: boolean;
    openAndCloseArticle: (article: number) => void;
    extendScreen: (big: boolean) => void;
    setpositionOfWindow: ({x, y}: {x: number, y: number}) => void;

};

export default function Article({i, big, openAndCloseArticle, extendScreen, setpositionOfWindow}: ArticleProps) {
    const bindpositionOfWindow = useDrag((params) => {
        setpositionOfWindow({
        x: params.offset[0],
        y: params.offset[1],
        });
    });

    let artHeader = document.getElementById('artHeader')?.offsetHeight;

    useEffect(() => {
        artHeader = document.getElementById('artHeader')?.offsetHeight;
        console.log(artHeader);
    }, [artHeader])
    

    return (
        <div>
            <HeaderDiv big={big} isArticle={true} {...bindpositionOfWindow()} id='artHeader'>
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
            
            <ContentDiv big={big} artHeader={artHeader}>
                {articles[i].note != undefined && (<Note big={big}>{articles[i].note}</Note>)}
                <Subtitle big={big}>{articles[i].subtitle}</Subtitle>
                {
                    articles[i].content.map(contentElem => 
                            contentElem.type == 'text' ?
                                (<Text big={big}>{contentElem.content}</Text>) : 
                            contentElem.type == 'img' ?
                                (<Image big={big}>
                                    <img className="image" src={require(`../img/${contentElem.content}`)} alt="" />
                                </Image>) :
                            contentElem.type =='tezis' ?
                                (<Tezis big={big}>{contentElem.content}</Tezis>) :
                            contentElem.type == 'link' ?
                                (<Link big={big}>
                                    <a href={contentElem.content} target='_blank' className="link">
                                        <div className="imgLink"><LinkIcon /></div>
                                        <div className="textLink">{contentElem.linkText}</div>
                                    </a>
                                </Link>)
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
                                        openAndCloseArticle(articles.indexOf(article));
                                    }}>
                                    <div className="articleTitle">{article.title}</div>
                                </ArticleButton>
                            ))
                        }
                    
                </SimilarQuestionsDiv>

                <TagsDiv>
                    {
                        articles[i].keys.map(tag => 
                            <Tag articleNumber={i} clicked={false} word={tag} openAndCloseArticle={openAndCloseArticle} />
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

const Subtitle = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    font: ${adpt(18)}px 'Montserrat-Medium';
    line-height: 1.75;
    margin-top: ${adpt(35)}px;
`

const Note = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    font: ${adpt(17)}px 'Montserrat-Light';
    line-height: 1.5;
`

const ContentDiv = styled(ScrolledDiv)<ContentDivProps>`
    padding: 0 0 ${adpt(30)}px 0;
    margin: 0 ${p => p.big? adpt(95) : adpt(30)}px 0 ${p => p.big? adpt(75) : adpt(30)}px;
    line-height: 1.75;
    width: ${p => p.big? adpt(743) : adpt(385)}px;
    max-height: ${p => p.artHeader ? (p.big? adpt(680) - p.artHeader : adpt(622) - p.artHeader) : adpt(680)}px;
`

const Text = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.75;
    margin-top: ${adpt(20)}px;
`

const Image = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(365)}px;
    height: ${p => p.big && 219}px;
    text-align: center;
    margin: ${adpt(40)}px 0;
    overflow: hidden;

    .image {
        width: 100%;
        height: auto;
    }

`

const Tezis = styled.div<ContentDivProps>`
    border-left: 3px solid #5E7398;
    padding: ${adpt(20)}px 0 ${adpt(20)}px ${adpt(20)}px;
    margin: ${adpt(40)}px auto ${adpt(45)}px auto;
    width: ${p => p.big ? adpt(580) : adpt(345)}px;
    line-height: 1.5;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.5;
`

const TagsDiv = styled(Div)`
    flex-wrap: wrap;
`

const Link = styled.div<ContentDivProps>`
    margin-top: ${p => p.big ? adpt(20) : adpt(15)}px;
    width: ${p => p.big? adpt(656) : adpt(313)}px;
    .link {
        font: ${adpt(17)}px 'Montserrat-Regular';
        /* line-height: 1.75; */
        line-height: ${adpt(30)}px;
        text-decoration: none;
        color: black;
        display: flex;

        .imgLink{
            height: ${adpt(17)}px;
            width: ${adpt(17)}px;
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
    padding-top: ${p => p.big? adpt(60) : adpt(36)}px;
    .hr {
        width: ${p => p.big ? adpt(519) : adpt(370)}px;
        background-color: #707070;
        color: #707070;
        border: none;
        height: 1px;
        margin: 0;
    }

    .question {
        /* margin: 0 0 ${adpt(20)}px 0; */
    }

    .similarTitle {
        margin: ${p => p.big? adpt(25) : adpt(22)}px 0 ${adpt(20)}px 0;
    }

    margin: 0 0 ${p => p.big ? adpt(40) : adpt(20)}px 0;

    
`
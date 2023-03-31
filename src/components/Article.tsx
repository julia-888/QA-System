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

    return (
        <div>
            <HeaderDiv big={big} isArticle={true} {...bindpositionOfWindow()}>
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
                {articles[i].note != undefined && (<Note>{articles[i].note}</Note>)}
                <Subtitle>{articles[i].subtitle}</Subtitle>
                {
                    articles[i].content.map(contentElem => 
                            contentElem.type == 'text' ?
                                (<Text>{contentElem.content}</Text>) : 
                            contentElem.type == 'img' ?
                                (<Image big={big}>
                                    <img className="image" src={require(`../img/${contentElem.content}`)} alt="" />
                                </Image>) :
                            contentElem.type =='tezis' ?
                                (<Tezis big={big}>{contentElem.content}</Tezis>) :
                            contentElem.type == 'link' ?
                                (<Link>
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
                        <Subtitle className="similarTitle">Похожие вопросы:</Subtitle>
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


const Subtitle = styled.div`
    font: ${adpt(18)}px 'Montserrat-Medium';
    line-height: 1.75;
    margin-bottom: ${adpt(30)}px;
`

const Note = styled.div`
    font: ${adpt(17)}px 'Montserrat-Light';
    /* line-height: 1.75; */
    margin-bottom: ${adpt(35)}px;
`

interface ContentDivProps {
    big: boolean;
};

const ContentDiv = styled(ScrolledDiv)<ContentDivProps>`
    padding: ${adpt(15)}px ${p => p.big? adpt(95) : adpt(30)}px ${adpt(30)}px ${p => p.big? adpt(75) : adpt(10)}px;
    line-height: 1.75;
    width: ${p => p.big? adpt(650) : adpt(380)}px;
    max-height: ${p => p.big? adpt(650): adpt(540)}px;
`

const Text = styled.div`
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.75;
    margin-bottom: ${adpt(30)}px;
`

const Image = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(642) : adpt(315)}px;
    height: ${p => p.big && 219}px;
    text-align: center;
    margin-bottom: ${adpt(15)}px;
    overflow: hidden;

    .image {
        width: 100%;
        height: auto;
    }

`

const Tezis = styled.div<ContentDivProps>`
    border-left: 3px solid #5E7398;
    padding: ${adpt(20)}px 0 ${adpt(20)}px ${adpt(20)}px;
    margin: 0 auto ${adpt(25)}px auto;
    width: ${p => p.big ? adpt(580) : adpt(335)}px;
    line-height: 1.5;
    font: ${adpt(18)}px 'Montserrat-Regular';
    line-height: 1.5;
`

const TagsDiv = styled(Div)`
    
    flex-wrap: wrap;
`

const Link = styled.div`
    margin-bottom: ${adpt(10)}px;
    .link {
        font: ${adpt(17)}px 'Montserrat-Regular';
        /* line-height: 1.75; */
        line-height: ${adpt(30)}px;
        text-decoration: none;
        color: black;
        display: flex;

        .imgLink{
            /* margin-right: ${adpt(10)}px; */
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
    .hr {
        width: ${p => p.big ? adpt(519) : adpt(350)}px;
        background-color: #707070;
        color: #707070;
        border: none;
        height: ${adpt(1)}px;
        margin: ${p => p.big ? adpt(60) : adpt(30)}px 0 ${p => p.big ? adpt(30) : adpt(20)}px 0;
    }

    .question {
        margin: 0 0 ${adpt(20)}px 0;
    }

    .similarTitle {
        margin-left: 5px;
    }

    margin: 0 0 ${adpt(40)}px 0;
    
`
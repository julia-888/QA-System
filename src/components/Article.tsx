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
import { KeyWord } from "./KeyWord";


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
                            (<Text>{contentElem.content}</Text>) : 
                            contentElem.type == 'boldText' ?
                            (<BoldText>{contentElem.content}</BoldText>) :
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

            <KeysDiv big={big}>
                {
                    articles[i].keys.map(keyWord => 
                        <KeyWord modifyclickedKeyWords={()=>{}} big={big} clicked={true} unclickable={true} word={keyWord}></KeyWord>
                    )
                }
            </KeysDiv>
        </>
    );
}

const SubtitleForArticle = styled.div`
    font: 300 ${adpt(17)}px 'Montserrat';
    margin-bottom: ${adpt(35)}px;
`

interface ContentDivProps {
    big: boolean;
};

const ContentDiv = styled(ScrolledDiv)<ContentDivProps>`
    flex-direction: column;
    box-sizing: border-box;
    padding-top: ${adpt(15)}px;
    padding-right: ${p => p.big? adpt(95) : adpt(30)}px;
    padding-bottom: ${adpt(30)}px;
    padding-left: ${p => p.big? adpt(75) : adpt(30)}px;
    line-height: 1.5;
`

const Text = styled.div`
    font: 400 18px Montserrat;
    margin-bottom: ${adpt(30)}px;
`

const BoldText = styled.div`
    font: 600 18px Montserrat;
    margin-bottom: ${adpt(30)}px;
`

const Image = styled.div<ContentDivProps>`
    width: ${p => p.big ? adpt(682) : adpt(335)}px;
    height: ${adpt(500)}px;
    text-align: center;
    overflow-y: ${p => p.big && `hidden`};
    margin-bottom: ${adpt(45)}px;

    .image {
        width: 100%;
    }
`

const Tezis = styled.div<ContentDivProps>`
    border-left: 3px solid #5E7398;
    padding-left: ${adpt(20)}px;
    margin-bottom: ${adpt(25)}px;
    width: ${p => p.big ? adpt(580) : adpt(335)}px;
    align-self: center;
    line-height: 1.5;
    font: 500 18px Montserrat;
`

const KeysDiv = styled(Div)<ContentDivProps>`
    flex-direction: row;
    margin: ${adpt(10)}px ${p => p.big ? adpt(50) : adpt(30)}px;
    flex-wrap: wrap;

`
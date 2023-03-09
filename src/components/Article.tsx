import { articles } from "../dataForArticles";
import { Div } from "./Div";
import styled from "styled-components";
import { adpt } from "../adaptive";
import { ReactComponent as BackIcon} from "../img/back.svg";
import { HeaderDiv } from './HeaderDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";
import { ReactComponent as CompressIcon} from "../img/compress.svg";
import { ScrolledDiv } from "./ScrolledDiv";


type ArticleProps = {
    //Поле i здесь означает индекс статьи в массиве!!!
    i: number;
    big: boolean;
    openAndCloseArticle: (article: number) => void;
};

export default function Article({i, big, openAndCloseArticle}: ArticleProps) {
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
                <div className="imgMove"><CompressIcon/></div>
            </HeaderDiv>
            <ContentDiv>
                {/* {
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
                <p>{i}</p> */}
            </ContentDiv>
        </>
    );
}

const ContentDiv = styled(ScrolledDiv)`

`
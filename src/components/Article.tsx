import { articles } from "../dataForArticles";
import { Div } from "./Div";
import styled from "styled-components";
import { adpt } from "../adaptive";
import { ReactComponent as BackIcon} from "../img/back.svg";
import { HeaderDiv } from './HeaderDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";
import { ReactComponent as CompressIcon} from "../img/compress.svg";


type ArticleProps = {
    //Поле id здесь означает индекс статьи в массиве!!!
    id: number;
    big: boolean;
    openAndCloseArticle: (article: number) => void;
};

export default function Article({id, big, openAndCloseArticle}: ArticleProps) {
    return (
        <div>
            <HeaderDiv big={big}>
                    
                        <button className='backButton'
                            onClick={() => {
                                openAndCloseArticle(-1);
                            }} >
                            <div className='imgBack'><BackIcon/></div>
                        </button>
                        <div className='headerText'>
                            {articles[id].title}
                        </div>
                    
                    <div className="imgMove"><CompressIcon/></div>
                {/* <button className='backButton'
                    onClick={() => {
                        openAndCloseArticle(-1) }} >
                    <div className='image'><BackIcon/></div>
                </button> */}
            </HeaderDiv>
            <ContentDiv>

            </ContentDiv>
        </div>
    );
}

const ContentDiv = styled.div`

`
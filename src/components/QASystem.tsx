import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import { adpt } from '../adaptive';
import Search from './Search';
import { Div } from './Div';
import { ScrolledDiv } from './ScrolledDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";
import { useState, useEffect } from 'react';

export default function QASystem() {
    // Переменные, отвечающая за изменение размеров окна
    const [height, setHeight] = useState(672);
    const [width, setWidth] = useState(420);
    const [big, setBig] = useState(false);

    // Функция изменения размеров экрана
    const extendScreen = (big: boolean) => {
        console.log(big);
        if (big) {
            setHeight(adpt(730));
            setWidth(adpt(850));
            setBig(true);
        } else {
            setHeight(adpt(672));
            setWidth(adpt(420));
            setBig(false);            
        }
    }    

    return(
        <QASystemFrame height={height} width={width}>
            <HeaderDiv>
                <div>Частые вопросы</div>
                <div className="image"><MoveIcon/></div>
            </HeaderDiv>
            <ArticlesDiv>
                {   
                    !big && 
                        // Вывод трёх популярных статей
                        articles.map(elem => elem.popular ? (
                            <MainArticleButton header={elem.title} paragraph={elem.popular}/>
                        ) : <></>) 
                    
                }

                {/* Блок поиска */}
                <Search extendScreen={extendScreen} />
            </ArticlesDiv>
        </QASystemFrame>
        
    );  
};

interface QASystemFrameDims {
    width: number;
    height: number;
}

// Блок-родитель для всего приложения
const QASystemFrame = styled(Div)<QASystemFrameDims>`
    position: absolute;
    right: 0;
    bottom: ${adpt(10)}px;

    flex-direction: column;
    align-items: center;
    width: ${p => p.width}px;
    height: ${p => p.height}px;
    padding: ${adpt(27)}px ${adpt(8)}px 0 ${adpt(15)}px;
    margin: 0 ${adpt(10)}px ${adpt(10)}px 0;
    box-shadow: ${adpt(0)}px ${adpt(0)}px ${adpt(24)}px lightgrey;
    border-radius: ${adpt(20)}px;
`

// Заголовок страницы с элементом для перемещения окна
const HeaderDiv = styled(Div)`
    justify-content: space-between;
    width: ${adpt(360)}px;
    font-weight: 600;
    font-size: ${adpt(23)}px;
    text-align: left;
    padding-left: ${adpt(40)}px;
    margin-bottom: ${adpt(10)}px;
    .image{
        height: ${adpt(25)}px;
        width: ${adpt(15)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
`

// Основной блок с контентом
const ArticlesDiv = styled(ScrolledDiv)`
    flex-direction: column;
    align-items: center;
    width: ${adpt(420)}px;
    height: ${adpt(610)}px;
`

import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import { adpt } from '../adaptive';
import MiniSearch from './MiniSearch';
import { Div } from './Div';
import { ScrolledDiv } from './ScrolledDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";
import { useState, useEffect } from 'react';
import Search from './Search';
import { ReactComponent as BackIcon} from "../img/back.svg";

export default function QASystem() {
    // Переменные, отвечающая за изменение размеров окна
    const [height, setHeight] = useState(adpt(672));
    const [width, setWidth] = useState(adpt(420));

    // Переменная отвечающая за отображение контента в зависимости от размеров окна. НЕ изменяется вне функции extendScreen!!!
    const [big, setBig] = useState(false);
    const [header, setHeader] = useState('Частые вопросы')

    // Функция изменения размеров экрана
    const extendScreen = (big: boolean) => {
        console.log(big);
        if (big) {
            setHeight(adpt(730));
            setWidth(adpt(850));
            setBig(true);
            setHeader('Поиск по вопросам');
        } else {
            setHeight(adpt(672));
            setWidth(adpt(420));
            setBig(false);
            setHeader('Частые вопросы');
        }
    }    

    return(
        <QASystemFrame height={height} width={width}>
            <HeaderDiv height={height} width={width}>
                <Div>
                {
                    big &&
                    <button className='backButton'
                            onClick={() => {
                                extendScreen(false);
                    }} >
                        <div className='image'><BackIcon/></div>
                    </button>
                }
                <div className='headerText'>
                    {header}
                </div>
                </Div>
                <div className="image"><MoveIcon/></div>
            </HeaderDiv>
            <ArticlesDiv height={height} width={width}>
                {   
                    !big && 
                        // Вывод трёх популярных статей
                        articles.map(elem => elem.popular ? (
                            <MainArticleButton header={elem.title} paragraph={elem.popular}/>
                        ) : <></>)
                }
                {/* Блок поиска */}
                {
                    !big ? (
                        <MiniSearch extendScreen={extendScreen} />
                    ) : (
                        <Search extendScreen={extendScreen} />
                    )
                }
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
const HeaderDiv = styled(Div)<QASystemFrameDims>`
    /* flex-direction: row-reverse; */
    justify-content: space-between;
    width: ${p => p.width - adpt(25)}px;
    font-weight: 600;
    font-size: ${adpt(23)}px;
    text-align: left;
    margin-left: ${adpt(35)}px;
    margin-right: ${adpt(30)}px;
    margin-bottom: ${adpt(10)}px;
    .image{
        height: ${adpt(18)}px;
        width: ${adpt(18)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
    .headerText {
        margin-left: ${adpt(30)}px;
    }
    .backButton {
        background: none;
        border: none;
    }
`

// Основной блок с контентом
const ArticlesDiv = styled(ScrolledDiv)<QASystemFrameDims>`
    flex-direction: column;
    align-items: center;
    width: ${p => p.width}px;
    height: ${p => p.height}px;
`

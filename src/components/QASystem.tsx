import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../dataForArticles';
import { adpt } from '../adaptive';
import Search from './Search';
import { Div } from './Div';
import { ScrolledDiv } from './ScrolledDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";
import { useState, useEffect } from 'react';
import { ReactComponent as BackIcon} from "../img/back.svg";
import Article from './Article';

export default function QASystem() {
    // Нажатые ключевые слова
    const [clickedKeyWords, setclickedKeyWords] = useState<string[]>([]);
    
    // Функция, изменяющая список нажатых слов
    const modifyclickedKeyWords = (keyWord: string, clicked: boolean) => {
        clicked ?
        setclickedKeyWords([...clickedKeyWords, keyWord])
        :
        setclickedKeyWords([
            ...clickedKeyWords.slice(0, clickedKeyWords.indexOf(keyWord)),
            ...clickedKeyWords.slice(clickedKeyWords.indexOf(keyWord) + 1, clickedKeyWords.length)
        ]);
    }

    // Переменная, хранящая id открытой статьи. Когда значение -1, статья закрыта 
    const [articleOpenedID, setArticleOpenedID] = useState(-1);

    // Переменная, отвечающая за отображение контента в зависимости от размеров окна. НЕ изменяется вне функции extendScreen!!!
    const [big, setBig] = useState(false);
    //Значение самого верхнего заголовка окна
    const [header, setHeader] = useState('Частые вопросы')

    {/* Функция изменения контента:
        в зависимости от входного значения (true - расширить, false - сузить)
        изменяются размеры окна и переменные big и header, влияющие на контент */}
    const extendScreen = (big: boolean) => {
        if (big) {
            setBig(true);
            setHeader('Поиск по вопросам');
        } else {
            setBig(false);
            setHeader('Частые вопросы');
        }
    }

    // Функция открытия статьи с определённым id
    const openAndCloseArticle = (articleID: number) => {
        setArticleOpenedID(articleID);
    }

    return(
        <QASystemFrame big={big}>
            {
                articleOpenedID == -1 ? (
                    <>
                    <HeaderDiv big={big}>
                        <Div>
                        {   /* Если экран расширен, то появляется кнопка-стрелочка назад */
                            big &&
                            <button className='backButton'
                                onClick={() => {
                                    extendScreen(false);
                                }} >
                                <div className='imgBack'><BackIcon/></div>
                            </button>
                        }
                        <div className='headerText'>
                            {header}
                        </div>
                        </Div>
                        <div className="imgMove"><MoveIcon/></div>
                    </HeaderDiv>
                    <ArticlesDiv big={big}>
                        {   
                            !big && 
                                // Вывод трёх популярных статей (синие кнопки), если экран не расширен
                                articles.map(article => article.popular ? (
                                    <MainArticleButton header={article.title} paragraph={article.popular} id={article.id} openAndCloseArticle={openAndCloseArticle}/>
                                ) : <></>)
                        }
                        <Search extendScreen={extendScreen} 
                                big={big} 
                                openAndCloseArticle={openAndCloseArticle} 
                                clickedKeyWords={clickedKeyWords}
                                modifyclickedKeyWords={modifyclickedKeyWords} />
                    </ArticlesDiv>
                    </>
                ) : (
                    <Article id={ articleOpenedID } openAndCloseArticle={openAndCloseArticle} />
                )
            }
        </QASystemFrame>
    );  
};

interface QASystemFrameDims {
    big: boolean;
}

// Блок-родитель для всего приложения
const QASystemFrame = styled(Div)<QASystemFrameDims>`
    position: absolute;
    right: 0;
    bottom: ${adpt(10)}px;
    flex-direction: column;
    align-items: center;
    width: ${p => p.big? adpt(850) : adpt(420) }px;
    height: ${p => p.big? adpt(730): adpt(672)}px;
    padding: ${adpt(27)}px ${adpt(8)}px 0 0;
    margin: 0 ${adpt(10)}px ${adpt(10)}px 0;
    box-shadow: ${adpt(0)}px ${adpt(0)}px ${adpt(24)}px lightgrey;
    border-radius: ${adpt(20)}px;
`

// Заголовок страницы с элементом для перемещения окна
const HeaderDiv = styled(Div)<QASystemFrameDims>`
    justify-content: space-between;
    width: ${p => p.big ? adpt(850) - adpt(25) : adpt(420) - adpt(25)}px;
    font-weight: 600;
    font-size: ${adpt(23)}px;
    text-align: left;
    margin-left: ${adpt(35)}px;
    margin-right: ${adpt(30)}px;
    margin-bottom: ${adpt(10)}px;
    .imgBack{
        height: ${adpt(19)}px;
        width: ${adpt(12)}px;
        /* задать размеры */
        svg {
            width: 100%;
            height: 100%;
        }        
    }
    .imgMove{
        height: ${adpt(25)}px;
        width: ${adpt(15)}px;
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
        cursor: pointer;
        background: none;
        border: none;
    }
`

// Основной блок с контентом
const ArticlesDiv = styled(ScrolledDiv)<QASystemFrameDims>`
    flex-direction: column;
    align-items: center;
    width: ${p => p.big? adpt(850) : adpt(420)}px;
    height: ${p => p.big? adpt(730): adpt(672)}px;
`

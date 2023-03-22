import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../dataForArticles';
import { adpt } from '../adaptive';
import Search from './Search';
import { Div } from './Div';
import { ScrolledDiv } from './ScrolledDiv';
import { FilterArticlesByKeys } from '../functions/FilterArticlesByKeys';
import { HeaderDiv } from './HeaderDiv';
import { ReactComponent as MoveIcon} from "../icons/move.svg";
import { useState, useEffect } from 'react';
import { ReactComponent as BackIcon} from "../icons/back.svg";
import Article from './Article';

export default function QASystem() {
    // Нажатые ключевые слова
    const [clickedKeyWords, setclickedKeyWords] = useState<string[]>([]);

    // Переменная, хранящая i - индекс в массиве, открытой статьи. Когда значение -1, статья закрыта 
    const [articleOpenedID, setArticleOpenedID] = useState(-1);

    // Переменная, отвечающая за отображение контента в зависимости от размеров окна. НЕ изменяется вне функции extendScreen!!!
    const [big, setBig] = useState(false);

    // Переменная, показывающая каким было окно до открытия статьи. НЕ изменяется вне функции openAndCloseArticle!!!
    const [previosWasBig, setPreviosWasBig] = useState(false);

    // Значение самого верхнего заголовка окна
    const [header, setHeader] = useState('Частые вопросы');

    // Список отображаемых статей
    const [articlesShowed, setArticlesShowed] = useState(articles.slice(0, 4));

    // Функция открытия статьи с определённым i. Изменяет i открытой статьи, articleOpenedID
    const openAndCloseArticle = (articleID: number) => {
        //Если статья закрывается, то размер окна изменяется на тот, который был до открытия статьи.
        //Если статья открывается, то в переменную previousWasBig записывается значение big на момент открытия.
        if (articleID == -1) {
            extendScreen(previosWasBig);
        } else {
            setPreviosWasBig(big);
            extendScreen(true);
        }

        setArticleOpenedID(articleID);
    }
    
    //Функция, отображающая список статей в зависимости от нажатых ключевых слов
    useEffect(() => {
        big ? 
        setArticlesShowed(FilterArticlesByKeys(clickedKeyWords)) : 
        setArticlesShowed(FilterArticlesByKeys(clickedKeyWords).slice(0, 4))
        ;
    }, [big, clickedKeyWords])
    
    
    // Функция, изменяющая список нажатых слов. На вход подаётся слово и что произошло, т.е. "нажали"-"отжали". Затем изменяется список нажатых ключевых слов.
    const modifyclickedKeyWords = (keyWord: string, clicked: boolean) => {
        if (clicked) {
            setclickedKeyWords([...clickedKeyWords, keyWord]);
        }
        else {
            setclickedKeyWords([
                ...clickedKeyWords.slice(0, clickedKeyWords.indexOf(keyWord)),
                ...clickedKeyWords.slice(clickedKeyWords.indexOf(keyWord) + 1, clickedKeyWords.length)
            ]);
        }
    }

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

    return(
        <QASystemFrame big={big}>
            {
                // если никакая статья не открыта
                articleOpenedID == -1 ? (
                    <>
                    <HeaderDiv big={big} isArticle={false}>
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
                                    <MainArticleButton header={article.title} paragraph={article.popular} i={articles.indexOf(article)} openAndCloseArticle={openAndCloseArticle}/>
                                ) : <></>)
                        }

                        { /* блок поиска статей */ }
                        <Search extendScreen={extendScreen} 
                                big={big} 
                                openAndCloseArticle={openAndCloseArticle} 
                                clickedKeyWords={clickedKeyWords}
                                modifyclickedKeyWords={modifyclickedKeyWords}
                                articlesShowed={articlesShowed}
                                setArticlesShowed={setArticlesShowed} />
                    </ArticlesDiv>
                    </>
                ) : (
                    <Article big={ big } i={ articleOpenedID } openAndCloseArticle={openAndCloseArticle} extendScreen={extendScreen} />
                )
            }
        </QASystemFrame>
    );  
};

interface QASystemFrameDims {
    //Размер окна влияет на стили: размеры, границы, отображение/не отображение элементов
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

// Основной блок с контентом
const ArticlesDiv = styled(ScrolledDiv)<QASystemFrameDims>`
    flex-direction: column;
    align-items: center;
    width: ${p => p.big? adpt(850) : adpt(420)}px;
    height: ${p => p.big? adpt(730): adpt(672)}px;
`

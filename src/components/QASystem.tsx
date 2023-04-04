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
import { useDrag } from 'react-use-gesture';
import { ReactComponent as BackIcon} from "../icons/back.svg";
import { ReactComponent as CompressIcon} from "../icons/compress.svg";
import { ReactComponent as ExtendIcon} from "../icons/extend.svg";
import Article from './Article';

export default function QASystem() {
    //Координаты окна и функция его перемещения
    const [positionOfWindow, setpositionOfWindow] = useState({x: 0, y: 0});
    const bindpositionOfWindow = useDrag((params) => setpositionOfWindow({
        x: params.offset[0],
        y: params.offset[1],
        }),
        { bounds: { left: -800, right: 0, top: -100, bottom: 0 }
    });

    // Нажатые ключевые слова
    const [clickedKeyWords, setClickedKeyWords] = useState<string[]>([]);

    // Нажатый тег из статьи. Хранит в себе слово и номер статьи, в которой был нажат
    const [clickedTag, setClickedTag] = useState<[string, number]>(["", -1]);

    //Содержимое поисковой строки
    const [searchLineText, setSearchLineText] = useState("");

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

    // Функция открытия статьи с определённым i. Изменяет i открытой статьи, т.е. articleOpenedID. articleID - это номер статьи в которую нужно перейти.
    const openAndCloseArticle = (articleID: number, word?: string, fromTag?: boolean, fromArticle?: number) => {
        //Если статья закрывается, то размер окна изменяется на тот, который был до открытия статьи.
        //Если статья открывается, то в переменную previousWasBig записывается значение big на момент открытия.
        if (articleID == -1) {
            fromTag ? extendScreen(true) : extendScreen(previosWasBig);
            fromTag && word != undefined && fromArticle != undefined && setClickedTag([word, fromArticle]);
        } else {
            !fromTag && setPreviosWasBig(big);
            !fromTag && setSearchLineText("");
            extendScreen(true);
            setClickedTag(["", -1]);
        }
        setArticleOpenedID(articleID);
    }
    
    //Функция, отображающая список статей в зависимости от нажатых ключевых слов
    useEffect(() => {
        if (clickedTag[0] === "") {
            big ? 
            setArticlesShowed(FilterArticlesByKeys(clickedKeyWords)) : 
            setArticlesShowed(FilterArticlesByKeys(clickedKeyWords).slice(0, 4));
        } else {
            setArticlesShowed(FilterArticlesByKeys([clickedTag[0]]));
        }        
    }, [big, clickedKeyWords, clickedTag])
    
    
    // Функция, изменяющая список нажатых слов. На вход подаётся слово и что произошло, т.е. "нажали"-"отжали". Затем изменяется список нажатых ключевых слов.
    const modifyclickedKeyWords = (keyWord: string, clicked: boolean) => {
        if (clicked) {
            setClickedKeyWords([...clickedKeyWords, keyWord]);
        }
        else {
            setClickedKeyWords([
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

    let artHeader = document.getElementById('artHeader')?.offsetHeight;

    useEffect(() => {
        artHeader = document.getElementById('artHeader')?.offsetHeight;
    }, [artHeader])
    
    return(
        <Wrap positionOfWindow={positionOfWindow} big={big}>
            <QASystemFrame big={big} >
                <HeaderDiv big={big} isArticle={articleOpenedID != -1} id="artHeader" {...bindpositionOfWindow()} >
                    {
                        articleOpenedID == -1 ? (
                            <>
                            <Div>
                            {   /* Если экран расширен, то появляется кнопка-стрелочка назад */
                                big &&
                                <button className='backButton'
                                    onClick={() => {
                                        extendScreen(false);
                                        if (clickedTag[1] != -1) {
                                            openAndCloseArticle(clickedTag[1], clickedTag[0], false, -1);
                                        }
                                    }} >
                                    <div className='imgBack'><BackIcon/></div>
                                </button>
                            }
                                <div className='headerText'>
                                    {header}
                                </div>
                            </Div>
                            <div className="imgMove"><MoveIcon/></div>
                            </>
                        ) : (
                            <>
                            <Div>
                            <button className='backButton'
                                onClick={() => {
                                    openAndCloseArticle(-1);
                                }} >
                                <div className='imgBack'><BackIcon/></div>
                            </button>
                            <div className='headerText' title={articles[articleOpenedID].title}>
                                {articles[articleOpenedID].title}
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
                            </>
                        )
                    }
                </HeaderDiv>    
            {
                // если никакая статья не открыта
                articleOpenedID == -1 ? (
                    <>
                    <ArticlesDiv big={big} artHeader={artHeader}>
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
                                setArticlesShowed={setArticlesShowed}
                                clickedTag={clickedTag}
                                searchLineText={searchLineText}
                                setSearchLineText={setSearchLineText}
                                setClickedTag={setClickedTag} />
                    </ArticlesDiv>
                    </>
                    ) : (
                        <Article big={ big } i={ articleOpenedID } openAndCloseArticle={openAndCloseArticle} extendScreen={extendScreen} setpositionOfWindow={setpositionOfWindow} setClickedTag={setClickedTag} artHeader={artHeader} />
                    )
                }
            </QASystemFrame>        
        </Wrap>
    );  
};

interface WrapProps {
    //positionOfWindow влияет на позицию
    positionOfWindow: {x: number, y: number};
    //Размер окна влияет на стили: размеры, границы, отображение/не отображение элементов
    big: boolean;
}

interface QASystemFrameDims {
    //Размер окна влияет на стили: размеры, границы, отображение/не отображение элементов
    big: boolean;
    artHeader?: number;
}

// Блок-родитель для всего приложения
const QASystemFrame = styled.div<QASystemFrameDims>`
    width: ${p => p.big? adpt(850) : adpt(420) }px;
    height: ${p => p.big? adpt(730): adpt(672)}px;
    margin: 0 ${adpt(10)}px ${adpt(10)}px 0;
    box-shadow: ${adpt(0)}px ${adpt(0)}px ${adpt(24)}px lightgrey;
    border-radius: ${adpt(20)}px;
`

// Основной блок с контентом
const ArticlesDiv = styled(ScrolledDiv)<QASystemFrameDims>`
    max-height: ${p => p.artHeader && (p.big? adpt(720-p.artHeader): adpt(646-p.artHeader))}px;
    margin-right: ${p => p.big? adpt(36) : adpt(6)}px;
    max-width: 100%;
    overflow-x: hidden; 
`

const Wrap = styled.div<WrapProps>`
    position: relative;
    top: calc(${p => p.positionOfWindow.y}px + 96vh - ${p => p.big? adpt(730): adpt(672)}px);
    left: calc(${p => p.positionOfWindow.x}px + 97vw - ${p => p.big? adpt(850) : adpt(420) }px);
    width: ${p => p.big? adpt(855) : adpt(425) }px;
    height: ${p => p.big? adpt(730): adpt(672)}px;
`
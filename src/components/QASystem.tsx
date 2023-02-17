import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import { adpt } from '../adaptive';
import Search from './Search';
import { Div } from './Div';
import { ScrolledDiv } from './ScrolledDiv';
import { ReactComponent as MoveIcon} from "../img/move.svg";

export default function QASystem() {
    return(
        <QASystemFrame>
            <HeaderDiv>
                <div>Частые вопросы</div>
                <div className="image"><MoveIcon/></div>
            </HeaderDiv>
            <ArticlesDiv>
                {
                    // Вывод трёх популярных статей
                    articles.map(elem => elem.popular ? (
                        <MainArticleButton header={elem.title} paragraph={elem.popular}/>
                    ) : <></>) }

                {/* Блок поиска */}
                <Search />
            </ArticlesDiv>
        </QASystemFrame>
        
    );  
};


// Блок-родитель для всего приложения
const QASystemFrame = styled(Div)`
    position: absolute;
    right: 0;
    bottom: ${adpt(10)}px;

    flex-direction: column;
    align-items: center;
    width: ${adpt(420)}px;
    height: ${adpt(610)}px;
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

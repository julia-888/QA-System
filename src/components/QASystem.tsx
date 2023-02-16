import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import { adpt } from '../adaptive';
import Search from './Search';
import { Div } from './Div';
import { ReactComponent as MoveIcon} from "../img/move.svg";

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
`

// Основной блок с контентом
const ArticlesDiv = styled(Div)`
    flex-direction: column;
    align-items: center;
    width: ${adpt(420)}px;
    height: ${adpt(610)}px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: ${adpt(5)}px;
        height: ${adpt(662)}px;
        border-radius: ${adpt(10)}px;
    }
    &::-webkit-scrollbar-track {
        background-color: #8BA1C8;
        border-radius: ${adpt(10)}px;
        margin-block: ${adpt(22)}px;
        margin-block-end: ${adpt(35)}px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: ${adpt(10)}px;
        background-color: #5E7398;
    }
`

export default function QASystem() {
    return(
        <QASystemFrame>
            <HeaderDiv>
                <div>Частые вопросы</div>
                <MoveIcon/>
            </HeaderDiv>
            <ArticlesDiv>
                {
                    // Вывод трёх популярных статей
                    articles.map(elem => elem.popular ? (
                        <MainArticleButton header={elem.title} paragraph={elem.mainText1}/>
                    ) : <></>) }

                {/* Блок поиска */}
                <Search />
            </ArticlesDiv>
        </QASystemFrame>
        
    );
};
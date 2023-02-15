import styled from 'styled-components'
import MainArticleButton from './MainArticleButton';
import { articles } from '../data';
import KeyWordsDiv from './KeyWordsDiv';
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
    height: ${adpt(672)}px;
    padding: ${adpt(27)}px ${adpt(15)}px ${adpt(15)}px ${adpt(15)}px;
    box-shadow: ${adpt(0)}px ${adpt(0)}px ${adpt(24)}px lightgrey;
    border-radius: ${adpt(20)}px;
    overflow-y: scroll;
`

// Заголовок страницы с элементом для перемещения окна
const HeaderDiv = styled(Div)`
    justify-content: space-between;
    width: ${adpt(360)}px;
    font-weight: 600;
    font-size: ${adpt(23)}px;
    text-align: left;
    padding-left: ${adpt(40)}px;
    margin-bottom: ${adpt(35)}px;
`

export default function QASystem() {
    return(
            <QASystemFrame>
                <HeaderDiv>
                    <div>Частые вопросы</div>
                    <MoveIcon/>
                </HeaderDiv>
                {
                    // Вывод трёх популярных статей
                    articles.map(elem => elem.popular ? (
                        <MainArticleButton header={elem.title} paragraph={elem.mainText1}/>
                    ) : <></>) }

                {/* Блок поиска */}
                <Search />
            </QASystemFrame>
        
    );
};
import { articles } from "../dataForArticles";
import { ReactComponent as BackIcon} from "../img/back.svg";

type ArticleProps = {
    id: number;
    openAndCloseArticle: (article: number) => void;
};

export default function Article({id, openAndCloseArticle}: ArticleProps) {
    return (
        <div>
            <button className='backButton'
                onClick={() => {
                    openAndCloseArticle(-1) }} >
                <div className='image'><BackIcon/></div>
            </button>
            <div>Hello, World!!!</div>
            <h1>{id}</h1>
        </div>
    );
}
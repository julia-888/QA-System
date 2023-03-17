import { IArticle } from "../dataForArticles"
import { ListComparison } from "./ListComparison"


// Функция, возвращающая массив со статьями для отображения на основе введённого поискового запроса
export const FilterArticles = (articles: IArticle[], searchReq: string) => {
    let result: IArticle[] = [];
    articles.forEach((article) => {
        if (searchReq.match(/${article.title}/)) {
            result.push(article);
        };
    });

    return result;
}
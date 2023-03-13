import { IArticle } from "../dataForArticles"
import { ListComparison } from "./ListComparison"


// Функция, возвращающая массив со статьями для отображения на основе введённого поискового запроса
export const FilterArticles = (articles: IArticle[], clickedKeyWords: string[]) => {
    let result: IArticle[] = [];
    articles.forEach((article) => {
        if (ListComparison(article.keys, clickedKeyWords)) {
            result.push(article);
        }
    });

    return result.length==0 && clickedKeyWords.length==0 ? articles : result;
}
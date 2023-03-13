import { IArticle } from "../dataForArticles"
import { ListComparison } from "./ListComparison"


// Функция, возвращающая массив со статьями для отображения
// Она отбирает подходящие статьи из все массива articles, ищет совпадение ключевых слов с помощью функции ListComparison
export const FilterArticlesByKeys = (articles: IArticle[], clickedKeyWords: string[]) => {
    let result: IArticle[] = [];
    articles.forEach((article) => {
        if (ListComparison(article.keys, clickedKeyWords)) {
            result.push(article);
        }
    });

    return result.length==0 && clickedKeyWords.length==0 ? articles : result;
}
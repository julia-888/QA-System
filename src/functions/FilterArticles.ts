import { IArticle } from "../dataForArticles"
import { ListComparison } from "./ListComparison"


// Функция, возвращающая массив со статьями для отображения
// Она отбирает подходящие статьи из все массива articles, ищет совпадение ключевых слов с помощью функции ListComparison
export const FilterArticles = (articles: IArticle[], clickedKeyWordIDs: number[]) => {
    let i = 0;
    let result: IArticle[] = [];
    articles.forEach((article) => {
        if (ListComparison(article.keyIDs, clickedKeyWordIDs)) {
            result.push(article);
        }
    });

    return result.length==0 && clickedKeyWordIDs.length==0 ? articles : result;
}
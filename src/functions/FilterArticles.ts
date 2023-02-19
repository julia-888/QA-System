import { IArticle } from "../models"
import { ListComparison } from "./ListComparison"


// Функция, возвращающая массив со статьями для отображения
// Она отбирает подходящие статьи из все массива articles, ищет совпадение ключевых слов с помощью функции ListComparison
export const FilterArticles = (articles: IArticle[], clickedKeyWordList: string[]) => {
    let i = 0;
    let result = [];

    for (i; i < articles.length; i++) {
        if (ListComparison(articles[i].keys, clickedKeyWordList)) {
            result.push(articles[i]);
        }
    }

    return result;
}
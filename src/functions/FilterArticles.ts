import { IArticle } from "../models"
import { ListComparison } from "./ListComparison"


// Функция, возвращающая массив со статьями для отображения
// Она отбирает подходящие статьи из все массива articles, ищет совпадение ключевых слов с помощью функции ListComparison
export const FilterArticles = (articles: IArticle[], clickedKeyWordList: string[]) => {
    let i = 0;
    let result: IArticle[] = [];
    console.log(clickedKeyWordList);
    articles.forEach((article, index) => {
        if (ListComparison(article.keys, clickedKeyWordList)) {
            result.push(article);
        }
    });
    // for (i; i < articles.length; i++) {
    //     if (ListComparison(articles[i].keys, clickedKeyWordList)) {
    //         result.push(articles[i]);
    //     }
    // }

    console.log(result);

    return result.length == 0 ? articles : result;
}
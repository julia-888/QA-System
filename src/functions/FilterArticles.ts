import { IArticle } from "../dataForArticles"
import { ListComparison } from "./ListComparison"
import { articles } from "../dataForArticles";

// Функция, возвращающая массив со статьями для отображения на основе введённого поискового запроса
export const FilterArticles = (inputText: string) => {
    const regex = new RegExp(inputText);

    if (inputText=="") {
        return articles;
    }

    let result: IArticle[] = [];

    articles.forEach((article) => {
        if (regex.test(article.title)) {
            result.push(article);
        };
    });

    return result;
}
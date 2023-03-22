import { IArticle } from "../dataForArticles"
import { ListComparison } from "./ListComparison"
import { articles } from "../dataForArticles";

// Функция, возвращающая массив со статьями для отображения на основе введённого поискового запроса
export const FilterArticles = (inputText: string) => {
    if (inputText.length <= 3) {
        return articles;
    }
    
    const regex = new RegExp(inputText.toLowerCase());
    let result: IArticle[] = [];

    articles.forEach((article) => {
        if (regex.test(article.title.toLowerCase())) {
            result.push(article);
        };
    });

    return result;
}
import { IArticle } from "../dataForArticles";
import { articles } from "../dataForArticles";

// Функция для отображения похожих статей внизу статьи
export const ShowSimilarArticles = (i: number) => {
    let result: IArticle[] = [];
    
    articles[i].keys.forEach(key => {
        articles.forEach(article => {
            if (article.keys.includes(key) && !result.includes(article) && article.title !== articles[i].title) {
                console.log(article.title);
                console.log(articles[i].title);
                result.push(article);
            }
        });
    });

    return result;
    
}
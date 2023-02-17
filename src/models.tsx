// Интерфейс содержимого статьи

export interface IArticle { 
    title: string,
    subtitle: string,
    content: {
        type: string,
        content: string,
        url ?: string,
    }[]
    keys: string[],
    popular ?:  string,
}
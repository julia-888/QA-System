// Интерфейс содержимого статьи

export interface IArticle { 
    title: string,
    subtitle: string,
    content: {
        type: string,
        content: string,
        url ?: string,
    }[]
    keyIDs: number[],
    popular ?:  string,
}
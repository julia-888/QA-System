export interface IArticle { 
    title: string,
    subtitle: string,
    mainText1: string,
    thesis?: string,
    mainText2?: string,
    image?: {
        url: string,
        attend: boolean,
    }
    additionalText?: string,
    href1 ?: {
        url: string,
        text: string
    },
    popular ?: boolean,
}

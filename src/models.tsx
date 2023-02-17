// Интерфейс содержимого статьи

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

// interface I2 {
//     {
//         title: 'Заголовок статья';
//         subtitle: 'Подзаголовок'
//         content: [
//             {
//                 type: 'text'
//                 content: 'fdljslfdjsljsdfj'
//             },
//             {
//                 type: 'img'
//                 url: ''
//                 content: 'image.png'
//             },
//             {
//                 type: 'text'
//                 content: 'fdljslfdjsljsdfj'
//             },
//             {
//                 type: 'tezis'
//                 content: 'text tezis 1'
//             }
//         ]
//     }
    
// }
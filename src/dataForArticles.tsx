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

// Данные для статей
export const articles: IArticle[] = [
    {
        title: 'Что лучше: купить регенерацию?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Результаты", "Установки", "Преимущества"],
    },
    {
        title: 'Что лучше: купить масло или заказать регенерацию?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Способы", "Регенерация", "Трансформаторы", "Заказ"],
    },
    {
        title: 'Как заказать регенерацию, если я нахожусь в Сибири?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Регенерация", "Трансформаторы", "Заказ"],
    },
    {
        title: 'Возможно ли купить много установок бесплатно?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Преимущества", "Адсорбционная"],
    },
    {
        title: 'Возможно ли забронировать регенерацию на год?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Способы", "Заказ", "Издержки", "Результаты", ],
    },
    {
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing.',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Заказ", "Издержки", "Результаты", "Установки", "Преимущества", "Адсорбционная",],
    },
    {
        title: 'Что такое адсорбент?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Способы"],
        popular: 'Масло, или невзаимозаменяемый токен, — это единица учета...'
    },
    {
        title: 'Как происходит регенерация масла технически?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Способы", "Заказ", "Издержки",],
        popular: 'С помощью некоторых устройств, которые регенерируют и не только...'
    },
    {
        title: 'Что такое трансформатор?',
        subtitle: 'Подзаголовок',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Адсорбционная",],
        popular: 'Он, или они невзаимозаменяемый элементы, — это единица учета...'
    },
    {
        title: 'Энергетическое масло',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        content: [
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'img',
                url: '',
                content: 'image.png',
            },
            {
                type: 'text',
                content: 'Но недостаточно просто включить функцию в CSS. В спецификациях CSS Text Module Level 4 появилась возможность управлять переносами, как в программах для вёрстки (например, InDesign) и некоторых текстовых редакторах (включая Word). Эти элементы управления позволяют разными способами установить количество переносов в тексте.',
            },
            {
                type: 'tezis',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            }
        ],
        keys: ["Адсорбционная", "Результаты", "Издержки"],
    },

]
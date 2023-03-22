// Функция, определяющая, входит ли массив clicked в массив keys
export const ListComparison = (keys: string[], clicked: string[]) => {
    // keys - список ключевых слов статьи, clicked - список нажатых ключевых слов
    let contains: number = 0;

    clicked.forEach(element => {
        keys.forEach(key => {
            if (element == key){
                contains++;
            }
        })
    });

    return clicked.length === contains;
    
}

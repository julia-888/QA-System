// Функция, определяющая, входит ли массив clicked в artKeyIDs
export const ListComparison = (artKeyIDs: number[], clicked: number[]) => {
    // artKeyIDs - список ключевых слов статьи, clicked - список нажатых ключевых слов
    let contains: number = 0;

    clicked.forEach(element => {
        artKeyIDs.forEach(artKeyID => {
            if (element == artKeyID){
                contains++;
            }
        })
    });

    return clicked.length === contains;
    
}

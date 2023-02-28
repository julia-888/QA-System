// Функция, определяющая, входит ли массив clicked в artKeyIDs
export const ListComparison = (artKeyIDs: number[], clicked: number[]) => {
    // artKeyIDs - список ключевых слов статьи, clicked - список нажатых ключевых слов
    let contains: boolean[] = [];

    clicked.forEach(element => {
        artKeyIDs.forEach(artKeyID => {
            if (element == artKeyID){
                contains.push(true);
            }
        })
    });

    return clicked.length === contains.length;
    
}

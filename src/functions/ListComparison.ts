// Функция, сравнивающая 2 массива
export const ListComparison = (list1: string[], list2: string[]) => {
    if (list1.length === list2.length) {
        let i = 0;
        let j = 0;
        let contains = false;
        for (i; i < list1.length; i++) {
            for (j; j < list2.length; j++) {
                if (list1[i] == list2[j]) {
                    contains = true;
                    break;
                }
            }
            if (contains == false) {
                return false;
            }
            j = 0;
            contains = false;
        }
        return true;
    }
    else {
        return false;
    }
}

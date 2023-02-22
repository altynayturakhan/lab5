let column_1 = [3, 10, 6, 3, 2, 2, 6, 3, 1, 2, 7, 6, 1, 9, 9, 2, 5, 1, 2, 2, 6, 6, 3, 5, 2, 1, 2, 10, 8, 10],
    column_2 = [1, 6, 5, 9, 10, 1, 2, 6, 7, 1, 6, 7, 9, 3, 1, 8, 7, 9, 6, 7, 2, 4, 10, 7, 6, 10, 6, 1, 3, 1],
    column_3 = [47, 99, 77, 96, 96, 47, 70, 63, 45, 100, 99, 48, 100, 63, 41, 54, 68, 65, 90, 53, 90, 85, 44, 50, 65, 99, 99, 63, 66, 92],
    column_4 = [89, 40, 80, 80, 95, 98, 67, 78, 84, 57, 52, 76, 87, 43, 68, 50, 43, 67, 76, 95, 90, 84, 81, 79, 52, 54, 91, 43, 94, 50];

let sum_1 = 0, sum_2 = 0, sum_3 = 0, sum_4 = 0;

for (let i = 0; i < column_1.length; i++) {
    sum_1 = sum_1 + column_1[i];
}

for (let i = 0; i < column_2.length; i++) {
    sum_2 = sum_2 + column_2[i];
}

for (let i = 0; i < column_3.length; i++) {
    sum_3 = sum_3 + column_3[i];
}

for (let i = 0; i < column_4.length; i++) {
    sum_4 = sum_4 + column_4[i];
}

let sums = [sum_1, sum_2, sum_3, sum_4];
let total_score = sum_1 + sum_2 + sum_3 + sum_4;

const results = {
    col_1: column_1,
    col_2: column_2,
    col_3: column_3,
    col_4: column_4,
    sums: sums,
    total_score: total_score
}

console.log(results)
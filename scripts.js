/// 8.6


function getTriangleArea(a, h) {
    if ((a <= 0) || (h <= 0)) {
        console.log('nieprawidłowe dane');
    } else {
        return a * h / 2;
    }
}

console.log(getTriangleArea(10, 6));
console.log(getTriangleArea(10, 15));
console.log(getTriangleArea(0, 5));
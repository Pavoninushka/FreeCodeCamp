const romanNumbers = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"]
]);

function digitToRoman(factor, base) {
    return romanNumbers.get(base).repeat(factor);
}

function convertToRoman(num) {
    let result = [];
    let bases = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    for (let base of bases) {
        let factor = Math.floor(num / base);
        result.push(digitToRoman(factor, base));
        num = num - base * factor;
    }

    return result.join("");
}

console.log(convertToRoman(34));

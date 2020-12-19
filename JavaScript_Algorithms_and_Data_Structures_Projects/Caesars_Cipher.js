function rot13(str) {
    return str.split("").map(char => {
        if (/[A-Z]/.test(char)) {
            return String.fromCharCode((char.charCodeAt(0) - 52) % 26 + 65);
        } else {
            return char;
        }
    }).join("");
}

console.log(rot13("SERR PBQR PNZC"));

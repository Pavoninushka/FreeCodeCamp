function telephoneCheck(str) {
    let regex = /^(1 ?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/;
    return regex.test(str);
}

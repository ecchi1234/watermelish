export const toCapitalCase = (string) => {
    return string.split(" ").map((s) => {
        return s.split('').map((element, index) => {
            if (index === 0) return element.toUpperCase();
            return element;
        }).join('');
    }).join(" ");
}
console.log(toCapitalCase("spring"));
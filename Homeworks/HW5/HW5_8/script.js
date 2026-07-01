const ArrayList = arr => {
    document.write('<ul>');
    for (const item of arr) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
};
const Arrays = [93, `what's up`, false, 64.13, true, false];
ArrayList(Arrays);
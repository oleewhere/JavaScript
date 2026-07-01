const typeText = (text, liCount) => {
    document.write('<ul>');
    for (let i = 0; i < liCount; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
typeText(`Lorem ipsum dolor sit amet.`, 3);
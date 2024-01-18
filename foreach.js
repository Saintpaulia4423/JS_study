let a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
    console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach((character) => {
    console.log(character);
});

let b = [8, 17, 42, 99, 22];
console.log(b.sort((i, j) => { return i - j; }));
b.forEach((element) => { console.log(element); });
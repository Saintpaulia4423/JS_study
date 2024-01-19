let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// URLにて適した文字列を返す
// 変換例: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}

// URL 生成：命令形バージョン
function imperativeUrls(elements) {
    let urls = [];
    elements.map(function (element) {
        urls.push(urlify(element));
    });
    return urls;
}
console.log(imperativeUrls(states));

// URL生成：関数型バージョン
function functionalUrls(elements) {
    return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

// URL生成：関数型フルバージョン
function functionalUrls_full(elements) {
    return elements.map(element => "https://example.com/" + urlify(element))
}
console.log(functionalUrls_full(states));


// 1単語の文字列抽出：　命令形バージョン
function imperativeSingles(elements) {
    return elements.filter(state => state.split(/\s+/).length === 1);
}
console.log(imperativeSingles(states));


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum：　命令形バージョン
function imperativeSum(elements) {
    let total = 0;
    elements.forEach(function (n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

// sum：　関数型バージョン
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths：　命令形バージョン
function imperativeLengths(elements) {
    let lengths = {};
    elements.forEach(function (element) {
        lengths[element] = element.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));


// lengths：　関数型バージョン
function functionalLengths(elements) {
    return elements.reduce((lengths, state) => {
        lengths[state] = state.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

function functionalLengths_refact(elements) {
    return elements.reduce((lengths, state) => { lengths[state] = state.length; return lengths; }, {});
}
console.log(functionalLengths_refact(states));

function functionTotalMulti(elements) {
    return elements.reduce((numbers, number) => { return numbers *= number });
}
console.log(functionTotalMulti(numbers));
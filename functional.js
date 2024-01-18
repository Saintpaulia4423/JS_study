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
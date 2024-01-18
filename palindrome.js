reverse = (string) => {
    return Array.from(string).reverse().join("");
}

palindrome = (string) => {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}

emailParts = (email) => {
    return email.toLowerCase().split("@");
}
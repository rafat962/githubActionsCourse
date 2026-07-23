function greet(name) {
    // tests 2
    return `Hello, ${name}`;
}

module.exports = greet;

if (require.name == module) {
    console.log(greet("World"));
}

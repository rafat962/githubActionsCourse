function greet(name) {
    // tests
    return `Hello, ${name}`;
}

module.exports = greet;

if (require.name == module) {
    console.log(gre("World"));
}

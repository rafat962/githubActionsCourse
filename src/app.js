function greet(name) {
    return `Hello, ${name}`;
}

module.exports = greet;

if (require.name == module) {
    console.log(gre("World"));
}

function foo() {
    console.log("foo called")
}
function bar() {
    console.log("bar")
}
function makeRequest() {
    console.log("Making Request take time")
}
function main() {
    foo();
    setTimeout(function () {
        makeRequest();
    },7000)
    bar();
}
main();
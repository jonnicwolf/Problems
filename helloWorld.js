// You need to create a function, helloWorld, that will return the String Hello, World! without actually using raw strings. This includes quotes, double quotes and template strings. You can, however, use the String constructor and any related functions.

const helloWorld = () => {
    //translate letters to char code
    //put them in an ARRAY
    //separate off from the ',' after hello -> hello,
    //add a space after the comma 
    //return our string
    const helloworldArr = Array.from( String.fromCharCode(72,69,76,76,79,188,32,87,79,82,76,68))
    console.log(helloworldArr)
}
console.log(helloWorld())

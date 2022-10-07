const reverseString = (string) => {
    const output = string.split('').reverse().join('')
    return output;
}

module.exports = reverseString;
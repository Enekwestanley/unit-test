const reverseString = (string) => {
    if(string.length > 0) {
        return string.split('').reverse.join('')
    }else {
        return 'string is empty';
    }
}

module.exports = reverseString;
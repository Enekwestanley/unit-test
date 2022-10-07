const stringLength = (string) => {
    let error;
    if(string.length > 0 && string.length < 11) {
        return string.length;
    }else{
        return error;
    }
}

module.exports = stringLength;
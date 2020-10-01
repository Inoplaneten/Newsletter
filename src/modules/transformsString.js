const transformsString = string => {
    let arrWords = string.split(' '),
        lastWord = arrWords.splice(-1).join(),
        newString = arrWords.join(' ');
    const objString = {
        newString: newString,
        lastWord: lastWord
    };
    return objString;
};

export default transformsString;
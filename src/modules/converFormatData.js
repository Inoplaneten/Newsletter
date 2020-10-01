const converFormatData = data => {
    const newFormatDate = new Date(data);
    let dataFormat = {
        day: newFormatDate.getDate(),
        month: newFormatDate.getMonth() + 1
    }
    for(let key in dataFormat) {
        if(dataFormat[key] < 10) {
            dataFormat[key] = '0' + dataFormat[key];
        }
    }
    return dataFormat;
};

export default converFormatData;
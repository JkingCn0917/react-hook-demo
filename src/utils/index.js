export const isFalsy = (value) => value === 0 ? false : !value;//!!value取其布尔值的意思
//清除对象的空值
export const cleanObject = (object) => {
    const result = { ...object }
    Object.keys(result).forEach(key => {
        const value = result[key];
        if (isFalsy(value)) {//这里如果value 为0也会被删，所以当value为0时，应该不被删除
            delete result[key]
        }
    })
    return result;
}
import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value); //!!value取其布尔值的意思
//清除对象的空值
export const cleanObject = (object: object) => {
    const result = { ...object };
    Object.keys(result).forEach((key) => {
        //@ts-ignore
        const value = result[key];
        if (isFalsy(value)) {
            //这里如果value 为0也会被删，所以当value为0时，应该不被删除
            //@ts-ignore
            delete result[key];
        }
    });
    return result;
};
export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};
// const debounce = (func,delay)=>{
//     let timeout;
//     return (...param)=>{
//         if(timeout){
//             clearTimeout(timeout)
//         }
//         timeout=setTimeout(function(){
//             func(...param)
//         },delay)
//     }
// }
// const log = debounce(()=>console.log('call'),5000)
// log()
// log()
// log()
export const useDebounce = (value: unknown, delay?: number):any => {//后面用泛型规范类型
    const [debounceValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        //每次在value或delay变化后设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        //每次在上一个useEffect处理完以后再运行
        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounceValue;
};

const getArgs = (args) => { //добавление флагов и аргументов после вызова в CLI
    const res = {}
    const [exec, file, ...rest] = args //деструктуризация
    rest.forEach((e, index, arr) => {
        if (e.charAt(0) === '-') {
            if (index === arr.length - 1) {
                res[e.substring(1)] = true
            }else if (arr[index + 1].charAt(0) !== '-') {
                res[e.substring(1)] = arr[index + 1]
            }else {
                res[e.substring(1)] = true
            }
        }
    })
    return res
}

export {getArgs}
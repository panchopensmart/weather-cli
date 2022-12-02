import chalk from 'chalk'
import dedent from "dedent-js";

const printError = (err) => {
    console.log((chalk.bgRed('ERROR'),' - ', err))
}

const printSuccess = (msg) => {
    console.log((chalk.bgGreen('ERROR'),' - ', msg))
}

const printHelp = () => {
    console.log(
        dedent(
            `${chalk.bgCyan('HELP')}
            Без параметров - вывод погоды
            -s [CITY] для установки грода
            -h [CITY] для вывода помощи
            -t [API_KEY] для сохранения токена
            `
        )
        
    )
}

export {printError, printSuccess, printHelp}
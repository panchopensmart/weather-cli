#!/usr/bin/env node

import {getArgs} from './helpers/args.js'
import {printHelp, printSuccess, printError} from "./serveses/log.servise.js";
import {saveKeyValue, TOKEN_DICTIONARY} from "./storage.service.js";
import {getWeather} from "./serveses/api.serves.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError('Не передан токен');
        return;
    }
 try {
     await saveKeyValue(TOKEN_DICTIONARY.token, token)
     printSuccess('Токен сохранён')
 } catch (e) {
     printError('Код ошибки: ', e.message)
 }
}

const initCLI = () => {
    const args = getArgs(process.argv)
    if (args.h){ //help part
        printHelp()
    }

    if (args.s){

    }

    if (args.t){
        return saveToken(args.t)
    }
    getWeather('moscow').then(r => r)
}

initCLI()

"use strict";

import {Utils} from "../../good-funcs.js/dist/js/GoodFuncs.js";

export class BrowserDotenv {

    public static ENV_WINDOW_PROPERTY = 'env';

    /**
     * @param {string} configUrl
     *
     * @returns {Promise<void>}
     */
    public static async import(configUrl : string) {
        await Promise.all(Utils.GoodFuncs.getScripts(['/vendor/avtomon/browser-dotenv/dist/dotenv.js']));
        fetch(configUrl).then(async function (response : Response) {
            const rawEnvs : string = await response.text();
            window[BrowserDotenv.ENV_WINDOW_PROPERTY] = dotenv.parse(rawEnvs)
        });
    }
}

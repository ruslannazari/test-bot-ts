import { GrammyError, HttpError } from 'grammy'
import { bot } from '../src/bot'

const {
    VERCEL_URL = 'localhost',
    VERCEL_BRANCH_URL: hostname = VERCEL_URL,
} = process.env

const url = new URL('api/webhook', `https://${hostname}`)

bot.catch((err) => {
    const ctx = err.ctx
    console.error(`Error while handling update ${ctx.update.update_id}`)
    const e = err.error;
    if (e instanceof GrammyError) {
        console.log("Error in request: ", e.description)
    }
    else if (e instanceof HttpError) {
        console.error("Could not contact Telegram: ", e);
    }
    else {
        console.error("Unknown error: ", e)
    }
})

bot.api.setWebhook(url.href)

import { Bot } from "grammy";
import dotenv from "dotenv"

dotenv.config()

const {
    BOT_TOKEN: token = ""
} = process.env

export const bot = new Bot(token)

bot.on("message", async ctx => ctx.reply(ctx.message.text as string))
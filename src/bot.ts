import { Bot } from "grammy";
import dotenv from "dotenv"

dotenv.config()

const {
    BOT_TOKEN: token = ""
} = process.env

export const bot = new Bot(token)

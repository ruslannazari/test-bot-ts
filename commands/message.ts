import { bot } from "../src/bot";

bot.on("message", async ctx => ctx.reply(ctx.message.text as string))

import { bot } from "../src/bot";
console.log("message start")
bot.on("message", async ctx => ctx.reply(ctx.message.text as string))
console.log("message end")

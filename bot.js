"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const menu_1 = require("@grammyjs/menu");
// Create an instance of the `Bot` class and pass your bot token to it.
const bot = new grammy_1.Bot("7260846654:AAHU78ILBLd24c95PLKjpbD-4ZcVp5q4aj8"); // <-- put your bot token between the ""
const menu = new menu_1.Menu("my-menu-identifier")
    .text("A", (ctx) => ctx.reply("You pressed A!"))
    .row()
    .text("B", (ctx) => ctx.reply("You pressed B!"));
// Make it interactive
bot.use(menu);
// You can now register listeners on your bot object `bot`.
// grammY will call the listeners when users send messages to your bot.
// Handle the /start command.
bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // Send the menu.
    yield ctx.reply("Check out this menu:", { reply_markup: menu });
}));
bot.command("play", (ctx) => ctx.reply("Link day choi di: https://t.me/Windwebbot/fabbijsc"));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));
// Now that you specified how to handle messages, you can start your bot.
// This will connect to the Telegram servers and wait for messages.
// Start the bot.
bot.start();

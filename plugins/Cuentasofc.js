import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙤𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 𝙙𝙚 𝙎𝙄𝙎𝙆𝙀𝘿-𝘽𝙊𝙏 🌟
*𝘛𝘦 𝘪𝘯𝘷𝘪𝘵𝘢𝘮𝘰𝘴 𝘢 𝘴𝘦𝘨𝘶𝘪𝘳𝘯𝘰𝘴 𝘺 𝘧𝘰𝘳𝘮𝘢𝘳 𝘱𝘢𝘳𝘵𝘦 𝘥𝘦 𝘯𝘰𝘴𝘰𝘵𝘳𝘰𝘴*

• 𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮:
https://www.instagram.com/sisked_1?igsh=cHJmeTM1OGs1cjZo

• 𝘊𝘢𝘯𝘢𝘭 𝘖𝘧𝘪𝘤𝘪𝘢𝘭:
https://whatsapp.com/channel/0029Vak6H9l3GJP4FJH5063R

• 𝘎𝘳𝘶𝘱𝘰 𝘥𝘦 𝘝𝘦𝘯𝘵𝘢𝘴:
https://chat.whatsapp.com/ECbe0H5FdrIHR1mC6tp6ND

• 𝘛𝘪𝘬 𝘛𝘰𝘬:
https://www.tiktok.com/@slsked?_t=8nmdMvLOnBe&_r=1

• 𝘊𝘳𝘦𝘢𝘥𝘰𝘳:
https://wa.me/584123989549

*𝘚𝘐𝘚𝘒𝘌𝘋-𝘉𝘖𝘛 𝘋𝘌 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗* 🌟      
` 
}
handler.command = /^(cuentasofc|ofc)$/i
handler.register = false
handler.group = false
handler.admin = false
export default handler

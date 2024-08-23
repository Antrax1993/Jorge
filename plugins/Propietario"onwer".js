import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
𝙋𝙍𝙊𝙋𝙄𝙀𝙏𝘼𝙍𝙄𝙊 𝘿𝙀 𝙎𝙄𝙎𝙆𝙀𝘿-𝘽𝙊𝙏 Wa.me/584123989549                
` 
}
handler.command = /^(owner|propietario)$/i
handler.register = false
handler.group = false
handler.admin = false
export default handler

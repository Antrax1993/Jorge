import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
𝙎𝙞𝙨𝙠𝙚𝙙-𝘽𝙤𝙩 𝙄𝙜 
https://www.instagram.com/sisked_1?igsh=cHJmeTM1OGs1cjZo
*𝘚𝘪́𝘨𝘶𝘦𝘮𝘦* 🤖                
` 
}
handler.command = /^(instagrambot|igbot)$/i
handler.register = false
handler.group = false
handler.admin = false
export default handler

import fg from 'api-dylux' 
import fetch from 'node-fetch'
import { savefrom, facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fbDownloader from 'fb-downloader-scrapper'
import { facebook } from "@xct007/frieren-scraper"
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `📄 𝘙𝘦𝘨𝘭𝘢𝘴 𝘊𝘭𝘬 
*𝘏𝘢𝘣𝘪𝘭𝘪𝘥𝘢𝘥 𝘈𝘤𝘵𝘪𝘷𝘢: 𝘈𝘭𝘰𝘬*

*𝘏𝘢𝘣𝘪𝘭𝘪𝘥𝘢𝘥𝘦𝘴 𝘱𝘢𝘴𝘪𝘷𝘢𝘴:* 𝘔𝘰𝘤𝘰, 𝘒𝘦𝘭𝘭𝘺 𝘺 𝘔𝘢𝘹𝘪𝘮

*1 𝘙𝘰𝘶𝘯𝘥 𝘋𝘦𝘴𝘦𝘳𝘵:* 𝘋𝘦𝘴𝘱𝘶𝘦́𝘴 𝘗𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 🚫

*𝘈𝘳𝘮𝘢𝘴:* 𝘜𝘮𝘱 𝘹 1/𝘔1014 𝘗𝘰𝘳 𝘚𝘤𝘶𝘢𝘥

*𝘗𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰:*

*𝘈𝘭𝘵𝘶𝘳𝘢𝘴:* 𝘊𝘢𝘫𝘢𝘴, 𝘈𝘶𝘵𝘰𝘴 𝘺 𝘊𝘰𝘯𝘵𝘢𝘪𝘯𝘦𝘳𝘴 𝘕𝘰 𝘤𝘶𝘦𝘯𝘵𝘢𝘯 𝘤𝘰𝘮𝘰 𝘢𝘭𝘵𝘶𝘳𝘢.

𝘊𝘭𝘰𝘸, 𝘔𝘪𝘭𝘬, 𝘖𝘣𝘴𝘦𝘳𝘷𝘢𝘵𝘰𝘳𝘪𝘰 ( 𝘕𝘰 𝘤𝘶𝘦𝘯𝘵𝘢𝘯 𝘤𝘰𝘮𝘰 𝘢𝘭𝘵𝘶𝘳𝘢 )

*𝘗𝘳𝘰𝘩𝘪𝘣𝘪𝘥𝘰 𝘭𝘢𝘴 𝘎𝘳𝘢𝘯𝘢𝘥𝘢𝘴. 🚫*

*𝘊𝘳𝘦𝘢𝘤𝘪𝘰́𝘯 𝘥𝘦 𝘭𝘢 𝘴𝘢𝘭𝘢:*
* 200 𝘏𝘱 
* 𝘈𝘥𝘪𝘵𝘢𝘮𝘦𝘯𝘵𝘰𝘴: 𝘕𝘰
* 𝘈𝘪𝘥𝘳𝘰𝘱𝘴: 𝘕𝘰 
* 𝘈𝘪𝘥𝘳𝘰𝘱 𝘤𝘪𝘣𝘦𝘳𝘯𝘦́𝘵𝘪𝘤𝘰: 𝘕𝘰 
* 𝘈𝘵𝘳𝘪𝘣𝘶𝘵𝘰𝘴: 𝘕𝘰 
* 𝘔𝘶𝘯𝘪𝘤𝘪𝘰́𝘯 𝘭𝘪𝘮𝘪𝘵𝘢𝘥𝘢: 𝘚𝘪 

*𝘚𝘢𝘭𝘢 𝘢𝘷𝘢𝘯𝘻𝘢𝘥𝘢:*
* 𝘋𝘦𝘴𝘦𝘳𝘵 
* 𝘜𝘔𝘗
* 𝘔1014
* 𝘗𝘈𝘙𝘌𝘋 𝘎𝘓𝘖𝘖 
* 𝘊𝘈𝘙𝘈𝘚 𝘋𝘌 𝘙𝘌𝘗𝘈𝘙𝘈𝘊𝘐𝘖́𝘕 
* 𝘊𝘈𝘚𝘊𝘖 𝘠 𝘊𝘏𝘈𝘓𝘌𝘊𝘖 𝘓𝘝𝘓 2
* 𝘏𝘖𝘕𝘎𝘖 𝘓𝘝𝘓 3

𝙎𝙄𝙎𝙆𝙀𝘿-𝘽𝙊𝙏`
}
handler.command = /^(reglasclk|clk)$/i
handler.register = true
handler.group = true
handler.admin = true
export default handler

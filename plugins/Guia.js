let handler = async (m, { isPrems, conn }) => {
let time = global.db.data.users[m.sender].lastcofre + 0 // 36000000 10 Horas //86400000 24 Horas
if (new Date - global.db.data.users[m.sender].lastcofre < 0) throw `[❗𝐈𝐍𝐅𝐎❗] 𝚈𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝙲𝙾𝙵𝚁𝙴\𝚗𝚅𝚄𝙴𝙻𝚅𝙴 𝙴𝙽 *${msToTime(time - new Date())}* 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁`

let img = 'https://telegra.ph/file/03d1e7fc24e1a72c60714.jpg' 
let texto = `𝙂𝙪𝙞𝙖 𝘿𝙚 𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙢𝙖́𝙨 𝙪𝙨𝙖𝙙𝙤𝙨:

.𝘰𝘯/𝘰𝘧𝘧 𝘢𝘶𝘥𝘪𝘰𝘴
.𝘢𝘥𝘮𝘪𝘯𝘴 𝘺 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 *(𝘌𝘯𝘷𝘪𝘢 𝘪𝘯𝘧𝘰𝘳𝘮𝘢𝘤𝘪𝘰́𝘯 𝘢 𝘭𝘰𝘴 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴)*
.𝘵𝘰𝘥𝘰𝘴 𝘺 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 *(𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘤𝘰𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)* 
.𝘯𝘰𝘵𝘪 𝘺 𝘮𝘦𝘯𝘴𝘢𝘫𝘦 *(𝘯𝘰𝘵𝘪𝘧𝘪𝘤𝘢 𝘢𝘭 𝘨𝘳𝘶𝘱𝘰 𝘴𝘪𝘯 𝘮𝘦𝘯𝘤𝘪𝘰́𝘯)*
.𝘨𝘳𝘶𝘱𝘰 𝘢𝘣𝘳𝘪𝘳/𝘤𝘦𝘳𝘳𝘢𝘳 *(𝘢𝘣𝘳𝘦 𝘨𝘳𝘶𝘱𝘰/𝘤𝘪𝘦𝘳𝘳𝘢 𝘨𝘳𝘶𝘱𝘰)* 
.𝘧𝘢𝘯𝘵𝘢𝘴𝘮𝘢𝘴 *(𝘮𝘶𝘦𝘴𝘵𝘳𝘢 𝘭𝘰𝘴 𝘪𝘯𝘢𝘤𝘵𝘪𝘷𝘰𝘴)* 
.𝘰𝘯/𝘰𝘧𝘧 𝘉𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢 *(𝘢𝘤𝘵𝘪𝘷𝘢 𝘣𝘪𝘦𝘯𝘷𝘦𝘯𝘪𝘥𝘢𝘴 𝘺 𝘥𝘦𝘴𝘱𝘦𝘥𝘪𝘥𝘢𝘴)*
.editarwelcome PON FRASE @user (Bienvenidas del grupo) 
.editarbye PON FRASE @user (Despedidas del grupo) 
.daradmin *@tag* (da admin a alguien)
.quitaradmin *@tag* (retira admin a alguien)
.on modoadmin (Bot solo para admins)
.off modoadmin (Desactivar y usar todos en general)
.on simi (Habla con el Bot)
.off simi (Desactivar chat con el Bot)
.del (elimina mensaje de alguien) 
.menu (MUESTRA TODOS LOS +200 COMANDOS)
.reporte y *Mensaje* (PARA ENVIARME REPORTES DEL DEL BOT Y PODER AYUDARTE)
.on (Revisas la totalidad de que deseas activar o desactivar)`

const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}
await conn.sendFile(m.chat, img, 'img.jpg', texto, fkontak)
global.db.data.users[m.sender].lastcofre = new Date * 1
}
handler.command = ['guia'] 
handler.register = true
export default handler

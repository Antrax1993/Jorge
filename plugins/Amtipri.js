// TheMystic-Bot-MD @BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝗧𝗘 𝗖𝗔𝗜𝗦𝗧𝗘 𝗗𝗘 𝗟𝗔 𝗖𝗔𝗠𝗔 𝗗𝗘 𝗖𝗛𝗜𝗤𝗨𝗜𝗧@ ..?? 👀
𝙣𝙤 𝙨𝙚𝙖𝙨 𝙚𝙨𝙥𝙚𝙨@ 𝙣𝙞 𝙥𝙚𝙣𝙙𝙚𝙟@ 𝙉𝙊 𝙢𝙖𝙣𝙙𝙚𝙨 𝙢𝙨𝙟 😡🖕🏻`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}

// TheMystic-Bot-MD @BrunoSobrino - _antiprivado.js

export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') || m.text.includes('serbot') || m.text.includes('jadibot')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`𝙀𝙨𝙩𝙖́ 𝙥𝙧𝙤𝙝𝙞𝙗𝙞𝙙𝙤 𝙢𝙖𝙣𝙙𝙖𝙧 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙖𝙡 𝘽𝙤𝙩 🤖 𝙮 𝙩𝙚𝙣𝙙𝙧𝙚́ 𝙦𝙪𝙚 𝘽𝙡𝙤𝙦𝙪𝙚𝙖𝙧𝙩𝙚.
𝘾𝙪𝙖𝙡𝙦𝙪𝙞𝙚𝙧 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙖 𝙥𝙪𝙚𝙙𝙚𝙨 𝙀𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 𝙖𝙘𝙖 𝙥𝙖𝙧𝙖 𝙖𝙩𝙚𝙣𝙙𝙚𝙧𝙩𝙚😸 +584123989549`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}

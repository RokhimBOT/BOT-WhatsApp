exports.menu = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, aktif, grupch1, grupch2, youtube) => {
	return `
	
❉──────────❉
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
❉──────────❉

         ───
📆 *${tampilTanggal}*
⏱️ *${tampilWaktu}*
         ───

╔════════════════════
║ *FITUR BOT ${BotName}*
╠════════════════════
║╭──❉ *STICKER MAKER* ❉──
║│1. *#sticker*
║╰───────────
╠════════════════════
║╭──❉ *MEDIA* ❉──
║│1. *#ytmp3* <linkyoutube>
║│2. *#ytmp4* <linkyoutube>
║│3. *#tiktok* <linktiktok>
║│4. *#ig* <linkIg>
║│5. *#fb* <linkFb>
║│6. *#twt* <linkTweet>
║╰───────────
╠════════════════════
║╭──❉ *EDUCATION* ❉──
║│1. *#wiki* <query>Wikipedia.
║│2. *#nulis* <teks>
║│3. *#quran*
║│4. *#pantun*
║│5. *#nama* <nama anda>
║│6. *#pasangan* <Rokhim & Amanda>
║│7. *#lirik* <nama lagu>
║│8. *#chord* <nama lagu>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *INFORMATION* ❉──
║│1. *#sholat* <daerah>
║│2. *#covid*
║│3. *#infogempa*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *CONTACT* ❉──
║│1. *#creator*
║│2. *#owner*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *IMPORTANT* ❉──
║│1. *#info*
║│3. *#donasi*
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *OTHERS* ❉──
║│1. *#tts* <teks>
║│2. *#quotes*
║│3. *#foto cewek*
║│4. *#foto cowok*
║│5. *#pokemon*
║│6. *#loli*
║│7. *#hentai*
║│8. *#fotoanime*
║│9. *#namaninja* <nama lu>
║│10. *#alay*  <teks>
║│11. *#say*  <teks>
║│12. *#infoig* <@username>
║╰───────────
╠════════════════════
║  *${BotName}*
╠════════════════════
║╭──❉ *SOSMED ADMIN* ❉──
║│1. *Group WhatsApp*
║│ _${grupch1}_
║│2. *Facebook <Like>*
║│ _${grupch2}_
║│3. *Instagram <Follow>*
║│ _${instagramlu}_
║│4. *Creator ${BotName}*
║│ _${whatsapplu}_
║╰───────────
╠════════════════════
║ *MADE BY RokhimBOT*
╚════════════════════`
}


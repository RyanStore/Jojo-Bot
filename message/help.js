const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    Library : *Baileys-MD*.
    Prefix : ( ${prefix} )
    Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
	Balance : $${toCommas(getBalance(sender, balance))}
  Note : Anggap _<>_ *Tidak Ada*
  
  _Ada Bug? Ketik ${prefix}report Bug mu_
  *Patuhi Rules Yang Ada*
  ${readmore}
╔═════⏣ *MAIN-MENU💣*
╠ ➪⏣ ${prefix}menu
╠ ➪⏣ ${prefix}owner
╠ ➪⏣ ${prefix}donasi
╠ ➪⏣ ${prefix}speed
╠ ➪⏣ ${prefix}runtime
╠ ➪⏣ ${prefix}cekprem
╠ ➪⏣ ${prefix}listprem
╠ ➪⏣ ${prefix}jo <Text>
╠ ➪⏣ ${prefix}simi <Text>
╚══════════════════⏣ 

╔═════⏣ *Convert/Tools Menu⚒️*
╠ ➪⏣ ${prefix}stiker <ReplyGambar/Caption>
╠ ➪⏣ ${prefix}toimg <ReplyStiker>
╠ ➪⏣ ${prefix}tovid <ReplyStiker>
╚══════════════════⏣ 

╔═════⏣ *DOWNLOAD-MENU📥*
╠ ➪⏣ ${prefix}play <Querry>
╠ ➪⏣ ${prefix}youtube <LinkYt>
╠ ➪⏣ ${prefix}tiktok <LinkTt>
╠ ➪⏣ ${prefix}tiktokaudio <LinkTt>
╠ ➪⏣ ${prefix}ytmp4 <LinkYt>
╠ ➪⏣ ${prefix}ytmp3 <LinkYt>
╠ ➪⏣ ${prefix}ytmp3vn <LinkYt>
╠ ➪⏣ ${prefix}getvideo
╠ ➪⏣ ${prefix}getmusic
╠ ➪⏣ ${prefix}igv <Instagram Video/Reels>
╠ ➪⏣ ${prefix}igf <Instagram Image>
╠ ➪⏣ ${prefix}facebook <LinkFb>
╠ ➪⏣ ${prefix}mediafire <LinkMediaFire>
╚══════════════════⏣ 

╔═════⏣ *RANDOM-MENU🎲*
╠ ➪⏣ ${prefix}quotes
╠ ➪⏣ ${prefix}gombalan
╠ ➪⏣ ${prefix}katagalau
╠ ➪⏣ ${prefix}cecan
╠ ➪⏣ ${prefix}cogan
╠ ➪⏣ ${prefix}naruto
╠ ➪⏣ ${prefix}loli
╠ ➪⏣ ${prefix}waifu
╠ ➪⏣ ${prefix}husbu
╠ ➪⏣ ${prefix}yaoi
╚══════════════════⏣ 

╔═════⏣ *PREMIUM-MENU🏅*
╠ ➪⏣ ${prefix}asupan
╠ ➪⏣ ${prefix}xnxx link
╠ ➪⏣ ${prefix}ahegao
╠ ➪⏣ ${prefix}blowjob
╠ ➪⏣ ${prefix}hentai
╠ ➪⏣ ${prefix}masturbation
╠ ➪⏣ ${prefix}pussy
╠ ➪ [ khusus Premium ya om nsfw ny ]
╚══════════════════⏣ 

╔═════⏣ *MAKER-MENU🖌️*
╠ ➪⏣ ${prefix}glitch <Text> <Text>
╠ ➪⏣ ${prefix}flaming <Text>
╠ ➪⏣ ${prefix}shadow <Text>
╠ ➪⏣ ${prefix}wolftext <Text>
╠ ➪⏣ ${prefix}cup <Text>
╠ ➪⏣ ${prefix}cup2 <Text>
╠ ➪⏣ ${prefix}romantic <Text>
╠ ➪⏣ ${prefix}writetext <Text>
╠ ➪⏣ ${prefix}lovetext <Text>
╠ ➪⏣ ${prefix}lovetext2 <Text>
╠ ➪⏣ ${prefix}undergrass <Text>
╠ ➪⏣ ${prefix}coffecup <Text>
╠ ➪⏣ ${prefix}woodheart <Text>
╠ ➪⏣ ${prefix}tahta <Text>
╠ ➪⏣ ${prefix}waifumaker <Text>
╠ ➪⏣ ${prefix}lolimaker <Text>
╠ ➪⏣ ${prefix}kanekimaker <Text>
╠ ➪⏣ ${prefix}guramaker <Text>
╠ ➪⏣ ${prefix}leaves <Text>
╠ ➪⏣ ${prefix}pornhub <Text>
╠ ➪⏣ ${prefix}3d <Text>
╠ ➪⏣ ${prefix}christmas <Text>
╠ ➪⏣ ${prefix}logowolf <Text>
╠ ➪⏣ ${prefix}logowolf2 <Text>
╚══════════════════⏣ 

╔═════⏣ *OTHER-MENU🎯*
╠ ➪⏣ ${prefix}shortlink <Link>
╠ ➪⏣ ${prefix}ssdesktop <Link>
╠ ➪⏣ ${prefix}ssweb <Link>
╠ ➪⏣ ${prefix}sshpfull <Link>
╠ ➪⏣ ${prefix}kbbi <Kata>
╠ ➪⏣ ${prefix}faktaunik
╠ ➪⏣ ${prefix}ppcp
╠ ➪⏣ ${prefix}darkjokes
╠ ➪⏣ ${prefix}meme
╠ ➪⏣ ${prefix}covid19
╠ ➪⏣ ${prefix}cerpen
╠ ➪⏣ ${prefix}cersex
╠ ➪⏣ ${prefix}wiki <Query>
╠ ➪⏣ ${prefix}igstalk <Username>
╠ ➪⏣ ${prefix}say <Text>
╠ ➪⏣ ${prefix}qr <Text>
╠ ➪⏣ ${prefix}readmore <Text>|<Text>
╠ ➪⏣ ${prefix}translate <from> <to>
╠ ➪⏣ ${prefix}hitungmundur 12 10 2022
╠ ➪⏣ ${prefix}lirik <Judul>
╠ ➪⏣ ${prefix}grupwa <Pencarian>
╠ ➪⏣ ${prefix}ytsearch <Pencarian>
╠ ➪⏣ ${prefix}pinterest <Querry>
╠ ➪⏣ ${prefix}getpp
╚══════════════════⏣ 

╔═════⏣ *ISLAMIC-MENU☪️*
╠ ➪⏣ ${prefix}quran <nomer>
╠ ➪⏣ ${prefix}quranaudio <surah> <ayat>
╠ ➪⏣ ${prefix}listquran <nomer>
╠ ➪⏣ ${prefix}kisahnabi <Nama Nabi>
╚══════════════════⏣ 


╔═════⏣ *NULIS-MENU📝*
╠ ➪⏣ ${prefix}nuliskanan <Text>
╠ ➪⏣ ${prefix}nuliskiri <Text>
╠ ➪⏣ ${prefix}foliokanan <Text>
╠ ➪⏣ ${prefix}foliokiri <Text>
╚══════════════════⏣ 


╔═════⏣ *FUN-MENU🗡️*
╠ ➪⏣ ${prefix}halah
╠ ➪⏣ ${prefix}hilih
╠ ➪⏣ ${prefix}heleh
╠ ➪⏣ ${prefix}huluh
╠ ➪⏣ ${prefix}holoh 
╚══════════════════⏣ 


╔═════⏣ *Game&FUN-Menu2🧢*
╠ ➪⏣ ${prefix}delttc
╠ ➪⏣ ${prefix}delttc
╠ ➪⏣ ${prefix}suit
╠ ➪⏣ ${prefix}slot
╠ ➪⏣ ${prefix}tebakgambar
╠ ➪⏣ ${prefix}apakah <Query>
╠ ➪⏣ ${prefix}kapankah <Query>
╠ ➪⏣ ${prefix}rate <Query>
╠ ➪⏣ ${prefix}gantecek <Nama>
╠ ➪⏣ ${prefix}cantikcek <Nama>
╠ ➪⏣ ${prefix}gimana <Query>
╠ ➪⏣ ${prefix}gaycek <Nama>
╠ ➪⏣ ${prefix}lesbicek <Nama>
╠ ➪⏣ ${prefix}sangecek <Nama>
╠ ➪⏣ ${prefix}gimana <Query>
╠ ➪⏣ ${prefix}bisakah <Query>
╠ ➪⏣ ${prefix}cekme
╠ ➪⏣ ${prefix}dadu
╚══════════════════⏣ 

╔═════⏣ *PAYMENT&BANK💰*
╠ ➪⏣ ${prefix}limit
╠ ➪⏣ ${prefix}balance
╠ ➪⏣ ${prefix}transfer @tag <jumlah>
╠ ➪⏣ ${prefix}buyglimit <Jumlah>
╠ ➪⏣ ${prefix}buylimit <Jumlah>
╠ ➪⏣ ${prefix}topbalance
╚══════════════════⏣ 

╔═════⏣ *GROUP-MENU👥*
╠ ➪⏣ ${prefix}group <Open/Close>
╠ ➪⏣ ${prefix}setdesc
╠ ➪⏣ ${prefix}setppgrup
╠ ➪⏣ ${prefix}linkgrup
╠ ➪⏣ ${prefix}setnamegc
╠ ➪⏣ ${prefix}revoke
╠ ➪⏣ ${prefix}hidetag <Text>
╠ ➪⏣ ${prefix}kick <@tag>
╠ ➪⏣ ${prefix}add <@tag>
╚══════════════════⏣ 

╔═════⏣ *OWNER-MENU👨‍💼*
╠ ➪⏣ > evalcode
╠ ➪⏣ $ executor
╠ ➪⏣ x evalcode-2
╠ ➪⏣ ${prefix}setppbot
╠ ➪⏣ ${prefix}textchat
╠ ➪⏣ ${prefix}exif
╠ ➪⏣ ${prefix}leave
╠ ➪⏣ ${prefix}addprem
╠ ➪⏣ ${prefix}delprem
╠ ➪⏣ ${prefix}broadcast
╠ ➪⏣ ${prefix}addbalance
╠ ➪⏣ ${prefix}delbalance
╠ ➪⏣ ${prefix}ban
╠ ➪⏣ ${prefix}unban
╠ ➪⏣ ${prefix}public
╠ ➪⏣ ${prefix}self
╚══════════════════⏣ 

╔═════⏣ *THANKS TO📨*
╠ ➪⏣ Baileys-Md (Adiwa Jshing)
╠ ➪⏣ M Hadi Firmansya (Hadi Api)
╠ ➪⏣ @hardianto.xyz
╚══════════════════⏣ 


╔═════⏣ *RULES-BOT!⚙️*
╠ ➪⏣ Dilarang spam bot !
╠ ➪⏣ Beri Jeda 3 Detik !
╠ ➪⏣ Jika Bot Tidak Merespon,Coba Kembali
╠ ➪⏣ Dilarang Telpon Dan Vc Bot <Block Dari Bot>
╚══════════════════⏣`
}
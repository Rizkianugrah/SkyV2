let fs = require('fs')
let handler = async (m, { conn }) => {
let teks = 'Creator'
let numberowner = global.numberowner
let teks = 'Pilih dibawah kak'
const sections = [
   {
	title: `${htjava} OWNER –––––––––·•`,
	rows: [
	    {title: "📱 • Nomor NissaBotz", rowId: ".owner nomor"},
	{title: "🎨 • Biodata NissaBotz", rowId: ".biodata"},
	{title: "🌎 • Script yang NissaBotz gunakan", rowId: ".sc"},
	]
    },{
	title: `${htjava} SUPPORT ME –––––––·•`,
	rows: [
	    {title: "💹 • Donasi", rowId: ".donasi"},
	{title: "🔖 • Sewa", rowId: ".sewa"},
	]
  },
]

handler.help = ['owner']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i
export default handler

let prefix = '/';
let prefix_admin = '-';
let robotEmoji = '🤖';
let mediaSticker, originalQuotedMessage, song, languageCode, youtubeType;
let paidUsers = [];
let physicsUsers = [];
let premiumGroups = [];

/* Youtube */
// Youtube variables to be passed to yt-dlp
const commandsYoutubeDownload = {
  1: {
    notice: `${robotEmoji} Adjunta un enlace de YouTube, no seas tan tímido.`,
    commandMode: null,
  },
  2: {
    commandMode: 'fullVideo',
  },
  3: {
    commandMode: 'cutAtStart',
  },
  4: {
    commandMode: 'cutVideo',
  },
  default: {
    notice: `${robotEmoji} Sintaxis incorrecta. Solo envía el comando y el enlace de YouTube.`,
    commandMode: null,
  },
};

// User and admin commands
const commands  = {
  help: 'help',
  sticker: 'sticker',
  url: 'url',
  spot: 'spot',
  cae: 'cae',
  fromis: 'fromis',
  w: 'w',
  yt: 'yt',
  play: 'play',
  doi: 'doi',
	tex: 'tex',
	paper: 'paper',
	author: 'author',
	doc: 'doc',
	drive: 'drive',
}

const adminCommands = {
	todos: 'todos',
	ban: 'ban',
};

module.exports = {
	prefix,
	prefix_admin,
	robotEmoji,
	mediaSticker,
	originalQuotedMessage,
	song,
	languageCode,
	youtubeType,
	paidUsers,
	physicsUsers,
	premiumGroups,
	commandsYoutubeDownload,
	commands,
	adminCommands,
};
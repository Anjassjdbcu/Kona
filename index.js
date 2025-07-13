/**
  ᴍᴀᴏᴄʜᴀɴ ᴍᴀɴᴜᴇʟ || ᴄʜᴀʏ ᴍᴅ
 
 ᴊᴇɴɪs sᴄʀɪᴘᴛ : ᴍᴀᴏᴄʜᴀɴ ᴍᴀɴᴜᴇʟ || ᴄʜᴀʏ ᴍᴅ
 ᴠᴇʀsɪᴏɴ : 1.4 ᴜᴘᴅᴀᴛᴇ
 
 ᴄʀᴇᴀᴛᴇᴅ ʙʏ : FALLZX ɪɴғɪɴɪᴛʏ
 ʙᴀsᴇ sᴄʀɪᴘᴛ  ᴏʀɪ :
 -  ʀɪᴢᴀʟ-ᴅᴇᴠ
 - ғᴀʟʟxᴅ ( ᴄʀᴇᴀᴛᴇᴅ ᴍᴀᴏᴄʜᴀɴ ᴍᴅ  ) 
 ᴄʀᴇᴅɪᴛ ᴊᴀɴɢᴀɴ ᴅɪʜᴀᴘᴜs
**/
const { spawn } = require('child_process');
const path = require('path');

function startHaruka() {
	let args = [path.join(__dirname, 'main.js'), ...process.argv.slice(2)]
	console.log([process.argv[0], ...args].join('\n'))
	let p = spawn(process.argv[0], args, {
		stdio: ['inherit', 'inherit', 'inherit', 'ipc']
	})
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting Bot...')
			p.kill()
			startHaruka()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		if (code == '.' || code == 1 || code == 0) startHaruka()
	})
};
startHaruka()

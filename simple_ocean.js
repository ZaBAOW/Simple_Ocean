const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzY5MTc0MDExMDA5MTcxNDU2.DMUrmw.6J3Mr8sP4YgLAjUyAHc4dinmL-Q';
const ocean_msg = "OCEAN MAN 🌊 😍 Take me by the hand ✋ lead me to the land that you understand 🙌 🌊 OCEAN MAN 🌊 😍 The voyage 🚲 to the corner of the 🌎 globe is a real trip 👌 🌊 OCEAN MAN 🌊 😍 The crust of a tan man 👳 imbibed by the sand 👍 Soaking up the 💦 thirst of the land 💯";
var counter = 0;


client.on('ready', () => {
  console.log('I am ready!');
  let channel = client.channels.find('name', 'Test');

  channel.join().then(connection => console.log('Connected')).catch(console.error);
;});



client.on('message', message => {
	if(message.content === ">stop"){
		counter = 2;
		message.channel.send("Ok I'll stop it :frowning2:");
	} else if(counter === 0){
  		message.reply(ocean_msg);
  		// message.channel.send("?play ocean man");
  		counter++;
	} else if(counter > 0 && counter < 2 && message.content != ocean_msg){
		counter--;
	}  else if(message.content === ">start"){
		counter = 0;
		message.channel.send("HERE WE GO!!! :ocean: :ocean: :ocean: ");
	}
});


client.login(token);
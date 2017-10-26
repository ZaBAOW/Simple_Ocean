const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzY5MTc0MDExMDA5MTcxNDU2.DMUrmw.6J3Mr8sP4YgLAjUyAHc4dinmL-Q';
const ocean_msg_1 = "OCEAN MAN 🌊 😍 Take me by the hand ✋ lead me to the land that you understand 🙌 🌊 OCEAN MAN 🌊 😍 The voyage 🚲 to the corner of the 🌎 globe is a real trip 👌 🌊 ";
const ocean_msg_2 = "OCEAN MAN 🌊 😍 The crust of a tan man 👳 imbibed by the sand 👍 Soaking up the 💦 thirst of the land 💯";
// const ocean_msg_simple = "OCEAN MAN Take me by the hand lead me to the land that you understand OCEAN MAN The voyage to the corner of the globe is a real trip OCEAN MAN The crust of a tan man imbibed by the sand Soaking up the thirst of the land";
var counter = 0;


client.on('ready', () => {
  console.log('I am ready!');
  let channel = client.channels.find('name', 'Test');

  channel.join().then(connection => console.log('Connected')).catch(console.error);
;});



client.on('message', message => {
	if(message.content === "stop?"){
		counter = 3;
		message.channel.send("Ok I'll stop it :frowning2:", {tts: true});
	} else if(message.content === ">start"){
		counter = 0;
		message.channel.send("HERE WE GO!!! :ocean: :ocean: :ocean:", {tts:true});
	} else if(message.content === ocean_msg_1 || message.content === ocean_msg_2){
		return;
	} else if(counter === 0){
  		message.channel.send(ocean_msg_1, {tts: true});
  		message.channel.send(ocean_msg_2, {tts: true});
  		// message.channel.send("?play ocean man");
  		counter++;
	} else if(counter === 1){
		counter--;
	}
});


client.login(token);
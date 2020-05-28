
const config = require('../config.json');
// these roles need to be created *manually* on the server 
const { roles } = config;

module.exports = {
	name: 'add',
    description: `Assign roles to yourself, available roles are: ${roles.join(', ')}`,
    usage: '<role>',
    guildOnly: true,
    args: true,
	execute(message, args) {
        const arg = args.join(" ")
        const roleString = roles.find(r => r === arg)
        const user = message.mentions.users.first();
        if(typeof roleString === 'undefined') {
            return(message.reply(`'${arg}' is not a valid role. If you think it should be added ask in <#714003691778211942>`))
        }
        let guild = message.member.guild; 
        const role = guild.roles.cache.find(r => r.name === arg);
        message.member.roles.add(role);
        
		message.reply(`you should have the '${roleString}' role now`);
	},
};
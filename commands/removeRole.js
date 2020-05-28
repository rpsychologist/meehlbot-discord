
const config = require('../config.json');
const { roles } = config;

module.exports = {
	name: 'remove',
    description: 'Remove a self-assigned role',
    usage: '<role>',
    guildOnly: true,
    args: true,
	execute(message, args) {
        const arg = args.join(" ")
        const roleString = roles.find(r => r === arg)
        if(typeof roleString === 'undefined') {
            return(message.reply(`'${arg}' is not a valid role`))
        }
        let guild = message.member.guild; 
        const role = guild.roles.cache.find(r => r.name === arg);
        message.member.roles.remove(role);
		message.reply(`the '${roleString}' role should be removed now.`);
	},
};
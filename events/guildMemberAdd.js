module.exports = member => {
    let guild = member.guild; 
    let memberId= member.user.id; 
    if(guild.systemChannel) { 
        guild.systemChannel.send(`Welcome to the **Git Gud Science** discord, <@${memberId}>! Please read the instructions in <#714057330219548693> and join the conversations!`);
    }
  };
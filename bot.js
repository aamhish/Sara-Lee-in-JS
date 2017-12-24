var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var chantmode = false;
var askmode = false;
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messag
 
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                }); break;
            case 'whatisthebestteam':
                 bot.sendMessage({
                  to: channelID,
                    message: '<@'+userID+'> The best team is 1403! How do you not know?'});
               
 
     
 
            break;
            // Just add any case commands if you want to..
         }
     }
if (message.substring(0, 1) == '*') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });break;
     case 'justforlols':
                bot.sendMessage({
                    to: channelID,
                    message: '+sleep'
                });break;
        case 'chantmodeon':
        bot.sendMessage({
                    to: channelID,
                    message: 'The numbers and the pom-poms are out. Lets chant!!'
       
                }); chantmode = true; break;
        case 'chantmodeoff':
        bot.sendMessage({
                    to: channelID,
                    message: 'Chanting has been completed for now.'
       
                }); chantmode = false; break;
    case 'askmodeon':
        bot.sendMessage({
                    to: channelID,
                    message: 'The numbers and the pom-poms are out. Lets chant!!'
       
                }); chantmode = true; break;
        case 'askmodeoff':
        bot.sendMessage({
                    to: channelID,
                    message: 'Chanting has been completed for now.'
       
                }); chantmode = false; break;
            case 'whatisthebestteam':
                 bot.sendMessage({
                  to: channelID,
                    message: '<@'+userID+' > The best team is 1403! How do you not know?'});
               
 
     
 
            break;
            // Just add any case commands if you want to..
         }
     }
   
 
     if(message.includes("sleep")||message.includes("Sleep")||message.includes("tired")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: '<@'+userID+'>, Just go to sleep.'});
               
 
     }
      if(message.includes("night")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: '<@'+userID+'>, Good night. Go to sleep now.'});
               
 
     }
if(chantmode){
     if(message.includes("aussie aussie aussie")||message.includes("Aussie Aussie Aussie")||message.includes("Aussie Aussie Aussie!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'oi oi oi'});
               
 
     }
     else if(message.includes("aussie")||message.includes("Aussie")||message.includes("Aussie!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'oi'});
               
 
     }
if(message.includes("14!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: '03!'});
               
 
     }
if(message.includes("S!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'L!'});
               
 
     }
if(message.includes("E!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'E!'});
               
 
     }
if(message.includes("P!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'Yes, <@'+userID+'> you should go to sleep '});
               
 
     }
if(message.includes("Sara!")||message.includes("sara!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'Lee!'});
               
 
     }
 
if(message.includes("31!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: '32!'});
               
 
     }
if(message.includes("blowtorches")||message.includes("Blowtorches")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: '<@338163785082601473>, time to help these kids'});
               
 
     }
 
if(message.includes("Cheesy!")||message.includes("cheesy!")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'POOFS'});
               
 
     }
 
}
 
 
 
 if(message.includes("prog time")){
        if(user!=="1403 Helper")
         bot.sendMessage({
                  to: channelID,
                    message: 'Did someone say prog time? *cries on the inside*'});
               
 
     }
   
});

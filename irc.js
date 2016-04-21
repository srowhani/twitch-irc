#!/usr/bin/env node

;(function(tmi, chalk, args){
  if(!args[2]) throw new Error("Must supply channel name as argument");
  else if(args[2] == '-h'){
    console.log(chalk.blue.bold('node irc.js <channel name>'));
    return;
  }
  var client = tmi.client();
  client.connect().then(function(data){
    console.log('Connected!');
    client.join(args[2]).then(function(){
      console.log('Successfully joined ' + args[2]);
    });
  });
  client.on('chat', function(channel,user,msg, self){
    console.log([chalk.blue.bold(user.username), chalk.green(msg)].join(' '));
  });
})
(require('tmi.js'), 
 require('chalk'),
 process.argv);

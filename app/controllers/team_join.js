'use strict';

const rtmClient = require('../slack_main').slack.rtm;
const webClient = require('../slack_main').slack.web;
const dataStore = require('../slack_main').slack.dataStore;

module.exports = (message) => {

  var generalChannel = dataStore.getChannelByName('general');
  var codingChannel = dataStore.getChannelByName('coding');
  var eventsChannel = dataStore.getChannelByName('events');
  var jobsChannel = dataStore.getChannelByName('job-offers');
  var showcaseChannel = dataStore.getChannelByName('projects_showcase');

  var user = message.user;

  /*
   * @see https://api.slack.com/docs/formatting
   */
  var response = `<@${user.id}|${user.name}> Hello! ` +
                 `This is the advanced AI(a level beyond R2D2) bot built by the Athens-Devs team. I am welcoming you aboard! ` +
                 `This is the <#${generalChannel.id}|${generalChannel.name}> channel where we usually hang out. There is also the <#${codingChannel.id}|${codingChannel.name}>, the <#${events.id}|${events.name}> to get involved in our community and see what events are available, the <#${jobsChannel.id}|${jobsChannel.name}> to post a job and many more. ` +
                 `Also you can showcase your projects and get feeback at the <#${showcaseChannel.id}|${showcaseChannel.name}> channel. Welcome again and we expect to hear from you!`;

  webClient.dm.open(user.id,function(err,data){
    rtmClient.sendMessage(response,data.channel.id,function(){
      console.log("message succesfully sent to user "+user.name);
    })
  });
};

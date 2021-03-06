module.exports = {
    name: "laugh",
    description: "Plays a laugh track",
    async execute(message, args) {
      const { channel } = message.member.voice;
      const queue = message.client.queue.get(message.guild.id);
  
      const queueConstruct = {
        textChannel: message.channel,
        channel,
        connection: null,
        songs: [],
        loop: false,
        volume: 100,
        playing: true
      };
  
      message.client.queue.set(message.guild.id, queueConstruct);
  
      try {
        queueConstruct.connection = await channel.join();
        const dispatcher = queueConstruct.connection
          .play('./sounds/Sitcom.mp3')
          .on('finish', () => {
            message.client.queue.delete(message.guild.id);
            channel.leave();
          })
          .on("error", err => {
            message.client.queue.delete(message.guild.id);
            channel.leave();
            console.error(err);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  
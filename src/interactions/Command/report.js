const { CommandInteraction, Client } = require("discord.js");
const { SlashCommandBuilder } = require("discord.js");
const Discord = require("discord.js");

const webhookClient = new Discord.WebhookClient({
  id: "1052600039446417458",
  token: "Trt7ZrMLOpi-hPq_XiCj2LFa31Sk1SS2Pf5zIDB8Xlmj2hIGxvi2heVuVT5j6Cuy-6gs",
});

module.exports = {
  data: new SlashCommandBuilder()
    .setName("report")
    .setDescription("Report a bug or user to the developers")
    .addStringOption((option) =>
      option
        .setName("type")
        .setDescription("The type of your report")
        .setRequired(true)
        .addChoices(
          { name: "Bug", value: "bug" },
          { name: "User", value: "user" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("description")
        .setDescription("Description with your report")
        .setRequired(true)
    ),
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */

  run: async (client, interaction, args) => {
    const type = interaction.options.getString("type");
    const desc = interaction.options.getString("description");

    if (type == "bug") {
      const embed = new Discord.EmbedBuilder()
        .setTitle(`📣・New bug report!`)
        .addFields(
          { name: "Report category", value: "Bug", inline: true },
          {
            name: "Submitted by",
            value: `${interaction.user.tag}`,
            inline: true,
          }
        )
        .setDescription(`${desc}`)
        .setColor(client.config.colors.normal);
      webhookClient.send({
        username: "Bot Reports",
        embeds: [embed],
      });

      client.succNormal(
        {
          text: `Bug successfully sent to the developers!`,
          type: "ephemeraledit",
        },
        interaction
      );
    } else if (type == "user") {
      const embed = new Discord.EmbedBuilder()
        .setTitle(`📣・New user report!`)
        .addFields(
          { name: "Report category", value: "User", inline: true },
          {
            name: "Submitted by",
            value: `${interaction.user.tag}`,
            inline: true,
          }
        )
        .setDescription(`${desc}`)
        .setColor(client.config.colors.normal);
      webhookClient.send({
        username: "Bot Reports",
        embeds: [embed],
      });

      client.succNormal(
        {
          text: `User report successfully sent to the developers!`,
          type: "ephemeraledit",
        },
        interaction
      );
    }
  },
};

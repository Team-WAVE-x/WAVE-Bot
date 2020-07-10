module.exports = (client) => {
  console.log('Logged in As ' + client.user.tag)
  client.user.setActivity('Team WAVE 문의는 DM으로!')
}

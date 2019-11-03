// Getters

computed: mapState({
  unreadFrom: (state) => state
    .filter((message) => !message.read)
    .map((message) => message.user.name)
})

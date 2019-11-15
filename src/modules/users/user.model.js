exports.User = function User({ name, avatar }) {
  if (!name) {
    throw new Error('User must have a name.')
  }
  if (!avatar) {
    throw new Error("User must have an avatar.")
  }
  return {
    name: name,
    avatar: avatar
  };
}
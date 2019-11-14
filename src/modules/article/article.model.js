exports.Article = function Article({ userId, title, text, tags = [] }) {
  if (!userId) {
    throw new Error('Article must have an userId.')
  }
  if (!title) {
    throw new Error('Article must have a title.')
  }
  if (!text) {
    throw new Error('Article must have a text.')
  }
  if (!tags && tags.length > 0) {
    throw new Error('Article must have at least one tag.')
  }
  return {
    userId: userId,
    title: title,
    text: text,
    tags: tags
  };
}
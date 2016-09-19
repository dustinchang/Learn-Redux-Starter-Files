// increment
export function increment(index) {
  return { //An Action is just an object with some info of:
    type: 'INCREMENT_LIKES', // What happened
    index // And what needs to change
  }
}

// add comment
export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

// remove comment

export function removeComment(postId, i) {
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  }
}

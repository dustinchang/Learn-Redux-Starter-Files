import React from 'react';

const Comments = React.createClass({
  renderComment(comment, index) {
    return (
      <div className='comment' key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className='remove-comment'>&times;</button>
        </p>

      </div>
    )
  },
  handleSubmit(e) { //When you submit any event, it passes an event
    e.preventDefault(); // Prevents regular refresh(page) after submitting form
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author,comment);
  },
  render() {
    return (
      <div className="comments">
        {this.props.postComments.map(this.renderComment)}
        <form ref='commentForm' className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref='author' placeholder='author'></input>
          <input type="text" ref='comment' placeholder='comment'></input>
          <input type='submit' hidden></input> {/*hidden for the user to be able to hit submit on enter*/}
        </form>
      </div>
    )
  }
});

export default Comments;

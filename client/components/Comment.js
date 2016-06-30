import React from 'react';

const Comment = React.createClass({
    renderComment(comment, i){
        <div className="comment" i={i}>
            <p>
                <strong>
                    {comment.user}
                </strong>
                <button className="remove-comment" onclick={this.props.removeComment.bind(null, this.props.params.postId)}>
                    &times;
                </button>
            </p>
        </div>
    },
    handleSubmit(event){
        event.preventDefault();
        const { postId }= this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },
    render() {
        return (
            <div className="comment">
                {this.props.postComments.map(this.renderComment)}
                <form ref="commentForm" className="comment-form" onsubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <submit type="hidden"/>
                </form>
            </div>
        )
    }
});
export default Comment;
import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentItem from "./CommentItem";

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    return comments
      .map(comment => (
        <CommentItem key={comment._id} comment={comment} postId={postId} />
      ))
      .sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
      });
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;

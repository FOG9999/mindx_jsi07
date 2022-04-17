import React, { Component } from 'react';

class Post extends Component {
    state = {}
    render() {
        return (
            <div className='post-container'>
                <div className="header-container px-2 py-1" style={{ fontWeight: 500 }}>
                    {
                        this.props.post.title
                    }
                </div>
                <div className='content py-2'>
                    {this.props.post.content}
                </div>
                <div className="post-footer py-1 row">
                    <div className="col like-div border">
                        {this.props.post.like} like
                    </div>
                    <div className='col dislike-div py-1 border'>
                        {this.props.post.dislike} dislike
                    </div>
                    <div className='col share-div py-1 border'>
                        Share
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;

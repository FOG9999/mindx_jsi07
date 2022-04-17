import React, { Component } from 'react';
import Post from './Post';

class ListPost extends Component {
    state = {
        listPosts: [
            {
                id: 1,
                title: 'Post 1',
                content: 'Post content 1',
                like: 1,
                dislike: 5
            },
            {
                id: 2,
                title: 'Post 2',
                content: 'Post content 2',
                like: 11,
                dislike: 5
            },
            {
                id: 3,
                title: 'Post 3',
                content: 'Post content 3',
                like: 11,
                dislike: 15
            },

            {
                id: 4,
                title: 'Post 4',
                content: 'Post content 4',
                like: 10,
                dislike: 51
            },
            {
                id: 5,
                title: 'Post 5',
                content: 'Post content 5',
                like: 10,
                dislike: 55
            },
        ]
    }

    renderPosts = () => {
        return <div>
            {
                this.state.listPosts.map((post, index) => {
                    return <Post post={post} key={index} />
                })
            }
        </div>
    }

    onAddPost = () => {
        // this.state.listPosts.push({
        //     id: 6,
        //     title: 'Post 6',
        //     content: 'Post content 6',
        //     like: 11,
        //     dislike: 15
        // })

        this.setState({
            listPosts: [...this.state.listPosts, {
                id: 6,
                title: 'Post 6',
                content: 'Post content 6',
                like: 11,
                dislike: 15
            }]
        })
    }

    render() {
        return (
            <div className='list-post-container'>
                <div className='text-center'>
                    <h2>
                        Welcome to my newfeeds
                    </h2>
                </div>

                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        {
                            this.renderPosts()
                        }
                        <div className='add-post'>
                            <button className="btn btn-primary" onClick={this.onAddPost}>Add post</button>
                        </div>
                    </div>

                    <div className="col-3"></div>
                </div>

            </div>
        );
    }
}

export default ListPost;
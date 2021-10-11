import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'

class Posts extends Component {
    // state = {
    //     post: null
    // }
    // componentDidMount() {
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    //     .then(res => {
    //         this.setState({
    //             post: res.data
    //         })
    //         console.log(res);
    //     })
        
    // }

    handleClick = (e) => {
        let post = this.props.post.filter( post => {
            
        })
    } 
  render() { 
    const post = this.props.post ? (
        <div className="post">
            <h4 className="center">
                {this.props.post.title}
            </h4>
            <p>{this.props.post.body}</p> 
            <div className="container">
                <button className="btn grey" onClick={this.handleClick}>
                    <i className="material-icons">delete</i>
                </button>
            </div>
        </div>
    ) : (
        <div className="center">
          ...Loading Post
        </div>
    )
    return (
      <div className="container home">
          <h4>{post}</h4>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id),
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id })}
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (Posts)
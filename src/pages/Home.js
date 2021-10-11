import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import codec from '../geocodec.png'
import {connect} from 'react-redux'
class Home extends Component {

    // state = {
    //     posts: []
    // }
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts/')
    //     .then(res => {
    //         console.log(res);
    //         this.setState({ 
    //             posts: res.data.slice(0, 10)
    //         })
    //     })
    // }
  render() {
      console.log(this.props);
      const {posts} = this.props;
      const postList = posts.length ? (
          posts.map(post => {
              return(
                  <div className="post card" key={post.id}>
                      <img src={codec} alt="GeoCodec logo" width={200} />
                      <div className="card-content">
                          <Link to={'/' + post.id}>
                          <span className="card-title red-text darkekn-4">
                              {post.title}
                          </span>
                          </Link>
                          <p>{post.body}</p>
                      </div>
                  </div>
              )
          })
      ) : (
          <div className="center">
            No post yet
          </div>
      )
    return (
      <div className="container home">
          <h4 className="center">
          {postList}
          </h4>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home)
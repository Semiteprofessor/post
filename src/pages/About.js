import React, { Component } from 'react'
import Rainbow from '../hoc/Rainbow';

class About extends Component {
  render() {
    return (
      <div className="container">
          About Us

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quisquam, repudiandae sit praesentium molestiae quae, atque tempore dolore perspiciatis aliquam recusandae vero, laboriosam pariatur assumenda autem aliquid enim itaque porro?</p>
      </div>
    )
  }
}

export default Rainbow(About)

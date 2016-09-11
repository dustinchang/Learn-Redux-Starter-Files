import React from 'react';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {/*Key is a React prop, can't actually access it so that's why we send the index i as a prop as well.*/}
        {this.props.posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post} />)}

      </div>
    )
  }
});

export default PhotoGrid;

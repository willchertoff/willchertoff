import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames';

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    }
  }
  onImageLoad = () => {
    this.setState({ loaded: true });
  }
  componentDidMount() {
    const imgTag = ReactDOM.findDOMNode(this.refs.img);
    const imgSrc = imgTag.getAttribute('src');
    let img = new window.Image();
    img.onload = this.onImageLoad;
    img.src = imgSrc;
  }
  render() {
    const { className, ...props } = this.props;
    const imgClasses = 'image';
    const rootClassName = classNames(className, 'image', {
      'image-loaded': this.state.loaded,
    });
    return (
      <img ref="img" {...props} onClick={this.clicked} className={rootClassName}/>
    );
  }
}

export default Image;
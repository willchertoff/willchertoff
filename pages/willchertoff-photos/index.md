---
title: Personal Photography Site
date: "2017-01-17T22:12:03.284Z"
readNext: "/hcpd/"
path: "/willchertoff-photos/"
---

Personal photography blog with lightweight store integration via Snipcart. 

I set out to develop a blog like site to showcase certain photos and experiences I had while traveling. This project, although a simple idea, went through multiple iterations before the optimal user experience was derived. 

To start, a simple Instagram like layout was thought to be the optimal user experience for a photo blog. 

I constructed this site using React and Redux for data management. While both are prolific packages, I soon found out that my page weight was too heavy. In addition to Redux being unnecessary, I wasn't prefacing mobile experience before desktop, which leads to a poor user experience on both platforms. 

Enter redesign.

This time I started my development process with a simple question. When looking at a collection of photos, what do I expect?. Or, what feels natural? 

In terms of performance, I optimized my React Image component to load the image into the DOM with the trick below.

```javascript
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
```

Now my single page site was rendering quite quickly.

Check it out [here](http://essence.netlify.com)
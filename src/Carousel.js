import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleIndexClick = this.handleIndexClick.bind(this);
    this.state = {
      photos: [],
      active: 0
    };
  }
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    // console.log(media);
    photos = media.photos.photo.filter(p => p["@size"] === "pn");
    console.log(photos);
    return { photos };
  }

  handleIndexClick(e) {
    this.setState({
      active: +e.target.dataset.index
    });
  }

  render() {
    return (
      <div className="carousel">
        <img
          src={this.state.photos[this.state.active].value}
          alt="primary animal"
        />
        <div className="carousel-smaller">
          {this.state.photos.map((photo, index) => (
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={photo.value}
              className={index === this.state.active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;

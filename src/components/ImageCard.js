import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div
        style={{ gridRowEnd: `span ${this.state.spans}` }}
        className="grid-hovereffect"
      >
        <figure class="hover-effect9">
          <img ref={this.imageRef} alt={description} src={urls.regular} />
          <figcaption>
            <p>{description}</p>
          </figcaption>
        </figure>
      </div>
    );
  }
}

export default ImageCard;

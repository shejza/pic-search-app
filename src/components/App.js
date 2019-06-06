import React from "react";
import unsplash from "../api/usplash";

import SearchBar from "./SearchBar";
import usplash from "../api/usplash";
import ImageList from "./ImageList";
import "./ImageList.css";

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await usplash.get(
      "https://api.unsplash.com/search/photos",
      {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID 71428b7fe178ca5a765692218663c24577f55ca0338fa85955a09e782e151d61"
        }
      }
    );
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import giphy from "giphy-api";

import SearchBar from "./search_bar";
import Gif from "./gif";
import GifList from "./gif_list";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "UyMFzzzXCzuqk"
    };
  }

  search = (query) => {
    giphy("vBI6Er21U9XWFbjng9NdRnGZCm5q8WnM").search(
      {
        q: query,
        rating: "g"
      },
      (err, result) => {
        this.setState({
          gifs: result.data
        });
      }
    );
  };

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

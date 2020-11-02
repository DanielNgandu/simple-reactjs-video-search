//import React Components
import React from "react";

//import React Dom
import ReactDOM from "react-dom";

//import 3rd party libs
import axios from "axios";

//import custom components here
import SearchBar from "./SearchBar";

import VideoList from "./VideoList";
import youtube from "../api/youtube";
class App extends React.Component {
  state = { videos: [] , pageInfo: [] };

  onSearchSubmit = async (searchkeyword) => {
    console.clear();

    console.log(searchkeyword);
    //pass searched word to axios
    const response = await youtube.get("/search",
      {
          q: searchkeyword
      }
    );

    //print response
    console.log(response.data);

    //set state
    this.setState({ videos: response.data.items });
    this.setState({ pageInfo: response.data });
  };

  render() {
    return (
      <div >
        <SearchBar onSubmitProp={this.onSearchSubmit} />
        <p>Found: {this.state.pageInfo.totalResults
        }</p>
        <VideoList videos ={this.state.videos} />
      </div>
    );
  }
}

export default App;

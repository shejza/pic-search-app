import React from "react";

class SearchBar extends React.Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <h2 class="ui teal center aligned header">Search Images</h2>
        <div class="ui right aligned category search">
          <form onSubmit={this.onFormSubmit}>
            <div class="ui fluid icon input green">
              <input
                placeholder="Search images..."
                className="prompt"
                type="text"
                onChange={e => this.setState({ term: e.target.value })}
              />
              <i class="search icon" />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;

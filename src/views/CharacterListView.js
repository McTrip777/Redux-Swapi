import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { CHARS_FETCHING, CHARS_SUCCESS, CHARS_FAILURE } from "./actions";
import Character from '../components/Character'


class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  characters: state.characters,
  isLoading: state.isLoading,
})
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    /* action creators go here */
  }
)(CharacterListView);

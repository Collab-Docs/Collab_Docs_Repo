import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor } from 'draft-js';
import { onChange } from '../actions/index';

import { EditorState } from 'draft-js';


class MainContainer extends React.Component {

  render() {
    return (
      <div>
        <h4>Editor</h4>
        <div className="editor">
        <Editor
          editorState = {this.props.editorState || EditorState.createEmpty()}
          onChange = {this.props.onChange}
        />
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        editorState: state.editorState
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (editorState) => {
          dispatch(onChange(editorState));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { onChange } from '../actions/index';

class MainContainer extends React.Component {
  _onBoldClick() {
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'BOLD'
    ));
  }

  _onItalicClick() {
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'ITALIC'
    ));
  }

  _onUnderlineClick() {
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'UNDERLINE'
    ));
  }

  render() {
    return (
      <div>
        <div className="editor">
          <button onClick={this._onBoldClick.bind(this)}>Bold</button>
          <button onClick={this._onItalicClick.bind(this)}>Italicize</button>
          <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
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

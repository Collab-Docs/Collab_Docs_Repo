import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { onChange } from '../actions/index';

const styleMap = {
   'FONTSIZE': {
     fontSize: 10,
   },
   'FONTCOLOR': {
     color: "red"
   }
  };

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

  _onFontSizeClick() {
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'FONTSIZE'
    ));
  }

  _onFontColorClick() {
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'FONTCOLOR'
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onItalicClick.bind(this)}>Italicize</button>
        <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
        <button onClick={this._onFontSizeClick.bind(this)}>Font Size</button>
        <button onClick={this._onFontColorClick.bind(this)}>Font Color</button>
        <div className="editor">
          <Editor
          editorState = {this.props.editorState || EditorState.createEmpty()}
          onChange = {this.props.onChange}
          customStyleMap = {styleMap}
          />
      </div>
    </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        editorState: state.editorState,
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

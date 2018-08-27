import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { onChange } from '../actions/index';

const styleMap = {
  'FONTSIZE_10': {
    fontSize: 10,
  },
  'FONTSIZE_12': {
    fontSize: 12,
  },
  'FONTSIZE_14': {
    fontSize: 14,
  },
  'FONTCOLOR_red': {
    color: "red"
  },
  'FONTCOLOR_black': {
    color: "black"
  },
  'FONTCOLOR_blue': {
    color: "blue"
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

  _onFontSizeClick(e) {
    console.log(e.target.getAttribute("value"))
    let fontSize = e.target.getAttribute("value");
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'FONTSIZE_'+fontSize,
    ));
  }

  _onFontColorClick(e) {
    let fontColor = e.target.getAttribute("value");
    this.props.onChange(RichUtils.toggleInlineStyle(
      this.props.editorState,
      'FONTCOLOR_'+fontColor,
    ));
  }

  render() {
    return (
      <div>
        <button onClick={this._onBoldClick.bind(this)}>Bold</button>
        <button onClick={this._onItalicClick.bind(this)}>Italicize</button>
        <button onClick={this._onUnderlineClick.bind(this)}>Underline</button>
        <div className="dropdown">
          <button>Font Size</button>
          <div className="dropdown-content">
            <a href="#" onClick={(e) => this._onFontSizeClick(e) } value='10'>10</a>
            <a href="#" onClick={this._onFontSizeClick.bind(this)} value='12'>12</a>
            <a href="#" onClick={this._onFontSizeClick.bind(this)} value='14'>14</a>
          </div>
        </div>


        <div className="dropdown">
          <button>Font Color</button>
          <div className="dropdown-content">
            <a href="#" onClick={(e) => this._onFontColorClick(e) } value='black'>black</a>
            <a href="#" onClick={this._onFontColorClick.bind(this)} value='red'>red</a>
            <a href="#" onClick={this._onFontColorClick.bind(this)} value='blue'>blue</a>
          </div>
        </div>

        <div className="editor">
          <Editor
            editorState = {this.props.editorState || EditorState.createEmpty()}
            onChange = {this.props.onChange}
            customStyleMap={styleMap}
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

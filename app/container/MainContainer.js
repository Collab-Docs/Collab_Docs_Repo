import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { onChange } from '../actions/index';

import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';


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

  createBulletPoints() {
    this.props.onChange(RichUtils.toggleBlockType(
      this.props.editorState,
      'unordered-list-item'
    ));
  }

  createNumberPoints() {
    this.props.onChange(RichUtils.toggleBlockType(
      this.props.editorState,
      'ordered-list-item'
    ));
  }

  render() {
    return (
      <div>
        <AppBar position="absolute">Collab Docs</AppBar>
        <br></br>
        <br></br>
        <Button variant="text" color="primary" onClick={this._onBoldClick.bind(this)}>Bold</Button>
        <Button variant="text" color="primary"  onClick={this._onItalicClick.bind(this)}>Italicize</Button>
        <Button variant="text" color="primary"  onClick={this._onUnderlineClick.bind(this)}>Underline</Button>
        <Button variant="text" color="primary"  onClick={this._onFontSizeClick.bind(this)}>Font Size</Button>
        <Button variant="text" color="primary"  onClick={this._onFontColorClick.bind(this)}>Font Color</Button>
        <Button variant="text" color="primary"  onClick={this.createBulletPoints.bind(this)}>Bullet points</Button>
        <Button variant="text" color="primary"  onClick={this.createNumberPoints.bind(this)}>Number points</Button>
        <Button variant="text" color="primary">SAVE</Button>

        <div className="editor">
          <Editor
          editorState = {this.props.editorState || EditorState.createEmpty()}
          onChange = {this.props.onChange}
          customStyleMap={styleMap}
          onTab = {this._createList}
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

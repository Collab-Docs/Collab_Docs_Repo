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
        <AppBar position='absolute'>
           <nav>
             <div className="nav-wrapper">
               <i className="material-icons">cloud</i>
               Collab Docs
             </div>
           </nav>
         </AppBar>
        <br></br>
        <br></br>
        {/* <IconButton iconStyle={} onClick={this._onBoldClick.bind(this)}></IconButton> */}
        <Button variant="text" color="primary" onClick={this._onBoldClick.bind(this)}>
          <i className="material-icons">format_bold</i>
        </Button>
        <Button variant="text" color="primary"  onClick={this._onItalicClick.bind(this)}>
          <i className="material-icons">format_italic</i>
        </Button>
        <Button variant="text" color="primary"  onClick={this._onUnderlineClick.bind(this)}>
          <i className="material-icons">format_underlined</i>
        </Button>
        <Button variant="text" color="primary"  onClick={this._onFontSizeClick.bind(this)}>
          <i className="material-icons">format_size</i>
        </Button>
        <Button variant="text" color="primary"  onClick={this._onFontColorClick.bind(this)}>
          <i className="material-icons">format_color_text</i>
        </Button>
        <Button variant="text" color="primary"  onClick={this.createBulletPoints.bind(this)}>
          <i className="material-icons">format_list_bulleted</i>
        </Button>
        <Button variant="text" color="primary"  onClick={this.createNumberPoints.bind(this)}>
          <i className="material-icons">format_list_numbered</i>
        </Button>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    if(!this.props.book) {
      return (
        <div>
          Select a book to get started!
        </div>
      );
    }

    // quando a nossa aplicação começa o livro é setado para null, precisamos tratar isso e é isso que fazemos na
    // checagem acima
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

/**
 * Pega o state que veio dos reducers e consome aquilo que lhe interessa, no caso,
 * interessa pegar o livro que vem da key activeBook do reducer (index.js)
 * @param state
 * @returns {{book: *}}
 */
function mapStateToProps(state) {
  return {
    book: state.activeBook,
  };
}

export default connect(mapStateToProps)(BookDetail);
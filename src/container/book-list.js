import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from "../actions/index";
import {bindActionCreators} from 'redux';

class BookList extends Component {
  renderList() {
    // quando o usuário clica em um livro ele chama a ação passando as informações
    // do livro que acabou de ser criado
    return(
      this.props.books.map((book) => {
        return (
          <li
            onClick={() => this.props.selectBook(book)}
            key={book.title}
            className="list-group-item">
            {book.title}
          </li>
        );
      })
    );
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

/**
 * Captura o que existe no reducer de books e mapeia como uma propriedade do componente (agora container)
 * BookList
 * @param state é o objeto retornado para o react com os dados capturados pelo Redux
 * @returns {{books: *}}
 */
function mapStateToProps(state) {
  return {
    books: state.books
  }
}

/**
 * Pega essa action e envia para todos os reducers que devem tratar ou não essa action (selectBook).
 * Tudo o que for retornado dessa função acaba se tornando um prop no container BookList
 * @param dispatch dispara a action para todos os reducers
 * @returns {{selectBook: selectBook}|ActionCreator<any>|ActionCreatorsMapObject}
 */
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

/**
 * Promove esse componente para um container. Precisa saber de todos esses métodos mostrados abaixo
 * para que possa usar esses valores como props dentro de BookList
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
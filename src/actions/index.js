export function selectBook(book) {
  // selectBook é um action creator e deve retornoar um objeto com a propriedade tipo
  // essa action é enviada a todos os reducers
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
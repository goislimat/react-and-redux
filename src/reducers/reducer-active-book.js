// todos os reducers são chamados como uma action ocorre e devem devolver um objeto para que seja processado no react
// state aqui não é o state da aplicação é somente o state que esse reducer é responsável por tratar
// temos que tratar o caso do state ser undefined quando a aplicação inicia
export default function(state = null, action) {
  switch(action.type) {
    // se essa for o tipo da action, definido no arquivo de actions, eu preciso fazer isso
    case 'BOOK_SELECTED':
      return action.payload;
  }

  // se essa action que foi chamada não tem influência no meu state, simplesmente retorno ele
  return state;
}
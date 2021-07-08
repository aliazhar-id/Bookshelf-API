const { addBookHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler, deleteBooksByIdHandler } = require('./handler');

const routes = [
{
	method: 'POST',
	path: '/books',
	handler: addBookHandler,
},
{
	method: 'GET',
	path: '/books',
	handler: getAllBooksHandler,
},
{
	method: 'GET',
	path: '/books/{bookId}',
	handler: getBookByIdHandler,
},
{
	method: 'PUT',
	path: '/books/{bookId}',
	handler: editBookByIdHandler,
},
{
	method: 'DELETE',
	path: '/books/{bookId}',
	handler: deleteBooksByIdHandler,
}
];

module.exports = routes;
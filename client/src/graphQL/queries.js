import { gql } from '@apollo/client';

const getAuthorsQuery = gql`#get all
    {
        authors {
            name
            id
        }
    }
`;

const getBooksQuery = gql`#get all
    {
        books {
            name
            id
        }
    }
`;

const addBookMutation = gql`#post one
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
        addBook(name: $name, genre: $genre, authorId: $authorId){
            name
            id
        }
    }
`;

const getBookQuery = gql`#get by id
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

export { getAuthorsQuery, getBooksQuery, addBookMutation, getBookQuery };
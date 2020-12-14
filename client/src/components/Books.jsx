// import { gql, graphql, useQuery } from '@apollo/client';
import { gql, useQuery } from '@apollo/client';

const fetchBooks = gql`
    {
        books {
            name
            id
        }
    }
`

function Books(props) {
    const books = useQuery(fetchBooks);
    if(books.loading) return <h1>Loading..</h1>
    console.log(books)
    return (
        <ul className="books">
            {books.data.books.map((book, idx) => {
                return (
                    <li key={idx}>{book.name}</li>
                )
            })}
        </ul>
    );
}

export default Books;
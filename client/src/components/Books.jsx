/*            ******  Hooks  ******        */
// import { gql, useQuery } from '@apollo/client';

// const fetchBooks = gql`
//     {
//         books {
//             name
//             id
//         }
//     }
// `

// function Books(props) {
//     const books = useQuery(fetchBooks);
//     if(books.loading) return <h1>Loading..</h1>
//     console.log(books)
//     return (
//         <ul className="books">
//             {books.data.books.map((book, idx) => {
//                 return (
//                     <li key={idx}>{book.name}</li>
//                 )
//             })}
//         </ul>
//     );
// }

// export default Books;




import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import { getBooksQuery } from '../graphQL/queries';
import Book from './Book';

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }

    displayBooks() {
        var data = this.props.data;

        if(data.loading) return <h1>Loading books..</h1>

        return data.books.map(book => {
                return(
                    <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.name }</li>
                );
            })
    }
    

    render () {
        return (
            <div className="books-container">
                <div className="books">
                    <ul className="list-books">
                        { this.displayBooks() }
                    </ul>
                </div>
                <Book bookId={ this.state.selected } />
            </div>
        );
    }
}

export default graphql(getBooksQuery)(Books);
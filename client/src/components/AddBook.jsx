import React, { Component } from 'react';
import { graphql } from '@apollo/client/react/hoc';
import * as compose from 'lodash.flowright';
import { getAuthorsQuery, addBookMutation, getBooksQuery } from '../graphQL/queries';

class AddBook extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };
    }
    displayAuthors(){
        var data = this.props.getAuthorsQuery;//wrapped in compose, and named like so

        if(data.loading) return <option disabled>Loading authors..</option>;

        return data.authors.map(author => {
            return( <option key={ author.id } value={author.id}>{ author.name }</option> );
        });
    }
    submitForm(e){
        e.preventDefault()
        this.props.addBookMutation({//wrapped in compose; mutation
            variables: {
                name: this.state.name,
                genre: this.state.genre,
                authorId: this.state.authorId
            },
            refetchQueries: [{ query: getBooksQuery }]
        });
    }
    render(){
        return(
            <form onSubmit={ this.submitForm.bind(this) }>
                <div className="box">
                    <label>Book name:</label>
                    <input type="text" onChange={ (e) => this.setState({ name: e.target.value }) } />
                </div>
                <div className="box">
                    <label>Genre:</label>
                    <input type="text" onChange={ (e) => this.setState({ genre: e.target.value }) } />
                </div>
                <div className="box">
                    <label>Author:</label>
                    <select onChange={ (e) => this.setState({ authorId: e.target.value }) } >
                        <option>Select author</option>
                        { this.displayAuthors() }
                    </select>
                </div>
                {/* If this would not be a <form> i could just add an onClick and call submitForm() */}
                <div className="button"><button>Add</button></div>
            </form>
        );
    }
}

export default compose(// adding 2 queries together  using compose
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);

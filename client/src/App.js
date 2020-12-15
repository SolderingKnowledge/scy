// import logo from './logo.svg';
import Books from "./components/Books"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import AddBook from "./components/AddBook";

// apollo-client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
            <div className="app">
                <h1>Reading collection</h1>
                <Books />
                <AddBook />
            </div>
      </ApolloProvider>
  );
}

export default App;

// import logo from './logo.svg';
import Books from "./components/Books"
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';

// apollo-client setup
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
      <ApolloProvider client={client}>
            <div className="App">
                <Books />
            </div>
      </ApolloProvider>
  );
}

export default App;

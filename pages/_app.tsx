import { ApolloProvider } from "@apollo/client";
import client from "../apollo/client";
import { FavContextProvider } from "../context/FavsContext";
import Layout from "../components/Layout/Layout";
import { ErrorBoundary } from "../errors/errorBoundary";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <FavContextProvider>
        <ErrorBoundary>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ErrorBoundary>
      </FavContextProvider>
    </ApolloProvider>
  );
}

export default MyApp;

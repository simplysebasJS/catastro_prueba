import { ApolloProvider } from '@apollo/client'
import client from './api/apollo-client'
import 'antd/dist/antd.css';
import LayoutC from '../src/components/Layout/LayoutC';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={ client }>
      <LayoutC>
        <Component {...pageProps} />
      </LayoutC>
    </ApolloProvider>
  ) 
}

export default MyApp

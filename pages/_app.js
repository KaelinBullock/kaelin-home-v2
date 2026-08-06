import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/layouts/main-layout';
import Fonts from '../components/fonts';
import theme from '../lib/theme';
import { AnimatePresence } from 'framer-motion';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

const Website = ({ Component, pageProps, router}) => {
   return (
      <Provider store={store}>
      <ChakraProvider theme={theme}>
         {/* //this fonts thing is really cool */}
         <Fonts />
         <Layout router={router}>
            <AnimatePresence mode='wait' initial={true}>
               <Component {...pageProps} key={router.route} />
            </AnimatePresence>
         </Layout>
      </ChakraProvider>
      </Provider>
   );
};

export default Website;
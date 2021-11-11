import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/dist/shared/lib/router/router";

import theme from "../theme";
import '../theme/styles.css';
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
};

export default App;
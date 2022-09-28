import { UsersProvider } from "../components/hooks/usersContext";
import { ModalProvider } from "../components/hooks/modalContext";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </UsersProvider>
    </QueryClientProvider>
  );
}

export default MyApp;

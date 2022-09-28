import { UsersProvider } from "../components/hooks/usersContext";
import { ModalProvider } from "../components/hooks/modalContext";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <UsersProvider>
        <ModalProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ModalProvider>
      </UsersProvider>
  );
}

export default MyApp;

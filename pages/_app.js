import { UsersProvider } from "../components/hooks/usersContext";
import { ModalProvider } from "../components/hooks/modalContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
      <UsersProvider>
        <ModalProvider>
            <Component {...pageProps} />
        </ModalProvider>
      </UsersProvider>
  );
}

export default MyApp;

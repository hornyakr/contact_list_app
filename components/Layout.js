import Head from "next/head";
import LeftHeader from "./header/LeftHeader";
import MiddleHeader from "./header/MiddleHeader";
import RightHeader from "./header/RightHeader";
import ModalRoot from "../modules/modals/components/ModalRoot";
import ModalService from "../modules/modals/services/ModalService";
import FormModal from "./FormModal";
import { useModalContext } from "./hooks/modalContext";
import { useEffect } from "react";

const Layout = ({ children }) => {
  const [modal, setModal] = useModalContext();

  useEffect(() => {
    if (modal.isOpen) {
      ModalService.open(FormModal);
    }
  }, [modal]);

  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <Head>
        <title>Contact List</title>
        <meta
          name="description"
          content="A contact list with adding - edit - delete"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full grid grid-cols-12">
        <div className="col-span-2 sm:col-span-3">
          <LeftHeader />
        </div>
        <div className="col-span-10 sm:col-span-6">
          <MiddleHeader />
        </div>
        <div className="hidden sm:block sm:col-span-3">
          <RightHeader />
        </div>
      </header>

      <main className="w-full grow flex">{children}</main>

      <ModalRoot />
    </div>
  );
};

export default Layout;

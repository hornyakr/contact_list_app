import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Contact List</title>
        <meta
          name="description"
          content="A contact list with adding - edit - delete"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header></header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;

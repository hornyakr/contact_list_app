import Contact from "../components/Contact";
import { useQuery } from "react-query";
import { useUsersContext } from "../components/hooks/usersContext";
import { useEffect } from "react";

const Home = () => {
  const { isLoading, error, data } = useQuery(["contacts"], () =>
    fetch("/api/contacts/getContacts").then((res) => res.json())
  );
  const [users, setUsers] = useUsersContext();

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data, setUsers]);

  return (
    <div className="grid grid-cols-12 grow">
      <div className="hidden sm:block sm:col-span-3"></div>
      <div className="col-span-12 sm:col-span-6 border-0 sm:border border-y-0 border-grey-60 px-px py-6 flex flex-col gap-5">
        {isLoading ? (
          <span className="ml-3 pl-4">Loading...</span>
        ) : error ? (
          { error }
        ) : users.length > 0 ? (
          users.map((contact) => <Contact key={contact.id} contact={contact} />)
        ) : (
          <span className="ml-3 pl-4">No contact</span>
        )}
      </div>
      <div className="hidden sm:block col-span-3"></div>
    </div>
  );
};

export default Home;

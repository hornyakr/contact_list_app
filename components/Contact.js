import Image from "next/image";
import noPic from "../public/img/Default.png";
import Mute from "./icons/Mute";
import Listen from "./icons/Listen";
import Dropdown from "./Dropdown";
import { useUsersContext } from "./hooks/usersContext";
import More from "./icons/More";
import Settings from "./icons/Settings";
import Like from "./icons/Like";
import Delete from "./icons/Delete";
import { useToggle } from "./hooks/useToggle";
import { createContext } from "react";
import { useModalContext } from "./hooks/modalContext";
import { useContext } from "react";
import { useState } from "react";

export const DropdownContext = createContext();
const { Provider } = DropdownContext;

const Contact = ({ contact }) => {
  const [user, setUser] = useState(contact);

  const { status: expand, toggleStatus: toggleExpand } = useToggle(false);
  const value = { expand, toggleExpand };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-1 md:gap-0 md:items-center mx-3 px-4 group">
      <div className="flex gap-6">
        <Image
          className="rounded-full profile-img object-cover"
          src={user.img || noPic}
          width={50}
          height={50}
          alt="profile picture"
        />
        <div className="flex flex-col justify-around">
          <h3>{user.name}</h3>
          <span className="message opacity-[.56]">{user.phone}</span>
        </div>
      </div>
      <div
        className={`gap-2 items-center flex${
          expand ? "" : " md:hidden"
        } group-hover:flex`}
      >
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center"
        >
          <Mute />
        </button>
        <button
          type="button"
          className="w-10 h-10 flex justify-center items-center"
        >
          <Listen />
        </button>
        <Provider value={value}>
          <Dropdown
            title={<DropdownTitle />}
            items={[
              <DropdownEdit key={"DropdownEdit"} contact={user} />,
              <DropdownFavourite key={"DropdownFavourite"} />,
              <DropdownRemove key={"DropdownRemove"} id={user.id} />,
            ]}
          />
        </Provider>
      </div>
    </div>
  );
};

const DropdownTitle = () => {
  return <More />;
};

const DropdownEdit = ({ contact }) => {
  const [modal, setModal] = useModalContext();
  const { expand, toggleExpand } = useContext(DropdownContext);
  const { id, name, phone, email, img } = contact;

  return (
    <button
      type="button"
      className="flex items-center gap-3 py-3 px-2.5 w-full hover:bg-grey-70 active:bg-grey-60 rounded-t-lg"
      onClick={() => {
        toggleExpand();
        setModal({
          isAdding: false,
          isOpen: true,
          user: {
            id: id,
            name: name,
            phone: phone,
            email: email,
            img: img,
          },
        });
      }}
    >
      <div className="opacity-[.56] w-5 flex justify-center">
        <Settings />
      </div>
      Edit
    </button>
  );
};

const DropdownFavourite = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-3 py-3 px-2.5 w-full hover:bg-grey-70 active:bg-grey-60 rounded-t-lg"
    >
      <div className="opacity-[.56] w-5 flex justify-center">
        <Like />
      </div>
      Favourite
    </button>
  );
};

const DropdownRemove = ({ id }) => {
  const [users, setUsers] = useUsersContext();

  return (
    <button
      type="button"
      className="flex items-center gap-3 py-3 px-2.5 w-full hover:bg-grey-70 active:bg-grey-60 rounded-t-lg"
      onClick={() => {
        deleteContact(id);
        setUsers([...users.filter((obj) => obj.id !== id)]);
      }}
    >
      <div className="opacity-[.56] w-5 flex justify-center">
        <Delete />
      </div>
      Remove
    </button>
  );
};

async function deleteContact(id) {
  const response = await fetch("/api/contacts/deleteContact", {
    method: "POST",
    body: JSON.stringify(id),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

export default Contact;

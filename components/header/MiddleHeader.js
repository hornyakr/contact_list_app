import Image from "next/image";
import Settings from "../icons/Settings";
import Add from "../icons/Add";
import profilePic from "../../public/img/profile_pic.png";
import ButtonSpecial from "../buttons/ButtonSpecial";
import { useModalContext } from "../hooks/modalContext";

const MiddleHeader = () => {
  const [modal, setModal] = useModalContext();

  return (
    <div className="border border-solid border-grey-60 border-t-0 pt-8 sm:pt-20 h-full">
      <div className="flex flex-wrap gap-1 justify-center sm:justify-between border border-solid border-grey-60 border-l-0 border-b-0 border-r-0 h-full items-center px-3 py-6">
        <h1 className="px-4">Contacts</h1>
        <div className="flex items-center gap-6 px-4">
          <button>
            <Settings />
          </button>
          <button className="flex items-center">
            <Image
              src={profilePic}
              alt="profile picture"
              width={22}
              height={22}
            />
          </button>
          <div
            onClick={() =>
              setModal({
                isAdding: true,
                isOpen: true,
                user: {
                  name: null,
                  phone: null,
                  email: null,
                  img: null,
                },
              })
            }
          >
            <ButtonSpecial text={"Add new"} icon={<Add />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;

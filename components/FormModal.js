import Modal from "../modules/modals/components/Modal";
import ModalBody from "../modules/modals/components/ModalBody";
import ModalHeader from "../modules/modals/components/ModalHeader";
import ModalFooter from "../modules/modals/components/ModalFooter";
import ButtonSecondary from "./buttons/ButtonSecondary";
import ButtonPrimary from "./buttons/ButtonPrimary";
import Image from "next/image";
import Refresh from "./icons/Refresh";
import Delete from "./icons/Delete";
import Add from "./icons/Add";
import { useUsersContext } from "./hooks/usersContext";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import no_pic from "../public/img/Default.png";
import { useModalContext } from "./hooks/modalContext";

async function newContact(contact) {
  const response = await fetch("/api/contacts/newContact", {
    method: "POST",
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

async function updateContact(contact) {
  const response = await fetch("/api/contacts/updateContact", {
    method: "POST",
    body: JSON.stringify(contact),
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

const FormModal = ({ close }) => {
  const [users, setUsers] = useUsersContext();
  const [modal, setModal] = useModalContext();

  const imgInput = useRef();

  const [nameValue, setNameValue] = useState();
  const [emailValue, setEmailValue] = useState();
  const [phoneValue, setPhoneValue] = useState();
  const [imgValue, setImgValue] = useState();

  const handlePhoneInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    e.target.value = formattedPhoneNumber;
    setPhoneValue(formattedPhoneNumber);
  };

  const fileUploadHandler = (e) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setImgValue(reader.result);
    });
    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (modal.isAdding) {
      const user = {
        id: uuidv4(),
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        img: imgValue || "/img/Default.png",
      };
      await newContact(user);

      setUsers([...users, user]);
      close();
    } else {
      const user = {
        id: modal.user.id,
        name: nameValue,
        phone: phoneValue,
        email: emailValue,
        img: imgValue || "/img/Default.png",
      };
      await updateContact(user);

      setUsers([
        ...users.map((obj) =>
          obj.id !== user.id ? obj : { ...user, id: uuidv4() }
        ),
      ]);
      close();
    }
  };

  useEffect(() => {
    setNameValue(modal.user.name);
    setPhoneValue(modal.user.phone);
    setEmailValue(modal.user.email);
    setImgValue(modal.user.img);
  }, [modal.user]);

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto transition-opacity">
      <div className="flex min-h-screen items-center justify-center bg-black bg-opacity-40 p-4 text-center sm:items-center sm:p-0">
        <div className="flex flex-col items-center pt-6 px-0 pb-0 gap-6 absolute w-91 bg-grey-100 rounded-lg">
          <form onSubmit={submitHandler}>
            <Modal>
              <div className="flex flex-col items-start p-0 gap-6 w-79">
                <ModalHeader>
                  <h2>{modal.isAdding ? "Add contact" : "Edit contact"}</h2>
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-row items-center p-0 gap-4">
                      <Image
                        src={imgValue || no_pic}
                        alt="profile picture"
                        width={88}
                        height={88}
                        className="rounded-full profile-pic object-cover"
                      />
                      <input
                        type="file"
                        id="img"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => fileUploadHandler(e)}
                        ref={imgInput}
                      />
                      {imgValue ? (
                        <div className="flex flex-row items-start gap-2">
                          <div onClick={() => imgInput.current.click()}>
                            <ButtonPrimary
                              icon={<Refresh />}
                              text={"Change picture"}
                            />
                          </div>
                          <div onClick={() => setImgValue(undefined)}>
                            <ButtonPrimary icon={<Delete />} />
                          </div>
                        </div>
                      ) : (
                        <div onClick={() => imgInput.current.click()}>
                          <ButtonPrimary text={"Add picture"} icon={<Add />} />
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col items-start p-0 gap-1 w-full">
                      <label htmlFor="name" className="message opacity-[.56]">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full flex flex-row items-center py-2 px-3 gap-2 bg-grey-80 border border-grey-60 border-solid rounded-lg placeholder:opacity-[.32] focus-visible:border-grey-10 focus-visible:bg-grey-60"
                        placeholder="Jamie Wright"
                        defaultValue={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start p-0 gap-1 w-full">
                      <label htmlFor="tel" className="message opacity-[.56]">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full flex flex-row items-center py-2 px-3 gap-2 bg-grey-80 border border-grey-60 border-solid rounded-lg placeholder:opacity-[.32] focus:border-grey-10 focus:bg-grey-60"
                        placeholder="+01 234 5678"
                        pattern="[+]{1}[0-9]{2} [0-9]{3} [0-9]{4}"
                        onChange={(e) => handlePhoneInput(e)}
                        defaultValue={phoneValue}
                        required
                      />
                    </div>
                    <div className="flex flex-col items-start p-0 gap-1 w-full">
                      <label htmlFor="email" className="message opacity-[.56]">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="emailInput"
                        className="w-full flex flex-row items-center py-2 px-3 gap-2 bg-grey-80 border border-grey-60 border-solid rounded-lg placeholder:opacity-[.32] focus:border-grey-10 focus:bg-grey-60"
                        placeholder="jamie.wright@mail.com"
                        defaultValue={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </ModalBody>
              </div>
              <ModalFooter>
                <div
                  className="flex flex-row justify-end items-start p-6 gap-2 w-full"
                  //Adding padding because of wrong change of rem to pixel (1.5rem != 24px ?!?)
                  style={{ padding: "24px" }}
                >
                  <div onClick={() => close()}>
                    <ButtonSecondary text={"Cancel"} />
                  </div>
                  <div>
                    <ButtonPrimary text={"Done"} type="submit" />
                  </div>
                </div>
              </ModalFooter>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

const formatPhoneNumber = (value) => {
  if (!value) return value;
  //IF ONLY DIGITS
  //const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumber = value.replaceAll(" ", "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7)
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
  return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(
    3,
    6
  )} ${phoneNumber.slice(6, 10)}`;
};

export default FormModal;

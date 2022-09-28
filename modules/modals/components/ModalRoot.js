import { useEffect, useState } from "react";
import ModalService from "../services/ModalService";

const ModalRoot = () => {
  const [modal, setModal] = useState({});

  useEffect(() => {
    ModalService.on("open", ({ component, props }) => {
      setModal({
        component,
        props,
        close: (value) => {
          setModal({});
        },
      });
    });
  }, []);

  const ModalComponent = modal.component ? modal.component : null;

  return (
    <section className="absolute w-full">
      {ModalComponent && (
        <ModalComponent {...modal.props} close={modal.close} />
      )}
    </section>
  );
};

export default ModalRoot;

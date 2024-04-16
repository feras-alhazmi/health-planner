import {
  Modal,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useModalStore } from "./store/Modal-Store";

export default function ResetPasswordModal() {
  const modal = useModalStore((state) => state.modals["resetPassword"]);
  const props = modal.props;
  modal.disclosure = useDisclosure();
  return (
    <Modal {...modal.disclosure}>
      <ModalContent>
        <ModalHeader>
          <h1>Reset Password</h1>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
}

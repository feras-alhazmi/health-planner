import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Tab,
  Tabs,
  useDisclosure,
} from "@nextui-org/react";
import { ModalKeys, useModalStore } from "./store/Modal-Store";
import { useEffect, useState } from "react";

export default function ResetPasswordModal() {
  const [selectedTab, setSelectedTab] = useState("email");
  const modal = useModalStore(
    (state) => state.modals[ModalKeys.RESET_PASSWORD]
  );

  return (
    <div>
      {modal.disclosure.isOpen && (
        <Modal
          onOpenChange={(open) => {
            if (!open) {
              setSelectedTab("email");
            }
          }}
          {...modal.disclosure}
        >
          <ModalContent>
            <ModalHeader>
              <h1>Reset Password</h1>
            </ModalHeader>
            <ModalBody>
              <div className="flex flex-col justify-center  ">
                <div className="self-center">
                  <Tabs
                    color="primary"
                    selectedKey={selectedTab}
                    // onSelectionChange={(key) => {
                    //   setSelectedTab(key as string);
                    // }}
                  >
                    <Tab disabled key={"email"} title="Email">
                      <div className="flex flex-col gap-3">
                        <Input label="Email" />
                        <Button
                          color="primary"
                          onClick={() => {
                            setSelectedTab("verification");
                          }}
                        >
                          Send Verification Code
                        </Button>
                      </div>
                    </Tab>
                    <Tab
                      disabled
                      key={"verification"}
                      title="Verification Code"
                    >
                      <div className="flex flex-col gap-3">
                        <Input label="Verification Code" placeholder="xxxxxx" />
                        <Button
                          color="primary"
                          onClick={() => {
                            setSelectedTab("password");
                          }}
                        >
                          Verify Code
                        </Button>
                      </div>
                    </Tab>
                    <Tab disabled key={"password"} title="New Password">
                      <div className="flex flex-col gap-3">
                        <Input
                          label="New Password"
                          placeholder="Enter your password"
                        />
                        <Input
                          label="Re-Enter New Password"
                          placeholder="Enter your password"
                        />
                        <Button color="primary">Reset Password</Button>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              </div>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

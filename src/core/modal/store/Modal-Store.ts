import { UseDisclosureReturn } from "@nextui-org/use-disclosure";
import { create } from "zustand";
import { produce } from "immer";
import ResetPasswordModal from "../Reset-Password-Modal";
import { useDisclosure } from "@nextui-org/react";
import React, { ReactNode } from "react";

type State = {
  modals: {
    [key: string]: {
      disclosure?: UseDisclosureReturn;
      props?: any | undefined;
      modal: JSX.Element;
    };
  };
};
type Action = {
  openModal: (key: string, props?: any | undefined) => void;
  closeModal: (key: string) => void;
  getAllModals: () => ReactNode[];
};
export const useModalStore = create<State & Action>((set, getState) => ({
  modals: {
    resetPassword: {
      // disclosure: useDisclosure(),
      props: undefined,
      modal: ResetPasswordModal,
    },
  },
  openModal: (key, props) => {
    set(
      produce((state: State) => {
        state.modals[key].props = props;
        state.modals[key].disclosure!.onOpen();
        return state;
      })
    );
  },
  closeModal: (key) => {
    set(
      produce((state: State) => {
        state.modals[key].disclosure!.onClose();
        state.modals[key].props = undefined;
        return state;
      })
    );
  },
  getAllModals: () => {
    return Object.values(getState().modals).map((modal) => modal.modal) as [
      ReactNode
    ];
  },
}));

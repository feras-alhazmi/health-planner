import { UseDisclosureReturn } from "@nextui-org/use-disclosure";
import { create } from "zustand";
import { produce } from "immer";
import ResetPasswordModal from "../Reset-Password-Modal";
import { useDisclosure } from "@nextui-org/react";
import React, { ReactNode } from "react";

export enum ModalKeys {
  RESET_PASSWORD = "resetPassword",
}
type State = {
  modals: {
    [key: string]: {
      disclosure: {
        isOpen: boolean;
        onClose: () => void;
        onOpen: () => void;
      };
      props?: any | undefined;
      modal: () => JSX.Element;
    };
  };
};
type Action = {
  openModal: (key: string, props?: any | undefined) => void;
  closeModal: (key: string) => void;
  getAllModals: () => (() => JSX.Element)[];
  setModalDisclosure: (key: string, disclosure: UseDisclosureReturn) => void;
};
export const useModalStore = create<State & Action>((set, getState) => ({
  modals: {
    resetPassword: {
      disclosure: {
        isOpen: false,
        onClose: () => {
          getState().closeModal(ModalKeys.RESET_PASSWORD);
        },
        onOpen: () => {
          getState().openModal(ModalKeys.RESET_PASSWORD);
        },
      },
      props: undefined,
      modal: ResetPasswordModal,
    },
  },
  setModalDisclosure: (key, disclosure) => {
    set(
      produce((state: State) => {
        state.modals[key].disclosure = disclosure;
        return state;
      })
    );
  },
  openModal: (key, props) => {
    set(
      produce((state: State) => {
        state.modals[key].props = props;
        state.modals[key].disclosure!.isOpen = true;
        return state;
      })
    );
  },
  closeModal: (key) => {
    set(
      produce((state: State) => {
        state.modals[key].disclosure!.isOpen = false;
        state.modals[key].props = undefined;
        return state;
      })
    );
  },
  getAllModals: () => {
    return Object.values(getState().modals).map((modal) => modal.modal);
  },
}));

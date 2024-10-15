import { SxProps } from "@mui/joy/styles/types";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { FunctionModelStruct } from "./function.type";

export type ModalModelStruct = {
    title: string,
    children: ReactNode,
    sx?: SxProps,
    modal: boolean,
    setModal: Dispatch<SetStateAction<boolean>>
};

export type UseModalModelStruct<T = boolean, S = void, FMS = FunctionModelStruct<T, S>> = {
    modal: boolean,
    onDisplayModal: FMS
};
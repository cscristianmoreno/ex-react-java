import { useState } from "react";
import { FunctionModelStruct } from "../types/function.type";
import { HookModelStruct } from "../types/hook.type";
import { UseModalModelStruct } from "../types/modal.model";

export const useModal = (): UseModalModelStruct => {
    const [modal, setModal]: HookModelStruct<boolean> = useState<boolean>(false);

    const onDisplayModal: FunctionModelStruct<boolean, void> = (open?: boolean): void => {
        if (open == undefined) {
            return;
        }

        setModal(open);  
    };
    
    return {
        modal,
        onDisplayModal
    };
};
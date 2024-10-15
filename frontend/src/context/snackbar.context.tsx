import { Context, createContext, FC, ReactElement, ReactNode, useContext, useState } from "react";
import { HookModelStruct } from "../types/hook.type";
import { SnackbarModelStruct } from "../types/snackbar.type";

const SnackbarCreateContext: Context<SnackbarModelStruct> = createContext<SnackbarModelStruct>({
    open: false,
    setOpen: () => false,
    message: "",
    setMessage: () => ""
});

const SnackbarContext: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }): ReactElement => {

    const [open, setOpen]: HookModelStruct<boolean> = useState<boolean>(false);
    const [message, setMessage]: HookModelStruct<string> = useState<string>("");

    return (
        <SnackbarCreateContext.Provider value={{ open, setOpen, message, setMessage }}>
            {children}
        </SnackbarCreateContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalSnackbar: () => SnackbarModelStruct = (): SnackbarModelStruct => useContext(SnackbarCreateContext);
export default SnackbarContext;
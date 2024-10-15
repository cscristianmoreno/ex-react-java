import { FunctionModelStruct } from "../types/function.type";
import { SnackbarModelStruct } from "../types/snackbar.type";
import { useGlobalSnackbar } from "../context/snackbar.context";

export const useSnackbar = () => {

    const { setOpen, setMessage }: SnackbarModelStruct = useGlobalSnackbar();

    const success: FunctionModelStruct<string, void> = (message: string): void => {
        setOpen(true);
        setMessage(message);
    };

    const error: FunctionModelStruct<string, void> = (message: string): void => {
        setOpen(true);
        setMessage(message);
    }

    return {
        success,
        error
    };
}
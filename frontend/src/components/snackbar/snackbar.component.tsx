import { FC, ReactElement } from "react";
import Snackbar from "@mui/joy/Snackbar";
import { useGlobalSnackbar } from "../../context/snackbar.context";
import { SnackbarModelStruct } from "../../types/snackbar.type";

const SnackbarComponent: FC<{ open: boolean, message: string }> = ({ open, message }: { open: boolean, message: string }): ReactElement => {

    const { setOpen }: SnackbarModelStruct = useGlobalSnackbar();

    return (
        <Snackbar
            anchorOrigin={{ 
                vertical: "top", 
                horizontal: "right" 
            }}
            onClose={(): void => setOpen(false)}
            open={open}
            color="primary"
        >
            {message}
        </Snackbar>
    );
};

export default SnackbarComponent;
import { FC, ReactElement } from "react";
import HeaderComponent from "../../components/header/header.component";
import HomeComponent from "../../components/home/home.component";
import { Box } from "@mui/joy";
import SnackbarComponent from "../../components/snackbar/snackbar.component";
import { SnackbarModelStruct } from "../../types/snackbar.type";
import { useGlobalSnackbar } from "../../context/snackbar.context";

const IndexComponentSection: FC = (): ReactElement => {

    const { open, message }: SnackbarModelStruct = useGlobalSnackbar();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 1000,
        }}>
            <SnackbarComponent message={message} open={open}/>
            <HeaderComponent/>
            <HomeComponent/>
        </Box>
    );
};

export default IndexComponentSection;
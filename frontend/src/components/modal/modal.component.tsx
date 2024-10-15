import { DialogContent, DialogTitle, Divider, Modal, ModalClose, ModalDialog } from "@mui/joy";
import { FC, ReactElement } from "react";
import { ModalModelStruct } from "../../types/modal.model";

const ModalComponent: FC<ModalModelStruct> = ({ title, children, sx, modal, setModal }: ModalModelStruct): ReactElement => {

    return (
        <Modal 
            open={modal}
            onClose={(): void => setModal(false)}
        >   
            <ModalDialog title="Modal" sx={sx}>
                <ModalClose/>
                <DialogTitle>{title}</DialogTitle>
                <Divider/>
                <DialogContent>
                    {children}
                </DialogContent>
            </ModalDialog>
        </Modal>
    );
};

export default ModalComponent;
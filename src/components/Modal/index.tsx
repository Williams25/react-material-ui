import { useState } from "react";
import {
  IconButton,
  Button,
  Modal,
  Box,
  experimentalStyled as styled,
} from "@material-ui/core";
import { Form } from "../index";

const style = {
  position: "fixed" as "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 400,
  maxWidth: 500,
};

const ContainerCloseButton = styled("div")({
  position: "absolute" as "absolute",
  top: "0",
  right: "3rem",
  zIndex: 10,
  margin: "0.5rem",
});

export const KeepMountedModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Login / Cadatrar-se</Button>
      <Modal
        sx={{ margin: "1rem" }}
        keepMounted
        open={open}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <ContainerCloseButton>
            <IconButton
              className="close-modal"
              size="small"
              onClick={handleClose}
            >
              <img src="/icons/close.svg" alt="fechar" />
            </IconButton>
          </ContainerCloseButton>
          <Form closeModal={() => handleClose()} />
        </Box>
      </Modal>
    </div>
  );
};

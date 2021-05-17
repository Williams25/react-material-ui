import { useContext } from "react";
import {
  experimentalStyled as styled,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { KeepMountedModal, ListCard } from "../src/components";
import { UserContext } from "../src/contexts";
import data from "../data.json";

export default function Home() {
  const { userNameContext } = useContext(UserContext);
  return (
    <>
      <Container>
        <Grid
          sx={{
            width: "100%",
            marginTop: "2rem",
            marginBottom: "2rem",
            flexGrow: 1,
          }}
          container
          spacing={1}
          justifyContent="flex-start"
          alignItems="center"
        >
          <KeepMountedModal />
          <Typography variant="h6" component="span">
            {
              userNameContext && "Bem vindo {userNameContext}!"
            }
          </Typography>
        </Grid>
        <ListCard data={data.technologies} />
      </Container>
    </>
  );
}

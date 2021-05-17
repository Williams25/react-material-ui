import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  experimentalStyled as styled,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { UserContext } from "../../contexts";
import { Feedback } from "../index";

interface Inputs {
  userName?: string;
  password?: string;
}
interface FormProps {
  closeModal?: () => void;
}

const Title = styled("span")({
  color: "#772ce5",
  position: "relative",
  "::before": {
    content: "''",
    width: "140%",
    height: "2px",
    borderRadius: "2px",
    backgroundColor: "#ddd",
    position: "absolute",
    top: "3rem",
    left: "0",
    transform: "translate(-15%, -50%)",
  },
});

const SpanError = styled("span")({
  fontSize: "0.8rem",
  color: "#ff0000",
  width: "100%",
  height: "0.9rem",
  marginBottom: "0.5rem",
});

export const Form = ({ closeModal }: FormProps) => {
  const [cadastrar, setCadastrar] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [feedback, setFeedback] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { createUser, handleCreateUser, setUserAndPassword } =
    useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const handleStopFeedback = () => {
    setTimeout(() => {
      setLoading(false);
      feedback && closeModal();
    }, 2000);
  };

  const handleSubmitForm = (data: Inputs) => {
    const create = createUser.filter((user) => user.userName === data.userName);

    if (cadastrar && create.length === 0) {
      setError(false);
      handleCreateUser({ password: data.password, userName: data.userName });
      setLoading(true);
      setFeedback(true);
    } else if (!cadastrar) {
      setError(false);
      const loginSuccess = createUser.filter((item) => {
        if (
          item.userName === data.userName &&
          item.password === data.password
        ) {
          return item;
        }
      });

      if (loginSuccess.length > 0) {
        setUserAndPassword({
          password: data.password,
          userName: data.userName,
        });
        setLoading(true);
        setFeedback(true);
      } else {
        setError(true);
        console.log("erro");
      }
    } else {
      setError(true);
      setLoading(true);
      setFeedback(false);
    }

    handleStopFeedback();
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        // maxWidth: 400,
        // minWidth: 500,
        width: "80%",
        height: "20rem",
        flexGrow: 1,
      }}
    >
      <Grid container direction="column">
        {loading ? (
          <Feedback feedback={feedback} />
        ) : (
          <>
            <Grid
              item
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Typography gutterBottom variant="h4" component={Title}>
                {!cadastrar ? (
                  <strong>Login</strong>
                ) : (
                  <strong>Cadastrar</strong>
                )}
              </Typography>
            </Grid>
            <Grid item width="100%">
              <form method="post" onSubmit={handleSubmit(handleSubmitForm)}>
                <TextField
                  id="username"
                  label="Usuário"
                  variant="standard"
                  type="text"
                  margin="normal"
                  fullWidth
                  {...register("userName", { required: true })}
                />
                <SpanError>
                  {errors.userName || error ? "Usuário inválido" : ""}
                </SpanError>
                <TextField
                  id="password"
                  label="Senha"
                  variant="standard"
                  type="password"
                  margin="normal"
                  fullWidth
                  {...register("password", { required: true })}
                />
                <SpanError>{errors.password ? "Senha inválida" : ""}</SpanError>
                <Grid
                  display="flex"
                  justifyContent="flex-end"
                  sx={{ marginTop: 2 }}
                >
                  <Grid
                    container
                    direction="row"
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                    alignItems="flex-end"
                    width="100%"
                  >
                    {!cadastrar ? (
                      <>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="primary"
                          type="submit"
                        >
                          Login
                        </Button>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="secondary"
                          onClick={() => setCadastrar(true)}
                        >
                          Cadastrar-se
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="primary"
                          type="submit"
                        >
                          Cadastrar
                        </Button>
                        <Button
                          size="medium"
                          variant="outlined"
                          color="secondary"
                          onClick={() => setCadastrar(false)}
                        >
                          Realizar login
                        </Button>
                      </>
                    )}
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </>
        )}
      </Grid>
    </Paper>
  );
};

import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@material-ui/core";
import React from "react";

interface Technology {
  name: string;
  logo: string;
  description: string;
  link: string;
}

interface ListCardPorps {
  data: Technology;
}

export const CardItem = ({ data }: ListCardPorps) => {
  return (
    <>
      <Card sx={{ maxWidth: 345, minWidth: 345, marginTop: "2rem" }}>
        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ marginTop: "0.5rem" }}
        >
          <img src={data.logo} alt={data.name} />
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              window.location.href = data.link;
            }}
          >
            Documentação
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

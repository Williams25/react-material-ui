import { experimentalStyled as styled, Grid } from "@material-ui/core";
import { CardItem } from "../index";

interface Technology {
  name: string;
  logo: string;
  description: string;
  link: string;
}

interface ListCardPorps {
  data: Technology[];
}

export const ListCard = ({ data }: ListCardPorps) => {
  return (
    <>
      <Grid
        sx={{
          width: "100%",
          marginTop: "2rem",
          marginBottom: "2rem",
          flexGrow: 1,
        }}
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        {data.map((item) => {
          return (
            <Grid container item xs key={item.logo}>
              <CardItem data={item} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

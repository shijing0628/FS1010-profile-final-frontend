import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Pagination from "@material-ui/lab/Pagination";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import pic1 from "../../src/images/pic1.jpg";
import backGround from "../../src/images/mywork-bg.jpg";
import pic2 from "../../src/images/pic2.jpg";
import pic3 from "../../src/images/pic3.jpg";
import pic4 from "../../src/images/pic4.jpg";
import pic5 from "../../src/images/pic5.jpg";
import pic6 from "../../src/images/pic6.jpg";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#764abc",
    },
  },
  background: {
    default: "#fff",
  },
});

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `url(${backGround})`,
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },
  card: {
    maxWidth: "100%",
    "&:hover": {
      backgroundColor: "#F5F0FC",
    },
  },

  media: {
    height: 240,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

function About() {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    history.push("/about/projectOne");
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.hero}>
        <Box>About My Work</Box>
      </Box>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          My Projects
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    E-Commerce Shopping Cart
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>NextJs project.</b> Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://camo.githubusercontent.com/92ec9eb7eeab7db4f5919e3205918918c42e6772562afb4112a2909c1aaaa875/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313630373535343338352f7265706f7369746f726965732f6e6578742d6a732f6e6578742d6c6f676f2e706e67" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Brenda Liu
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia className={classes.media} image={pic2} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Covid Tracker
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>React project.</b> Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Brenda Liu
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia className={classes.media} image={pic3} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Spotify React Clone
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>React app.</b>Lizards are a widespread group of squamate
                    reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Brenda Liu
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia className={classes.media} image={pic4} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Shopify Customized Theme
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>Shopify theme.</b>Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://image.flaticon.com/icons/png/512/825/825500.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Brenda Liu
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia className={classes.media} image={pic5} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Mathnasium School Mini App
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <b>Wechat mini Program.</b>Lizards are a widespread group of
                    squamate reptiles, with over 6,000 species, ranging across
                    all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://pcdn.sharethis.com/wp-content/uploads/2018/08/wechat-1024x1024.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Brenda Liu
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card} onClick={handleClick}>
              <CardActionArea>
                <CardMedia className={classes.media} image={pic6} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    New Event Five
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                  <Avatar src="https://miro.medium.com/max/400/1*nP2C50GK4_-ly_R_mq3juQ.png" />
                  <Box ml={2}>
                    <Typography variant="subtitle2" component="p">
                      Brenda Liu
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      component="p"
                    >
                      May 14, 2020
                    </Typography>
                  </Box>
                </Box>
                <Box></Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default About;
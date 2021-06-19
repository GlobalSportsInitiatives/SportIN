import { Box, Carousel, Image } from "grommet";
import mahomes from "../../assets/mahomie.jpg";
import lebron from "../../assets/Lebron.png";
import player from "../../assets/Picture6.png";
import { SportsContentMenu } from "./SportsContentMenu";

const Home = () => (
  <div className="homePage">
    <Box background="dark" height="medium" overflow="hidden">
      <Carousel fill alignSelf="center">
        <Image src={lebron} />
        <Image fit="contain" src={player} />
        <Image fit="cover" src={mahomes} />
      </Carousel>
    </Box>
    <Box></Box>
    <header className="home-header" justify="start">
      <h1>The Last Sports App You'll Ever Need</h1>
      <p>Ready to catch the action?</p>
      <SportsContentMenu />
    </header>
  </div>
);

export default Home;

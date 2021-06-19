import { Box, Card, CardBody, CardFooter, Grid, Image, Text } from "grommet";
import football from "../../assets/Football.jpg";

export const SportsContentMenu = () => {
  return (
    // header
    <Box>
      <Box pad="large" background="dark-1" height="100%">
        <Grid gap="medium" columns={{ count: "fit", size: "small" }}>
          <FootballCard />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Grid>
      </Box>
    </Box>
    // r1c1 r1c2 r1c3
    // r2c1 r2c2 r2c3
    // r3c1 rs3c2 r3c3
  );
};

const FootballCard = () => {
  return (
    <Card key="FootballCard" onClick={() => {}}>
      <CardBody pad="small">
        <Image fit="contain" src={football} />
      </CardBody>
      <CardFooter pad={{ horizontal: "medium", vertical: "small" }}>
        <Text textAlign="center" size="xsmall">
          Access Exclusive Football Content
        </Text>
      </CardFooter>
    </Card>
  );
};

/*
const data = [
  {
    icon: <Memory size="large" />,
    title: "Memory (EEC)",
    subTitle: "8 GB @ 400Hz",
    message: "Past 24hrs",
    type: "bar",
  },
  {
    icon: <Storage size="large" />,
    title: "Storage",
    subTitle: "Sub-system and Devices",
    message: "36.8 TB available",
    type: "line",
  },
  {
    icon: <Trigger size="large" />,
    title: "Power (Watts)",
    subTitle: "720 Watt Service",
    message: "Past 12hrs",
    type: "point",
  },
];
*/
/*
2 approaches here: card layout or doing it with boxes

Thinking to try card first then go with box.


 */

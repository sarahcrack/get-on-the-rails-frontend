import { Button, Card } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Card.Root maxW="320px">
      <Card.Body gap="2">
        <Card.Title>Ruby is the BEST</Card.Title>

        <Card.Description>
          This is the card body. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Card.Description>
      </Card.Body>

      <Card.Footer justifyContent="flex-end" gap="2">
        <Button variant="outline">View</Button>
        <Button>Join</Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default Homepage;

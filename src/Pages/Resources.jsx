import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Stack } from "@chakra-ui/react"


const API_URL = "http://localhost:3000/api/v1/resources";

function getResources() {
  return axios.get(API_URL).then((response) => response.data);
}

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getResources().then((data) => {
      setResources(data);
    });
  }, []);

  return (
    <>
      {resources.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <Stack gap="4" direction="row" justify="center" wrap="wrap">
          {resources.map((resource) => (
            <Card.Root key={resource.id} width="500px">
              <Card.Body gap="2">
                <Card.Title>{resource.title}</Card.Title>

                <Card.Description>
                  {resource.description}
                  {resource.link}
                </Card.Description>
              </Card.Body>

              <Card.Footer justifyContent="flex-end" gap="2">
                <Link to={`/resources/${resource.id}`}>
                  <Button variant="outline">View</Button>
                </Link>
              </Card.Footer>
            </Card.Root>
          ))}
        </Stack>
      )}
    </>
  );
}

export default Resources;

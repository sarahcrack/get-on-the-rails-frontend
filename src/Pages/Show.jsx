import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Show() {
  const { id } = useParams();
  const [resource, setResource] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/resources/${id}`)
      .then((response) => {
        setResource(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!resource) return <p>Loading...</p>;

  return (
    <div>
      <h1>{resource.title}</h1>
      <p>{resource.description}</p>
    </div>
  );
}

export default Show;

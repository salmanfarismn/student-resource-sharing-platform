import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ViewResource() {

  const { id } = useParams();
  const [resource, setResource] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/resources/posts/${id}`)
      .then(res => setResource(res.data))
      .catch(err => console.log(err));
  }, [id]);

  if (!resource) return <p>Loading...</p>;

  return (
    <div>
      <h2>{resource.title}</h2>
      <p>{resource.description}</p>
    </div>
  );
}

export default ViewResource;
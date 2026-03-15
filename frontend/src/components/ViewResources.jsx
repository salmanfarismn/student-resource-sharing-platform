import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewResources() {

  const [resources, setResources] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/resources/posts")
      .then((res) => {
        console.log(res.data);   // check API response
        setResources(res.data.resources);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>All Study Resources</h1>

      {resources.length === 0 ? (
        <p>No resources found</p>
      ) : (
        resources.map((resource) => (
            <Link to={`http://localhost:3000/api/resources/posts/${resource._id}`} key={resource._id}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <p>{resource.subject}</p>
          </Link>
        ))
      )}

    </div>
  );
}

export default ViewResources;
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftnav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h4>All Category</h4>
      <div className="ps-4">
        {categories.map((catrgori) => (
          <p key={catrgori.id}>
            <Link
              to={`/categories/${catrgori.id}`}
              className="text-decoration-none"
            >
              {catrgori.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftnav;

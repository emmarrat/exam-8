import React from 'react';
import {Categories} from "../../types";
import {Link} from "react-router-dom";

interface Props {
  categories: Categories[];
}

const Sidebar: React.FC<Props> = ({categories}) => {

  return (
    <div className="w-25">
      <h4 className="mb-3 text-center">Select quotes category</h4>
      <ul className="list-group nav">
        <Link className="list-group-item nav-link" to='/'>All</Link>
        {categories.map(category => (
          <Link to={`/quotes/category/${category.id}`} className="list-group-item nav-link" key={category.id}>{category.name}</Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
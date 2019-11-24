import React from "react";
import { Link } from "react-router-dom";
import women from "assets/images/women.jpg";
import men from "assets/images/men.jpg";
import kids from "assets/images/kids.jpg";
import CategoryCard from "./CategoryCard";

import * as ROUTES from "constants/routes";

export default function CategoryCards() {
  return (
    <div>
      <div className="container categories-container">
        <div className="columns">
          <div className="column">
            <Link to={ROUTES.WOMEN}>
              <CategoryCard
                title="Women"
                subtitle="Offering sizes 0-24W (XS-3X), Petite, Plus and Maternity."
                image={women}
              />
            </Link>
          </div>
          <div className="column">
            <Link to={ROUTES.MEN}>
              <CategoryCard
                title="Men"
                subtitle="Offering sizes XS-3XL, waist 28-48ʺ & inseams 28-36."
                image={men}
              />
            </Link>
          </div>
          <div className="column">
            <Link to={ROUTES.KIDS}>
              <CategoryCard
                title="Kids"
                subtitle="Offering sizes 2T-14."
                image={kids}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

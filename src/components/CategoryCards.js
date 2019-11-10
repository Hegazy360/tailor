import React from "react";
import women from "./../assets/images/women.jpg";
import men from "./../assets/images/men.jpg";
import kids from "./../assets/images/kids.jpg";
import CategoryCard from "./CategoryCard";

export default function CategoryCards() {
  return (
    <div>
      <div className="container categories-container">
        <div className="columns">
          <CategoryCard
            title="Women"
            subtitle="Offering sizes 0-24W (XS-3X), Petite, Plus and Maternity."
            image={women}
          />
          <CategoryCard
            title="Men"
            subtitle="Offering sizes XS-3XL, waist 28-48ʺ & inseams 28-36."
            image={men}
          />
          <CategoryCard
            title="Kids"
            subtitle="Offering sizes 2T-14."
            image={kids}
          />
        </div>
      </div>
    </div>
  );
}

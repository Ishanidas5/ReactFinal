import React, { useState, useEffect } from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";

const CourseHome = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch search results from the API based on the search term
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`YOUR_API_ENDPOINT?q=${searchTerm}`);
        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);
        } else {
          console.error("Failed to fetch search results");
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    // Call the fetchSearchResults function when the search term changes
    fetchSearchResults();
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Back title="Explore Courses" />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search courses..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <CoursesCard />
      <OnlineCourses searchResults={searchResults} />
    </>
  );
};

export default CourseHome;

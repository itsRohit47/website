"use client";
import React, { useEffect, useState } from "react";

export default function LastUpdated() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState(null);

  useEffect(() => {
    const fetchLastUpdatedDate = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/itsRohit47/website/commits?per_page=1"
        );
        const data = await response.json();
        const lastCommitDate = new Date(data[0].commit.author.date);
        const formattedDate = lastCommitDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        setLastUpdatedDate(formattedDate);
      } catch (error) {
        console.error("Error fetching the last commit date:", error);
      }
    };

    fetchLastUpdatedDate();
  }, []);

  return (
    <div className="w-full flex justify-center gap-2 px-10">
      <span className="font-bold">Last Updated</span>
      <span>{lastUpdatedDate ? lastUpdatedDate : "Loading..."}</span>
    </div>
  );
}

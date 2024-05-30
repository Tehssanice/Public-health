import { useState, useEffect } from "react";

export default function useFetch() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
      headers: {
        Authorization: `Basic Y29hbGl0aW9uOnNraWxscy10ZXN0`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return patients;
}

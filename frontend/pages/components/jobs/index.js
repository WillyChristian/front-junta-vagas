import React from "react";

//Internal imports
import JobsContainer from "./jobs_container";

export default function index() {
  const [jobs, setJobs] = React.useState();

  React.useEffect(() => {
    const url = "https://618328e291d76c00172d183b.mockapi.io/jobsavailable";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div
        className="
        w-full 
        p-2 
        h-32 
        flex 
        items-center 
        justify-center
        bg-gray-300
      "
      >
        Minhas Vagas
      </div>

      {jobs &&
        jobs.map((e) => {
          return <JobsContainer data={e} />;
        })}
    </div>
  );
}

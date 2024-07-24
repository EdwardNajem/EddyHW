import React, { useState, useEffect } from "react";

import Loading from "./Components/Loading/Loading";
import Table from "./Components/Table/Table";

import "./App.css";

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchStudents = () => {
    fetch("http://localhost:5058/api/student/getAllStudents")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Student[]) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
    console.log(students)
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">
      {students ? (
        <Table students={students} />
      ) : (
        <div>No students available</div>
      )}
    </div>
  );
};

export default App;

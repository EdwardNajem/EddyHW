import React, { useState, useEffect } from 'react';

import Loading from './Components/Loading/Loading';
import Table, { Student } from './Components/Table/Table';
import instance from './helper/axiosInstance';
import './App.css';

const App: React.FC = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchStudents = () => {
    instance
      .get('/todos/')
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching students:');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStudents();
    console.log(students);
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

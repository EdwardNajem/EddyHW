import React from 'react';

import styles from './table.module.css';

export type Student = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type TableProps = {
  students: Student[];
};

const Table: React.FC<TableProps> = ({ students }) => {
  return (
    <div>
      <table className={styles.tableDesign}>
        <thead>
          <tr className={styles.tableHeadRow}>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id} className={styles.tableBodyRow}>
              <td>{student.id}</td>
              <td>{student.title}</td>
              <td>{student.userId}</td>
              <td>{student.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

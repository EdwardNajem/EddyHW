import React from "react";

import styles from "./table.module.css";

type Student = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
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
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

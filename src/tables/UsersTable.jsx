import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../service/adminAPI";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Loader from "../ui/Loader";

function createData(username, phone, email) {
  return { username, phone, email };
}

export default function UsersTable() {
  const { users, isLoading } = useUsers();

  if (isLoading) {
    return <Loader />;
  }

  const rows = users.map((user) => {
    return createData(
      user.user_metadata.username,
      user.user_metadata.phone,
      user.email,
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          Users table with a caption that describes the content of the table
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.username}>
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function useUsers() {
  const {
    data: users,
    isLoading,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["admin-users"],
    queryFn: getUsers,
  });

  return { users, isLoading, error, isError, isSuccess };
}

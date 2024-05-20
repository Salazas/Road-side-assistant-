import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { deleteRecord as deleteRecordApi } from "../service/adminAPI";
import { getRecords } from "../service/adminAPI";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, title, image, location, price, is_paid, vehicle) {
  return { id, title, image, location, price, is_paid, vehicle };
}

export default function BookingsTable() {
  const { deleteRecord, isDeleting } = DeleteRecord();
  const { records, isRecordsLoading } = Records();

  if (isRecordsLoading) {
    return <div>Loading...</div>;
  }

  const rows = records?.map((booking) => {
    return createData(
      booking.id,
      booking.title,
      booking.image,
      booking.location,
      booking.price,
      booking.is_paid,
      booking.vehicle,
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption>
          Records of all bookings made by users. This table is used to manage
        </caption>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Is Paid</TableCell>
            <TableCell align="right">Vehicle</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <img
                  src={row.image}
                  alt="vehicle"
                  className="h-20 w-auto object-contain"
                />
              </TableCell>
              <TableCell align="right">[{row.location}]</TableCell>
              <TableCell align="right">{row.price},000 UZS</TableCell>
              <TableCell align="right">{row.is_paid ? "Yes" : "No"}</TableCell>
              <TableCell align="right">
                {row.vehicle.brand} {row.vehicle.model}
              </TableCell>
              <TableCell align="right">
                <button
                  onClick={() => deleteRecord(row.id)}
                  className="rounded-md bg-red-500 p-2 text-white"
                >
                  {isDeleting ? "Deleting..." : "Delete"}
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const DeleteRecord = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteRecord, isDeleting } = useMutation({
    mutationFn: (id) => deleteRecordApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries("records");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteRecord, isDeleting };
};

function Records() {
  const {
    data: records,
    status,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["records"],
    queryFn: getRecords,
  });

  const isRecordsLoading = status === "pending";

  return { records, isRecordsLoading, error, isError, isSuccess };
}

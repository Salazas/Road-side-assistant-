import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getVehicles,
  deleteVehicle as deleteVehicleApi,
} from "../service/adminAPI";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id, image, brand, model, year, license_plate) {
  return { id, image, brand, model, year, license_plate };
}

export default function VehiclesTable() {
  const { deleteVehicle, isDeleting } = DeleteVehicle();
  const { vehicles, isVehiclesLoading } = Vehicles();

  if (isVehiclesLoading) {
    return <div>Loading...</div>;
  }

  const rows = vehicles.map((vehicle) => {
    return createData(
      vehicle.id,
      vehicle.image,
      vehicle.brand,
      vehicle.model,
      vehicle.year,
      vehicle.license_plate,
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
            <TableCell>Image</TableCell>
            <TableCell align="right">Make</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">License Plate</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                <img
                  src={row.image}
                  alt="vehicle"
                  className="h-20 w-auto object-contain"
                />
              </TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">{row.model}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.license_plate}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => deleteVehicle(row.id)}
                  className="rounded-md bg-red-500 px-2 py-1 text-white"
                >
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Vehicles() {
  const {
    data: vehicles,
    status,
    error,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });

  const isVehiclesLoading = status === "pending";

  return { vehicles, isVehiclesLoading, error, isError, isSuccess };
}

const DeleteVehicle = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteVehicle, isDeleting } = useMutation({
    mutationFn: (id) => deleteVehicleApi(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries("admin-Vehicles");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { deleteVehicle, isDeleting };
};

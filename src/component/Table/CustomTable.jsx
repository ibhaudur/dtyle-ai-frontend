import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("TN 45 DR 5642", "09:47:25 AM", "Tamil Nadu", 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function CustomTable({ header }) {
  return (
    <TableContainer className="mb-4">
      <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
        <TableHead
          className="thead"
          sx={{
            "& .MuiTableRow-root": {
              borderRadius: "8px", // Apply border-radius to the entire row
              overflow: "hidden", // Ensure border-radius is visible
              "& .MuiTableCell-root": {
                borderBottom: "none", // Remove bottom border of the header cells
                "&:first-of-type": {
                  borderTopLeftRadius: "8px", // Top-left corner
                  borderBottomLeftRadius: "8px", // Bottom-left corner
                },
                "&:last-of-type": {
                  borderTopRightRadius: "8px", // Top-right corner
                  borderBottomRightRadius: "8px", // Bottom-right corner
                },
              },
            },
          }}
        >
          <TableRow>
            {header.map((head, index) => (
              <TableCell
                key={index}
                className="f-12"
                align={index !== 0 ? "left" : "left"}
              >
                {head}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 5 }).map((_, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell className="f-12 py-2" component="th" scope="row">
                TN 45 DR 5642{" "}
              </TableCell>
              <TableCell className="f-12 py-2 c-lightGrey">09:47:25 AM</TableCell>
              <TableCell className="f-12 py-2">Tamil Nadu</TableCell>
              <TableCell className="f-12 py-2">Ram Nagar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

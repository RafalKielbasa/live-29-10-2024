import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";

import { products } from "../data";

const headerCells = Object.keys(products[0]);
console.log(headerCells);

const Table = () => {
  return (
    <div>
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {headerCells.map((name, index) => (
                <TableCell key={index}>{name}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((item) => {
              const cellValue = Object.values(item);
              return (
                <TableRow key={item.id}>
                  {cellValue.map((cell) => (
                    <TableCell>{String(cell)}</TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
};

export default Table;

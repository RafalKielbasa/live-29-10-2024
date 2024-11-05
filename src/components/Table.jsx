import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import BasicSelect from "./BasicSelect";


import { products } from "../data";
import React from "react";
console.log('pro', products)

const headerCells = Object.keys(products[0]);
console.log(headerCells);

const Table = () => {
  const [availability, setAvailability] = React.useState('all')

  const filteredProducts = products.filter((item) => {
    if (availability==='all') {
      return item  
    }
    if (availability==='inStock') {
      return item.inStock === true
    }
    if (availability==='notInStock') {
      return !item.inStock
    }
  })

  console.log({filteredProducts})

  return (
    <div>
      <BasicSelect availability={availability} setAvailability={setAvailability} />
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
            {filteredProducts.map((item) => {
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

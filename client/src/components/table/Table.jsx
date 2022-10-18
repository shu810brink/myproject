import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const {data,loading,error} = useFetch("/dashboard");
  const rows = [
    {
      id: 'shubham Kumar',
      PriseSignal: "DK-1",
      Criteria: "Lessthan",
      Value: "0",
      Email: "shubham@gmail.com",
      activedays: "Everyday",
  
    },
    
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Prise Signal</TableCell>
            <TableCell className="tableCell">Criteria</TableCell>
            <TableCell className="tableCell">Value</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Active days</TableCell>
            {/* <TableCell className="tableCell">Status</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.PriseSignal}</TableCell>
              <TableCell className="tableCell">{row.Criteria}</TableCell>
              <TableCell className="tableCell">{row.Value}</TableCell>
              <TableCell className="tableCell">{row.Email}</TableCell>
              <TableCell className="tableCell">{row.activedays}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;

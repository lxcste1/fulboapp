import api from "@/api";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default async function Scorers() {
  const scorers = await api.scorers.list();

  return (
    <div className="overflow-x">
      <Table className="m-auto max-w-4xl table-auto overflow-scroll">
        <TableHeader>
          <TableRow>
            <TableHead>Jugador</TableHead>
            <TableHead className="text-right">Goles</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {scorers.map(({player, goals}) => (
            <TableRow key={player}>
              <TableCell>{player}</TableCell>
              <TableCell className="text-right">{goals}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

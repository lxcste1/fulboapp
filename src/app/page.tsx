import api from "@/api";
import {cn} from "@/lib/utils";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default async function Home() {
  const matches = await api.match.list();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Fecha</TableHead>
          <TableHead>City Titular</TableHead>
          <TableHead>City Suplente</TableHead>
          <TableHead>Goles City Titular</TableHead>
          <TableHead className="text-right">Goles City Suplente</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {matches.map(({date, goals1, goals2, team1, team2}) => (
          <TableRow key={date}>
            <TableCell>{date}</TableCell>
            <TableCell>{team1}</TableCell>
            <TableCell>{team2}</TableCell>
            <TableCell className={cn({"font-bold text-green-500": goals1 > goals2})}>
              {goals1}
            </TableCell>
            <TableCell className={cn("text-right", {"font-bold text-green-500": goals2 > goals1})}>
              {goals2}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

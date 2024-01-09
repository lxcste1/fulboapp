import api from "@/api";
import {cn} from "@/lib/utils";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

export default async function Matches() {
  const matches = await api.match.list();

  return (
    <div className="overflow-x">
      <Table className="m-auto table-auto overflow-scroll">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Fecha</TableHead>
            <TableHead>City Titular</TableHead>
            <TableHead />
            <TableHead />
            <TableHead className="text-right">City Suplente</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matches.map(({date, goals1, goals2, team1, team2}) => (
            <TableRow key={date}>
              <TableCell>{date}</TableCell>
              <TableCell className="p-5 md:p-4">{team1}</TableCell>
              <TableCell className={cn({"font-bold text-green-500": goals1 > goals2})}>
                {goals1}
              </TableCell>
              <TableCell className={cn({"font-bold text-green-500": goals2 > goals1})}>
                {goals2}
              </TableCell>
              <TableCell className="p-5 text-right md:p-4">{team2}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

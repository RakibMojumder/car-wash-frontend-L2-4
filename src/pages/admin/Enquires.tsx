import DashLoader from "@/components/loader/DashLoader";
import { useGetAllEnquiresQuery } from "@/redux/features/enquire/enquireApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

type TEnquires = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  question: string;
  services?: Array<string | undefined>;
  createdAt: string;
};

const Enquires = () => {
  const { data, isLoading } = useGetAllEnquiresQuery(null);

  if (isLoading) return <DashLoader />;

  console.log(data);

  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[70px]">S.N.</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="min-w-[150px] md:max-w-[200px]">
              Services
            </TableHead>
            <TableHead className="max-w-[200px]">Question</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((enquire: TEnquires, indx: number) => (
            <TableRow key={enquire._id}>
              <TableCell className="font-medium">{indx + 1}</TableCell>
              <TableCell className="min-w-[150px]">
                {enquire.firstName} {enquire.lastName}
              </TableCell>

              <TableCell className="min-w-[150px]">{enquire.email}</TableCell>
              <TableCell className="min-w-[150px]">{enquire.phone}</TableCell>
              <TableCell className="min-w-[150px] md:max-w-[200px]">
                {enquire?.services?.join(" , ")}
              </TableCell>
              <TableCell className="min-w-[150px] md:max-w-[200px]">
                {enquire.question}
              </TableCell>
              <TableCell className="min-w-[150px]">
                {enquire.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right font-semibold">
                <Button variant="outline" size="sm" className="rounded-none">
                  Replay
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Enquires;

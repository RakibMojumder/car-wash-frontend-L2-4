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
import EnquireReplyModal from "@/components/dashboard/Admin/EnquireReplyModal";

type TEnquires = {
  _id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  question: string;
  services?: Array<string | undefined>;
  replied: boolean;
  createdAt: string;
};

const Enquires = () => {
  const { data, isLoading } = useGetAllEnquiresQuery(null);

  if (isLoading) return <DashLoader />;

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
                {!enquire?.services?.length && (
                  <span className="relative after:absolute after:top-0 after:left-0 after:h-[1px] after:w-16 after:bg-primary"></span>
                )}
              </TableCell>
              <TableCell className="min-w-[150px] md:max-w-[200px]">
                {enquire.question}
              </TableCell>
              <TableCell className="min-w-[150px]">
                {enquire.createdAt.split("T")[0]}
              </TableCell>
              <TableCell className="text-right">
                {enquire.replied ? (
                  <del>Replied</del>
                ) : (
                  <EnquireReplyModal id={enquire._id} />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Enquires;

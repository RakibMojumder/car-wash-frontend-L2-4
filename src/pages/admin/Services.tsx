import DashLoader from "@/components/loader/dashLoader";
import { TService } from "@/components/services/Service";
import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { Button } from "@/components/ui/button";

const Services = () => {
  const { data, isLoading } = useGetAllServicesQuery(null);

  if (isLoading) return <DashLoader />;

  return (
    <div className="pb-20">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">S.N.</TableHead>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.map((service: TService, index: number) => (
            <TableRow key={service._id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <img
                  src={service.image}
                  alt="service image"
                  className="size-10"
                />
              </TableCell>
              <TableCell>{service.name}</TableCell>
              <TableCell>{service.duration} min</TableCell>
              <TableCell className="text-right font-semibold">
                $ {service.price}
              </TableCell>
              <TableCell className="text-right font-semibold space-x-5">
                <Button variant="outline" size="icon">
                  <CiEdit />
                </Button>
                <Button variant="outline" size="icon">
                  <MdOutlineDelete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Services;

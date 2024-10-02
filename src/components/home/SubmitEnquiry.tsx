import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import Logo from "../Logo";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TService } from "../services/Service";

const SubmitEnquiry = () => {
  const { data } = useGetAllServicesQuery(null);

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 sm:gap-y-0 items-start w-full lg:w-[85%] mx-auto">
          <div className="col-span-4 bg-white border p-6 md:p-12 sm:mx-8 lg:mx-0 space-y-8">
            <Logo className="items-start" />
            <h1 className="text-4xl font-bold">
              Got <br /> Questions?
            </h1>
            <p>
              Enquire today about our services, or advice on how to best care
              for your car. Use the form to get in touch or call or email us
              directly. Check out our frequently asked questions for more
              information.
            </p>
          </div>
          <div className="col-span-8 p-6 md:p-8 border bg-white/90 backdrop-blur-[10px] lg:-translate-y-16">
            <h1 className="text-2xl font-semibold mb-5">Submit Enquiry</h1>
            <div>
              <h5>
                "<span className="text-red-500">*</span>" indicates required
                fields
              </h5>

              <form className="mt-5 space-y-8 md:space-y-6">
                <div className="flex flex-col md:flex-row items-end gap-5">
                  <div className="w-full">
                    <Label>
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input type="text" placeholder="Enter first name" />
                  </div>
                  <div className="w-full">
                    <Label></Label>
                    <Input type="text" placeholder="Enter last Name" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-end gap-x-5 gap-y-10">
                  <div className="w-full">
                    <Label>
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input type="text" placeholder="Enter phone" />
                  </div>
                  <div className="w-full">
                    <Label>
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input type="email" placeholder="Enter email" />
                  </div>
                </div>
                {/* checkbox */}
                <div>
                  <h1 className="font-semibold my-3">SERVICE(S) OF ENQUIRY</h1>
                  <div className="space-y-3">
                    {data?.data?.map((service: TService) => (
                      <div
                        key={service._id}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={service.name} />
                        <label
                          htmlFor={service.name}
                          className="font-semibold text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {service.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Question */}
                <div className="w-full">
                  <Label>
                    Question <span className="text-red-500">*</span>
                  </Label>
                  <Textarea rows={5} placeholder="Type your question here." />
                </div>

                <Button type="submit">Enquire</Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubmitEnquiry;

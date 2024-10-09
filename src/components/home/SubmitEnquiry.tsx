/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetAllServicesQuery } from "@/redux/features/services/serviceApi";
import Logo from "../Logo";
import { Checkbox } from "../ui/checkbox";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { TService } from "../services/Service";
import { useCreateEnquireMutation } from "@/redux/features/enquire/enquireApi";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { enquireValidationSchema } from "@/yup/yupSchema";
import { useState } from "react";
import LoadingButton from "../LoadingButton";
import { toast } from "sonner";

type FormData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  question: string;
};

const SubmitEnquiry = () => {
  const [services, setServices] = useState<Array<string>>([]);
  const { data } = useGetAllServicesQuery(null);
  const [createEnquire, { isLoading }] = useCreateEnquireMutation();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(enquireValidationSchema),
  });

  const handleServices = (service: string) => {
    const isServiceExist = services.find((ser) => ser === service);
    if (isServiceExist) {
      const filteredRestOfServices = services.filter((ser) => ser !== service);
      setServices([...filteredRestOfServices]);
    } else {
      setServices((prev) => [...prev, service]);
    }
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await createEnquire({ ...data, services }).unwrap();
      toast.success(res.message);
      reset();
    } catch (error: any) {
      toast.error(error.data.message);
    }
  };

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

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="mt-5 space-y-8 md:space-y-4"
              >
                <div className="flex flex-col md:flex-row items-end gap-5">
                  <div className="w-full">
                    <Label>
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter first name"
                      {...register("firstName")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                      {errors?.firstName?.message}
                    </p>
                  </div>
                  <div className="w-full">
                    <Label></Label>
                    <Input
                      type="text"
                      placeholder="Enter last Name"
                      {...register("lastName")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                      {errors?.lastName?.message}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-end gap-x-5 gap-y-10">
                  <div className="w-full">
                    <Label>
                      Phone <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="text"
                      placeholder="Enter phone"
                      {...register("phone")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                      {errors?.phone?.message}
                    </p>
                  </div>
                  <div className="w-full">
                    <Label>
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      type="email"
                      placeholder="Enter email"
                      {...register("email")}
                    />
                    <p className="text-sm text-red-500 mt-1 h-5">
                      {errors?.email?.message}
                    </p>
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
                        <Checkbox
                          id={service.name}
                          onCheckedChange={() => handleServices(service.name)}
                        />
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
                  <Textarea
                    rows={5}
                    placeholder="Type your question here."
                    {...register("question")}
                  />
                  <p className="text-sm text-red-500 mt-1 h-5">
                    {errors?.question?.message}
                  </p>
                </div>

                <LoadingButton
                  isLoading={isLoading}
                  label="Enquire"
                  className="sm:w-1/2 bg-neutral-200/70"
                />
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubmitEnquiry;

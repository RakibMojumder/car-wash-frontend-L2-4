import Logo from "../Logo";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import Container from "../ui/Container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

const SubmitEnquiry = () => {
  return (
    <section>
      <Container>
        <div className="grid grid-cols-12 items-start pb-28 w-[85%] mx-auto">
          <div className="col-span-4 border p-12 space-y-8 shadow-[0px_0px_6px_#ddd] backdrop-blur">
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
          <div className="col-span-8 p-8 border -translate-y-14 shadow-[0px_0px_20px_#ddd]">
            <h1 className="text-2xl font-semibold mb-5">Submit Enquiry</h1>
            <div className="p-4">
              <h5>
                "<span className="text-red-500">*</span>" indicates required
                fields
              </h5>

              <form className="mt-5 space-y-6">
                <div className="flex items-end gap-x-5">
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
                <div className="flex items-end gap-x-5">
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
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-semibold text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-semibold text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-semibold text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-semibold text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <label
                        htmlFor="terms"
                        className="font-semibold text-primary leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Accept terms and conditions
                      </label>
                    </div>
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

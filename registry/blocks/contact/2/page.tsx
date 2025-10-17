import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ContactCard } from "./contact-card";

export default function Page() {
  return (
    <main className="relative flex size-full min-h-screen w-full items-center justify-center p-4">
      <div className="mx-auto w-full max-w-5xl">
        <ContactCard
          contactInfo={[
            {
              icon: MailIcon,
              label: "Email",
              value: "contact@21st.dev",
            },
            {
              icon: PhoneIcon,
              label: "Phone",
              value: "+92 312 1234567",
            },
            {
              icon: MapPinIcon,
              label: "Address",
              value: "Faisalabad, Pakistan",
              className: "col-span-2",
            },
          ]}
          description="If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day."
          title="Get in touch"
        >
          <form action="" className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone</Label>
              <Input type="phone" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message</Label>
              <Textarea />
            </div>
            <Button className="w-full" type="button">
              Submit
            </Button>
          </form>
        </ContactCard>
      </div>
    </main>
  );
}

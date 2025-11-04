import { AtSign, EyeIcon, LockIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";

export function SettingsForm() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <FieldSet>
        <FieldLegend className="text-4xl">Account Settings</FieldLegend>
        <FieldDescription>
          Manage account and your personal information.
        </FieldDescription>
        <FieldSeparator />
        <FieldGroup className="gap-5">
          <div className="rounded-xl border border-border/60 p-0.5">
            <Field
              className="rounded-xl border bg-card px-4 py-8 shadow-xs dark:bg-card/50"
              orientation="responsive"
            >
              <FieldContent>
                <FieldLabel htmlFor="name">Your Name</FieldLabel>
                <FieldDescription>
                  Please enter a display name you are comfortable with.
                </FieldDescription>
              </FieldContent>
              <FieldContent>
                <ButtonGroup className="w-full">
                  <Input id="name" placeholder="Enter Your Name" />
                  <Button variant="outline">Save</Button>
                </ButtonGroup>
                <FieldDescription>Max 32 characters</FieldDescription>
              </FieldContent>
            </Field>
          </div>
          <div className="rounded-xl border border-border/60 p-0.5">
            <Field
              className="rounded-xl border bg-card px-4 py-8 shadow-xs dark:bg-card/50"
              orientation="responsive"
            >
              <FieldContent>
                <FieldLabel htmlFor="lastName">Your Email</FieldLabel>
                <FieldDescription>
                  Please enter a valid email address.
                </FieldDescription>
              </FieldContent>
              <FieldContent>
                <ButtonGroup className="w-full">
                  <InputGroup>
                    <InputGroupAddon>
                      <AtSign />
                    </InputGroupAddon>
                    <InputGroupInput
                      placeholder="Enter Your Email"
                      type="email"
                    />
                  </InputGroup>
                  <Button variant="outline">Save</Button>
                </ButtonGroup>
                <FieldDescription>Should be unique</FieldDescription>
              </FieldContent>
            </Field>
          </div>
          <div className="rounded-xl border border-border/60 p-0.5">
            <Field
              className="rounded-xl border bg-card px-4 py-8 shadow-xs dark:bg-card/50"
              orientation="responsive"
            >
              <FieldContent>
                <FieldLabel htmlFor="lastName">Your Password</FieldLabel>
                <FieldDescription>
                  please create a strong password
                </FieldDescription>
              </FieldContent>
              <FieldContent>
                <ButtonGroup className="w-full">
                  <InputGroup>
                    <InputGroupAddon>
                      <LockIcon />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="XXxxXXX" type="password" />
                    <InputGroupAddon align="inline-end">
                      <InputGroupButton>
                        <EyeIcon />
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                  <Button variant="outline">Save</Button>
                </ButtonGroup>
                <FieldDescription>
                  Min 8 characters, Max 16 characters
                </FieldDescription>
              </FieldContent>
            </Field>
          </div>
          <div className="rounded-xl border border-border/60 p-0.5">
            <Field
              className="rounded-xl border bg-card px-4 py-8 shadow-xs dark:bg-card/50"
              orientation="responsive"
            >
              <FieldContent>
                <FieldLabel htmlFor="lastName">Your Phone Number</FieldLabel>
                <FieldDescription>
                  please provide your phone number
                </FieldDescription>
              </FieldContent>
              <FieldContent>
                <ButtonGroup className="w-full">
                  <InputGroup>
                    <InputGroupAddon>
                      <PhoneIcon />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="+91 1234567890" type="tel" />
                  </InputGroup>
                  <Button variant="outline">Save</Button>
                </ButtonGroup>
                <FieldDescription>Min 10 characters</FieldDescription>
              </FieldContent>
            </Field>
          </div>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}

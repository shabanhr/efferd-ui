import { CircleCheckIcon } from "lucide-react";
import { WordmarkIcon } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/button-group";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";

export function CreateWorkspaceForm() {
  return (
    <div className="w-full max-w-md rounded-xl border bg-background shadow-sm">
      <div className="flex flex-col items-center justify-center gap-6 rounded-t-xl border-b bg-card/60 py-12">
        <WordmarkIcon className="h-5" />
        <div className="flex flex-col items-center space-y-1">
          <h2 className="font-medium text-2xl">Create your workspace</h2>
          <a className="text-muted-foreground underline" href="#">
            What is a workspace?
          </a>
        </div>
      </div>
      <FieldGroup className="p-4">
        <Field className="gap-2">
          <FieldLabel htmlFor="name">Workspace Name</FieldLabel>
          <Input autoComplete="off" id="name" placeholder="e.g., Acme, Inc." />
          <FieldDescription>
            This is the name of your workspace on Efferd.
          </FieldDescription>
        </Field>
        <Field className="gap-2">
          <FieldLabel htmlFor="slug">Workspace Slug</FieldLabel>
          <ButtonGroup>
            <ButtonGroupText asChild>
              <Label htmlFor="slug">efferd.com/</Label>
            </ButtonGroupText>
            <InputGroup>
              <InputGroupInput id="slug" placeholder="e.g., acme" />
              <InputGroupAddon align="inline-end">
                <CircleCheckIcon />
              </InputGroupAddon>
            </InputGroup>
          </ButtonGroup>
          <FieldDescription>
            This is your workspace's unique slug on Efferd.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <div className="rounded-b-xl border-t bg-card/60 p-4">
        <Button className="w-full" type="submit">
          Create Workspace
        </Button>
      </div>
    </div>
  );
}

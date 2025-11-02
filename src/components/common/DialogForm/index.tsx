import { DialogClose, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
interface DialogProps {
   title: string;
}

const DialogForm = ({ title }: DialogProps) => {
   return (
      <DialogContent>
         <DialogTitle className="py-5 text-2xl font-semibold">{title}</DialogTitle>
         <FieldSet className="pr-10">
               <FieldGroup>
                  <Field>
                     <FieldLabel htmlFor="nome">Nome</FieldLabel>
                     <Input id="nome" autoComplete="off" placeholder="Nome"/>
                  </Field>
                  <Field>
                     <FieldLabel htmlFor="email">Email</FieldLabel>
                     <Input id="email" autoComplete="off" placeholder="Email"/>
                  </Field>
                  <Field>
                     <FieldLabel htmlFor="telefone">Telefone</FieldLabel>
                     <Input id="telefone" autoComplete="off" placeholder="Telefone"/>
                  </Field>
               </FieldGroup>
         </FieldSet>
         <section className="flex justify-end gap-3 py-3">
            <DialogClose asChild>
               <Button className="w-32" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button className="w-32">Salvar</Button>
         </section>
      </DialogContent>
   );
};

export default DialogForm;

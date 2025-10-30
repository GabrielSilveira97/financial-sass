import { DialogContent, DialogTitle } from "@/components/ui/dialog"

interface DialogProps {
    title: string
}


const DialogForm = ({title} : DialogProps) => {
    return(
        <DialogContent>
            <DialogTitle>{title}</DialogTitle>
            <div>
                Aqui fica o formulario
            </div>
        </DialogContent>
    )
}


export default DialogForm
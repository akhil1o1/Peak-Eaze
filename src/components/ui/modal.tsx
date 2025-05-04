import {
   Dialog,
   DialogContent,
} from "@/components/ui/dialog";

export const Modal = ({
   isOpen,
   onClose,
   children,
}: {
   isOpen: boolean;
   onClose: () => void;
   children: React.ReactNode;
}) => {
   return (
      <Dialog open={isOpen}  onOpenChange={onClose}>
         <DialogContent className="w-max">{children}</DialogContent>
      </Dialog>
   );
};

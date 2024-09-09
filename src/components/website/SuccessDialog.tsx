import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CALENDLY } from "@/lib/consts";
import Link from "next/link";

export default function SuccessDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="border border-gray-600 bg-slate-950">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-green-400">
            Your form has successfully submited
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-gray-400">
            Would you like to book a meeting in the calendar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-none bg-slate-800 hover:bg-slate-900 hover:text-white">
            No Thanks
          </AlertDialogCancel>
          <AlertDialogAction className="bg-blue-500 hover:bg-blue-600">
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer">
              Yes, Sure
            </a>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

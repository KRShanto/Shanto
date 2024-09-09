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
import Link from "next/link";

export default function ErrorDialog({
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
          <AlertDialogTitle className="text-xl text-red-500">
            An error occurred while submitting the form
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg text-gray-400">
            Please try again later or contact support
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction className="bg-blue-500 hover:bg-blue-600">
            Try Again
          </AlertDialogAction>
          <AlertDialogCancel className="border-none bg-slate-800 hover:bg-slate-900 hover:text-white">
            <Link href="/#contact">Contact Me Directly</Link>
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}


import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchForm } from "./SearchForm";
import { Search } from "lucide-react";

export const SearchDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-gray-700">
          <Search className="h-5 w-5" />
          <span className="sr-only">Buscar</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Búsqueda avanzada</DialogTitle>
        </DialogHeader>
        <SearchForm onSubmit={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

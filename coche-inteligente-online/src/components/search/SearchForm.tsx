
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MARCAS, ANOS, PROVINCIAS } from "@/lib/data";

const formSchema = z.object({
  marca: z.string().optional(),
  modelo: z.string().optional(),
  precioMin: z.number().default(0),
  precioMax: z.number().default(100000),
  anoMin: z.string().optional(),
  anoMax: z.string().optional(),
  provincia: z.string().optional(),
  kmMin: z.number().default(0),
  kmMax: z.number().default(300000),
});

export const SearchForm = ({ onSubmit = () => {} }) => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [kmRange, setKmRange] = useState([0, 300000]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      marca: "",
      modelo: "",
      precioMin: 0,
      precioMax: 100000,
      anoMin: "",
      anoMax: "",
      provincia: "",
      kmMin: 0,
      kmMax: 300000,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    // Update values with range sliders
    values.precioMin = priceRange[0];
    values.precioMax = priceRange[1];
    values.kmMin = kmRange[0];
    values.kmMax = kmRange[1];
    
    // Build query string
    const params = new URLSearchParams();
    Object.entries(values).forEach(([key, value]) => {
      if (value !== "" && value !== undefined) {
        params.append(key, String(value));
      }
    });
    
    navigate(`/buscar?${params.toString()}`);
    onSubmit();
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatKm = (value: number) => {
    return new Intl.NumberFormat("es-ES").format(value) + " km";
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="marca"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Marca</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Todas las marcas" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="all">Todas las marcas</SelectItem>
                    {MARCAS.map((marca) => (
                      <SelectItem key={marca} value={marca.toLowerCase()}>
                        {marca}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="modelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Modelo</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Cualquier modelo"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="anoMin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Año desde</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Cualquier año" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="any">Cualquier año</SelectItem>
                    {ANOS.map((ano) => (
                      <SelectItem key={ano} value={ano.toString()}>
                        {ano}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="anoMax"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Año hasta</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Cualquier año" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="any">Cualquier año</SelectItem>
                    {ANOS.map((ano) => (
                      <SelectItem key={ano} value={ano.toString()}>
                        {ano}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>

        <FormItem>
          <FormLabel>
            Precio: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </FormLabel>
          <FormControl>
            <Slider
              defaultValue={[0, 100000]}
              min={0}
              max={150000}
              step={1000}
              onValueChange={setPriceRange}
              className="my-4"
            />
          </FormControl>
        </FormItem>

        <FormItem>
          <FormLabel>
            Kilómetros: {formatKm(kmRange[0])} - {formatKm(kmRange[1])}
          </FormLabel>
          <FormControl>
            <Slider
              defaultValue={[0, 300000]}
              min={0}
              max={300000}
              step={5000}
              onValueChange={setKmRange}
              className="my-4"
            />
          </FormControl>
        </FormItem>

        <FormField
          control={form.control}
          name="provincia"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provincia</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las provincias" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="all">Todas las provincias</SelectItem>
                  {PROVINCIAS.map((provincia) => (
                    <SelectItem key={provincia} value={provincia.toLowerCase()}>
                      {provincia}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Buscar vehículos
        </Button>
      </form>
    </Form>
  );
};

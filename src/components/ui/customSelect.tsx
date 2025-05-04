import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

interface CustomSelectProps {
   options: { value: string; label: string }[];
   placeholder?: string;
   className?: string;
   defaultValue?: string;
}

export const CustomSelect = ({
   options,
   placeholder,
   className = "",
   defaultValue,
}: CustomSelectProps) => {
   return (
      <Select defaultValue={defaultValue}>
         <SelectTrigger
            className={`w-full ${className}`}
         >
            <SelectValue placeholder={placeholder} />
         </SelectTrigger>
         <SelectContent>
            <SelectGroup>
               {options.map((option, index) => (
                  <SelectItem key={option.value + index} value={option.value}>
                     {option.label}
                  </SelectItem>
               ))}
            </SelectGroup>
         </SelectContent>
      </Select>
   );
};

import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import {
   Accordion,
   AccordionItem,
   AccordionTrigger,
   AccordionContent,
} from "./ui/accordion";

import { images } from "@/assets/images";
import { icons } from "@/assets/icons";

const billDetails = [
   { label: "Bill Number", type: "text" },
   { label: "Bill Date", type: "date" },
   { label: "Bill Amount", type: "number" },
   { label: "Paid Date", type: "date" },
   { label: "Due Date", type: "date" },
   { label: "Bank Transaction Ref", type: "text" },
   { label: "Tax Amount", type: "number" },
   { label: "Fx Rate", type: "number" },
];

export const DetailsPane = () => {
   return (
      <aside className="w-full h-full bg-white p-4 sticky top-0 overflow-y-auto max-h-screen">
         <div className="space-y-4 border shadow-2xs p-3">
            <div className="flex gap-2">
               <div>
                  <img src={images.quickBooksLogo} alt="quick-books" />
               </div>
               <div className="w-full grid grid-cols-6 gap-x-2 text-[#8181A5]">
                  <div className="col-span-3">
                     <p className="text-sm font-semibold text-black">
                        Quickbook
                     </p>
                     <p className="text-xs">5 May, 2024</p>
                     <p className="text-xs">8:15 PM</p>
                  </div>
                  <div className="col-span-3">
                     <p className="text-xs text-right">Publishing...</p>
                     <p className="text-xs text-right">Jimmy Jason</p>
                  </div>
               </div>
            </div>
            <div className="w-full flex justify-between">
               {["Auto Sync", "Save Config"].map((item) => (
                  <Checkbox label={item} key={item} />
               ))}
            </div>
         </div>

         <div className="py-6 space-y-4">
            <div className="flex justify-between gap-2">
               <Button size={"sm"} variant={"outline"} className="flex-1">
                  Comment
               </Button>
               <Button
                  size={"sm"}
                  variant={"ghost"}
                  className="text-muted-foreground flex-1"
               >
                  Query
               </Button>
            </div>
            <div className="border-b">
               <label htmlFor="comment" className="text-[#8181A5] mb-2">
                  Type Comment
               </label>
               <textarea
                  name="comment"
                  id="comment"
                  rows={3}
                  placeholder="Start typing..."
                  className="w-full placeholder:text-xs p-2"
               />
            </div>
            <Button
               className="w-full bg-primary/5 text-muted-foreground"
               variant={"secondary"}
            >
               Add Comment
            </Button>
            <Button className="w-full">View Line Items</Button>
         </div>
         <div className="py-4 space-y-4">
            <DetailSection title="Payment Details" />
         </div>
         <div className="py-4 space-y-4">
            <Button
               className="w-full bg-primary/5 text-muted-foreground"
               variant={"secondary"}
            >
               Save
            </Button>
            <Button className="w-full">Publish</Button>
         </div>
      </aside>
   );
};

const DetailSection = ({ title }: { title: string }) => {
   return (
      <div className="space-y-3">
         <div className="flex items-center justify-between pb-3 border-b">
            <Button variant={"secondary"} size={"icon"} className="p-1 w-6 h-6">
               <img src={icons.arrowLeft} alt="left" />
            </Button>
            <span className="font-semibold inline-block">{title}</span>
            <Button variant={"secondary"} size={"icon"} className="p-1 w-6 h-6">
               <img src={icons.arrowRight} alt="right" />
            </Button>
         </div>
         {["Payment Details", "Description"].map((item) => (
            <Accordion
               key={item}
               type="single"
               collapsible
               className="w-full"
               defaultValue={title}
            >
               <AccordionItem value={title}>
                  <AccordionTrigger className="cursor-pointer">
                     {item}
                  </AccordionTrigger>
                  <AccordionContent className="space-y-2">
                     <div className="space-y-4 py-3 border-b">
                        <RadioGroup
                           defaultValue="paid"
                           className="flex items-center justify-start gap-8"
                        >
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="paid" id="paid" />
                              <Label htmlFor="paid">Paid</Label>
                           </div>
                           <div className="flex items-center space-x-2">
                              <RadioGroupItem value="unPaid" id="unPaid" />
                              <Label htmlFor="unPaid">Unpaid</Label>
                           </div>
                        </RadioGroup>
                     </div>
                     <div className="space-y-2">
                        {billDetails.map((item) => (
                           <div key={item.label} className="pb-2 border-b">
                              <label
                                 htmlFor={item.label}
                                 className="text-[#8181A5] text-xs mb-2"
                              >
                                 {item.label}
                              </label>
                              <input
                                 name={item.label}
                                 id={item.label}
                                 type={item.type}
                                 placeholder="Start typing..."
                                 className="w-full placeholder:text-sm font-[500] text-[#8181A5] p-2"
                              />
                           </div>
                        ))}
                     </div>
                  </AccordionContent>
               </AccordionItem>
            </Accordion>
         ))}
      </div>
   );
};

import { useState } from "react";
import { Button } from "./ui/button";

import { icons } from "@/assets/icons";

export default function UploadReceiptsPanel() {
   const [selectedClient, setSelectedClient] = useState("");

   return (
      <div className="min-w-[450px] mx-auto p-4">
         <div className="flex justify-between mb-6">
            <Button
               size={"sm"}
               variant={"ghost"}
               className="text-muted-foreground"
            >
               EasyUpload
            </Button>
            <Button size={"sm"} variant={"ghost"} className="text-black">
               Bills
            </Button>
            <Button size={"sm"} variant={"outline"}>
               Receipts
            </Button>
            <Button size={"sm"} variant={"ghost"} className="text-black">
               Bank
            </Button>
         </div>

         <div className="flex justify-between mb-6 border-b pb-3 text-sm gap-4">
            <div className="flex-1">
               <p className="text-gray-400">Document Owner</p>
               <p className="font-semibold">Accountant 01</p>
            </div>
            <div className="flex-1">
               <p className="text-gray-400 pl-1">Client</p>
               <select
                  className="text-sm border-none text-muted-foreground cursor-pointer"
                  value={selectedClient}
                  onChange={(e) => setSelectedClient(e.target.value)}
               >
                  <option value="">Select Client</option>
                  <option value="client1">Client 1</option>
                  <option value="client2">Client 2</option>
               </select>
            </div>
         </div>

         <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center mb-6">
            <div className="flex items-center justify-center gap-4">
               <div className="px-4 py-3 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                  <img
                     src={icons.uploadIcon}
                     className="w-8 h-8"
                     alt="upload file"
                  />
               </div>
               <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="space-y-2">
                     <p className="text-primary text-sm font-medium">
                        Drag & Drop or Choose file to upload
                     </p>
                     <p className="text-xs text-gray-400">JPG, PNG, PDF, CVS</p>
                     <input id="file-upload" type="file" className="hidden" />
                  </div>
               </label>
            </div>
         </div>

         <div className="flex justify-center mb-6">
            <Button className="w-1/2">Add Receipt</Button>
         </div>

         <div className="text-sm text-gray-500 space-y-2">
            <div className="flex items-center space-x-2">
               <span className="text-black">Single :</span>
               <span className="text-primary cursor-pointer">
                  abc.single@gmail.com
               </span>
               <button title="Copy">
                  <img src={icons.copyIcon} alt="Copy" className="w-4 h-4" />
               </button>
            </div>
            <div className="flex items-center space-x-2">
               <span className="text-black">Multiple :</span>
               <span className="text-primary cursor-pointer">
                  abc.multiple@gmail.com
               </span>
               <button title="Copy">
                  <img src={icons.copyIcon} alt="Copy" className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>
   );
}

import { useState } from "react";

import { CustomSelect } from "./ui/customSelect";
import { Button } from "./ui/button";
import { Modal } from "./ui/modal";
import UploadReceiptsPanel from "./uploadReciept";

import { icons } from "@/assets/icons";

export const Header = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleClick = () => {
      setIsModalOpen(true);
   };

   const onClose = () => {
      setIsModalOpen(false);
   };

   return (
      <>
         <header className="bg-white p-4 w-full sticky top-0 z-50">
            <div className="flex items-center justify-between">
               <div className="flex items-center justify-between gap-2">
                  <div className="font-semibold">Review</div>
                  <CustomSelect
                     defaultValue="1"
                     className="min-w-38 border-primary border-1"
                     options={[
                        { label: "Google", value: "1" },
                        { label: "Option 2", value: "2" },
                        { label: "Option 3", value: "3" },
                     ]}
                  />
                  <div className="text-[#2CA01D] text-xs p-2 bg-cyan-100 rounded-md w-full">
                     Quickbook's Data
                  </div>
               </div>
               <div className="flex items-center justify-between gap-1">
                  <Button variant={"secondary"} className="p-3">
                     <img src={icons.searchIcon} alt="search" className="w-4" />
                  </Button>
                  <Button variant={"secondary"}>Export to Excel</Button>
                  <Button variant={"secondary"} onClick={handleClick}>
                     Add Document
                  </Button>
                  <Button variant={"secondary"}>Connect</Button>
                  <Button variant={"secondary"} className="p-3">
                     <img src={icons.bellIcon} alt="search" className="w-4" />
                  </Button>
                  <Button variant={"secondary"} className="p-3">
                     <img
                        src={icons.settingsIcon}
                        alt="settings"
                        className="w-4"
                     />
                  </Button>
                  <Button variant={"secondary"} className="p-3">
                     <img src={icons.userIcon} alt="user" className="w-4" />
                  </Button>
               </div>
            </div>
         </header>
         <Modal isOpen={isModalOpen} onClose={onClose}>
            <UploadReceiptsPanel />
         </Modal>
      </>
   );
};

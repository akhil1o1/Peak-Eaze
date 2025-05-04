import { Header } from "./header";
import { Button } from "./ui/button";

import { images } from "@/assets/images";

const TABS = ["Documents", "Bills", "Reciepts"];

export const MainArea = () => {
   return (
      <main className="relative">
         <Header />
         <div className="px-4 py-8 max-h-max overflow-y-scroll">
            <div className="p-4 bg-white rounded-xl w-full h-full">
               <div className="flex justify-end py-2 mb-2">
                  <Button>Add to Expense Report</Button>
               </div>
               <div className="grid grid-cols-14 gap-x-4">
                  <div className="col-span-4 space-y-4">
                     <div className="flex items-center justify-between gap-2">
                        {TABS.map((tab) => (
                           <Button
                              key={tab}
                              size={'sm'}
                              variant={tab === "Bills" ? "outline" : "ghost"}
                              className={
                                 `${tab === "Bills" ? "" : "text-muted-foreground"} flex-1`
                              }
                           >
                              {tab}
                           </Button>
                        ))}
                     </div>
                     <div className="rounded-xl border shadow-2xs sticky top-0 overflow-y-auto max-h-screen">
                        {Array.from({ length: 15 }, (_, index) => (
                           <BillItem key={index} serialNo={index + 1} />
                        ))}
                     </div>
                  </div>
                  <div className="col-span-10">
                     <div className="rounded-2xl border border-dashed p-2">
                        <div className="rounded-2xl bg-[#F6DEBA]">
                           <div className="p-24">
                              <Invoice />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>
   );
};

const BillItem = ({ serialNo }: { serialNo: number }) => {
   return (
      <div className="flex items-center gap-2 p-4 border-b">
         <div>
            <img src={images.billImage} alt="Bill" />
         </div>
         <div className="space-y-1">
            <span className={`${serialNo === 1 ? 'text-primary' : ''} font-[500] text-sm block`}>
               Bill {serialNo}
            </span>
            <span className="text-muted-foreground text-xs block">
               Date : May 4 2024
            </span>
            <span className="text-muted-foreground text-xs block">$50.59</span>
         </div>
      </div>
   );
};

const Invoice = () => {
   return (
      <div className="max-w-3xl mx-auto bg-white font-sans text-[#0b6e6e] shadow-2xl">
         <div className="p-6">
            <div className="flex justify-between items-start border-b-2 border-gray-300 pb-6">
               <div>
                  <h1 className="text-3xl font-bold text-[#008080]">INVOICE</h1>
                  <div className="mt-8 text-sm">
                     <p className="font-bold">Bill to</p>
                     <p>Business Company 123</p>
                     <p>Grand Avenue, 29102</p>
                     <p>Country - 00 000 000</p>
                     <p>000 CIF: 00000000ABC</p>
                  </div>
               </div>
               <div className="text-sm text-right">
                  <div className="flex items-center gap-2">
                     <div className="w-8 h-8 bg-[#d7f0f0] rounded-full flex items-center justify-center text-xs font-bold">
                        🧖‍♀️
                     </div>
                     <div className="text-left">
                        <p className="text-lg font-semibold">Marble</p>
                        <p className="text-sm">BEAUTY & SPA</p>
                     </div>
                  </div>
                  <p className="mt-6 font-bold">Invoice</p>
                  <p>#12345</p>
                  <p className="mt-4 font-bold">Date</p>
                  <p>00/00/00</p>
               </div>
            </div>

            <div className="mt-10 py-6 text-sm border-b-2 border-gray-300">
               <div className="grid grid-cols-4 font-bold pb-2">
                  <div>Description</div>
                  <div>Price</div>
                  <div>Qty</div>
                  <div>Total</div>
               </div>
               {[...Array(5)].map((_, i) => (
                  <div key={i} className="grid grid-cols-4 py-2">
                     <div>Service desc</div>
                     <div>00,00€</div>
                     <div>1</div>
                     <div>00,00€</div>
                  </div>
               ))}
            </div>

            <div className="mt-10 text-sm flex justify-between">
               <div className="w-1/2">
                  <p className="font-semibold">Payment method</p>
                  <p>By Bank, London State Bank LN34 00</p>
                  <p>1234 56 6789 1237</p>

                  <p className="mt-6 font-semibold">Terms & conditions</p>
                  <p className="text-xs text-gray-600">
                     The origins of the first commissioners date back to their
                     health and cosmetic roots. However, the technological
                     context of civilization has changed over time.
                  </p>
               </div>

               <div className="w-1/3 text-right">
                  <div className="flex justify-between pt-2">
                     <span className="font-bold">Subtotal</span>
                     <span>00,00€</span>
                  </div>
                  <div className="flex justify-between mt-2">
                     <span className="font-bold">Tax</span>
                     <span>00,00€</span>
                  </div>
                  <div className="flex justify-between mt-4 font-bold text-lg text-[#008080]">
                     <span>Total</span>
                     <span>00,00€</span>
                  </div>
               </div>
            </div>
         </div>
         <div className="mt-12 p-6 bg-[#008080] text-white text-center text-sm">
            <div className="flex justify-between max-w-2xl mx-auto">
               <p>info@marblespa.com</p>
               <p>www.marblespa.com</p>
            </div>
         </div>
      </div>
   );
};

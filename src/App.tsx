import { Sidebar } from "./components/sidebar";
import { DetailsPane } from "./components/detailsPane";
import { MainArea } from "./components/mainarea";
import { FloatingChat } from "./components/floatingChat";

export const App = () => {
   return (
      <div className="grid grid-cols-18 min-h-[100dvh] max-w-[1800px] mx-auto">
         <div className="col-span-1">
            <Sidebar />
         </div>
         <div className="col-span-13">
            <MainArea />
         </div>
         <div className="col-span-4">
            <DetailsPane />
         </div>
         <FloatingChat />
      </div>
   );
};

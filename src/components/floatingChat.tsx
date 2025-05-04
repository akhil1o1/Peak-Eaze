import { icons } from "@/assets/icons";

export const FloatingChat = () => {
   return (
      <button
         id="floating-chat-button"
         className="bg-[#9C85ED] p-3 fixed right-12 bottom-10 z-[65] items-center justify-center rounded-md shadow-2xl hover:opacity-90 transition ease-in-out hidden lg:flex"
      >
         <img
            src={icons.floatingChatIcon}
            alt="chat"
            className="w-8 h-8"
         />
      </button>
   );
};

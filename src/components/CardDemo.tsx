"use client";
import { cn } from "@/lib/utils";

interface AsanItem {
  id: number;
  asanName: string;
  asanDiscription: string;
}

export const CardDemo = ({ items }: { items: AsanItem[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-center">
      {items.map((item) => (
        <div key={item.id} className="max-w-xs w-full group/card mr-0 md:mr-3">
        <div
            className={cn(
                " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
                "bg-[url(https://images.unsplash.com/photo-1544077960-604201fe74bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80)] bg-cover"
            )}
        >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
            </div>
            <div className="text content">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                    {item.asanName}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                    {item.asanDiscription}
                </p>
            </div>
        </div>
    </div>
      ))}
    </div>
  );
};

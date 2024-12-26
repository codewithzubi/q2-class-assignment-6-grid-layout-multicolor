

export default function Home() {
  return (
   <div className="flex flex-col items-center">
    <h1 className="text-3xl font-extrabold">ZUBAIR AHMED</h1>
    <div className="container mx-auto p-4 bg-black">
        <div className="grid grid-rows-6 grid-cols-4 gap-4 h-screen">
            <div className="row-span-1 col-span-4 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-lg">header</div>
            <div className="row-span-4 col-span-1 bg-gradient-to-r from-teal-400 to-cyan-500 flex items-center justify-center text-white text-lg">sidebar</div>
            <div className="row-span-2 col-span-3 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg">Content-1</div>
            <div className="row-span-2 col-span-2 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg">Content-2</div>
            <div className="row-span-2 col-span-1 bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-lg">Content-3</div>
            <div className="row-span-1 col-span-4 bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center text-white text-lg">footer</div>
        </div>
    </div>

   </div>
  );
}

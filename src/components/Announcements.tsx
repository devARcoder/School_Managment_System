const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-[#C3EBFA] rounded-md p-4">
            <div className="top flex justify-between items-center">
                <h2 className="font-medium">Loorem ipsum dolor site</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2026-03-06</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum vel tempora reprehenderit consectetur est, cupiditate.</p>
        </div>
        <div className="bg-[#F1F0FF] rounded-md p-4">
            <div className="top flex justify-between items-center">
                <h2 className="font-medium">Loorem ipsum dolor site</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2026-03-06</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum vel tempora reprehenderit consectetur est, cupiditate.</p>
        </div>
        <div className="bg-[#FEFCEB] rounded-md p-4">
            <div className="top flex justify-between items-center">
                <h2 className="font-medium">Loorem ipsum dolor site</h2>
                <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2026-03-06</span>
            </div>
            <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolorum vel tempora reprehenderit consectetur est, cupiditate.</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;

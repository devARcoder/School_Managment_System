const Pagination = () => {
  return (
    <div className='p-4 flex justify-between items-center text-gray-500'>
    <button disabled className="py-2 px-2 md:px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prev</button>
    <div className="flex items-center gap-1 md:gap-2">
        <button className="px-2 rounded-sm text-xs md:text-sm bg-[#C3EBFA] ">1</button>
        <button className="px-2 rounded-sm text-xs md:text-sm ">2</button>
        <button className="px-2 rounded-sm text-xs md:text-sm ">3</button>
        ...
        <button className="px-2 rounded-sm text-xs md:text-sm ">10</button>
    </div>
    <button className="py-2 px-2 md:px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Next</button>
    </div>
  )
}

export default Pagination
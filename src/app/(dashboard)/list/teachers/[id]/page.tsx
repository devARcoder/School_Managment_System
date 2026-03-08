import Image from "next/image";

const SingleTeacherPage = () => {
  return (
    <div className="flex-1 flex flex-col p-4 gap-4 xl:flex-row">
      <div className="left w-full xl:w-2/3">
        <div className="top flex flex-col lg:flex-row gap-4">
          <div className="userInfoCard bg-[#C3EBFA] py-6 px-4 rounded-md flex-1">
            <div className="w-1/3">
            <Image src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
            <h1 className="text-xl font-semibold">Abdur Razzaq</h1>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste molestiae mollitia aperiam delectus laboriosam.</p>

            <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 flex items-center gap-2">
                    <Image src="/blood.png" alt="" width={14} height={14}/>
                    <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                    <Image src="/date.png" alt="" width={14} height={14}/>
                    <span>March 2026</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                    <Image src="/mail.png" alt="" width={14} height={14}/>
                    <span>devarcoder@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 flex items-center gap-2">
                    <Image src="/phone.png" alt="" width={14} height={14}/>
                    <span>036282638</span>
                </div>
            </div>
            </div>
          </div>
          <div className="smallCards flex-1">

          </div>
        </div>
        <div className="bottom">
            Schedule
        </div>
      </div>

      <div className="right w-full xl:w-1/3">r</div>
    </div>
  );
};

export default SingleTeacherPage;

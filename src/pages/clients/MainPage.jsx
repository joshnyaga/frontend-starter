import React, {useState} from 'react'
import c3White from "../../assets/c3white.png"
import c3Black from "../../assets/c3black.png";
import mpesa from "../../assets/mpesa.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MainPage = () => {
  const [tab, setTab] = useState("offerring");
  return (
    <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen md:p-10 p-4 flex flex-col justify-center items-center '>
      <img src={c3White} className='h-36'/>
      <div className='rounded bg-slate-700 text-white shadow-xl p-6 md:w-3/4 w-full'>
      <div className="flex overflow-x-auto whitespace-nowrap">
    <button onClick={()=>setTab("offerring")} className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-white-700 ${tab == "offerring" ? "border border-b-0 rounded-t-md": "border-b"} border-white-300 sm:text-base   whitespace-nowrap focus:outline-none`}>
        Offering
    </button>

    <button onClick={()=>setTab("tithe")} className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-white-700 bg-transparent ${tab == "tithe" ? "border border-b-0 rounded-t-md": "border-b"} border-white-300 sm:text-base  whitespace-nowrap cursor-base focus:outline-none hover:border-white-400`}>
        Tithe
    </button>

    <button onClick={()=>setTab("benmp")} className={`inline-flex items-center h-12 px-4 py-2 text-sm text-center text-white-700 bg-transparent ${tab == "benmp" ? "border border-b-0 rounded-t-md": "border-b"} border-white-300 sm:text-base  whitespace-nowrap cursor-base focus:outline-none hover:border-white-400 dark:hover:border-white-300`}>
        BENMP
    </button>
</div>
        {tab === "offerring" && <div>
        <img src={mpesa} className='h-36 block mx-auto' alt="" />
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>PAYBILL</p>
          <p className='text-2xl text-white font-bold'>4108741</p>
          <button onClick={()=>{
            navigator.clipboard.writeText("4108741")
              toast.success("Paybill Copied")
          }} className='border hover:border-green-600 hover:bg-green-500 rounded px-4 py-2'>COPY</button>
        </div>
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>ACC NO</p>
          <p className='text-2xl text-white font-bold'>OFFERING</p>
          <button onClick={()=>{
            navigator.clipboard.writeText("OFFERING")
              toast.success("Acc Number Copied")
          }} className='border hover:border-green-600 hover:bg-green-500 rounded px-4 py-2'>COPY</button>
        </div>
        <p className='mt-4 italic text-lg  text-center'>And he said unto his disciples, Therefore I say unto you, Take no thought for your life, what ye shall eat; neither for the body, what ye shall put on.</p>
        <p className='mt-2 italic text-lg  text-right'>Luke 12:22</p>
        </div>}

        {tab=== "benmp" && <div>
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>PAYBILL</p>
          <p className='text-2xl text-white font-bold'>522522</p>
          <button onClick={()=>{
            navigator.clipboard.writeText("522522")
              toast.success("Paybill Copied")
          }} className='border hover:border-green-600 hover:bg-green-500 rounded px-4 py-2'>COPY</button>
        </div>
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>ACC NO</p>
          <p className='text-2xl text-white font-bold'>1226044182</p>
          <button onClick={()=>{
            navigator.clipboard.writeText("1226044182")
              toast.success("Acc Number Copied")
          }} className='border hover:border-green-600 hover:bg-green-500 rounded px-4 py-2'>COPY</button>
        </div>
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>ACC NAME</p>
          <p className='text-xl text-white font-bold w-48 pr-2'>LIGHTHOUSE CHAPEL INTERNATIONAL - BENMP</p>
          
        </div>
        <p className='mt-4 italic text-lg  text-center'>And he said unto his disciples, Therefore I say unto you, Take no thought for your life, what ye shall eat; neither for the body, what ye shall put on.</p>
        <p className='mt-2 italic text-lg  text-right'>Luke 12:22</p>
        </div>}

        {tab == "tithe" && <div>
        <img src={mpesa} className='h-36 block mx-auto' alt="" />
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>PAYBILL</p>
          <p className='text-2xl text-white font-bold'>4108741</p>
          <button onClick={()=>{
            navigator.clipboard.writeText("4108741")
              toast.success("Paybill Copied")
          }} className='border hover:border-green-600 hover:bg-green-500 rounded px-4 py-2'>COPY</button>
        </div>
        <div className='flex items-center justify-between my-2'>
          <p className='text-3xl text-white font-bold'>ACC NO</p>
          <p className='text-2xl text-white font-bold'>TITHE</p>
          <button onClick={()=>{
            navigator.clipboard.writeText("TITHE")
              toast.success("Acc Number Copied")
          }} className='border hover:border-green-600 hover:bg-green-500 rounded px-4 py-2'>COPY</button>
        </div>
        <p className='mt-4 italic text-lg  text-center'>And he said unto his disciples, Therefore I say unto you, Take no thought for your life, what ye shall eat; neither for the body, what ye shall put on.</p>
        <p className='mt-2 italic text-lg  text-right'>Luke 12:22</p>
        </div>}
      </div>
      <ToastContainer />
    </div>
  )
}

export default MainPage
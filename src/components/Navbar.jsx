import { useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Navbar(){
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    return(
        <>
        <nav className="w-screen fixed z-10 top-0">
            <div className="w-screen h-16 bg-[#F5F8FF] flex flex-row justify-between items-center px-5">
                <div className="">
                    <img className="h-7 md:h-8" src={'/src/assets/images/Logo.png'} alt="logo" />
                </div>

                <button className="group fixed md:hidden top-0 right-0 z-20 h-16 w-20" onClick={()=>{setIsOpen((prev) => !prev)}}>
                    <div className="grid justify-items-center gap-1.5">
                        <div className={`h-1 w-8 rounded-full bg-biru ${isOpen === true ? "rotate-45 translate-y-2.5 bg-white" : "group-hover:translate-y-1"} transition ease-in-out duration-200`}></div>
                        <div className={`h-1 w-8 rounded-full bg-biru ${isOpen && "translate-x-40 bg-white"} transition ease-in-out duration-200`}></div>
                        <div className={`h-1 w-8 rounded-full bg-biru ${isOpen === true ? "-rotate-45 -translate-y-2.5 bg-white" : "group-hover:-translate-y-1"} transition ease-in-out duration-200`}></div>
                    </div>
                </button>

                <div className={`${isOpen || "translate-x-44"} fixed md:relative bg-biru md:bg-transparent top-0 right-0 md:right-52 h-screen md:h-fit pt-16 md:pt-0 px-5 ransition ease-in-out duration-200`}>
                    {/* base pr-5 */}
                    <ul className="flex flex-col md:flex-row gap-10 text-white md:text-black">
                        <li><a className="hover:text-kuning" href="#" onClick={()=>{navigate('/')}}>Beranda</a></li>
                        <li>
                            <a className="hover:text-kuning"  href="#profil" onClick={()=>{navigate('/')}}>Profil</a>
                        </li>
                        <li className="flex flex-row items-center">
                            <a className="hover:text-kuning" href="#berita" onClick={()=>{navigate('/')}}>Berita</a>
                        </li>
                        <li className="">
                            <a className="hover:text-kuning" href="#galeri" onClick={()=>{navigate('/')}}>Galeri</a>
                        </li>
                        <li className="">
                            <a className="hover:text-kuning" href="#layanan-terpadu" onClick={()=>{navigate('/')}}>Layanan Terpadu</a>
                        </li>
                        <li>
                            <a className="hover:text-kuning" href="#faq" onClick={()=>{navigate('/')}}>FAQ</a>
                        </li>
                    </ul>
                </div>

            </div>
            <hr className=" border-t border-yellow-400" />
        </nav>
        </>
    )
}
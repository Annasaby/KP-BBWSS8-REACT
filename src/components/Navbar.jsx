import { useNavigate } from "react-router-dom"

export default function Navbar(){
    const navigate = useNavigate()

    return(
        <>
        <nav className="w-screen fixed z-10 top-0">
            <div className="w-screen h-16 bg-[#F5F8FF] flex flex-row justify-between items-center px-5">
                <div className="">
                    <img className="h-8" src={'/src/assets/images/Logo.png'} alt="logo" />
                </div>
                <div className="pr-5">
                    <ul className="flex flex-row gap-10">
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
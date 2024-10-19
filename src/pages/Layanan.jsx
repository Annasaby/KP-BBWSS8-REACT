import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"
import { FiPackage } from "react-icons/fi"
import { FiFeather } from "react-icons/fi"
import { FiCloudLightning } from "react-icons/fi"
import { FiMessageCircle } from "react-icons/fi"
import { FiSmile } from "react-icons/fi"

export default function Layanan(){
    const [formMenu,setFormMenu] = useState('Aset')

    function handleClick(value){
        setFormMenu(value)
    }

    return(
        <>
            <Navbar />

            {/* Menu */}
            <section className="w-screen flex justify-center items-center mt-20  required">
            <div className="w-4/5 p-2 flex justify-evenly bg-slate-200 rounded-xl">
                <a className={`flex gap-2 items-center cursor-pointer py-2 px-3 rounded-lg ${formMenu === 'Aset' && 'bg-white'}`} href="#form" onClick={()=>{handleClick('Aset')}}>
                    <FiPackage />
                    <h6 className=" font-semibold">Aset</h6>
                </a>

                <a className={`flex gap-2 items-center cursor-pointer py-2 px-3 rounded-lg ${formMenu === 'Pengaduan BPJ' && 'bg-white'}`} href="#form" onClick={()=>{handleClick('Pengaduan BPJ')}}>
                    <FiFeather />
                    <h6 className=" font-semibold">Pengaduan BPJ</h6>
                </a>

                <a className={`flex gap-2 items-center cursor-pointer py-2 px-3 rounded-lg ${formMenu === 'Bencana' && 'bg-white'}`} href="#form" onClick={()=>{handleClick('Bencana')}}>
                    <FiCloudLightning />
                    <h6 className=" font-semibold">Bencana</h6>
                </a>

                <a className={`flex gap-2 items-center cursor-pointer py-2 px-3 rounded-lg ${formMenu === 'Pengaduan LSM' && 'bg-white'}`} href="#form" onClick={()=>{handleClick('Pengaduan LSM')}}>
                    <FiMessageCircle />
                    <h6 className=" font-semibold">Pengaduan LSM</h6>
                </a>

                <a className={`flex gap-2 items-center cursor-pointer py-2 px-3 rounded-lg ${formMenu === 'Pengaduan Layanan Publik' && 'bg-white'}`} href="#form" onClick={()=>{handleClick('Pengaduan Layanan Publik')}}>
                    <FiSmile />
                    <h6 className="font-semibold">Pengaduan Layanan Publik</h6>
                </a>
            </div>
            </section>

            {/* Jumbotron */}
            <section className="w-screen flex justify-center items-center mt-10">
            <div className="relative w-4/5 pb-20 ">
                <img className="" src={'/src/assets/images/jumbotron-layanan.png'} alt="" />
                <div className="absolute p-1 bottom-0 left-[50%] -translate-x-2/4 w-40 h-40 bg-slate-300 rounded-full border-8 border-[#F5F8FF]">
                    <img src={'/src/assets/images/laporMang.png'} alt="logo lapor mang" />
                </div>
            </div>
            </section>

            {/* Form */}
            <section id="form" className="w-screen flex justify-center items-center">
                <div className="w-4/5 pt-20">
                    <form  className="grid grid-cols-[1fr,2fr] gap-y-5" action="">
                        
                        <label className="font-semibold" >Tujuan Pelaporan</label>
                        <input id="tujuan" className="border border-black rounded-md p-2 text-red-600" type="text" value={formMenu} disabled />
                                
                        <label className="font-semibold" >Nama Lengkap</label>
                        <input  required id="nama" className="border border-black rounded-md p-2" type="text" placeholder="Akif Ramadhan Annasaby" />
                    
                        <label className="font-semibold" >Phone</label>
                        <input  required id="phone" className="border border-black rounded-md p-2 [&::-webkit-inner-spin-button]:appearance-none" type="number" placeholder="0812345656" />
                    
                        <label className="font-semibold" >E-mail</label>
                        <input  required id="email" className="border border-black rounded-md p-2" type="email" placeholder="minyakwijen@gmail.com" />
                    
                        <label className="font-semibold" >Judul Laporan</label>
                        <input  required id="judul" className="border border-black rounded-md p-2" type="text" placeholder="terjadi badai biawak" />
                    
                        <label className="font-semibold" >Deskripsi laporan</label>
                        <textarea  required id="deskripsi" className="border border-black rounded-md p-2" name="" placeholder="banyak biawak bertebaran di kantor"></textarea>
                    
                        <label className="font-semibold" >Tanggal Kejadian</label>
                        <input  required id="tanggal" className="border border-black rounded-md p-2" type="date" />
                    
                        <label className="font-semibold" >Lokasi Kejadian</label>
                        <input  required id="lokasi" className="border border-black rounded-md p-2" type="text" placeholder="Palembang" />
                    
                        <label className="font-semibold" >Lampiran</label>
                        <input  required id="lampiran" className="border border-black rounded-md p-2" type="file" />

                        <button type="submit" className="col-start-2 place-self-end p-2 bg-kuning hover:bg-yellow-300 rounded-md w-20">Kirim</button>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}
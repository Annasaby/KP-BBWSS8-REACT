import { FiInstagram } from "react-icons/fi"
import { FiPhone } from "react-icons/fi"
import { FiTwitter } from "react-icons/fi"
import { FiYoutube } from "react-icons/fi";

export default function Footer(){
    return(
        <>
        <footer className="w-screen flex justify-center items-center mt-32 bg-biru">
            <div className="w-4/5 flex justify-between items-center my-5">
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <img className="h-10 object-cover" src={'/src/assets/images/logoAjah.png'} alt="Logo" />
                        <h2 className="text-3xl font-bold text-white">PUPR</h2>
                    </div>
                    <p className="text-sm text-white">Copyright © 2024.TEAM KP UNSRI</p>
                    <p className="text-sm text-white">All rights reserved</p>
                    <div className="flex gap-1">
                        <div className="p-2 bg-slate-400 rounded-full hover:-translate-y-1 ease-in-out transition-all cursor-pointer">
                            <FiInstagram className="h-4 w-4 text-white"/>
                        </div>
                        <div className="p-2 bg-slate-400 rounded-full hover:-translate-y-1 ease-in-out transition-all cursor-pointer">
                            <FiPhone className="h-4 w-4 text-white"/>
                        </div>
                        <div className="p-2 bg-slate-400 rounded-full hover:-translate-y-1 ease-in-out transition-all cursor-pointer">
                            <FiTwitter className="h-4 w-4 text-white"/>
                        </div>
                        <div className="p-2 bg-slate-400 rounded-full hover:-translate-y-1 ease-in-out transition-all cursor-pointer">
                            <FiYoutube className="h-4 w-4 text-white"/>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 grid grid-cols-3 gap-y-3 text-white">
                    <h5 className="text-lg font-medium">Company</h5>
                    <h5 className="text-lg font-medium">Support</h5>
                    <h5 className="text-lg font-medium">Lokasi Kami</h5>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs cursor-pointer hover:text-kuning">Contac us</p>
                        <p className="text-xs cursor-pointer hover:text-kuning">Testimonial</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-xs cursor-pointer hover:text-kuning">Legal</p>
                        <p className="text-xs cursor-pointer hover:text-kuning">Privacy policy</p>
                        <p className="text-xs cursor-pointer hover:text-kuning">Status</p>
                    </div>
                    <div>
                        <iframe className="w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.5553909553064!2d104.6968987736376!3d-2.9432190970330248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7599c141f883%3A0x84022e0acc15f251!2sBalai%20Besar%20Wilayah%20Sungai%20Sumatera%20VIII!5e0!3m2!1sid!2sid!4v1717988416957!5m2!1sid!2sid" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google Maps"></iframe>
                    </div>
                    <p className="col-start-3 text-xs">Jl. Soekarno-Hatta No.869, Palembang, Sumatera Selatan 30151
                    </p>
                </div>
            </div>
        </footer>
        </>
    )
}
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Faq from "../components/Faq"
import { useNavigate } from "react-router-dom"

export default function Home(){
    const navigate = useNavigate()

    return(
        <>
            <Navbar />
            {/* Header */}
            <header className="mt-16">
                <img src={'/src/assets/images/Jumbotron.png'} className="w-full" alt="jumbotron"/>
            </header>

            {/* Profil */}
            <section id="profil" className="w-screen flex justify-center items-center pt-20 md:mt-32">
                <div className="relative w-4/5 flex flex-row-reverse justify-start items-center bg-gradient-to-bl from-[#FFC928] to-[#FFDA6B] shadow-lg rounded-3xl ">
                    <div className="hidden md:block absolute left-0 bottom-0">
                        <img id="profil" className="h-96 z-[9]" src={'/src/assets/images/mamangfix.png'} alt="foto mamang" />
                    </div>
                    <div className="md:w-1/2 flex flex-col gap-5 my-5 ml-5 md:ml-0 mr-5">
                        <h2 className="text-3xl font-medium text-[#364773]">Balai Besar Wilayah Sungai Sumatera VIII</h2>
                        <p className="text-xs text-[#364773]">Mengelola sumber daya air di wilayah sungai meliputi perencanaan, pelaksanaan konstruksi, operasi, dan pemeliharaan untuk konservasi dan pemanfaatan sumber daya air, serta pengendalian daya rusak air pada sungai, pantai, bendungan, danau, situ, embung, tampungan air lainnya, irigasi, rawa, tambak, air tanah, air baku, dan drainase utama perkotaan.</p>
                        <button className=" bg-[#364773] hover:bg-slate-500 w-fit px-5 py-2 rounded-md text-white text-sm font-normal transition duration-300 ease-in-out hover:scale-105" onClick={()=>{navigate('/profil')}}>Selengkapnya</button>
                    </div>
                </div>
            </section>

            
            {/* Berita */}
            <section id="berita" className="w-screen flex justify-center items-center mt-5 md:mt-32 bg-biru-muda">
                <div className="w-4/5 my-16">
                    {/* Judul */}
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold">Berita Terkini</h2>
                        <p className="text-sm font-light">EDISI TAHUN 2024</p>
                    </div>
                    {/* Container berita */}
                    <div className="relative w-full flex flex-col md:flex-row gap-5 py-3">
                        {/* Berita Utama */}
                        <div className="md:w-1/2">
                            <div className=" flex justify-center items-center">
                                <a className="relative" onClick={()=>{navigate('/berita')}}>
                                    <div className="absolute top-0 left-0 h-12 w-10 rounded-md bg-yellow-300 z-[9] -translate-x-5 -translate-y-3"></div>
                                    <img className="h-80 rounded-lg transition duration-300 ease-in-out hover:opacity-80 object-cover" src={'/src/assets/images/Berita.png'} alt="berita utama" />
                                </a>
                            </div>
                            <div className="flex p-5 gap-2">
                                <h5 className="text-right font-semibold">24 OKT</h5>
                                <div className="w-1 h-10 bg-yellow-400"></div>
                                <h5 className="font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h5>
                            </div>
                        </div>
                        {/* Berita lainnya */}
                        <div className="md:w-1/2 h-60 md:h-96 overflow-auto">
                            {/* Berita 1 */}
                            <div className="flex gap-5 mb-5">
                                <a onClick={()=>{navigate('/berita')}}>
                                    <img className="h-20 rounded-lg  transition duration-300 ease-in-out hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="berita lainnya" />
                                </a>
                                <div className="w-2/3 flex flex-col gap-1 justify-center">
                                    <div>
                                        <h6 className="text-sm font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                                    </div>
                                    <div className="w-fit left-0 flex flex-col gap-1">
                                        <hr className="border-t border-2 border-yellow-400" />
                                        <p className="text-xs text-[#364773]">24 Oktober 2024</p>
                                    </div>
                                </div>
                            </div>
                            {/* Berita 2 */}
                            <div className="flex gap-5 mb-5">
                                <a onClick={()=>{navigate('/berita')}}>
                                    <img className="h-20 rounded-lg  transition duration-300 ease-in-out hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="berita lainnya" />
                                </a>
                                <div className="w-2/3 flex flex-col gap-1 justify-center">
                                    <div>
                                        <h6 className="text-sm font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                                    </div>
                                    <div className="w-fit left-0 flex flex-col gap-1">
                                        <hr className=" border-t border-2 border-yellow-400" />
                                        <p className="text-xs text-[#364773]">24 Oktober 2024</p>
                                    </div>
                                </div>
                            </div>
                            {/* Berita 3 */}
                            <div className="flex gap-5 mb-5">
                                <a onClick={()=>{navigate('/berita')}}>
                                    <img className="h-20 rounded-lg  transition duration-300 ease-in-out hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="berita lainnya" />
                                </a>
                                <div className="w-2/3 flex flex-col gap-1 justify-center">
                                    <div>
                                        <h6 className="text-sm font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                                    </div>
                                    <div className="w-fit left-0 flex flex-col gap-1">
                                        <hr className=" border-t border-2 border-yellow-400" />
                                        <p className="text-xs text-[#364773]">24 Oktober 2024</p>
                                    </div>
                                </div>
                            </div>
                            {/* Berita 4 */}
                            <div className="flex gap-5 mb-5">
                                <a onClick={()=>{navigate('/berita')}}>
                                    <img className="h-20 rounded-lg  transition duration-300 ease-in-out hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="berita lainnya" />
                                </a>
                                <div className="w-2/3 flex flex-col gap-1 justify-center">
                                    <div>
                                        <h6 className="text-sm font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                                    </div>
                                    <div className="w-fit left-0 flex flex-col gap-1">
                                        <hr className=" border-t border-2 border-yellow-400" />
                                        <p className="text-xs text-[#364773]">24 Oktober 2024</p>
                                    </div>
                                </div>
                            </div>
                            {/* Berita 5 */}
                            <div className="flex gap-5 mb-5">
                                <a onClick={()=>{navigate('/berita')}}>
                                    <img className="h-20 rounded-lg  transition duration-300 ease-in-out hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="berita lainnya" />
                                </a>
                                <div className="w-2/3 flex flex-col gap-1 justify-center">
                                    <div>
                                        <h6 className="text-sm font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                                    </div>
                                    <div className="w-fit left-0 flex flex-col gap-1">
                                        <hr className=" border-t border-2 border-yellow-400" />
                                        <p className="text-xs text-[#364773]">24 Oktober 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Galeri */}
            <section id="galeri" className="w-screen flex justify-center items-center pt-32">
                <div className="w-4/5 flex flex-col md:flex-row gap-5">
                    <div className="md:w-1/3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Galeri</h2>
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold mb-2">100+ Wilayah Perairan <br /> <span className="text-[#FFC928]">Di Seluruh Sumatra</span></h5>
                            <p className="hidden md:block text-xs leading-8">
                                Merupakan detail data rekap jumlah aset dan infrastruktur yang terdata didalam Water Resources Data Center (WRDC)yang mana mencakup seluruh Balai Wilayah Sungai atau Balai Besar Wilayah Sungai
                            </p>
                        </div>
                        <button className="w-fit py-2 px-5 bg-[#FFC928] hover:bg-yellow-300 transition duration-300 ease-in-out hover:scale-105 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md text-white text-sm font-medium"  onClick={()=>{navigate('/galeri')}}>Selengkapnya</button>
                    </div>
                    <div className="flex items-center gap-5 w-52 md:w-full">
                        <div className="">
                            <img className="md:h-96 object-contain" src={'/src/assets/images/galeri1.png'} alt="danau" />
                        </div>
                        <div className="flex gap-5 items-center">
                            <img className="md:h-72 object-contain" src={'/src/assets/images/galeri2.png'} alt="danau" />
                            <img className="md:h-60 object-contain" src={'/src/assets/images/galeri3.png'} alt="danau" />
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Layanan Terpadu */}
            <section id="layanan-terpadu" className="w-screen flex justify-center items-center pt-32">
                <div data-aos="fade-up" className="w-4/5 flex flex-col">
                    <div>
                        <h2 className="text-3xl font-bold">Layanan Terpadu</h2>
                    </div>
                    {/* container */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 place-items-baseline">
                        <div className="flex flex-col items-center" onClick={() => { navigate('/layanan') }}>
                            <img className="w-40 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/laporMang.png'} alt="Lapor Mang" />
                            <h5 className="font-semibold text-lg text-gray-500 hover:text-gray-800 mt-2">LaporMang</h5>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-40 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/hidrologi.png'} alt="Hidrologi" />
                            <h5 className="font-semibold text-lg text-gray-500 hover:text-gray-800 mt-2">Hidrologi</h5>
                        </div>
                        <div className="flex flex-col items-center">
                             <img className="w-56 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/saran.png'} alt="Saran dan pengaduan" />
                            <h5 className="font-semibold text-lg text-gray-500 hover:text-gray-800 mt-2">Saran dan Pengaduan</h5>
                        </div>
                        <div className="flex flex-col items-center">
                            <img className="w-56 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/bencana.png'} alt="Bencana" />
                            <h5 className="font-semibold text-lg text-gray-500 hover:text-gray-800 mt-2">Bencana</h5>
                        </div>
                    </div>
                </div>
            </section>

            <Faq/>
            
            {/* Aplikasi */}
            <section className="w-screen flex justify-center items-center mt-16">
                <div className="w-4/5 flex flex-col justify-center items-center gap-5">
                    <h2 className="text-3xl font-semibold">Aplikasi & Link Terkait</h2>
                    <div className="flex flex-wrap gap-4 w-full justify-between">
                        <img src={'/src/assets/images/apk1.png'} alt="apk1" />
                        <img src={'/src/assets/images/apk2.png'} alt="apk2" />
                        <img src={'/src/assets/images/apk3.png'} alt="apk3" />
                        <img src={'/src/assets/images/apk4.png'} alt="apk4" />
                        <img src={'/src/assets/images/apk5.png'} alt="apk5" />
                        <img src={'/src/assets/images/apk6.png'} alt="apk6" />
                        <img src={'/src/assets/images/apk7.png'} alt="apk7" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
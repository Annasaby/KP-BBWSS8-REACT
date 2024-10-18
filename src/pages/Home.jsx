import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiChevronDown } from "react-icons/fi"
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
            <section className="w-screen flex justify-center items-center mt-32">
                <div className="relative w-4/5 flex flex-row-reverse justify-start items-center bg-gradient-to-bl from-[#FFC928] to-[#FFDA6B] shadow-lg rounded-3xl ">
                    <div className="absolute left-0 bottom-0">
                        <img id="profil" className="h-96 z-[9]" src={'/src/assets/images/mamangfix.png'} alt="foto mamang" />
                    </div>
                    <div className="w-1/2 flex flex-col gap-5 my-5 mr-5">
                        <h2 className="text-3xl font-medium text-[#364773]">Balai Besar Wilayah Sungai Sumatera VIII</h2>
                        <p className="text-xs text-[#364773]">Mengelola sumber daya air di wilayah sungai meliputi perencanaan, pelaksanaan konstruksi, operasi, dan pemeliharaan untuk konservasi dan pemanfaatan sumber daya air, serta pengendalian daya rusak air pada sungai, pantai, bendungan, danau, situ, embung, tampungan air lainnya, irigasi, rawa, tambak, air tanah, air baku, dan drainase utama perkotaan.</p>
                        <button className=" bg-[#364773] hover:bg-slate-500 w-fit px-5 py-2 rounded-md text-white text-sm font-normal transition duration-300 ease-in-out hover:scale-105" onClick={()=>{navigate('/profil')}}>Selengkapnya</button>
                    </div>
                </div>
            </section>

            
            {/* Berita */}
            <section id="berita" className="w-screen flex justify-center items-center mt-32 bg-biru-muda">
                <div className="w-4/5 my-16">
                    {/* Judul */}
                    <div className="mb-5">
                        <h2 className="text-3xl font-bold">Berita Terkini</h2>
                        <p className="text-sm font-light">EDISI TAHUN 2024</p>
                    </div>
                    {/* Container berita */}
                    <div className="relative w-full flex gap-5 py-3">
                        {/* Berita Utama */}
                        <div className="w-1/2">
                            <div className=" flex justify-center items-center">
                                <div className="absolute top-0 left-0 h-12 w-10 rounded-md bg-yellow-300 z-[9]"></div>
                                <a className="relative" onClick={()=>{navigate('/berita')}}>
                                    <img className="h-80 rounded-lg transition duration-300 ease-in-out hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="berita utama" />
                                </a>
                            </div>
                            <div className="flex p-5 gap-2">
                                <h5 className="text-right font-semibold">24 OKT</h5>
                                <div className="w-1 h-10 bg-yellow-400"></div>
                                <h5 className="font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h5>
                            </div>
                        </div>
                        {/* Berita lainnya */}
                        <div className="w-1/2 h-96 overflow-auto">
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
                <div className="w-4/5 flex gap-5">
                    <div className="w-1/3 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl font-bold">Galeri</h2>
                        </div>
                        <div>
                            <h5 className="text-xl font-semibold mb-2">100+ Wilayah Perairan <br /> <span className="text-[#FFC928]">Di Seluruh Sumatra</span></h5>
                            <p className="text-xs leading-8">
                                Merupakan detail data rekap jumlah aset dan infrastruktur yang terdata didalam Water Resources Data Center (WRDC)yang mana mencakup seluruh Balai Wilayah Sungai atau Balai Besar Wilayah Sungai
                            </p>
                        </div>
                        <button className="w-fit py-2 px-5 bg-[#FFC928] hover:bg-yellow-300 transition duration-300 ease-in-out hover:scale-105 rounded-tr-2xl rounded-bl-2xl rounded-tl-md rounded-br-md text-white text-sm font-medium"  onClick={()=>{navigate('/galeri')}}>Selengkapnya</button>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="">
                            <img className="h-96" src={'/src/assets/images/galeri1.png'} alt="danau" />
                        </div>
                        <div className="flex gap-5 items-center">
                            <img className="h-72" src={'/src/assets/images/galeri2.png'} alt="danau" />
                            <img className="h-60" src={'/src/assets/images/galeri3.png'} alt="danau" />
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
                    <div className="grid grid-cols-4 justify-center items-center gap-y-5">
                        <div className="grid justify-center items-center">
                            <a onClick={()=>{navigate('/layanan')}}>
                            <img className=" w-40 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/laporMang.png'} alt="Lapor mang" />
                            </a>
                        </div>
                        <div className="grid justify-center items-center">
                            <a href="https://www.google.com">
                            <img className=" w-40 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/hidrologi.png'} alt="Hidrologi" />
                            </a>
                        </div>
                        <div className="grid justify-center items-center">
                            <a onClick={()=>{navigate('/layanan')}}>
                            <img className=" w-56 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/saran.png'} alt="Saran dan pengaduan" />
                            </a>
                        </div>
                        <div className="grid justify-center items-center">
                            <a onClick={()=>{navigate('/layanan')}}>
                            <img className=" w-56 object-cover transition duration-300 ease-in-out hover:scale-105" src={'/src/assets/images/bencana.png'} alt="Bencana" />
                            </a>
                        </div>
                        
                        <a onClick={()=>{navigate('/layanan')}}>
                        <h5 className="grid justify-center items-center font-semibold text-lg text-gray-500 hover:text-gray-800">LaporMang</h5>
                        </a>
                        <a href="https://google.com">
                        <h5 className="grid justify-center items-center font-semibold text-lg text-gray-500 hover:text-gray-800">hidrologi</h5>
                        </a>
                        <a onClick={()=>{navigate('/layanan')}}>
                        <h5 className="grid justify-center items-center font-semibold text-lg text-gray-500 hover:text-gray-800">Saran dan Pengaduan</h5>
                        </a>
                        <a onClick={()=>{navigate('/layanan')}}>
                        <h5 className="grid justify-center items-center font-semibold text-lg text-gray-500 hover:text-gray-800">Bencana</h5>
                        </a>
                        
                    </div>
                </div>
            </section>

            
            {/* FAQ */}
            <section id="faq" className="w-screen flex justify-center items-center mt-32 bg-biru-muda">
                <div className="w-4/5 flex flex-col gap-5 my-16">
                    <div>
                        <h5 className="text-kuning font-medium">FAQ</h5>
                        <h2 className="text-3xl font-medium">Frequently Asked Questions</h2>
                    </div>
                    <div className="flex gap-5 transition duration-300 ease-in-out">
                        {/* Pertanyaan jawaban */}
                        <div className="flex flex-col gap-5 w-1/2">
                            <div className="flex gap-2">
                                <FiChevronDown  className="text-kuning w-10"/>
                                <div  className="w-4/5">
                                    <p className="text-sm font-medium mb-2 cursor-pointer">
                                        Kapan perusahaan ini didirikan?
                                    </p>
                                    <p id="a1" className="hidden text-sm font-medium text-[#4865B0] leading-7 ml-4">
                                        Perusahaan ini didirikan pada tahun 2010 oleh sekelompok profesional yang berdedikasi untuk menciptakan solusi inovatif bagi pelanggan di berbagai industri.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <FiChevronDown  className="text-kuning w-10"/>
                                <div  className="w-4/5">
                                    <p className="text-sm font-medium mb-2 cursor-pointer">
                                        Apa nilai-nilai utama perusahaan?
                                    </p>
                                    <p id="a2" className="hidden text-sm font-medium text-[#4865B0] leading-7 ml-4">
                                        Nilai-nilai utama perusahaan kami meliputi integritas, inovasi, kepuasan pelanggan, kerjasama tim, dan tanggung jawab sosial. Kami percaya bahwa nilai-nilai ini adalah kunci kesuksesan jangka panjang kami.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <FiChevronDown  className="text-kuning w-10"/>
                                <div  className="w-4/5">
                                    <p className="text-sm font-medium mb-2 cursor-pointer">
                                        Apakah perusahaan ini memiliki program tanggung jawab sosial?
                                    </p>
                                    <p id="a3" className="hidden text-sm font-medium text-[#4865B0] leading-7 ml-4">
                                        Ya, kami memiliki berbagai program tanggung jawab sosial yang berfokus pada pendidikan, kesehatan, dan pelestarian lingkungan. Kami berkomitmen untuk memberikan dampak positif pada komunitas sekitar dan mendukung keberlanjutan lingkungan.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <FiChevronDown  className="text-kuning w-10"/>
                                <div  className="w-4/5">
                                    <p className="text-sm font-medium mb-2 cursor-pointer">
                                        Bagaimana cara perusahaan ini mengelola keluhan pelanggan?
                                    </p>
                                    <p id="a4" className="hidden text-sm font-medium text-[#4865B0] leading-7 ml-4">
                                        Kami memiliki tim layanan pelanggan yang terlatih untuk menangani keluhan dan masukan dari pelanggan dengan cepat dan efektif. Pelanggan dapat menghubungi kami melalui email, telepon, atau platform media sosial kami.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <FiChevronDown  className="text-kuning w-10"/>
                                <div  className="w-4/5">
                                    <p className="text-sm font-medium mb-2 cursor-pointer">
                                        Apakah perusahaan ini memiliki kebijakan keberagaman dan inklusi?
                                    </p>
                                    <p id="a5" className="hidden text-sm font-medium text-[#4865B0] leading-7 ml-4">
                                        Ya, kami sangat mendukung keberagaman dan inklusi di tempat kerja. Kami percaya bahwa lingkungan kerja yang beragam dan inklusif memperkuat tim kami dan membantu kami melayani pelanggan dengan lebih baik.
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <div className="flex flex-col items-center gap-10 w-1/2 px-5">
                            <h2 className="text-2xl font-semibold">Tanyakan hal lain</h2>
                            <form action="/send_email" method="post" className="flex flex-col justify-center items-center gap-5 w-full">
                                <div className="w-full">
                                    <input required name="nama" id="nama" className="w-full bg-transparent focus:outline-none" type="text" placeholder="Nama" />
                                    <hr className="w-full border-t border-2 border-kuning rounded-lg" />
                                </div>
                                <div className="w-full">
                                    <input required name="email" id="email" className="w-full bg-transparent focus:outline-none" type="Email" placeholder="e-mail" />
                                    <hr className="w-full border-t border-2 border-kuning rounded-lg" />
                                </div>
                                <div className="w-full">
                                    <textarea required name="pesan" id="pesan" className="w-full h-40 bg-transparent focus:outline-none resize-none" placeholder="Apa yang ingin anda tanyakan?"></textarea>
                                    <hr className="w-full border-t border-2 border-kuning rounded-lg" />
                                </div>
                                <button type="submit" className="place-self-end text-sm py-1 px-10 bg-kuning rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm hover:bg-yellow-300 transition duration-300 ease-in-out hover:scale-105">Kirim</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            
            {/* Aplikasi */}
            <section className="w-screen flex justify-center items-center mt-16">
                <div className="w-4/5 flex flex-col justify-center items-center gap-5">
                    <h2 className="text-3xl font-semibold">Aplikasi & Link Terkait</h2>
                    <div className="flex w-full justify-between">
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
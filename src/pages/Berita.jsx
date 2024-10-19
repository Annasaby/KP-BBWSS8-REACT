import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Berita(){
    return(
        <>
        <Navbar />
        {/* Portal Berita */}
        <section className="w-screen flex justify-center items-center mt-20">
            <div className="w-4/5 flex">
                <div className="w-4/5 pr-24 flex flex-col gap-3">
                    <h3 className="text-3xl text-biru font-semibold">PORTAL BERITA</h3>
                    <img className="w-full rounded-tl-lg rounded-tr-[45px] rounded-bl-[45px] rounded-br-lg shadow-[5px_-5px_1px_2px] shadow-kuning" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <div className="flex w-full">
                        <h5 className="text-lg font-semibold">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan </h5>
                        <div>
                            <p className="text-xs">*Senin, 10 Jun 2024 08:35 WIB</p>
                            <p className="text-xs mt-1">*Author</p>
                        </div>
                    </div>
                    <p className="mt-5">
                        <span className="text-biru font-semibold leading-7">Palembang -</span> Presiden Indonesia, Joko Widodo, mengumumkan peluncuran program nasional untuk mempercepat pembangunan infrastruktur digital di seluruh negeri. Program ini bertujuan untuk meningkatkan konektivitas internet, terutama di daerah pedesaan dan terpencil, guna mendukung pendidikan, kesehatan, dan ekonomi digital. Dalam pidatonya, Presiden Jokowi menekankan pentingnya akses internet yang merata bagi semua warga negara agar dapat bersaing di era globalisasi. Selain itu, program ini juga diharapkan dapat menciptakan lapangan kerja baru dan mendorong inovasi teknologi lokal.
                    </p>
                </div>
                <div className="w-1/4 flex flex-col gap-5 items-center">
                    <div className="w-fit">
                        <h3 className="text-2xl font-semibold">BERITA TERKAIT</h3>
                        <hr className="w-1/3 border-t border-2 border-yellow-400" />
                    </div>
                    <div className="w-4/5 flex flex-col gap-1">
                        <h6 className="text-xs font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                        <div className="flex gap-1">
                            <p className="text-xs font-thin">24 OKT</p>
                            <div className="w-0.5 h-3 bg-yellow-300"></div>
                            <p className="text-xs font-thin">PALEMBANG</p>
                        </div>
                        <a href="berita.html">
                            <img className="rounded-lg hover:opacity-80" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                        </a>
                    </div>
                    <div className="w-4/5 flex flex-col gap-1">
                        <h6 className="text-xs font-semibold hover:text-biru">Kementrian PUPR Tangani Darurat Bencana Banjir di Wajo Sulawesi Selatan</h6>
                        <div className="flex gap-1">
                            <p className="text-xs font-thin">24 OKT</p>
                            <div className="w-0.5 h-3 bg-yellow-300"></div>
                            <p className="text-xs font-thin">PALEMBANG</p>
                        </div>
                        <a href="berita.html">
                            <img className="rounded-lg hover:opacity-80" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}
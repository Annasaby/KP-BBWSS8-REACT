import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { FiHome } from "react-icons/fi"
import { FiMapPin } from "react-icons/fi"
import { FiMap } from "react-icons/fi"
import { FiGlobe } from "react-icons/fi"

export default function Profil(){
    return(
        <>
            <Navbar/>
            {/* Header */}
            <header className="w-screen flex justify-center items-center mt-20">
                <div className="w-4/5 flex flex-col items-center">
                    <img className="w-full mb-5" src={'/src/assets/images/jumbotron-profil.png'} alt="jumbotron"/>
                    <div className="md:mx-10 flex flex-col items-center gap-1">
                        <h5 className="text-center text-2xl font-semibold text-biru">Balai Besar Wilayah Sungai Sumatera VIII</h5>
                        <p className="text-center text-xs leading-7">Melaksanakan pengelolaan sumber daya air di wilayah sungai yang meliputi perencanaan, pelaksanaan konstruksi, operasi dan pemeliharaan dalam rangka konservasi dan pendayagunaan sumber daya air dan pengendalian daya rusak air pada sungai, pantai, bendungan, danau, situ, embung, dan tampungan air lainnya, irigasi, rawa, tambak, air tanah, dan air baku serta pengelolaan drainase utama perkotaan.</p>
                    </div>
                </div>
            </header>

            {/* Info */}
            <section className="w-screen flex justify-center items-center mt-20">
            <div className="w-4/5 py-10 p-1 md:p-5 grid grid-cols-4 bg-biru opacity-80 rounded-xl text-white place-items-start md:place-items-center">
                <div className="flex flex-col items-center gap-2">
                    <FiHome />
                    <h5 className="font-medium text-lg">Balai</h5>
                    <p className="text-center font-extralight text-[10px] md:text-xs w-4/5">Balai Besar Wilayah Sungai Sumatera VIII</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FiMapPin />
                    <h5 className="font-medium text-lg">Lokasi</h5>
                    <p className="text-center font-extralight text-[10px] md:text-xs">Jl. Soekarno-Hatta No.869, Palembang, Sumatera Selatan 30151</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FiMap />
                    <h5 className="font-medium text-lg">Wilayah</h5>
                    <p className="text-center font-extralight text-[10px] md:text-xs w-4/5">WS Musi-Lemau-Banyuasin, WS Bangka</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FiGlobe />
                    <h5 className="font-medium text-lg">Klasifikasi</h5>
                    <p className="text-center font-extralight text-[10px] md:text-xs w-4/5">Balai Besar Wilayah Sungai Tipe A</p>
                </div>
            </div>
            </section>

            {/* Logo dan Lambang kementerian */}
            <section className="w-screen flex justify-center items-center mt-20">
                <div className="w-4/5 flex flex-col gap-16">
                    <div>
                        <h2 className="text-3xl font-semibold">MOTTO DAN LAMBANG KEMENTERIAN</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center self-center">
                        <div className="">
                            <img className="h-40 object-contain" src={'/src/assets/images/logoAjah.png'} alt="logo PUPR" />
                        </div>
                        <div className="w-60 md:h-96 py-10 p-1 md:px-5 flex flex-col justify-center bg-[#6274A1] rounded-tl-lg rounded-tr-[45px] rounded-bl-[45px] rounded-br-lg text-white">
                            <h5 className="text-lg font-semibold">Makna Logo</h5>
                            <hr className="w-10 border-t-2 border-yellow-400 mb-3" />
                            <p className="text-xs font-light leading-5">Menggambarkan peran Kementerian Pekerjaan Umum dan Perumahan Rakyat dalam mewujudkan infrastruktur yang handal untuk mendukung Indonesia yang berdaulat, mandiri, dan berkepribadian berlandaskan gotong royong.</p>
                        </div>
                        <div className="w-60 md:h-80 py-10 px-1 md:px-5 flex flex-col justify-center bg-white rounded-tl-lg rounded-tr-[45px] rounded-bl-lg rounded-br-lg shadow-[5px_5px_2px_1px] shadow-gray-300">
                            <h5 className="text-lg font-semibold">Makna Warna</h5>
                            <hr className="w-10 border-t-2 border-yellow-400 mb-3" />
                            <div className="flex gap-3 mb-3">
                                <div className="h-5 w-5 bg-kuning"></div>
                                <p className="w-40 text-xs "><span className="font-semibold">Kuning Kunyit</span> melambangkan keagungan, Ketuhanan Yang Maha Esa, dan kemakmuran</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="h-5 w-5 bg-biru"></div>
                                <p  className="w-40 text-xs "><span className="font-semibold">Warna Biru gelap</span>  memiliki arti Keadilan Sosial, Keteguhan hati, Kesetiaan pada tugas dan Ketegasan bertindak.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Visi Misi */}
            <section className="w-screen flex justify-center items-center mt-20 bg-biru-muda">
                <div className="w-4/5 flex justify-center gap-7 md:gap-20 my-5">
                    <div className="w-96 flex flex-col gap-3">
                        <h3 className="text-2xl font-semibold">VISI</h3>
                        <hr className="w-10 border-t-2 border-yellow-400" />
                        <ul className="list-disc text-sm">
                            <li>Terwujudnya kemanfaatan sumber daya air di Wilayah</li>
                            <li>Sungai Jratunseluna yang berkelanjutan untuk sebesar-besar kesejahteraan rakyat
                            </li>
                        </ul>
                    </div>
                    <div className="w-96 flex flex-col gap-3">
                        <h3 className="text-2xl font-semibold">MISI</h3>
                        <hr className="w-10 border-t-2 border-yellow-400" />
                        <ul className="list-disc text-sm">
                            <li>Konservasi Sumber Daya Air</li>
                            <li>Pendayagunaan Sumber Daya Air (Penatagunaan, Penyediaan, Penggunaan)</li>
                            <li>Pengendalian dan Penanggulangan Daya Rusak Air
                            </li>
                            <li>Pemberdayaan dan peningkatan peran serta para pemangku kepentingan sumber daya air secara terencana dan berkelanjutan</li>
                            <li>Meningkatkan ketersediaan dan keterbukaan data dan informasi sumber daya air</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Fungsi */}
            <section className="w-screen flex justify-center items-center mt-20">
                <div className="w-4/5 flex flex-col items-center gap-10 my-5">
                    <div className="w-fit">
                        <h3 className="text-2xl font-semibold">Fungsi</h3>
                        <hr className="w-full border-t-2 border-yellow-400" />
                    </div>
                    <div className="w-full md:w-fit flex flex-wrap md:gap-20">
                        <div className="w-96">
                            <ul className="list-disc text-sm">
                                <li>Penyusunan Pola PSDA dan Rencana PSDA pada WS</li>
                                <li>Penyusunan Program PSDA dan Rencana Kegiatan PSDA pada WS
                                </li>
                                <li>Pemantauan dan Evaluasi Penyelenggaraan atau Penerapan Pola PSDA dan Rencana PSDA</li>
                                <li>Penyusunan Studi Kelayakan dan Cantek atau Desain Pengembangan SDA</li>
                                <li>Pelaksanaan PBJ sesuai dengan Ketentuan Per Undang-undangan</li>
                                <li>Pelaksanaan Sistem Manajemen Keselamatan dan Kesehatan Kerja</li>
                                <li>PSDA yang meliputi Konservasi SDA, Pendayagunaan SDA, dan Pengendalian Daya Rusak Air pada WS</li>
                                <li>Pengelolaan Drainase Utama Perkotaan</li>
                                <li>Pengelolaan Sistem Hidrologi</li>
                                <li>Pengelolaan Sistem Informasi SDA</li>
                                <li>Pelaksanaan OP SDA pada WS</li>
                                <li>Pelaksanaan Bimbingan Teknis PSDA yang menjadi Kewenangan Provinsi dan Kab/Kota</li>
                                <li>Penyusunan dan Penyiapan Rekomtek dalam Pemberian Izin penggunaan SDA pada WS</li>
                            </ul>
                        </div>
                        <div className="w-96">
                            <ul className="list-disc text-sm">
                                <li>Penyusunan dan Penyiapan Sartek untuk pengalihan alur sungai dan pemanfaatan bekas sungai</li>
                                <li>Penyusunan dan Pelaksanaan Kajian Penetapan Garis Sempadan Sungai,Danau, Situ dan Jaringan Irigasi</li>
                                <li>Fasilitasi Kegiatan TKPSDA pada WS</li>
                                <li>Pemberdayaan Masyarakat dalam PSDA</li>
                                <li>Pelaksanaan Penyusunan Laporan Akuntansi Keuangan dan Akuntansi barang Milik Negara selaku Unit Akuntasi Wilayah</li>
                                <li>Pelaksanaan Pemungutan, Penerimaan, dan Pengunaan BJPSDA sesuai dengan ketentuan perundangan-undangan</li>
                                <li>Pelaksanaan Urusan Tata Usaha dan Rumah Tangga Balai serta Komunikasi Publik</li>
                                <li>Penyusunan Perjanjian Kerja dan Laporan Kinerja Balai</li>
                                <li>Pelaksanaan Pemantauan dan Pengawasan Penggunaan SDA dan</li>
                                <li>Penyidikan Tindak Pidana Bidang SDA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stuktur organisasi */}
            <section className="w-screen flex justify-center items-center mt-20">
                <div className="w-4/5 flex flex-col items-center gap-10">
                    <h2 className="text-3xl font-semibold">STRUKTUR ORGANISASI</h2>
                    <img className="md:h-96 object-contain" src={'/src/assets/images/strukturOrganisasi.png'} alt="struktur organisasi" />
                </div>
            </section>
            <Footer />
        </>
    )
}
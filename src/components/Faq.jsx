import { FiChevronDown } from "react-icons/fi"
import { useState } from "react"

export default function Faq(){
    const [faqActive,setFaqActive] = useState()

    function handleClick(value) {
        setFaqActive(faqActive === value ? null : value)
    }

    return(
        <>
    
        {/* FAQ */}
        <section id="faq" className="w-screen flex justify-center items-center mt-32 bg-biru-muda">
        <div className="w-4/5 flex flex-col gap-5 my-16">
            <div>
                <h5 className="text-kuning font-medium">FAQ</h5>
                <h2 className="text-3xl font-medium">Frequently Asked Questions</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-5 transition duration-300 ease-in-out">
                {/* Pertanyaan jawaban */}
                <div className="flex flex-col gap-5 md:w-1/2">
                    <div className="flex gap-2 cursor-pointer" onClick={()=>{handleClick(0)}}>
                        <FiChevronDown  className="text-kuning w-10"/>
                        <div  className="w-4/5">
                            <p className="text-sm font-medium mb-2 cursor-pointer">
                                Kapan perusahaan ini didirikan?
                            </p>
                            <p className={`${faqActive === 0 ? "block" : "hidden"} text-sm font-medium text-[#4865B0] leading-7 ml-4`}>
                                Perusahaan ini didirikan pada tahun 2010 oleh sekelompok profesional yang berdedikasi untuk menciptakan solusi inovatif bagi pelanggan di berbagai industri.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer" onClick={()=>{handleClick(1)}}>
                        <FiChevronDown  className="text-kuning w-10"/>
                        <div  className="w-4/5">
                            <p className="text-sm font-medium mb-2 cursor-pointer">
                                Apa nilai-nilai utama perusahaan?
                            </p>
                            <p className={`${faqActive === 1 ? "block" : "hidden"} text-sm font-medium text-[#4865B0] leading-7 ml-4`}>
                                Nilai-nilai utama perusahaan kami meliputi integritas, inovasi, kepuasan pelanggan, kerjasama tim, dan tanggung jawab sosial. Kami percaya bahwa nilai-nilai ini adalah kunci kesuksesan jangka panjang kami.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer" onClick={()=>{handleClick(2)}}>
                        <FiChevronDown  className="text-kuning w-10"/>
                        <div  className="w-4/5">
                            <p className="text-sm font-medium mb-2 cursor-pointer">
                                Apakah perusahaan ini memiliki program tanggung jawab sosial?
                            </p>
                            <p className={`${faqActive === 2 ? "block" : "hidden"} text-sm font-medium text-[#4865B0] leading-7 ml-4`}>
                                Ya, kami memiliki berbagai program tanggung jawab sosial yang berfokus pada pendidikan, kesehatan, dan pelestarian lingkungan. Kami berkomitmen untuk memberikan dampak positif pada komunitas sekitar dan mendukung keberlanjutan lingkungan.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer" onClick={()=>{handleClick(3)}}>
                        <FiChevronDown  className="text-kuning w-10"/>
                        <div  className="w-4/5">
                            <p className="text-sm font-medium mb-2 cursor-pointer">
                                Bagaimana cara perusahaan ini mengelola keluhan pelanggan?
                            </p>
                            <p className={`${faqActive === 3 ? "block" : "hidden"} text-sm font-medium text-[#4865B0] leading-7 ml-4`}>
                                Kami memiliki tim layanan pelanggan yang terlatih untuk menangani keluhan dan masukan dari pelanggan dengan cepat dan efektif. Pelanggan dapat menghubungi kami melalui email, telepon, atau platform media sosial kami.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer" onClick={()=>{handleClick(4)}}>
                        <FiChevronDown  className="text-kuning w-10"/>
                        <div  className="w-4/5">
                            <p className="text-sm font-medium mb-2 cursor-pointer">
                                Apakah perusahaan ini memiliki kebijakan keberagaman dan inklusi?
                            </p>
                            <p className={`${faqActive === 4 ? "block" : "hidden"} text-sm font-medium text-[#4865B0] leading-7 ml-4`}>
                                Ya, kami sangat mendukung keberagaman dan inklusi di tempat kerja. Kami percaya bahwa lingkungan kerja yang beragam dan inklusif memperkuat tim kami dan membantu kami melayani pelanggan dengan lebih baik.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Form */}
                <div className="flex flex-col items-center gap-10 md:w-1/2 mt-10 md:mt-0 px-5">
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
    </>
    )
}
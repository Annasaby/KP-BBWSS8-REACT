import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Galeri(){
    return(
        <>
            <Navbar />

            {/* Galeri */}
            <section className="w-screen flex justify-center items-center mt-20">
                <div className="w-4/5 grid grid-cols-4 gap-1 items-center">
                    <img className="w-full h-full object-cover hover:opacity-80 col-span-2" data-aos="fade-up" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/berita.png'} alt="foto bapak-bapak" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="foto bapak-bapak" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <img className="w-full h-full object-cover hover:opacity-80 row-span-2" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="foto bapak-bapak" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/banjir.jpeg'} alt="foto banjir" />
                    <img className="w-full h-full object-cover hover:opacity-80" src={'/src/assets/images/Berita.png'} alt="foto bapak-bapak" />
                </div>
            </section>

            <Footer />
        </>
    )
}
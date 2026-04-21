import DataImage from "./data";
import{listTools, listProyek} from "./data"; 

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 pt-15 pb-10 xl:gap-0 grid-cols-1 container mx-auto">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6">
            <p className=" italic font-medium"> Hello, everyone</p>
          </div>
          <h1 className="text-5xl/tight font-bold mb-2">I am Federyco Chen</h1>
          <h2 className="text-2xl font-semibold text-amber-400 mb-6">
            Data Scientist | ML | DL | NLP | AI 
          </h2>
          <p className="text-base/loose mb-5 opacity-75 text-justify">
            Over the past three years, I have developed a deep interest
            in the field of data, particularly data science. My primary
            focus has been on building models using various algorithms
            through to the evaluation stage to provide effective solutions
            to a wide range of problems through a data-driven approach.

          </p>
          <div className ="flex items-center justify-center sm:gap-6 gap-2">
            <a href="https://github.com/federycochen2811" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <i className="ri-github-fill ri-2x"></i>
              <span className="font-medium">GitHub</span>
            </a>
            <a href="https://instagram.com/fedryc_c?igsh=d2ExeXR2dXR1M3J6" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <i className="ri-instagram-fill ri-2x"></i>
              <span className="font-medium">Instagram</span>
            </a>
            <a href="https://linkedin.com/in/federyco-chen" target="_blank" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
              <i className="ri-linkedin-fill ri-2x"></i>
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
        </div>     
        <img src={DataImage.FotoImage} alt="hero image" className="w-112.5 mix-blend-screen mx-auto block md:ml-auto
        animate__animated animate__fadeInUp animate__delay-3s"/>
      </div>

      {/*tentang*/}
      <div className="tentang mt-32 py-10" id="about">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-900 rounded-lg text-justify" 
        data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          <p className="text-base/loose mb-10">
            "Hello! I'm Federyco Chen, A dedicated Statistics student building a career as a Data 
            Scientist. Proficient in Python, R, and SQL, and highly enthusiastic about continuously
            adopting the latest technologies in the data industry. I am skilled in end-to-end data 
            processing, from Exploratory Data Analysis (EDA) and preprocessing to advanced modeling
            and evaluation, to build accurate predictive solutions. Backed by practical experience
            from internship programs and various comprehensive data analysis projects, I view data
            not merely as a collection of raw numbers, but as a strategic asset capable of providing
            valuable insights for making precise and measurable decisions."
          </p>
            <div className="flex items-center justify-between">
              <div className="flex item-center gap-6">
                <div>
                  <h1 className="text-4xl mb-1">
                    10<span className="text-blue-500">+</span>
                  </h1>
                  <p>Completed Project</p>
                </div>
                <div>
                  <h1 className="text-4xl mb-1">
                    2<span className="text-blue-500">+</span>
                  </h1>
                  <p>Year of Analysis</p>
                </div>
              </div>
            </div>
        </div>
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4 text-center" data-aos="fade-up" 
          data-aos-duration="1000" data-aos-once="true">Tools Used</h1>
          <p className="w-2/3 mx-auto text-base/loose opacity-50 text-center" data-aos="fade-up" 
          data-aos-duration="1000" data-aos-delay="300" data-aos-once="true"> The combination
          of software and technology I use to support my workflow and develop interactive portfolios.</p>
          <div className="tools-box mt-14 grid grid-cols-3 gap-4">
            {listTools.map((tool)=>(
              <div className="flex flex-col items-center text-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 
              rounded-xl hover:bg-zinc-950 hover:border-zinc-950 
              transition-all group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" 
              data-aos-delay={tool.dad} data-aos-once="true">
                <img src={tool.gambar} alt="Toold Image" className="w-18 bg-zinc-850 p-1 group-hover:bg-zinc-950"/>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*tentang*/}

      {/*Proyek*/}
      <div className="proyek mt-32 py-10" id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Project</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000"
        data-aos-delay="300" data-aos-once="true">Here are some of the projects I've created::</p>
        <div className="proyek-box mt-14 grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true" className="flex flex-col border border-zinc-800 p-4 rounded-xl">
              <img src={proyek.gambar} alt="proyek Image" className="rounded-lg" /> 
              <div className="flex flex-col flex-grow">
                <h1 className="text-lg md:text-2xl font-bold my-4 text-center">{proyek.nama}</h1>
                <p className="text-base/loose mb-4 text-center">{proyek.desk}</p>
                <div className="flex-grow">
                  {proyek.tools.map((tool,index)=>(
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-900 rounded-md 
                    font-semibold text-center" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-10 text-center font-semibold">
                  <a href={proyek.link} target="_blank" rel="noopener noreferrer" className="bg-blue-600 p-3 rounded-lg block border border-zinc-500 hover:bg-blue-800">
                  View Project
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>    
      </div>
      {/*Proyek*/}

      {/*Kontak*/}
      <div className="Kontak mt-32 p-10" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true"
        >Contact</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Let's connect
        </p>
        <form action="https://formsubmit.co/federycochen.2811@gmail.com" method="POST"
        className="bg-zinc-850 p-8 md:p-14 w-full max-w-4xl mx-auto rounded-xl border border-zinc-800 shadow-2xl" 
        autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Full Name</label>
              <input type="text" name="Nama" placeholder="Enter Your Full Name..." 
              className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="Email" placeholder="Enter your email address..."
              className="border border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan">Message</label>
              <textarea name="Pesan" id="pesan" cols="45" rows="7" placeholder="Please type your message...."
              className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="mt-4 text-center">
              <button type="submit" className="bg-blue-600  p-3 rounded-lg w-full cursor-pointer border border-zinc-500 hover:bg-blue-800">
                Submit
              </button>
            </div>
          </div>  
        </form>
      </div>
      {/*Kontak*/}
    </>
  );
};

export default App;
import HeroImage from "/assets/hero-img.webp";
import FotoImage from "/assets/foto1-img.webp";
import fotoImage from "/assets/foto2-img.webp";

const Image = {
  HeroImage,FotoImage,fotoImage
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/python.png";
import Tools3 from "/assets/tools/rstudio.png";
import Tools4 from "/assets/tools/github.png";
import Tools5 from "/assets/tools/sql.png";
import Tools6 from "/assets/tools/canva.png";
import Tools7 from "/assets/tools/colab.png";
import Tools8 from "/assets/tools/rpubs.png";
import Tools9 from "/assets/tools/excel.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "Python",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "R Studio",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Github",
    ket: "Repository",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "SQL",
    ket: "Database",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Canva",
    ket: "Design",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Google Colab",
    ket: "Notebook",
    dad: "700",
  },
    {
    id: 8,
    gambar: Tools8,
    nama: "R Pubs",
    ket: "Repository",
    dad: "800",
  },
    {
    id: 9,
    gambar: Tools9,
    nama: "Excel",
    ket: "Spreadsheet",
    dad: "900",
  },
];

import Proyek1 from "/assets/proyek/Project1.webp";
import Proyek2 from "/assets/proyek/Project2.webp";
import Proyek3 from "/assets/proyek/Project3.webp";
import Proyek4 from "/assets/proyek/Project4.webp";
import Proyek5 from "/assets/proyek/Project5.webp";
import Proyek6 from "/assets/proyek/Project6.webp";

export const listProyek = [
  
  {
    id: 1,
    gambar: Proyek1,
    nama: "AI Research Agent",
    desk: "Large Language Model-Agent",
    tools: ["Python", "Langchain", "Streamlit"],
    link: "https://llm-ai-agent.streamlit.app/",
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Climate Classification",
    desk: "Deep Learning",
    tools: ["Python", "Excel"],
    link: "https://github.com/federycochen2811/Analisis-Iklim-Sleman-DIY",
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Clustering Classification Poverty Rate",
    desk: "Machine learning",
    tools: ["Python", "Excel"],
    link: "https://github.com/federycochen2811/Reduksi-Clustering-Classification-Tingkat-Kemiskinan/tree/main",
    dad: "400",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Prediction Student Graduation",
    desk: "Machine Learning",
    tools: ["R Studio", "Excel"],
    link: "https://rpubs.com/WeyKuo/AnalisisKelulusanMahasiswa",
    dad: "500",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Payment Forecasting",
    desk: "Classical Statistics",
    tools: ["R Studio", "Excel"],
    link: "https://rpubs.com/WeyKuo/ExponentialSmoothing",
    dad: "600",
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Sentimen Review Hotel",
    desk: "Natural Language Processing",
    tools: ["Collab", "Python", "Excel"],
    link: "https://github.com/federycochen2811/Analisis-Sentimen-Review-Hotel-UNY",
    dad: "700",
  },
  ];

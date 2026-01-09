// Database delle pubblicazioni
const shortCVData = {
    education: [
      { title: "PhD student in Information Technology", date: "2023 - Present", description: "University of Parma\nResearch focus: Deep Learning, Generative AI, Style Transfer, Efficient Models\nSupervisor: Prof. Andrea Prati" },
      { title: "Computer Engineering M.Sc.", date: "2021 - 2023", description: "University of Parma\nGraduated with 110/110 cum laude\nThesis: ”Unsupervised subject segmentation for accurate image-to-image translation”" },
      { title: "Computer Engineering B.Sc.", date: "2017 - 2021", description: "University of Parma\nGraduated with 110/110 cum laude\nThesis: ”Attention transfer for Cycle Consistent Generative Adversarial Networks”" }
    ],
    work: [
      { title: "Member of the IT and statistics committee", date: "2023 - Present", description: "Associazione Italiana Arbitri (AIA)\nDevelopment of web platforms and mobile applications for the internal management of associated referees." },
      { title: "Mobile developer", date: "2021 - 2022", description: "Net4Market - CSAmed\nDevelopment of the mobile application for “Network Imprese”, a network for small and medium-sized Italian businesses" },
    ],
    publications: [
      { title: "Mamba-st: State space model for efficient style transfer", date: "2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)", description: "Filippo Botti, Alex Ergasti, Leonardo Rossi, Tomaso Fontanini, Claudio Ferrari, Massimo Bertozzi, Andrea Prati" },
      { title: "U-shape mamba: State space model for faster diffusion", date: "2025 Proceedings of the Computer Vision and Pattern Recognition Conference", description: "Alex Ergasti, Filippo Botti, Tomaso Fontanini, Claudio Ferrari, Massimo Bertozzi, Andrea Prati" },
      { title: "Masked Style Transfer for Source-Coherent Image-to-Image Translation", date: "2024 Applied Sciences", description: "Filippo Botti, Tomaso Fontanini, Massimo Bertozzi, Andrea Prati" },
    ],
  };
  const detailedCVData = {
    education: [
      { title: "PhD student in Information Technology", subtitle:"University of Parma, Parma (Italy)", duration: "2023 - Present", description: "University of Parma\nResearch focus: Deep Learning, Generative AI, Style Transfer, Efficient Models\nSupervisor: Prof. Andrea Prati" },
      { title: "Computer Engineering M.Sc.", subtitle:"University of Parma, Parma (Italy)", duration: "2021 - 2023", description: "University of Parma\nGraduated with 110/110 cum laude\nThesis: ”Unsupervised subject segmentation for accurate image-to-image translation”" },
      { title: "Computer Engineering B.Sc.", subtitle:"University of Parma, Parma (Italy)", duration: "2017 - 2021", description: "University of Parma\nGraduated with 110/110 cum laude\nThesis: ”Attention transfer for Cycle Consistent Generative Adversarial Networks”" }
    ],
    work: [
      { title: "Member of the IT and statistics committee", subtitle:"Associazione Italiana Arbitri (AIA)", duration: "2023 - Present", description: "Associazione Italiana Arbitri (AIA)\nDevelopment of web platforms and mobile applications for the internal management of associated referees." },
      { title: "Mobile developer", subtitle:"Net4Market - CSAmed", duration: "2021 - 2022", description: "Net4Market - CSAmed\nDevelopment of the mobile application for “Network Imprese”, a network for small and medium-sized Italian businesses." },
    ],
    teaching: [
      { title: "Data Analytics and Business Intelligence with AI ", subtitle:"Higher Technical Institute - ITS Olivetti, Parma (Italy)", duration: "2026", description: "GenAI assistance in data analysis: generating queries in natural language, interpreting graphs/reports, generating summaries/insights. BI tools and AI integrations for interpretation." },
      { title: "Software Lifecycle Management", subtitle:"Professional Institute - FormaFuturo, Parma (Italy)", duration: "2025", description: "Software Engineering basic course for working students." },
      { title: "Introduction to Python programming", subtitle:"AlmaMater Foundation, Bologna (Italy)", duration: "2024", description: "Python course for working students." },
      { title: "Tutor for ”Object Oriented Programming”", subtitle:"University of Parma, Parma (Italy)", duration: "2023 - 2025", description: "Exam practice and tutoring for first-year students (C++)\nTeacher: Prof. Luca Veltri" },
      { title: "Tutor for ”Fundamentals of computer science”", subtitle:"University of Parma, Parma (Italy)", duration: "2022 - 2023 / 2025 - Present", description: "Tutoring for first-year students (Python and C++)\nTeacher: Prof. Michele Tomaiuolo/Prof. Massimo Bertozzi" },
    ],
    skills: [
      { title: "Research Areas", description: "Generative Models, Diffusion Models, Image-to-Image Translation, Style Transfer, Efficient Architectures, State Space Models" },
      { title: "Frameworks and Libraries", description: "PyTorch, Python, C/C++, currently learning CUDA" },
      { title: "Tooling", description: " Experiment tracking, performance profiling, Git, UNIX, LaTex" },
    ]
  };

  const sections = {
    education: 'Education',
    publications: 'Publications',
    other_publications: 'Other Publications',
    teaching: 'Teaching',
    work: 'Work Experience',
    skills: 'Research and Development'
  };
  
  
  const otherPublicationsData = [
      
      {
      "title": "SISMA: Semantic Face Image Synthesis with Mamba",
      "publisher": "International Conference on Image Analysis and Processing",
      "year": "2025",
      "authors": "Filippo Botti, Alex Ergasti, Tomaso Fontanini, Claudio Ferrari, Massimo Bertozzi, Andrea Prati",
      "abstract": "Diffusion Models have become very popular for Semantic Image Synthesis (SIS) of human faces. Nevertheless, their training and inference is computationally expensive and their computational requirements are high due to the quadratic complexity of attention layers. In this paper, we propose a novel architecture called SISMA, based on the recently proposed Mamba. SISMA generates high quality samples by controlling their shape using a semantic mask at a reduced computational demand. We validated our approach through comprehensive experiments with CelebAMask-HQ, revealing that our architecture not only achieves a better FID score yet also operates at three times the speed of state-of-the-art architectures. This indicates that the proposed design is a viable, lightweight substitute to transformer-based models.",
      "bibtex": "@misc{botti2025sismasemanticfaceimage,\ntitle={SISMA: Semantic Face Image Synthesis with Mamba},\nauthor={Botti, Filippo and Ergasti, Alex and Fontanini, Tomaso and Ferrari, Claudio and Bertozzi, Massimo and Prati, Andrea},\nyear={2025},\neprint={2509.17651},\narchivePrefix={pdf},\nprimaryClass={cs.CV},\nurl={https://arxiv.org/abs/2509.17651}\n}",
      "architecture_path": "./img_publications/sisma/arch.png",
      "results_path": [
          "./img_publications/sisma/results.png",
      ],
      "github": "",
      "pdf": "https://arxiv.org/abs/2509.17651"
    },
    {
      "title": "Avoiding shortcuts in unpaired image-to-image translation",
      "publisher": "International Conference on Image Analysis and Processing",
      "year": "2022",
      "authors": "Tomaso Fontanini, Filippo Botti, Massimo Bertozzi, Andrea Prati",
      "abstract": "Image-to-image translation is a very popular task in deep \
          learning. In particular, one of the most effective and popular approach\
          to solve it, when a paired dataset of examples is not available, is to\
          use a cycle consistency loss. This means forcing an inverse mapping in\
          order to reverse the output of the network back to the source domain\
          and reduce the space of all the possible mappings. Nevertheless, the network could learn to take shortcuts and softly apply the target domain in\
          order to make the reverse translation easier therefore producing unsatisfactory results. For this reason, in this paper an additional constraint\
          is introduced during the training phase of an unpaired image-to-image\
          translation network; this forces the model to have the same attention\
          both when applying the target domains and when reversing the translation. This approach has been tested on different datasets showing a\
          consistent improvement over the generated results.",
      "bibtex": "@inproceedings{fontanini2022avoiding,\ntitle={Avoiding shortcuts in unpaired image-to-image translation},\nauthor={Fontanini, Tomaso and Botti, Filippo and Bertozzi, Massimo and Prati, Andrea},\nbooktitle={International Conference on Image Analysis and Processing},\npages={463--475},\nyear={2022},\norganization={Springer}\n}",
      "architecture_path": "./img_publications/avoiding_shortcut/arch.png",
      "results_path": [
          "./img_publications/avoiding_shortcut/results1.png",
          "./img_publications/avoiding_shortcut/results2.png",
          "./img_publications/avoiding_shortcut/results3.png"
      ],
      "github": "https://github.com/FilippoBotti/Avoiding-Shortcuts-in-Unpaired-Image-to-Image-Translation",
      "pdf": "https://link.springer.com/chapter/10.1007/978-3-031-06427-2_39"
    }
  ]

  const publicationsData = [
  {
    "title": "Mamba-st: State space model for efficient style transfer",
    "publisher": "IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)",
    "year": "2025",
    "authors": "Filippo Botti, Alex Ergasti, Leonardo Rossi, Tomaso Fontanini, Claudio Ferrari, Massimo Bertozzi, Andrea Prati",
    "abstract": "The goal of style transfer is, given a content image and a style source, generating a new image preserving the content but with the artistic representation of the style source. Most of the state-of-the-art architectures use transformers or diffusion-based models to perform this task, despite the heavy computational burden that they require. In particular, transformers use self- and cross-attention layers which have large memory footprint, while diffusion models require high inference time. To overcome the above, this paper explores a novel design of Mamba, an emergent State-Space Model (SSM), called Mamba-ST, to perform style transfer. To do so, we adapt Mamba linear equation to simulate the behavior of cross-attention layers, which are able to combine two separate embeddings into a single output, but drastically reducing memory usage and time complexity. We modified the Mamba's inner equations so to accept inputs from, and combine, two separate data streams. To the best of our knowledge, this is the first attempt to adapt the equations of SSMs to a vision task like style transfer without requiring any other module like cross-attention or custom normalization layers. An extensive set of experiments demonstrates the superiority and efficiency of our method in performing style transfer compared to transformers and diffusion models. Results show improved quality in terms of both ArtFID and FID metrics.",
    "bibtex": "@inproceedings{botti2025mamba,\ntitle={Mamba-st: State space model for efficient style transfer},\nauthor={Botti, Filippo and Ergasti, Alex and Rossi, Leonardo and Fontanini, Tomaso and Ferrari, Claudio and Bertozzi, Massimo and Prati, Andrea},\nbooktitle={2025 IEEE/CVF Winter Conference on Applications of Computer Vision (WACV)},\npages={7797--7806},\nyear={2025},\norganization={IEEE}\n}",
    "architecture_path": "./img_publications/mambast/arch.png",
    "results_path": [
        "./img_publications/mambast/results1.jpg",
        "./img_publications/mambast/results2.jpg"
    ],
    "github": "https://github.com/FilippoBotti/MambaST",
    "pdf": "https://arxiv.org/abs/2409.10385"
  },
  {
    "title": "Masked Style Transfer for Source-Coherent Image to Image Translation",
    "publisher": "Applied Sciences",
    "year": "2024",
    "authors": "Filippo Botti, Tomaso Fontanini, Massimo Bertozzi, Andrea Prati",
    "abstract": "The goal of image-to-image translation (I2I) is to translate images from one domain to another while maintaining the content representations.\
        A popular method for I2I translation involves the use of a reference image to guide the transformation process.\
        However, most of the architectures fail to maintain the input main characteristics and produce images too close to the reference during style transfer. \
        In order to avoid this problem, we propose a novel architecture which is able to perform source-coherent translation between multiple domains.\
        Our goal is to preserve input details during I2I translation by weighting the style code obtained from the reference images before applying it to the source image. Therefore, we choose to mask the reference images in an unsupervised way,\
        before extracting the style from them. By doing so, the input characteristics while performing style transfer are better maintained. As a result, we also increase the diversity in images generated by extracting style from the same reference. Additionally, the adaptive normalization layers, commonly used to inject styles into the model, are substituted with an attention mechanism for the purpose of increasing the quality in generated images. \
        Several experiments are performed on CelebA-HQ and AFHQ datasets in order to prove the efficacy of the proposed system. Quantitative results, measured with LPIPS and FID metrics, demonstrate the superiority the proposed architecture compared to the state of art.",
    "bibtex": "@article{botti2024masked,\ntitle={Masked Style Transfer for Source-Coherent Image-to-Image Translation},\nauthor={Botti, Filippo and Fontanini, Tomaso and Bertozzi, Massimo and Prati, Andrea},\njournal={Applied Sciences},\nvolume={14},\nnumber={17},\npages={7876},\nyear={2024},\npublisher={MDPI}\n}",
    "architecture_path": "./img_publications/masked_style/arch.png",
    "results_path": [
        "./img_publications/masked_style/results.png"
    ],
    "github": "https://github.com/FilippoBotti/Masked-Style-Transfer",
    "pdf": "https://www.mdpi.com/2076-3417/14/17/7876"
  },
  {
    "title": "U-shape mamba: State space model for faster diffusion",
    "publisher": "Proceedings of the Computer Vision and Pattern Recognition Conference",
    "year": "2025",
    "authors": "Alex Ergasti, Filippo Botti, Tomaso Fontanini, Claudio Ferrari, Massimo Bertozzi, Andrea Prati",
    "abstract": "Diffusion models have become the most popular approach for high-quality image generation, but their high computational cost still remains a significant challenge. To address this problem, we propose U-Shape Mamba (USM), a novel diffusion model that leverages Mamba-based layers within a U-Net-like hierarchical structure. By progressively reducing sequence length in the encoder and restoring it in the decoder through Mamba blocks, USM significantly lowers computational overhead while maintaining strong generative capabilities. Experimental results against Zigma, which is currently the most efficient Mamba-based diffusion model, demonstrate that USM achieves one-third the GFlops, requires less memory and is faster, while outperforming Zigma in image quality. Frechet Inception Distance (FID) is improved by 15.3, 0.84 and 2.7 points on AFHQ, CelebAHQ and COCO datasets, respectively. These findings highlight USM as a highly efficient and scalable solution for diffusion-based generative models, making high-quality image synthesis more accessible to the research community while reducing computational costs.",
    "bibtex": "@inproceedings{ergasti2025u, \ntitle={U-shape mamba: State space model for faster diffusion}, \nauthor={Ergasti, Alex and Botti, Filippo and Fontanini, Tomaso and Ferrari, Claudio and Bertozzi, Massimo and Prati, Andrea}, \nbooktitle={Proceedings of the Computer Vision and Pattern Recognition Conference},\npages={3251--3258},\nyear={2025}\n}",
    "architecture_path": "./img_publications/ushape/arch.png",
    "results_path": [
        "./img_publications/ushape/results1.png",
        "./img_publications/ushape/results2.png",
        "./img_publications/ushape/results3.png"
    ],
    "github": "https://github.com/ErgastiAlex/U-Shape-Mamba",
    "pdf": "https://arxiv.org/abs/2504.13499"
  },
  
];

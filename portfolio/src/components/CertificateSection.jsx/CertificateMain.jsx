import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../FramerMotion/variant'

const certificates = [
  {
    title: 'Full Stack Web Development - SkillUp',
    issuer: 'Forage',
    date: 'December 2025',
    link: 'https://www.geeksforgeeks.org/certificate/c83f39b6170f19185e4d40e8769d8cd3',
    img: '../../Full Stack GFG.jpeg',
  },
  {
    title: 'Deloitte - Cyber Simulation',
    issuer: 'Forage',
    date: 'June 2025',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_Wa5A7J9auzpy2MiNn_1750129319182_completion_certificate.pdf',
    img: '../../delliote cyber.jpeg',
  },
  {
    title: 'HTML & CSS Bootcamp by letsUpgrade',
    issuer: 'letsUpgrade',
    date: 'July 2025',
    link: 'https://verify.letsupgrade.in/certificate/LUEHTMLJUL1251512',
    img: '../../html & css.jpeg',
  },
]

const CertificateMain = () => {
  return (
    <motion.div
    variants={fadeIn('up', '0.2')}
    initial='hidden'
    whileInView = 'show'
    viewport={{once:false , amount:0}}
    id='certificates' className="py-16 px-4 bg-[#0d1321] text-white">
      <h1 className="text-5xl text-cyan-400 font-bold text-center mb-12">Certificates</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {certificates.map((cert, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 w-full max-w-sm transform hover:-translate-y-2"
          >
            <img src={cert.img} alt={cert.title} className="w-full h-40 object-cover" />
            <div className="p-4 text-black">
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-600 mt-1 mb-3">
                Issued by: {cert.issuer} • {cert.date}
              </p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default CertificateMain

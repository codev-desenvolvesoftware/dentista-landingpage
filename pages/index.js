// pages/index.js
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaInstagram, FaFacebookF, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function Home() {
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' });
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); 

  const formRef = useRef();

  const handleSubmit = (e) => {
  e.preventDefault();

  const serviceID = 'default_service';
  const templateID = 'template_trj7bgg';
  const publicKey = 'K3AITkZDmdb8W1Z6E';

  emailjs
    .sendForm(serviceID, templateID, formRef.current, publicKey)
    .then(() => {
      alert('Mensagem enviada com sucesso!');
      setFormData({ nome: '', telefone: '', mensagem: '' });
    })
    .catch((err) => {
      console.error('Erro ao enviar:', err);
      alert('Erro ao enviar a mensagem. Tente novamente.');
    });
};

    const beneficios = [
    {
      src: '/dentista1.jpg',
      alt: 'Imagem dentista',
      title: 'Atendimento Personalizado',
      text: 'Nosso compromisso é oferecer um atendimento humanizado, com foco em cada detalhe do seu sorriso.'
    },
    {
      src: '/aparelho.jpg',
      alt: 'Imagem aparelho ortodôntico',
      title: 'Ortodontia de Alta Tecnologia',
      text: 'Corrija o alinhamento dos dentes com discrição e conforto, usando tecnologia de ponta em ortodontia.'
    },
    {
      src: '/consultorio.jpeg',
      alt: 'Imagem consultório',
      title: 'Ambiente Moderno e Acolhedor',
      text: 'Consultório equipado com tecnologia de última geração para garantir conforto e segurança aos nossos pacientes.'
    },
    {
      src: '/higiene.jpg',
      alt: 'Imagem higiene bucal',
      title: 'Higiene Bucal',
      text: 'Educação e acompanhamento constante para garantir a melhor saúde bucal para você e sua família.'
    },
    {
      src: '/implante.jpg',
      alt: 'Imagem implante dental',
      title: 'Implantes Dentários',
      text: 'Recupere seu sorriso com segurança e eficácia, utilizando materiais de alta qualidade e tecnologia avançada.'
    }
  ];

    useEffect(() => {
    // Garantir que o código só seja executado no cliente
    setIsClient(true);
     if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCYfISsihAni0j2hLuyzF09tMnrZmPggLM&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);

      // Função de inicialização do mapa
      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: -23.55052, lng: -46.633308 }, // Latitude e longitude para São Paulo
          zoom: 15,
        });
        
        const marker = new window.google.maps.Marker({
          position: { lat: -23.55052, lng: -46.633308 },
          map,
          title: "Clínica Odontológica",
        });
      };
    }
  }, []);

  const nextSlide = () => {
    if (carouselIndex < beneficios.length - 3) setCarouselIndex(carouselIndex + 1);
  };

  const prevSlide = () => {
    if (carouselIndex > 0) setCarouselIndex(carouselIndex - 1);
  };

  if (!isClient) {
    return null; // Impede a renderização no lado do servidor
  }

  return (
    <>
      <Head>
        <title>Clínica Odontológica | Sorria com Confiança</title>
        <meta
          name="description"
          content="Agende uma consulta e conquiste um sorriso perfeito com nosso atendimento especializado."
        />
        <meta property="og:title" content="Clínica Odontológica" />
        <meta
          property="og:description"
          content="Sorria com confiança com os serviços da nossa clínica odontológica."
        />
        <meta property="og:image" content="URL_DA_IMAGEM" />
        <meta property="og:url" content="URL_DA_SUA_PÁGINA" />
      </Head>
    <main className="bg-white text-gray-800 font-sans">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-screen bg-gradient-to-br from-teal-400 to-cyan-600 text-white flex flex-col items-center justify-center text-center p-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Sorria com Confiança</h1>
        <p className="text-lg md:text-2xl mb-6 max-w-2xl">
          Conquiste mais pacientes com uma presença online profissional para seu consultório odontológico.
        </p>
        <a
          href="https://wa.me/5511943665990"
          className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Agende uma Demonstração
        </a>
      </motion.section>

       {/* Imagens e Benefícios com Carousel */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto relative">
          {carouselIndex > 0 && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
              <button onClick={prevSlide} className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <FaChevronLeft size={20} />
              </button>
            </div>
          )}
          {carouselIndex < beneficios.length - 3 && (
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
              <button onClick={nextSlide} className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
                <FaChevronRight size={20} />
              </button>
            </div>
          )}
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {beneficios.slice(carouselIndex, carouselIndex + 3).map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <Image src={item.src} alt={item.alt} width={400} height={300} className="w-full h-60 object-cover" loading="lazy" />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 px-6 bg-cyan-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Por que escolher nossa clínica?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl text-cyan-600 mb-4">🦷</div>
              <h3 className="text-lg font-semibold mb-2">Equipe Especializada</h3>
              <p className="text-gray-600">Profissionais capacitados nas diversas áreas da odontologia para cuidar de você.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-cyan-600 mb-4">⌚</div>
              <h3 className="text-lg font-semibold mb-2">Horários Flexíveis</h3>
              <p className="text-gray-600">Atendimento em horários adaptados à sua rotina para maior conveniência.</p>
            </div>
            <div className="text-center">
              <div className="text-5xl text-cyan-600 mb-4">📍</div>
              <h3 className="text-lg font-semibold mb-2">Localização Acessível</h3>
              <p className="text-gray-600">Estamos em uma área central com fácil acesso e estacionamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Convênios */}
      <section className="bg-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
      Convênios que Atendemos
    </h3>
    <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
      Facilitamos seu atendimento com diversas operadoras. Veja abaixo alguns dos convênios aceitos pela nossa clínica:
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
      {[
        { nome: "Amil", img: "/convenios/amil.png" },
        { nome: "Bradesco Saúde", img: "/convenios/bradesco.png" },
        { nome: "SulAmérica", img: "/convenios/sulamerica.png" },
        { nome: "Omint", img: "/convenios/omint.png" },
        { nome: "Unimed", img: "/convenios/unimed.png" },
        { nome: "Porto Saúde", img: "/convenios/porto.png" },
        { nome: "Interodonto", img: "/convenios/interodonto.png" },
        { nome: "OdontoPrev", img: "/convenios/odontoprev.png" },
      ].map((convenio, idx) => (
        <div
          key={idx}
          className="p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 transform hover:scale-105"
        >
          <img
            src={convenio.img}
            alt={`Convênio ${convenio.nome}`}
            className="h-16 mx-auto object-contain mb-2"
          />
          <p className="text-sm text-gray-700 font-medium">{convenio.nome}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Botões Flutuantes: Ligar e WhatsApp*/}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}  
        transition={{ duration: 1 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      >
        {/* Botão Ligar */}
        <a
          href="tel:1112345678"
          className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center justify-center"
        >
          <FaPhoneAlt className="text-white" />
          Ligar
        </a>

        {/* Botão WhatsApp */}
        <a
          href="https://wa.me/5511943665990"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-white text-xl" />
          WhatsApp
        </a>
      </motion.div> 

      {/* Formulário */}
      <motion.section
        id="formulario"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 bg-white"
      >
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="grid gap-4">
  <input
    type="text"
    name="nome"
    placeholder="Seu nome"
    className="border p-3 rounded-md"
    value={formData.nome}
    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
  />
  <input
    type="tel"
    name="telefone"
    placeholder="Seu telefone"
    className="border p-3 rounded-md"
    value={formData.telefone}
    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
  />
  <textarea
    name="mensagem"
    placeholder="Mensagem"
    className="border p-3 rounded-md"
    rows="4"
    value={formData.mensagem}
    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
  ></textarea>
  <button
    type="submit"
    className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-700 transition"
  >
    Enviar
  </button>
</form>
        </div>
      </motion.section>

     {/* Localização e Contato */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-4">Informações da Clínica</h3>
            <div className="flex items-center mb-3">
              <Image src="/location.png" alt="Ícone endereço" width={24} height={24} className="mr-2" />
              <p>Av. Paulista, 1000 - Bela Vista, São Paulo - SP</p>
            </div>
            <div className="flex items-center mb-3">
              <Image src="/email.png" alt="Ícone email" width={24} height={24} className="mr-2" />
              <p>contato@clinicadentista.com</p>
            </div>
            <div className="flex items-center mb-3">
              <Image src="/phone.png" alt="Ícone telefone" width={24} height={24} className="mr-2" />
              <p>(11) 1234-5678</p> 
            </div>            
            <div className="flex items-center mb-3">
              <Image src="/clock.png" alt="Ícone horário" width={24} height={24} className="mr-2" />
              <p>Segunda a Sexta das 9h às 18h</p>
            </div>

            {/* Redes sociais */}
            <div className="mt-6">
              <h4 className="text-lg font-medium mb-2">Siga nas redes sociais</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://instagram.com/sua_clinica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
                >
                  <FaInstagram className="text-pink-600 text-xl" />
                </a>
                <a
                  href="https://facebook.com/sua_clinica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                >
                  <FaFacebookF className="text-blue-600 text-xl" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Mapa */}
            <div>
              <div
                id="map"
                style={{
                  height: "250px",
                  width: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              ></div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Clínica Odontológica. Todos os direitos reservados.
          </p>
          <p className="text-sm">
            <a href="mailto:contato@clinicadentista.com" className="hover:text-cyan-400">
              contato@clinicadentista.com
            </a>
          </p>
        </div>
      </footer>
    </main>
  </>
  );
}
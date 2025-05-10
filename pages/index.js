// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ nome: '', telefone: '', mensagem: '' });

  return (
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
          href="#formulario"
          className="bg-white text-cyan-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Agende uma Demonstração
        </a>
      </motion.section>

      {/* Imagens e Benefícios */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
           <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image src="/dentista1.jpg" alt="Imagem dentista" width={400} height={300} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Atendimento Personalizado</h3>
              <p className="text-sm text-gray-600">
                Conte com o cuidado de um dentista experiente, pronto para ouvir suas necessidades e transformar seu sorriso com empatia e precisão.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image src="/aparelho.jpg" alt="Imagem aparelho ortodôntico" width={400} height={300} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Mais beleza e conforto nos Aparelhos Ortodônticos</h3>
              <p className="text-sm text-gray-600">
                Corrija o alinhamento dos dentes com discrição e conforto, usando tecnologia de ponta em ortodontia.
              </p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <Image src="/consultorio.jpeg" alt="Imagem consultório" width={400} height={300} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">Ambiente Moderno e Acolhedor</h3>
              <p className="text-sm text-gray-600">
                Estrutura moderna e acolhedora, equipada para garantir o seu bem-estar em cada consulta.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

       {/* Nova seção: Depoimentos */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">O que nossos pacientes dizem</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“Excelente atendimento e resultado maravilhoso! Recomendo de olhos fechados.”</p>
              <p className="mt-4 font-bold text-cyan-700">Juliana M.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-gray-700 italic">“Ambiente muito acolhedor e profissionais extremamente competentes.”</p>
              <p className="mt-4 font-bold text-cyan-700">Carlos F.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Nova seção: Diferenciais */}
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

      {/* Botão WhatsApp */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
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
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Seu nome"
              className="border p-3 rounded-md"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Seu telefone"
              className="border p-3 rounded-md"
              value={formData.telefone}
              onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
            />
            <textarea
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
              <Image src="/phone.png" alt="Ícone telefone" width={24} height={24} className="mr-2" />
              <p>(11) 1234-5678</p>
            </div>
            <div className="flex items-center mb-3">
              <Image src="/email.png" alt="Ícone email" width={24} height={24} className="mr-2" />
              <p>contato@clinicadentista.com</p>
            </div>
            <div className="flex items-center mb-3">
              <Image src="/clock.png" alt="Ícone horário" width={24} height={24} className="mr-2" />
              <p>Seg a Sex: 8h às 18h</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Nossa Localização</h2>
            <iframe
              className="w-full h-64 rounded-lg border"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9139930564397!2d-46.65657328447519!3d-23.57338036854386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59d2354a5e3d%3A0xd59e7f5098cda89a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1625234123456"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6">
        © 2025 Clínica OdontoPro. Todos os direitos reservados.
      </footer>
    </main>
  );
}
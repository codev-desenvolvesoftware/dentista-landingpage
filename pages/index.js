// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Home() {
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });

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
          {["/public/dentista1.jpg", "/public/aparelho.jpg", "/public/consultorio.jpg"].map((src, i) => (
            <motion.div
              key={src}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <Image src={src} alt="Imagem dentista" width={400} height={300} className="w-full h-60 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">Benefício {i + 1}</h3>
                <p className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget vehicula nisl.
                </p>
              </div>
            </motion.div>
          ))}
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
              type="email"
              placeholder="Seu e-mail"
              className="border p-3 rounded-md"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

      {/* Footer */}
      <footer className="bg-gray-100 text-center text-sm text-gray-500 py-6">
        © 2025 Clínica OdontoPro. Todos os direitos reservados.
      </footer>
    </main>
  );
}
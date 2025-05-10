import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      <Head>
        <title>Clínica OdontoMais - Transforme seu Sorriso</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Seu novo sorriso começa aqui</h1>
          <p className="text-lg md:text-xl mb-6">Atraia mais pacientes com uma clínica moderna e acolhedora</p>
          <a
            href="#contato"
            className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
          >
            Agende uma consulta
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Por que escolher a OdontoMais?</h2>
          <p className="text-lg mb-6">
            Nossos profissionais especializados, ambiente acolhedor e tecnologia de ponta garantem o melhor atendimento para você e sua família.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="w-64 p-4 bg-white rounded-xl shadow-md">
              <img src="public/dentista1.jpg" alt="Dentista" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-xl">Atendimento humanizado</h3>
              <p className="text-sm">Cuidamos do seu bem-estar do início ao fim.</p>
            </div>
            <div className="w-64 p-4 bg-white rounded-xl shadow-md">
              <img src="public/aparelho.jpg" alt="Aparelho" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-xl">Ortodontia moderna</h3>
              <p className="text-sm">Alinhe seu sorriso com conforto e eficiência.</p>
            </div>
            <div className="w-64 p-4 bg-white rounded-xl shadow-md">
              <img src="public/consultorio.jpg" alt="Consultório" className="rounded-lg mb-4" />
              <h3 className="font-semibold text-xl">Ambiente acolhedor</h3>
              <p className="text-sm">Clínica pensada para sua tranquilidade.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para conquistar novos pacientes?</h2>
        <p className="mb-6">Entre em contato agora mesmo e veja como podemos ajudar sua clínica crescer.</p>
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          className="inline-block bg-green-500 px-6 py-3 rounded-full font-semibold hover:bg-green-600"
        >
          Falar no WhatsApp
        </a>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-16 px-6 bg-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Solicite um orçamento</h2>
          <form className="bg-white p-6 rounded-xl shadow-md">
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              rows="4"
              placeholder="Como podemos te ajudar?"
              className="w-full p-3 mb-4 border border-gray-300 rounded-lg"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 w-full"
            >
              Enviar mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; {new Date().getFullYear()} OdontoMais. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

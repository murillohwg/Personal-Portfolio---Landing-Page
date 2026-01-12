import React from 'react';
import { motion } from "framer-motion";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-blue-500/30">
      {/* Barra de Navegação */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Murillo Henrico Wagner Gonçalves
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#sobre" className="hover:text-white transition">Sobre</a>
            <a href="#projetos" className="hover:text-white transition">Projetos</a>

          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
          >
            🚀 Disponível para Estágio / Junior
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8"
          >
            Desenvolvendo o futuro com <br />
            <span className="text-blue-500">código </span> e segurança.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Estudante de Ciência da Computação. 
            Unindo desenvolvimento web moderno com auditoria de sistemas e redes.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#projetos" 
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all text-center flex items-center justify-center"
            >
              Ver Meus Projetos
            </a>
            <a 
              href="/curriculo.pdf" 
              download="curriculo.pdf"
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all border border-slate-700 text-center flex items-center justify-center"
            >
              Baixar Currículo
            </a>
          </div>
        </div>
      </main>

      {/* Seção de Competências */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4 max-w-6xl mx-auto"
        id="sobre"
      >
        <h2 className="text-center text-slate-400 text-sm tracking-widest uppercase mb-12">
          Minhas Competências
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Web */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/30 transition-all group">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 mb-6 text-2xl group-hover:scale-110 transition">🎨</div>
            <h3 className="text-xl font-bold mb-4 text-white">Desenvolvimento Web</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> React</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Tailwind CSS</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> JavaScript</li>
            </ul>
          </div>

          {/* Card 2: Segurança */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-purple-500/30 transition-all group">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 mb-6 text-2xl group-hover:scale-110 transition">🛠️</div>
            <h3 className="text-xl font-bold mb-4 text-white">Cibersegurança</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Pentest</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Automação (Python/Bash)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Kali Linux</li>
            </ul>
          </div>

          {/* Card 3: Diferenciais */}
          <div className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 transition-all group">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-400 mb-6 text-2xl group-hover:scale-110 transition">🤝</div>
            <h3 className="text-xl font-bold mb-4 text-white">Diferenciais</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Aprendizado Rápido</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Mentalidade Analítica</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div> Inglês Técnico</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Seção de Projetos */}
      <section id="projetos" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Projetos em Destaque
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Projeto 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }} // Coloquei 0.1 aqui
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all shadow-2xl"
            >
              <div className="aspect-video bg-slate-800 flex flex-col items-center justify-center text-slate-700 group-hover:scale-105 transition-transform duration-500">
                <span className="text-5xl mb-2">📡</span>
                <div className="text-xs font-mono text-slate-500">wifi_scanner_v1.0</div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">Network Scan</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-medium">Security</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition">WiFi Scanner Tool</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Suspeita que seu vizinho esteja usando seu WiFi? Esse script em Bash para automação de auditoria de rede identifica subnets, mapeia portas e realiza fingerprinting de SO com Nmap.
                </p>
                <a 
                  href="https://github.com/murillohwg/scan-wifi" 
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center text-white bg-blue-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-blue-500 transition-all"
                >
                  Ver no GitHub
                </a>
              </div>
            </motion.div>

            {/* Projeto 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }} // Coloquei 0.3 aqui para o segundo aparecer depois
              className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-all shadow-2xl"
            >
              <div className="aspect-video bg-slate-800 flex flex-col items-center justify-center text-slate-700 group-hover:scale-105 transition-transform duration-500">
                <span className="text-5xl mb-2">📦</span>
                <div className="text-xs font-mono text-slate-500">backup_manager.py</div>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-medium">Python</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-medium">Automation</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition">Python Backup Script</h3>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Cansado de fazer backup manual toda semana ou mês? Aqui está um projeto de automação em Python para gestão de backups com timestamps dinâmicos e compressão de diretórios.
                </p>
                <a 
                  href="https://github.com/murillohwg/backup-script-python" 
                  target="_blank" rel="noopener noreferrer"
                  className="block text-center text-white bg-purple-600 px-4 py-3 rounded-xl text-sm font-bold hover:bg-purple-500 transition-all"
                >
                  Ver no GitHub
                </a>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <a 
              href="https://github.com/murillohwg?tab=repositories" 
              target="_blank" rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm border-b border-transparent hover:border-white"
            >
              Ver todos no GitHub <span>→</span>
            </a>
          </div>
        </div>
      </section>






   {/* --- FOOTER SECTIONS --- */}
      <footer className="bg-slate-900 border-t border-blue-500/20 pt-16 pb-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Título Centralizado */}
          <h2 className="text-white text-2xl font-bold text-center mb-8">
            🚀 Conecte-se Comigo
          </h2>
          
          {/* Grid de Botões Centralizado */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full">
            
            {/* Atalho GitHub */}
            <a href="https://github.com/murillohwg" target="_blank" rel="noopener noreferrer" 
               className="flex flex-col items-center p-6 bg-slate-800 border border-blue-500/20 rounded-xl hover:border-blue-400 hover:bg-slate-700 transition-all group">
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">💻</span>
              <span className="text-white font-semibold">GitHub</span>
            </a>

            {/* Atalho LinkedIn */}
            <a href="https://www.linkedin.com/in/murillo-henrico-wagner-gon%C3%A7alves-21ba50378/" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-slate-800 border border-blue-500/20 rounded-xl hover:border-blue-400 hover:bg-slate-700 transition-all group">
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">🤝</span>
              <span className="text-white font-semibold">LinkedIn</span>
            </a>

            {/* Atalho Tinkercad */}
            <a href="https://www.tinkercad.com/things/jcZStADIKW6-semaforo-projeto-sistemas-digitais" target="_blank" rel="noopener noreferrer"
               className="flex flex-col items-center p-6 bg-slate-800 border border-blue-500/20 rounded-xl hover:border-blue-400 hover:bg-slate-700 transition-all group">
              <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">⚙️</span>
              <span className="text-white font-semibold">Tinkercad</span>
            </a>

          </div>

          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-slate-800 w-full text-center text-slate-500 text-xs">
            © 2026 Murillo Henrico - Portfolio. Todos os direitos reservados.
          </div>
        </div>
      </footer>

{/* --- BOTÃO FLUTUANTE DO WHATSAPP (FIXO) --- */}
<a 
  href="https://wa.me/5511966029078" 
  target="_blank" 
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-[9999] bg-green-500 text-white p-3 md:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center gap-2"
>
  <span className="hidden md:inline font-bold text-sm">Bora conversar?</span>
  <span className="text-xl">💬</span>
</a>
    </div>
  );
}

export default App;
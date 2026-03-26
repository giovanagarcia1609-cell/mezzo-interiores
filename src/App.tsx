import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  CheckCircle2, 
  Hammer, 
  PenTool, 
  Layout, 
  ChevronDown,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Utility for asset paths (GitHub Pages compatibility)
const getAssetPath = (path: string) => {
  const base = import.meta.env.BASE_URL || '/';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5517996050210?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20projeto%20da%20Mezzo%20Interiores.%20"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 gold-gradient text-graphite p-3 md:p-4 md:px-6 rounded-full shadow-2xl flex items-center gap-3 hover:scale-105 transition-all duration-300 group"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <MessageCircle className="w-6 h-6" />
    <span className="hidden md:block font-semibold uppercase tracking-[0.2em] text-[10px] whitespace-nowrap">
      Solicitar Projeto
    </span>
    <motion.div
      className="absolute inset-0 rounded-full gold-gradient -z-10"
      animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
      transition={{ duration: 3, repeat: Infinity }}
    />
  </motion.a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Processo', href: '#processo' },
    { name: 'Localização', href: '#localizacao' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 py-4",
      isScrolled ? "glass-effect py-3 shadow-2xl" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="block group">
            <span className="text-2xl sm:text-3xl font-serif gold-text-gradient tracking-tight transition-all duration-300 group-hover:opacity-80">
              Mezzo Interiores
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] text-white/60 hover:text-mezzo-light transition-colors font-semibold"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#portfolio" 
            className="gold-gradient text-graphite px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold hover:scale-105 transition-all shadow-lg"
          >
            Ver Projetos
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-darkbrown flex flex-col items-center justify-center gap-10"
          >
            <button 
              className="absolute top-8 right-8 text-white/60 hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-2xl font-serif text-white hover:text-mezzo-light transition-colors tracking-widest"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#portfolio" 
              className="gold-gradient text-graphite px-12 py-5 rounded-full text-sm uppercase tracking-[0.3em] font-bold mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ver Projetos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={getAssetPath('assets/hero.jpg.jpeg')} 
        alt="Interior de Luxo Mezzo" 
        className="w-full h-full object-cover scale-105 animate-slow-zoom"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-darkbrown" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="text-white font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs mb-8 block font-medium">Marcenaria</span>
        <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
          Exclusividade em <br />
          <span className="italic font-light">cada detalhe.</span>
        </h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide"
        >
          Móveis sob medida de alto padrão com controle absoluto, previsibilidade total e a sofisticação que seu estilo de vida exige.
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
          <a 
            href="#portfolio" 
            className="gold-gradient text-graphite px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:scale-105 transition-all shadow-2xl flex items-center gap-4 group"
          >
            Explorar Portfólio
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
          <a 
            href="#servicos" 
            className="glass-effect text-white border border-white/10 px-12 py-5 rounded-full text-[11px] uppercase tracking-[0.3em] font-bold hover:bg-white/10 transition-all"
          >
            Nossa Expertise
          </a>
        </div>
      </motion.div>
    </div>

    <motion.div 
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-4"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <span className="text-[9px] uppercase tracking-[0.5em] font-medium">Scroll</span>
      <ChevronDown className="w-5 h-5" />
    </motion.div>
  </section>
);

const Services = () => {
  const services = [
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Marcenaria de Alto Padrão",
      desc: "Nossa prioridade máxima. Execução impecável em parceria com a Madeira Divina, garantindo o controle absoluto do design à montagem."
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Arquitetura de Interiores",
      desc: "Projetos detalhados que traduzem sua personalidade em espaços funcionais e luxuosos, com foco total na harmonia dos móveis."
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Gestão Técnica",
      desc: "Acompanhamento rigoroso para garantir que cada detalhe da marcenaria e acabamentos seja executado com perfeição industrial."
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-darkbrown relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-12">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="glass-effect p-12 rounded-[40px] border border-white/5 hover:border-mezzo/30 transition-all duration-500 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-mezzo-light mb-10 group-hover:gold-gradient group-hover:text-graphite transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-6 tracking-wide">{s.title}</h3>
              <p className="text-white/50 font-light leading-relaxed tracking-wide">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCarousel = ({ images, subtitle, title }: { images: string[], subtitle: string, title: string }) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);

  return (
    <div className="mb-12 md:mb-24 last:mb-0 relative w-full">
      <div className="relative aspect-[16/9] rounded-2xl md:rounded-3xl overflow-hidden lux-shadow group touch-pan-y">
        <motion.div 
          className="w-full h-full flex cursor-grab active:cursor-grabbing"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, info) => {
            if (info.offset.x < -50) next();
            if (info.offset.x > 50) prev();
          }}
        >
          {images.map((img, i) => (
            <div key={i} className="w-full h-full flex-shrink-0">
              <img 
                src={img} 
                alt={`${title} - ${i}`}
                className="w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows - Inside the image area */}
        <button 
          onClick={prev}
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:gold-gradient hover:text-graphite transition-all z-10 shadow-xl"
          aria-label="Anterior"
        >
          <ChevronRight className="w-4 h-4 md:w-8 md:h-8 rotate-180" />
        </button>
        <button 
          onClick={next}
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:gold-gradient hover:text-graphite transition-all z-10 shadow-xl"
          aria-label="Próximo"
        >
          <ChevronRight className="w-4 h-4 md:w-8 md:h-8" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-10">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={cn(
                "w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all",
                i === index ? "bg-white w-4 md:w-6" : "bg-white/40"
              )} 
            />
          ))}
        </div>
      </div>

      {/* Caption - Refined for mobile */}
      <div className="mt-4 md:mt-8 px-1">
        <span className="text-mezzo-light text-[8px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.6em] mb-1 md:mb-3 block font-semibold">
          {subtitle}
        </span>
        <h4 className="text-xl md:text-4xl font-serif text-white/90 leading-tight tracking-wide">
          {title}
        </h4>
      </div>
    </div>
  );
};

const VerticalVideo = () => (
  <div className="relative aspect-[9/16] w-full rounded-3xl overflow-hidden lux-shadow group border border-white/10 bg-graphite">
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="w-full h-full object-cover"
      poster={getAssetPath('assets/hero.jpg.jpeg')}
    >
      <source src={getAssetPath('assets/video-mezzo.mp4.mp4')} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
    <div className="absolute inset-0 bg-graphite/20 group-hover:bg-transparent transition-all duration-700" />
    <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 text-white z-10">
      <span className="text-[8px] md:text-[9px] uppercase tracking-[0.5em] md:tracking-[0.7em] mb-2 md:mb-4 block text-mezzo-light font-semibold">Experiência Mezzo</span>
      <h3 className="text-2xl md:text-3xl font-serif leading-tight tracking-wide">A arte de viver <br /><span className="italic font-light">com excelência.</span></h3>
    </div>
  </div>
);

const Portfolio = () => {
  const patioImages = [
    getAssetPath("assets/patio-1.jpg.jpeg"),
    getAssetPath("assets/patio-2.jpg.jpeg"),
    getAssetPath("assets/patio-3.jpg.jpeg"),
    getAssetPath("assets/patio-4.jpg.jpeg"),
    getAssetPath("assets/patio-5.jpg.jpeg"),
    getAssetPath("assets/patio-6.jpg.jpeg"),
    getAssetPath("assets/patio-7.jpg.jpeg"),
    getAssetPath("assets/patio-8.jpg.jpeg"),
    getAssetPath("assets/patio-9.jpg.jpeg"),
    getAssetPath("assets/patio-10.jpg.jpeg"),
    getAssetPath("assets/patio-11.jpg.jpeg"),
    getAssetPath("assets/patio-12.jpg.jpeg"),
    getAssetPath("assets/patio-13.jpg.jpeg"),
    getAssetPath("assets/patio-14.jpg.jpeg"),
    getAssetPath("assets/patio-15.jpg.jpeg"),
    getAssetPath("assets/patio-16.jpg.jpeg"),
    getAssetPath("assets/patio-17.jpg.jpeg"),
    getAssetPath("assets/patio-18.jpg.jpeg"),
    getAssetPath("assets/patio-19.jpg.jpeg")
  ];

  const alamedaImages = [
    getAssetPath("assets/alameda-1.jpg.jpeg"),
    getAssetPath("assets/alameda-2.jpg.jpeg"),
    getAssetPath("assets/alameda-3.jpg.jpeg"),
    getAssetPath("assets/alameda-4.jpg.jpeg"),
    getAssetPath("assets/alameda-5.jpg.jpeg"),
    getAssetPath("assets/alameda-6.jpg.jpeg"),
    getAssetPath("assets/alameda-7.jpeg"),
    getAssetPath("assets/alameda-8.jpg.jpeg"),
    getAssetPath("assets/alameda-9.jpg.jpeg"),
    getAssetPath("assets/alameda-10.jpg.jpeg"),
    getAssetPath("assets/alameda-11.jpg.jpeg"),
    getAssetPath("assets/alameda-12.jpg.jpeg"),
    getAssetPath("assets/alameda-13.jpg.jpeg"),
    getAssetPath("assets/alameda-14.jpg.jpeg"),
    getAssetPath("assets/alameda-15.jpg.jpeg"),
    getAssetPath("assets/alameda-16.jpg.jpeg"),
    getAssetPath("assets/alameda-17.jpg.jpeg")
  ];

  return (
    <section id="portfolio" className="py-32 bg-darkbrown relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 gold-text-gradient tracking-wide">Portfólio Selecionado</h2>
          <p className="text-white/60 text-lg font-light leading-relaxed tracking-wider">
            Uma curadoria de projetos que exemplificam nosso compromisso com a estética atemporal e a execução técnica impecável.
          </p>
        </div>

        {/* Grid Structure: Video on Left, Carousels on Right */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Column: Vertical Video (4/12) */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 z-10 mb-16 lg:mb-0 max-w-[450px] mx-auto lg:max-w-none w-full">
            <VerticalVideo />
          </div>

          {/* Right Column: Carousels (8/12) */}
          <div className="lg:col-span-8 space-y-16 lg:space-y-32">
            <ProjectCarousel 
              images={patioImages} 
              subtitle="SÃO JOSÉ DO RIO PRETO"
              title="Pátio Pitangueiras" 
            />
            
            <ProjectCarousel 
              images={alamedaImages} 
              subtitle="SÃO JOSÉ DO RIO PRETO"
              title="Alameda Iguatemi" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Concepção",
      desc: "Briefing detalhado para compreender seu estilo de vida e aspirações."
    },
    {
      num: "02",
      title: "Criação",
      desc: "Desenvolvimento técnico e estético com visualizações fotorrealistas."
    },
    {
      num: "03",
      title: "Curadoria",
      desc: "Seleção meticulosa de materiais, texturas e mobiliário exclusivo."
    },
    {
      num: "04",
      title: "Execução",
      desc: "Gestão completa da obra com foco em prazos e excelência técnica."
    }
  ];

  return (
    <section id="processo" className="py-32 bg-darkbrown/50 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-mezzo-light text-[10px] uppercase tracking-[0.8em] mb-6 block font-semibold">Metodologia</span>
          <h2 className="text-4xl md:text-6xl font-serif gold-text-gradient tracking-wide">Nossa Jornada Criativa</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group p-10 rounded-[40px] glass-effect border border-white/5 hover:border-mezzo/20 transition-all duration-500">
              <span className="text-6xl font-serif text-white/5 absolute top-6 right-10 group-hover:text-mezzo/10 transition-all duration-500">{step.num}</span>
              <h3 className="text-2xl font-serif text-white mb-6 tracking-wide">{step.title}</h3>
              <p className="text-white/40 font-light leading-relaxed tracking-wide">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => (
  <section id="localizacao" className="py-24 md:py-32 bg-darkbrown relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Text Content Block */}
        <div className="w-full lg:order-2">
          <div className="opacity-100">
            <span className="text-mezzo-light text-[9px] md:text-[10px] uppercase tracking-[0.5em] md:tracking-[0.7em] mb-6 md:mb-8 block font-semibold">Visite nosso Showroom</span>
            <h2 className="text-3xl md:text-6xl font-serif mb-8 md:mb-12 gold-text-gradient tracking-wide leading-tight">Onde a sofisticação se encontra.</h2>
            
            <div className="space-y-8 md:space-y-10">
              {/* Endereço */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-mezzo-light flex-shrink-0 border border-white/10 group-hover:gold-gradient group-hover:text-graphite transition-all duration-500">
                  <MapPin className="w-6 h-6 md:w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl md:text-2xl font-serif mb-2 text-white/90 tracking-wide">Plaza Avenida Shopping</h4>
                  <div className="text-white/60 font-light leading-relaxed tracking-wider text-sm md:text-[15px] break-words">
                    Av. José Munia, 4775 - São José do Rio Preto <br />
                    <span className="text-mezzo-light font-medium mt-4 block text-[10px] md:text-[12px] uppercase tracking-[0.25em] leading-relaxed">
                      Entrada principal da Brasilusa <br />
                      Ao acessar, a loja está localizada à esquerda, próxima à Jovem Pan e Estivanelli
                    </span>
                  </div>
                </div>
              </div>

              {/* Telefone */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-mezzo-light flex-shrink-0 border border-white/10 group-hover:gold-gradient group-hover:text-graphite transition-all duration-500">
                  <Phone className="w-6 h-6 md:w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl md:text-2xl font-serif mb-2 text-white/90 tracking-wide">Contato Direto</h4>
                  <p className="text-white/60 font-light tracking-wider text-sm md:text-[15px] break-words">(17) 99605-0210</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 md:gap-8 items-start group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center text-mezzo-light flex-shrink-0 border border-white/10 group-hover:gold-gradient group-hover:text-graphite transition-all duration-500">
                  <Mail className="w-6 h-6 md:w-7 h-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xl md:text-2xl font-serif mb-2 text-white/90 tracking-wide">E-mail</h4>
                  <p className="text-white/60 font-light tracking-wider text-sm md:text-[15px] break-all">mezzointeriores@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12 md:mt-16 flex gap-4 md:gap-6">
              <a 
                href="https://www.instagram.com/mezzointeriores/?__d=1%3F%2F" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:gold-gradient hover:text-graphite transition-all duration-500"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 md:w-6 h-6" />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=100067595775668" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:gold-gradient hover:text-graphite transition-all duration-500"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 md:w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Map Block */}
        <div className="w-full lg:order-1">
          <div className="rounded-[32px] md:rounded-[40px] overflow-hidden h-[300px] sm:h-[400px] md:h-[600px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-white/10 relative group w-full">
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-mezzo/20 transition-all duration-1000 pointer-events-none rounded-[32px] md:rounded-[40px] z-10" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.87844055273!2d-49.3888888!3d-20.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad7666666667%3A0x6666666666666666!2sPlaza%20Avenida%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Localização Mezzo Interiores"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Como funciona o primeiro contato?",
      a: "Iniciamos com uma reunião de briefing para entender suas necessidades, estilo e orçamento. A partir daí, elaboramos uma proposta personalizada."
    },
    {
      q: "Vocês atendem fora de São José do Rio Preto?",
      a: "Sim, atendemos projetos em todo o Brasil e também internacionalmente, com logística adaptada para cada região."
    },
    {
      q: "Qual o prazo médio de um projeto?",
      a: "O prazo varia conforme a complexidade, mas em média, a fase de projeto leva de 4 a 8 semanas até a aprovação final."
    }
  ];

  return (
    <section className="py-32 bg-darkbrown relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif gold-text-gradient tracking-wide">Dúvidas Frequentes</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-3xl glass-effect border border-white/5 overflow-hidden">
              <button 
                className="w-full px-8 py-8 flex items-center justify-between text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-xl font-serif text-white/90 group-hover:text-mezzo-light transition-colors">{faq.q}</span>
                <ChevronDown className={cn("w-6 h-6 text-mezzo-light transition-transform duration-500", openIndex === i && "rotate-180")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="px-8 pb-8 text-white/50 font-light leading-relaxed tracking-wide">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-24 bg-darkbrown border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-5">
          <h2 className="text-4xl font-serif gold-text-gradient mb-8 tracking-tight">Mezzo Interiores</h2>
          <p className="text-white/40 font-light leading-relaxed tracking-wider max-w-md mb-12">
            Elevando o padrão do design de interiores através de uma abordagem que une tradição, inovação e um olhar incansável pela perfeição.
          </p>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/mezzointeriores/?__d=1%3F%2F" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-mezzo-light transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100067595775668" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-mezzo-light transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
        <p className="text-white/20 text-[10px] uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Mezzo Interiores – Todos os direitos reservados.
        </p>
        <p className="text-mezzo-light/30 text-[9px] uppercase tracking-[0.5em] font-medium">
          Luxo & Sofisticação em cada detalhe
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Location />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

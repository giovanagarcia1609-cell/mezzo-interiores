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
        </div>

        <button 
          className="md:hidden text-mezzo"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-graphite border-t border-mezzo/10 shadow-2xl p-8 flex flex-col gap-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-serif text-white/80 hover:text-mezzo-light border-b border-white/5 pb-3 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen min-h-[800px] flex flex-col justify-center pt-24 md:pt-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={getAssetPath('assets/hero.jpg.jpeg')} 
        alt="Interior de luxo" 
        className="w-full h-full object-cover scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-[120px] text-white font-serif leading-[1.05] mb-8 tracking-[-0.03em]"
        >
          Exclusividade em <br />
          <span className="italic font-light gold-text-gradient">cada detalhe.</span>
        </motion.h1>

        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-mezzo-light/80 font-sans uppercase tracking-[0.4em] text-[10px] md:text-xs mb-10 block font-medium"
        >
          Arquitetura de Interiores & Marcenaria
        </motion.span>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 font-light max-w-xl mb-14 leading-relaxed tracking-wide"
        >
          Projetos de alto padrão com controle absoluto, previsibilidade total e a sofisticação que seu estilo de vida exige.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a 
            href="https://wa.me/5517996050210?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20projeto%20da%20Mezzo%20Interiores.%20"
            className="inline-flex items-center justify-center gap-4 gold-gradient text-graphite px-12 py-6 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:scale-105 transition-all shadow-2xl group"
          >
            Solicitar Projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Marcenaria de Alto Padrão",
      description: "Nossa prioridade máxima. Execução impecável em parceria com a Madeira Divina, garantindo o controle absoluto do design à montagem.",
      icon: Hammer,
      highlight: true
    },
    {
      title: "Arquitetura de Interiores",
      description: "Consultoria, planejamento e projetos detalhados que traduzem sua personalidade em espaços funcionais e luxuosos.",
      icon: Layout,
      highlight: false
    },
    {
      title: "Acompanhamento de Obras",
      description: "Gestão técnica rigorosa para evitar erros caros e garantir que cada detalhe do projeto seja executado com perfeição.",
      icon: PenTool,
      highlight: false
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-graphite relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 gold-text-gradient tracking-wide">Excelência em Serviços</h2>
          <p className="text-white/60 leading-relaxed text-lg font-light tracking-wider">
            Oferecemos uma experiência completa de design e execução, focada em segurança, controle e resultados extraordinários.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "p-8 md:p-12 rounded-3xl transition-all duration-700 group relative overflow-hidden",
                service.highlight 
                  ? "bg-darkbrown border border-mezzo/20 shadow-2xl md:scale-105 z-10" 
                  : "bg-white/5 hover:bg-white/10 border border-white/5 hover:border-mezzo/20"
              )}
            >
              <div className={cn(
                "w-20 h-20 rounded-2xl flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3",
                service.highlight ? "gold-gradient text-graphite" : "bg-white/5 text-mezzo-light"
              )}>
                <service.icon className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-serif mb-6 text-white group-hover:text-mezzo-light transition-colors tracking-wide">{service.title}</h3>
              <p className={cn(
                "leading-relaxed mb-10 font-light text-[15px] tracking-wider",
                service.highlight ? "text-white/70" : "text-white/50"
              )}>
                {service.description}
              </p>
              <a 
                href="https://wa.me/5517996050210?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20projeto%20da%20Mezzo%20Interiores.%20"
                className={cn(
                  "inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] font-bold group/btn",
                  service.highlight ? "text-mezzo-light" : "text-mezzo hover:text-mezzo-light transition-colors"
                )}
              >
                Saiba Mais 
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCarousel = ({ images, location, title }: { images: string[], location: string, title: string }) => {
  const [index, setIndex] = useState(0);
  const next = useCallback(() => setIndex((prev) => (prev + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + images.length) % images.length), [images.length]);

  return (
    <div className="mb-16 md:mb-24 last:mb-0 relative w-full">
      <div className="relative aspect-[16/9] rounded-3xl overflow-hidden lux-shadow group touch-pan-y">
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

        <button 
          onClick={prev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:gold-gradient hover:text-graphite transition-all z-10 shadow-xl"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8 rotate-180" />
        </button>
        <button 
          onClick={next}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:gold-gradient hover:text-graphite transition-all z-10 shadow-xl"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2 z-10">
          {images.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                i === index ? "bg-white w-6" : "bg-white/40"
              )} 
            />
          ))}
        </div>
      </div>

      <div className="mt-6 md:mt-8 px-2">
        <span className="text-mezzo-light text-[9px] md:text-[10px] uppercase tracking-[0.6em] mb-3 md:mb-4 block font-semibold">{location}</span>
        <h4 className="text-2xl md:text-5xl font-serif text-white/90 leading-tight tracking-wide">{title}</h4>
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
    <div className="absolute bottom-10 left-10 right-10 text-white z-10">
      <span className="text-[9px] uppercase tracking-[0.7em] mb-4 block text-mezzo-light font-semibold">Experiência Mezzo</span>
      <h3 className="text-3xl font-serif leading-tight tracking-wide">A arte de viver <br /><span className="italic font-light">com excelência.</span></h3>
    </div>
  </div>
);

const Portfolio = () => {
  const patioImages = [
    getAssetPath("assets/patio-1.jpg.jpeg"), getAssetPath("assets/patio-2.jpg.jpeg"), getAssetPath("assets/patio-3.jpg.jpeg"),
    getAssetPath("assets/patio-4.jpg.jpeg"), getAssetPath("assets/patio-5.jpg.jpeg"), getAssetPath("assets/patio-6.jpg.jpeg"),
    getAssetPath("assets/patio-7.jpg.jpeg"), getAssetPath("assets/patio-8.jpg.jpeg"), getAssetPath("assets/patio-9.jpg.jpeg"),
    getAssetPath("assets/patio-10.jpg.jpeg"), getAssetPath("assets/patio-11.jpg.jpeg"), getAssetPath("assets/patio-12.jpg.jpeg"),
    getAssetPath("assets/patio-13.jpg.jpeg"), getAssetPath("assets/patio-14.jpg.jpeg"), getAssetPath("assets/patio-15.jpg.jpeg"),
    getAssetPath("assets/patio-16.jpg.jpeg"), getAssetPath("assets/patio-17.jpg.jpeg"), getAssetPath("assets/patio-18.jpg.jpeg"),
    getAssetPath("assets/patio-19.jpg.jpeg")
  ];

  const alamedaImages = [
    getAssetPath("assets/alameda-1.jpg.jpeg"), getAssetPath("assets/alameda-2.jpg.jpeg"), getAssetPath("assets/alameda-3.jpg.jpeg"),
    getAssetPath("assets/alameda-4.jpg.jpeg"), getAssetPath("assets/alameda-5.jpg.jpeg"), getAssetPath("assets/alameda-6.jpg.jpeg"),
    getAssetPath("assets/alameda-7.jpeg"), getAssetPath("assets/alameda-8.jpg.jpeg"), getAssetPath("assets/alameda-9.jpg.jpeg"),
    getAssetPath("assets/alameda-10.jpg.jpeg"), getAssetPath("assets/alameda-11.jpg.jpeg"), getAssetPath("assets/alameda-12.jpg.jpeg"),
    getAssetPath("assets/alameda-13.jpg.jpeg"), getAssetPath("assets/alameda-14.jpg.jpeg"), getAssetPath("assets/alameda-15.jpg.jpeg"),
    getAssetPath("assets/alameda-16.jpg.jpeg"), getAssetPath("assets/alameda-17.jpg.jpeg")
  ];

  return (
    <section id="portfolio" className="py-32 bg-darkbrown relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 gold-text-gradient tracking-wide">Portfólio Selecionado</h2>
          <p className="text-white/60 text-lg font-light leading-relaxed tracking-wider">
            Uma curadoria de projetos que exemplificam nosso compromisso com a estética atemporal e a execução técnica impecável.
          </p>
        </div>

        {/* Layout Flex para garantir alinhamento centralizado e fixo do vídeo */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Coluna do Vídeo: Largura fixa no desktop */}
          <div className="w-full lg:w-[380px] lg:sticky lg:top-32 z-10 mb-12 lg:mb-0 flex-shrink-0">
            <VerticalVideo />
          </div>

          {/* Coluna das Fotos: Ocupa o restante do espaço */}
          <div className="flex-1 space-y-20 lg:space-y-32 w-full">
            <ProjectCarousel images={patioImages} location="São José do Rio Preto" title="Pátio Pitangueiras" />
            <ProjectCarousel images={alamedaImages} location="São José do Rio Preto" title="Alameda Iguatemi" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Estudo & Detalhamento", desc: "Análise profunda de necessidades e criação do projeto técnico detalhado." },
    { title: "Medição Técnica", desc: "Verificação milimétrica na obra para garantir o ajuste perfeito da marcenaria." },
    { title: "Validação & Assinatura", desc: "Apresentação completa e validação final com o cliente antes da execução." },
    { title: "Planos de Corte", desc: "Geração de documentação técnica precisa para a execução na Madeira Divina." },
    { title: "Acompanhamento Técnico", desc: "Supervisão de elétrica, hidráulica e acabamentos em sintonia com o projeto." },
    { title: "Gestão Semanal", desc: "Acompanhamento presencial e relatórios semanais para sua total tranquilidade." }
  ];

  return (
    <section id="processo" className="py-32 bg-graphite relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif mb-10 gold-text-gradient tracking-wide">Nosso Processo</h2>
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col gap-4 group">
                  <div className="text-mezzo-light font-serif text-3xl opacity-20">0{index + 1}</div>
                  <h4 className="text-xl font-serif text-white/90">{step.title}</h4>
                  <p className="text-white/50 text-[13px] leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative z-10 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl">
            <h3 className="text-3xl font-serif mb-10 gold-text-gradient text-center">Por que a Mezzo?</h3>
            <ul className="space-y-6">
              {["Zero improviso na obra", "Marcenaria com precisão industrial", "Acompanhamento técnico especializado", "Transparência total", "Validação prévia"].map((item) => (
                <li key={item} className="flex items-center gap-5">
                  <div className="w-6 h-6 rounded-full gold-gradient flex items-center justify-center text-graphite"><CheckCircle2 className="w-4 h-4" /></div>
                  <span className="text-white/70 text-[15px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Location = () => (
  <section id="localizacao" className="py-24 md:py-32 bg-darkbrown relative overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        <div className="w-full lg:order-2">
          <span className="text-mezzo-light text-[9px] md:text-[10px] uppercase tracking-[0.5em] mb-6 block font-semibold">Visite nosso Showroom</span>
          <h2 className="text-3xl md:text-6xl font-serif mb-8 gold-text-gradient tracking-wide">Onde a sofisticação se encontra.</h2>
          <div className="space-y-8">
            <div className="flex gap-4 md:gap-8 items-start">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-mezzo-light flex-shrink-0 border border-white/10"><MapPin className="w-6 h-6" /></div>
              <div>
                <h4 className="text-xl md:text-2xl font-serif mb-2 text-white/90">Plaza Avenida Shopping</h4>
                <p className="text-white/60 font-light text-sm md:text-[15px]">Av. José Munia, 4775 - São José do Rio Preto</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:order-1 h-[400px] md:h-[600px] rounded-[40px] overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.87844055273!2d-49.3888888!3d-20.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad7666666667%3A0x6666666666666666!2sPlaza%20Avenida%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
            width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Mapa"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "Como funciona o processo de projeto?", a: "Iniciamos com um estudo detalhado de suas necessidades, seguido por um projeto técnico milimétrico." },
    { q: "A Mezzo acompanha a obra?", a: "Sim. Oferecemos acompanhamento técnico rigoroso para garantir a fidelidade ao projeto." },
    { q: "A marcenaria é personalizada?", a: "Totalmente. Nossa marcenaria é de alto padrão e executada em parceria estratégica com a Madeira Divina." }
  ];

  return (
    <section className="py-32 bg-graphite relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-6xl font-serif mb-16 text-center gold-text-gradient">Dúvidas Frequentes</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/5 rounded-3xl border border-white/5 overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full p-8 text-left flex justify-between items-center">
                <span className="font-serif text-2xl text-white/90">{faq.q}</span>
                <ChevronDown className={cn("w-5 h-5 transition-transform", openIndex === index && "rotate-180")} />
              </button>
              {openIndex === index && <div className="p-8 pt-0 text-white/60 font-light text-lg">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-graphite pt-32 pb-12 border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-24">
        <div className="md:col-span-2">
          <span className="text-3xl font-serif gold-text-gradient">Mezzo Interiores</span>
          <p className="text-white/40 mt-8 max-w-sm text-sm">Arquitetura de interiores de alto padrão liderada por Lucineia. Exclusividade e sofisticação em São José do Rio Preto.</p>
        </div>
        <div>
          <h5 className="font-serif text-2xl mb-8 gold-text-gradient">Links</h5>
          <ul className="space-y-4 text-white/40 text-[10px] uppercase tracking-widest">
            <li><a href="#home">Início</a></li>
            <li><a href="#portfolio">Portfólio</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-serif text-2xl mb-8 gold-text-gradient">Redes</h5>
          <div className="flex gap-6">
            <a href="https://www.instagram.com/mezzointeriores/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:gold-gradient transition-all"><Instagram className="w-6 h-6" /></a>
            <a href="https://www.facebook.com/" target="_blank" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:gold-gradient transition-all"><Facebook className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
      <div className="pt-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] uppercase tracking-widest">© {new Date().getFullYear()} Mezzo Interiores – Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="relative overflow-x-hidden bg-graphite">
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

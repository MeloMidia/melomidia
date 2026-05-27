"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ElementType } from "react";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock,
  ClipboardList,
  Clock3,
  Eye,
  FileText,
  HomeIcon,
  Menu,
  MessageSquare,
  Package,
  PanelLeft,
  SearchX,
  Send,
  Shield,
  ShoppingCart,
  Sparkles,
  Tag,
  TrendingUp,
  WalletCards,
  XCircle,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Serviços", href: "#operacao-digital" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
];
const sidebarItems = ["Home", "Vendas", "Analytics", "Produtos"];

const painPoints = [
  {
    title: "Estoque acumulando poeira",
    text: "Peças boas ficam paradas na prateleira enquanto o Brasil inteiro procura por elas online.",
    metric: "R$ parado",
    icon: Boxes,
  },
  {
    title: "Anúncios que não vendem",
    text: "Fotos amadoras e fichas técnicas incompletas destroem suas chances de clique.",
    metric: "baixo CTR",
    icon: ClipboardList,
  },
  {
    title: "Invisibilidade no Mercado Livre",
    text: "Sem a estratégia certa, seus produtos desaparecem no mar de concorrentes.",
    metric: "- alcance",
    icon: SearchX,
  },
  {
    title: "A rotina te engole",
    text: "O balcão toma todo o tempo e cadastrar peças online sempre fica para amanhã.",
    metric: "fila alta",
    icon: Clock3,
  },
  {
    title: "Dúvidas que travam a venda",
    text: "Sem especificar o ano/modelo/aplicação corretos, o cliente foge para o concorrente.",
    metric: "- conversao",
    icon: FileText,
  },
  {
    title: "Limitado ao comércio local",
    text: "Você vende apenas para a sua cidade, enquanto seus concorrentes despacham para o país inteiro.",
    metric: "BR ativo",
    icon: BarChart3,
  },
];

const diagnosticRows = [
  { label: "Anuncios sem trafego", value: "37", tone: "danger" },
  { label: "Pecas nao cadastradas", value: "184", tone: "warning" },
  { label: "Perda estimada no mes", value: "R$ 42k", tone: "danger" },
];

const operationSteps = [
  {
    title: "Análise e Estruturação",
    text: "Recebemos seus dados e organizamos todo o seu catálogo de forma inteligente e pronta para escalar.",
  },
  {
    title: "Títulos Magnéticos",
    text: "Criamos títulos baseados em como o cliente realmente busca a peça no Mercado Livre.",
  },
  {
    title: "Imagens Padronizadas",
    text: "Editamos fotos profissionais que geram confiança imediata no comprador e evitam cliques perdidos.",
  },
  {
    title: "Fichas Técnicas Impecáveis",
    text: "Garantimos que códigos, aplicação e compatibilidade estejam 100% corretos para evitar devoluções.",
  },
  {
    title: "Vendas para todo o Brasil",
    text: "Expandimos o seu alcance local para capturar a demanda nacional em todas as regiões.",
  },
  {
    title: "Monitoramento Contínuo",
    text: "Analisamos as métricas diariamente para encontrar novas oportunidades e otimizar o lucro da sua loja.",
  },
];
const socialProofStats = [
  {
    value: 130,
    suffix: "+",
    label: "Clientes",
    description: "lojas atendidas com opera\u00e7\u00e3o orientada para Mercado Livre",
  },
  {
    value: 1,
    prefix: "+",
    suffix: "M",
    label: "vendidos no ML",
    description: "em volume movimentado por opera\u00e7\u00f5es digitais estruturadas",
  },
  {
    value: 4,
    suffix: "+",
    label: "anos no mercado",
    description: "acompanhando performance, an\u00fancios e crescimento de lojas",
  },
];
const metrics = [
  { label: "Vendas brutas", value: "R$ 265.798", change: "+10.000%", trend: "up", icon: CircleDollarSign },
  { label: "Unidades vendidas", value: "5.643", change: "+10.000%", trend: "up", icon: Package },
  { label: "Preco medio por unidade", value: "R$ 47,10", change: "-27,4%", trend: "down", icon: Tag },
  { label: "Visitas", value: "49.512", change: "+2.658%", trend: "up", icon: Eye },
  { label: "Quantidade de vendas", value: "4.626", change: "+10.000%", trend: "up", icon: ShoppingCart },
  { label: "Conversao", value: "9,3%", change: "+8,6 pts", trend: "up", icon: TrendingUp },
  { label: "Preco medio por venda", value: "R$ 57,46", change: "-68,7%", trend: "down", icon: WalletCards },
  { label: "Vendas canceladas", value: "163", change: "+3.975%", trend: "down", icon: XCircle },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#030304] text-white">
      <section className="relative isolate min-h-screen px-4 pb-20 pt-3 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(42,73,126,0.28),transparent_34%),radial-gradient(circle_at_50%_64%,rgba(255,196,80,0.08),transparent_28%),linear-gradient(180deg,#111318_0%,#030304_44%,#020203_100%)]" />
        <div className="absolute left-0 top-0 -z-10 h-[640px] w-[42vw] bg-[linear-gradient(90deg,rgba(43,118,255,0.28),transparent)] blur-3xl" />
        <div className="absolute right-0 top-6 -z-10 h-[620px] w-[40vw] bg-[linear-gradient(270deg,rgba(246,192,82,0.2),transparent)] blur-3xl" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_0%,rgba(0,0,0,0.68)_44%,transparent_76%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-[#030304] via-[#030304]/92 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto hidden h-11 max-w-5xl items-center rounded-md border border-white/10 bg-white/[0.055] px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:flex"
        >
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-white/38" />
            <span className="size-2.5 rounded-full bg-white/38" />
            <span className="size-2.5 rounded-full bg-white/38" />
          </div>
          <p className="flex-1 text-center text-xs font-medium text-white/48">
            Especialistas em Mercado Livre para Autopeças.
          </p>
        </motion.div>

        <header className="mx-auto mt-6 flex h-14 max-w-5xl items-center justify-between rounded-md border border-white/5 bg-black/10 px-1 backdrop-blur-md sm:mt-8">
          <a className="flex items-center gap-2 px-3" href="#">
            <img src="/logo.png" alt="Melo Midia" className="h-10 w-10 rounded-full object-cover" />
          </a>

          <nav className="hidden items-center gap-9 text-sm font-semibold text-white/74 md:flex">
            {navItems.map((item) => (
              <a key={item.label} className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
            <button className="flex items-center gap-2 transition hover:text-white" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>
              Auto peças <ChevronDown className="size-3.5" />
            </button>
          </nav>

          <div className="hidden md:block">
            <Button variant="secondary" className="h-10 rounded-md px-5" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>
              Falar com especialista
            </Button>
          </div>
          <Button variant="secondary" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="size-5" />
          </Button>
        </header>

        <div className="mx-auto flex max-w-6xl flex-col items-center pt-24 text-center sm:pt-28 lg:pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="max-w-5xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-white drop-shadow-[0_7px_0_rgba(255,255,255,0.22)] sm:text-7xl lg:text-[86px]"
          >
            Acelere suas vendas de{" "}
            <span className="font-script inline-block px-1 text-[1.08em] font-medium italic tracking-[-0.07em] text-white/95 drop-shadow-[0_5px_0_rgba(255,255,255,0.14)]">
              autopeças
            </span>{" "}
            no Mercado Livre sem dor de cabeça.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.26, ease: "easeOut" }}
            className="mt-12 flex flex-col items-center gap-5"
          >
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="h-11 rounded-md px-6" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>Quero vender para todo o Brasil</Button>
              <Button variant="secondary" className="h-11 rounded-md px-6" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>
                Falar com um especialista <ArrowRight className="size-4" />
              </Button>
            </div>
            <p className="mt-2 max-w-2xl text-center text-sm font-medium leading-relaxed text-white/60">
              Transforme seu estoque parado em uma máquina de vendas nacional. Nós assumimos toda a sua operação digital para você focar no que faz de melhor: administrar o seu negócio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 58, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.38, ease: "easeOut" }}
            className="relative mt-16 w-full max-w-[1074px] sm:mt-20"
          >
            <div className="absolute -inset-x-12 top-20 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
            <DashboardMockup />
          </motion.div>
        </div>
      </section>
    
      <SalesLeakSection />
    
      <DigitalOperationSection />
      <SocialProofSection />
      <FinalCTASection />
    </main>
  );
}

function SalesLeakSection() {
  return (
    <section id="sobre" className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8">
      <AnimatedSalesBackground />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <AlertTriangle className="size-3.5 text-[#f4c95d]" />
            Onde você está perdendo dinheiro
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[70px]">
            Sua autopeça está{" "}
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="font-script inline-block bg-[linear-gradient(110deg,#ffffff_0%,#f4c95d_34%,#ef6253_62%,#ffffff_100%)] bg-[length:220%_100%] bg-clip-text px-1 italic text-transparent drop-shadow-[0_0_34px_rgba(244,201,93,0.18)]"
            >
              perdendo dinheiro
            </motion.span>{" "}
            todos os dias.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/52 sm:text-lg">
            O problema não é o seu preço. A venda escapa porque a peça certa não é encontrada, o anúncio não gera confiança ou a falta de tempo impede você de anunciar.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {painPoints.map((item, index) => (
              <ProblemCard key={item.title} item={item} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: "easeOut" }}
            className="min-h-full"
          >
            <DiagnosticPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AnimatedSalesBackground() {
  const signalDots = [
    { left: "12%", top: "18%", delay: 0, size: "size-1.5" },
    { left: "31%", top: "68%", delay: 0.8, size: "size-1" },
    { left: "56%", top: "24%", delay: 1.4, size: "size-1.5" },
    { left: "78%", top: "58%", delay: 0.35, size: "size-1" },
    { left: "88%", top: "30%", delay: 1.1, size: "size-1.5" },
  ];

  const scanLines = ["18%", "42%", "66%"];

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#030304_0%,#07080b_46%,#030304_100%)]" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1], x: [0, 26, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-20 h-[460px] w-[78vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(244,201,93,0.18),transparent_60%)] blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.4, 0.18], scale: [1, 1.12, 1], x: [0, -34, 0], y: [0, 18, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-12%] top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(239,98,83,0.16),transparent_62%)] blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 top-10 h-[560px] bg-[linear-gradient(135deg,rgba(255,255,255,0.038)_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_at_center,black_0%,rgba(0,0,0,0.48)_48%,transparent_76%)]"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-45%", "145%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.2 }}
        className="absolute top-0 h-full w-1/3 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.055),transparent)] blur-sm"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      {scanLines.map((top, index) => (
        <motion.div
          key={top}
          aria-hidden="true"
          animate={{ opacity: [0, 0.5, 0], scaleX: [0.45, 1, 0.45] }}
          transition={{ duration: 4.8, delay: index * 1.15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/2 h-px w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#f4c95d]/35 to-transparent"
          style={{ top }}
        />
      ))}

      {signalDots.map((dot) => (
        <motion.span
          key={`${dot.left}-${dot.top}`}
          aria-hidden="true"
          animate={{ opacity: [0.18, 0.85, 0.18], scale: [1, 1.8, 1] }}
          transition={{ duration: 3.6, delay: dot.delay, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute rounded-full bg-[#f4c95d] shadow-[0_0_24px_rgba(244,201,93,0.55)] ${dot.size}`}
          style={{ left: dot.left, top: dot.top }}
        />
      ))}

      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], opacity: [0.08, 0.2, 0.08] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[7%] top-[22%] hidden rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/45 shadow-[0_18px_60px_rgba(0,0,0,0.35)] sm:block"
      >
        busca sem clique
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0], opacity: [0.1, 0.24, 0.1] }}
        transition={{ duration: 7.2, delay: 0.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[18%] right-[9%] hidden rounded-md border border-red-300/15 bg-red-500/[0.055] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-red-100/45 shadow-[0_18px_60px_rgba(0,0,0,0.35)] lg:block"
      >
        venda escapando
      </motion.div>
    </div>
  );
}
function ProblemCard({ item, index }: { item: PainPoint; index: number }) {
  const Icon = item.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, delay: index * 0.055, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-lg border border-white/10 bg-[#0a0b0f]/86 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.06)]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent opacity-70" />
      <div className="absolute -right-14 -top-16 size-32 rounded-full bg-[#f4c95d]/[0.07] blur-2xl transition-opacity group-hover:opacity-80" />

      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-md border border-white/10 bg-white/[0.055] text-[#f4c95d] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
          <Icon className="size-5" />
        </span>
        <span className="rounded-md border border-red-400/15 bg-red-500/[0.07] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-red-200/76">
          {item.metric}
        </span>
      </div>

      <h3 className="text-xl font-semibold tracking-[-0.045em] text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-white/50">{item.text}</p>
    </motion.article>
  );
}

function DiagnosticPanel() {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0b0c10] p-5 shadow-[0_36px_120px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(244,201,93,0.12),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.075),transparent_34%)]" />
      <div className="relative flex items-center justify-between border-b border-white/10 pb-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">painel da loja</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.055em] text-white">Sinais que travam crescimento</h3>
        </div>
        <span className="hidden rounded-md border border-[#f4c95d]/20 bg-[#f4c95d]/10 px-3 py-1.5 text-xs font-semibold text-[#f4c95d] sm:inline-flex">
          Ao vivo
        </span>
      </div>

      <div className="relative mt-6 space-y-3">
        {diagnosticRows.map((row) => (
          <div
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-lg border border-white/10 bg-black/24 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
          >
            <div>
              <div className="text-sm font-medium text-white/78">{row.label}</div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.08]">
                <div
                  className={cn(
                    "h-full rounded-full",
                    row.tone === "danger" ? "w-[76%] bg-red-400" : "w-[58%] bg-[#f4c95d]",
                  )}
                />
              </div>
            </div>
            <div className={cn("text-2xl font-semibold tracking-[-0.05em]", row.tone === "danger" ? "text-red-300" : "text-[#f4c95d]")}>
              {row.value}
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
          <div className="text-[11px] uppercase tracking-[0.16em] text-white/34">visibilidade</div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-4xl font-semibold tracking-[-0.06em] text-white">18%</span>
            <span className="pb-1 text-xs font-medium text-red-300">abaixo</span>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
          <div className="text-[11px] uppercase tracking-[0.16em] text-white/34">cadastro</div>
          <div className="mt-3 flex items-end gap-2">
            <span className="text-4xl font-semibold tracking-[-0.06em] text-white">6h</span>
            <span className="pb-1 text-xs font-medium text-white/42">por lote</span>
          </div>
        </div>
      </div>

      <div className="relative mt-auto pt-6">
        <Button className="h-11 w-full rounded-md" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>
          Quero encontrar essas perdas <ArrowRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}

function DigitalOperationSection() {
  return (
    <section id="operacao-digital" className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#030304_0%,#08090d_42%,#030304_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-1/2 top-24 -z-10 h-[520px] w-[76vw] -translate-x-1/2 bg-[radial-gradient(circle,rgba(244,201,93,0.12),transparent_62%)] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-5xl"
        >
          <div className="mb-6 flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Sparkles className="size-3.5 text-[#f4c95d]" />
            Operação digital completa
          </div>
          <h2 className="max-w-5xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px]">
            Nós assumimos o volante da sua operação no Mercado Livre.
          </h2>
          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/52 sm:text-lg">
            Da criação do anúncio perfeito até a análise de métricas, entregamos um fluxo validado e contínuo para escalar seu faturamento.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute bottom-8 left-[19px] top-8 w-px bg-gradient-to-b from-[#f4c95d]/70 via-white/14 to-transparent" />
            <div className="space-y-8">
              {operationSteps.map((step, index) => (
                <OperationStep key={step.title} step={step} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0c10]/90 p-6 shadow-[0_36px_120px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(244,201,93,0.12),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.055),transparent_36%)]" />
            <div className="relative">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">como funciona</p>
              <h3 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.055em] text-white sm:text-4xl">
                Um fluxo completo para transformar peças em anúncios que vendem.
              </h3>
              <div className="mt-8 space-y-4">
                {[
                  "Recebemos seus dados e organizamos todo o seu catálogo de forma inteligente.",
                  "Criamos títulos magnéticos, fotos padronizadas e descrições impecáveis.",
                  "Monitoramos os resultados diariamente para encontrar novas oportunidades de lucro.",
                ].map((item, index) => (
                  <div key={item} className="flex gap-4 rounded-lg border border-white/10 bg-black/20 p-4">
                    <span className="grid size-8 shrink-0 place-items-center rounded-md bg-[#f4c95d] text-xs font-bold text-black">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-6 text-white/64">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <Button className="h-11 rounded-md px-5" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>
                  Quero estruturar minha operação agora <ArrowRight className="size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
function OperationStep({ step, index }: { step: OperationStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: "easeOut" }}
      className="relative grid grid-cols-[40px_1fr] gap-5"
    >
      <div className="relative z-10 grid size-10 place-items-center rounded-full border border-[#f4c95d]/35 bg-[#0b0c10] text-xs font-semibold text-[#f4c95d] shadow-[0_0_32px_rgba(244,201,93,0.16),inset_0_1px_0_rgba(255,255,255,0.08)]">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="pb-2">
        <h3 className="text-2xl font-semibold tracking-[-0.05em] text-white">{step.title}</h3>
        <p className="mt-2 max-w-xl text-sm leading-6 text-white/52 sm:text-base">{step.text}</p>
      </div>
    </motion.div>
  );
}

function SocialProofSection() {
  return (
    <section id="resultados" className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#030304_0%,#07080b_50%,#030304_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-1/2 top-12 -z-10 h-[440px] w-[80vw] -translate-x-1/2 bg-[radial-gradient(circle,rgba(244,201,93,0.12),transparent_60%)] blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-5xl text-center"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-md border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <TrendingUp className="size-3.5 text-[#f4c95d]" />
            prova social
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[72px]">
            Autopeças que saíram do estoque parado para o topo das buscas.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, delay: 0.08, ease: "easeOut" }}
          className="relative mt-14 overflow-hidden rounded-lg border border-white/10 bg-[#0b0c10]/92 shadow-[0_36px_120px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.08)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(244,201,93,0.14),transparent_32%),radial-gradient(circle_at_82%_48%,rgba(47,109,255,0.1),transparent_32%),linear-gradient(145deg,rgba(255,255,255,0.055),transparent_40%)]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f4c95d]/45 to-transparent" />

          <div className="relative grid divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {socialProofStats.map((stat, index) => (
              <SocialProofCounter key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialProofCounter({ stat, index }: { stat: SocialProofStat; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.42 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let animationFrame = 0;
    const duration = 1500 + index * 220;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(stat.value * eased);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, index, stat.value]);

  const displayValue = stat.value >= 100 ? Math.round(count).toLocaleString("pt-BR") : count.toFixed(0);

  return (
    <div ref={ref} className="relative min-h-[250px] p-6 sm:p-8 lg:p-10">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(244,201,93,0.08),transparent_58%)]" />
      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/32">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-white/16 to-transparent" />
        </div>

        <div>
          <div className="flex items-end gap-1 text-[64px] font-semibold leading-none tracking-[-0.08em] text-white sm:text-[82px]">
            {stat.prefix && <span className="pb-3 text-[0.46em] text-[#f4c95d]">{stat.prefix}</span>}
            <span className="bg-[linear-gradient(110deg,#ffffff_0%,#f4c95d_45%,#ffffff_100%)] bg-clip-text text-transparent drop-shadow-[0_0_34px_rgba(244,201,93,0.14)]">
              {displayValue}
            </span>
            {stat.suffix && <span className="pb-3 text-[0.46em] text-[#f4c95d]">{stat.suffix}</span>}
          </div>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-white">{stat.label}</h3>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/48">{stat.description}</p>
        </div>
      </div>
    </div>
  );
}
function DashboardMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0.5);
  const [mouseY, setMouseY] = useState(0.5);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalized coordinates from -0.5 to 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    // Smooth out rotation (max 12 degrees tilt)
    setRotateX(-y * 12);
    setRotateY(x * 12);
    setMouseX(x + 0.5);
    setMouseY(y + 0.5);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setMouseX(0.5);
    setMouseY(0.5);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full cursor-pointer select-none"
      style={{
        perspective: "1500px",
      }}
    >
      {/* Background radial glow */}
      <motion.div
        className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-r from-amber-500/10 via-[#2f6dff]/15 to-red-500/10 opacity-70 blur-3xl"
        animate={isHovered ? {
          x: (mouseX - 0.5) * 40,
          y: (mouseY - 0.5) * 40,
          scale: 1.1,
        } : {
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 25 }}
      />

      {/* Main Mockup Card */}
      <motion.div
        className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#050609]/95 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]"
        style={{
          transformStyle: "preserve-3d",
        }}
        animate={isHovered ? {
          rotateX: rotateX,
          rotateY: rotateY,
          scale: 1.02,
        } : {
          rotateX: [0, 1.5, 0, -1.5, 0],
          rotateY: [0, -2, 0, 2, 0],
          y: [0, -8, 0],
          scale: 1,
        }}
        transition={isHovered ? {
          type: "spring",
          stiffness: 250,
          damping: 25,
        } : {
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateX: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        {/* Glass sheen overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-30"
          style={{
            background: `radial-gradient(circle 350px at ${mouseX * 100}% ${mouseY * 100}%, rgba(255, 255, 255, 0.08), transparent 80%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0.25 }}
          transition={{ duration: 0.3 }}
        />

        {/* Browser Top Bar */}
        <div className="flex h-11 items-center justify-between border-b border-white/10 bg-white/[0.02] px-4">
          <div className="flex gap-2">
            <span className="size-2.5 rounded-full bg-red-500/40" />
            <span className="size-2.5 rounded-full bg-yellow-500/40" />
            <span className="size-2.5 rounded-full bg-green-500/40" />
          </div>
          <div className="flex h-6 w-1/3 items-center justify-center rounded bg-white/[0.04] px-3 text-[10px] text-white/30 tracking-wider">
            melomidia.com.br/dashboard
          </div>
          <div className="size-3.5" />
        </div>

        {/* Mockup Image */}
        <div className="relative overflow-hidden">
          <img
            src="/mockup-hero.png"
            alt="Melo Mídia Dashboard Mockup"
            className="w-full h-auto object-cover select-none"
            draggable={false}
          />
        </div>
      </motion.div>

      {/* Floating 3D layered element 1: Sales / Conversão */}
      <motion.div
        className="absolute -right-6 top-16 z-40 hidden rounded-xl border border-emerald-500/20 bg-emerald-950/90 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md sm:flex items-center gap-3"
        animate={isHovered ? {
          x: (mouseX - 0.5) * 60 + 10,
          y: (mouseY - 0.5) * 60,
          z: 80,
        } : {
          x: 0,
          y: [-4, 4, -4],
          z: 40,
        }}
        transition={isHovered ? {
          type: "spring",
          stiffness: 200,
          damping: 25,
        } : {
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <span className="grid size-9 place-items-center rounded-full bg-emerald-500/20 text-emerald-400">
          <TrendingUp className="size-5" />
        </span>
        <div className="text-left">
          <div className="text-[9px] uppercase tracking-wider text-emerald-400/80 font-bold">Conversão</div>
          <div className="text-base font-extrabold text-white tracking-tight">+340%</div>
        </div>
      </motion.div>

      {/* Floating 3D layered element 2: Ads status */}
      <motion.div
        className="absolute -left-10 bottom-20 z-40 hidden rounded-xl border border-amber-500/20 bg-black/90 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-md sm:flex items-center gap-3"
        animate={isHovered ? {
          x: (mouseX - 0.5) * 80 - 10,
          y: (mouseY - 0.5) * 80,
          z: 100,
        } : {
          x: 0,
          y: [4, -4, 4],
          z: 50,
        }}
        transition={isHovered ? {
          type: "spring",
          stiffness: 180,
          damping: 25,
        } : {
          y: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
      >
        <span className="grid size-9 place-items-center rounded-full bg-[#f4c95d]/10 text-[#f4c95d]">
          <Sparkles className="size-5" />
        </span>
        <div className="text-left">
          <div className="text-[9px] uppercase tracking-wider text-white/40 font-bold">Anúncios</div>
          <div className="text-sm font-bold text-white">100% Otimizados</div>
        </div>
      </motion.div>
    </div>
  );
}

const trustSignals = [
  { icon: Zap, text: "Diagnóstico gratuito" },
  { icon: Shield, text: "Sem compromisso" },
  { icon: Clock, text: "Resposta em 24h" },
  { icon: MessageSquare, text: "Plano personalizado" },
];

function FinalCTASection() {
  return (
    <section className="relative isolate overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      {/* --- Background: layered radials, top divider, animated glow --- */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,#030304_0%,#0a0b10_42%,#030304_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[90vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgba(239,98,83,0.18),transparent_58%)] blur-3xl" />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.12, 0.28, 0.12], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-8%] top-1/4 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(244,201,93,0.22),transparent_60%)] blur-3xl"
      />

      <div className="mx-auto max-w-6xl">
        {/* --- Header area --- */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-md border border-primary/25 bg-primary/[0.08] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary shadow-[inset_0_1px_0_rgba(239,98,83,0.15)]">
            <Send className="size-3.5" />
            Pronto para escalar?
          </div>
          <h2 className="text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[70px]">
            Desbloqueie o potencial da sua{" "}
            <span className="font-script inline-block bg-[linear-gradient(110deg,#ffffff_0%,#f4c95d_38%,#ef6253_68%,#ffffff_100%)] bg-[length:220%_100%] bg-clip-text px-1 italic text-transparent">
              autopeça
            </span>{" "}
            no Mercado Livre.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-white/52 sm:text-lg">
            Solicite seu diagnóstico gratuito e descubra quanto faturamento você está deixando na mesa. Sem compromisso, sem burocracia.
          </p>
        </motion.div>

        {/* --- Asymmetric Grid: Form Card + Trust Stack --- */}
        <div className="mt-16 grid items-start gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">

          {/* --- Left: Form Card with offset float --- */}
          <motion.div
            initial={{ opacity: 0, y: 38, rotate: -0.6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative corner accent */}
            <div className="absolute -left-3 -top-3 size-24 rounded-full bg-primary/20 blur-2xl" />
            <div className="absolute -bottom-4 -right-4 size-32 rounded-full bg-[#f4c95d]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0b0c10]/90 p-6 shadow-[0_36px_120px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.08)] sm:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(239,98,83,0.12),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.06),transparent_32%)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

              <div className="relative">
                {/* Form header with live indicator */}
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/38">diagnóstico</p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-[-0.055em] text-white sm:text-3xl">
                      Solicite sua análise
                    </h3>
                  </div>
                  <span className="hidden items-center gap-2 rounded-md border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 sm:inline-flex">
                    <motion.span
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="size-1.5 rounded-full bg-emerald-400"
                    />
                    Vagas abertas
                  </span>
                </div>

                {/* Form fields */}
                <form action="#" className="space-y-4">
                  <div>
                    <label htmlFor="cta-store" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/42">
                      Nome da sua loja
                    </label>
                    <input
                      id="cta-store"
                      type="text"
                      placeholder="Ex: Autopeças Silva"
                      className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/28 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/25"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-whatsapp" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/42">
                      WhatsApp
                    </label>
                    <input
                      id="cta-whatsapp"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/28 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/25"
                    />
                  </div>
                  <div>
                    <label htmlFor="cta-qty" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-white/42">
                      Quantas peças você tem em estoque?
                    </label>
                    <select
                      id="cta-qty"
                      className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white/60 outline-none transition-colors focus:border-primary/50 focus:bg-white/[0.06] focus:ring-1 focus:ring-primary/25"
                      defaultValue=""
                    >
                      <option value="" disabled>Selecione uma faixa</option>
                      <option value="small">Até 500 peças</option>
                      <option value="medium">500 – 2.000 peças</option>
                      <option value="large">2.000 – 10.000 peças</option>
                      <option value="enterprise">Mais de 10.000 peças</option>
                    </select>
                  </div>

                  <div className="pt-2">
                    <Button type="button" className="h-12 w-full rounded-lg px-6 text-base" onClick={() => window.open('https://wa.me/5562994561229', '_blank')}>
                      Quero meu diagnóstico gratuito <ArrowRight className="size-4" />
                    </Button>
                  </div>
                </form>

                <p className="mt-5 text-center text-xs leading-5 text-white/32">
                  Mais de 130 lojas de autopeças já aceleram suas vendas com a Melo Mídia.
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- Right: Trust signals + visual element --- */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.75, delay: 0.12, ease: "easeOut" }}
            className="flex flex-col gap-5"
          >
            {/* Trust signal cards */}
            {trustSignals.map((signal, index) => {
              const Icon = signal.icon;
              return (
                <motion.div
                  key={signal.text}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: 0.08 + index * 0.07, ease: "easeOut" }}
                  className="group relative flex items-center gap-5 overflow-hidden rounded-lg border border-white/10 bg-[#0b0c10]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors hover:border-white/16 hover:bg-[#0d0e13]"
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_0%_50%,rgba(244,201,93,0.06),transparent_60%)]" />
                  <span className="relative grid size-12 shrink-0 place-items-center rounded-lg border border-[#f4c95d]/20 bg-[#f4c95d]/[0.08] text-[#f4c95d] shadow-[0_0_24px_rgba(244,201,93,0.1)]">
                    <Icon className="size-5" />
                  </span>
                  <div className="relative">
                    <h4 className="text-base font-semibold tracking-[-0.03em] text-white">{signal.text}</h4>
                    <p className="mt-1 text-sm text-white/42">
                      {index === 0 && "Analisamos seus anúncios, concorrência e oportunidades sem custo."}
                      {index === 1 && "Você decide se quer seguir depois de ver o diagnóstico completo."}
                      {index === 2 && "Nosso time entra em contato rápido para entender sua loja."}
                      {index === 3 && "Cada autopeça recebe uma estratégia sob medida para o Mercado Livre."}
                    </p>
                  </div>
                  <CheckCircle2 className="relative ml-auto size-5 shrink-0 text-white/12 transition-colors group-hover:text-[#f4c95d]/60" />
                </motion.div>
              );
            })}

            {/* Floating mini-metric card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-[#0b0c10]/80 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(239,98,83,0.08),transparent_50%)]" />
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/34">média dos clientes</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-3xl font-semibold tracking-[-0.06em] text-white">+340%</span>
                    <span className="pb-1 text-xs font-medium text-emerald-400">em vendas</span>
                  </div>
                </div>
                <div className="grid size-14 place-items-center rounded-full border border-white/10 bg-white/[0.04]">
                  <TrendingUp className="size-6 text-[#f4c95d]" />
                </div>
              </div>
              <p className="relative mt-3 text-xs leading-5 text-white/38">
                Crescimento médio nos primeiros 6 meses de operação com a Melo Mídia.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type SocialProofStat = {
  value: number;
  label: string;
  description: string;
  prefix?: string;
  suffix?: string;
};

type OperationStep = {
  title: string;
  text: string;
};

type PainPoint = {
  title: string;
  text: string;
  metric: string;
  icon: ElementType;
};

type Metric = {
  label: string;
  value: string;
  change: string;
  trend: string;
  icon: ElementType;
};

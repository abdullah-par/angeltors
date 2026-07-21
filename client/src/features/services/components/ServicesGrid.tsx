import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Scale, 
  Lightbulb, 
  MonitorSmartphone, 
  Megaphone, 
  Users 
} from 'lucide-react';

export default function ServicesGrid() {
  const reducedMotion = useReducedMotion();

  const services = [
    {
      title: "Business Analysis & Advisory",
      icon: Briefcase,
      items: [
        "Strategic Planning & Market Analysis",
        "Competitive Landscape Analysis",
        "Operational Efficiency Assessments",
        "Go-To-Market Strategy Development",
        "Data Analysis And Insights"
      ]
    },
    {
      title: "Legal & Compliance",
      icon: Scale,
      items: [
        "Legal Entity Formation And Structuring",
        "Intellectual Property Protection",
        "Contract Negotiation And Review",
        "Compliance With Regulations",
        "Risk Mitigation And Management"
      ]
    },
    {
      title: "Intellectual Property Services",
      icon: Lightbulb,
      items: [
        "IP Strategy Development",
        "Patent Filing And Prosecution",
        "Trademark Registration",
        "Copyright Protection",
        "IP Portfolio Management"
      ]
    },
    {
      title: "Tech Support",
      icon: MonitorSmartphone,
      items: [
        "IT Infrastructure Setup And Maintenance",
        "Software Development And Integration",
        "Cybersecurity And Data Protection",
        "Cloud Computing Solutions",
        "Technical Troubleshooting And Support"
      ]
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      items: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Marketing And Creation",
        "Email Marketing Campaigns",
        "Brand Building And Online Reputation"
      ]
    },
    {
      title: "HRMS & Accounting",
      icon: Users,
      items: [
        "Payroll Processing And Tax Filings",
        "Employee Benefits Administration",
        "Human Resources Management",
        "Financial Accounting And Reporting",
        "Budgeting And Forecasting"
      ]
    }
  ];

  return (
    <section className="bg-angeltors-ink py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            We Offer Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col rounded-3xl bg-white/[0.03] backdrop-blur-md p-8 hover:bg-white/[0.06] transition-colors duration-300 border border-white/[0.08]"
              >
                {/* Dropdown-style header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-angeltors-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-[17px] font-bold text-white leading-tight">
                    {service.title}
                  </h3>
                </div>
                
                {/* Bullet points */}
                <ul className="flex flex-col gap-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] font-medium text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40 group-hover:bg-angeltors-accent transition-colors" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
        
        <div className="flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-[16px] font-bold text-angeltors-ink transition-all duration-300 hover:bg-slate-100 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Sign Up
          </Link>
        </div>

      </div>
    </section>
  );
}

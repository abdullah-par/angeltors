import { motion } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function GrievanceMechanismCard() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
      whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-6 sm:p-8 depth-border ag-shadow-md space-y-6"
    >
      <h3 className="text-lg sm:text-xl font-bold text-angeltors-ink pl-3 border-l-4 border-angeltors-accent">
        Investor Grievance Mechanism
      </h3>
      <p className="text-xs sm:text-sm text-angeltors-muted leading-relaxed">
        Angeltors is committed to addressing investor grievances in a timely and efficient manner.
        Investors can submit their grievances through the following channels:
      </p>

      <div className="grid gap-4 sm:grid-cols-3 text-xs sm:text-sm pt-2">
        <div className="space-y-1">
          <span className="font-bold text-angeltors-ink block">Email:</span>
          <a href="mailto:cs@angeltors.com" className="text-angeltors-accent hover:underline font-semibold">
            cs@angeltors.com
          </a>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-angeltors-ink block">Phone:</span>
          <span className="text-angeltors-muted">+91 - 9161 - 110 - 125</span>
        </div>
        <div className="space-y-1">
          <span className="font-bold text-angeltors-ink block">Address:</span>
          <span className="text-angeltors-muted leading-relaxed block">
            11/13/4-C, 2nd Floor, Tashkand Marg, Civil Lines, Prayagraj, Uttar Pradesh, India - 211001
          </span>
        </div>
      </div>

      <p className="text-xs text-angeltors-muted italic border-t border-angeltors-border pt-4">
        We will acknowledge receipt of all grievances within 2 business days and strive to resolve them within 7 business days.
      </p>
    </motion.div>
  );
}

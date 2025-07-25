'use client';
import React, { useState } from 'react';
import ContactForm1 from './ContactForm1';
import ContactForm2 from './ContactForm2';
import ContactForm3 from './ContactForm3';
import ContactForm4 from './ContactForm4';
import ContactForm5 from './ContactForm5';
import { AnimatePresence, motion } from 'framer-motion';

const forms = [
  ContactForm1,
  ContactForm2,
  ContactForm3,
  ContactForm4,
  ContactForm5,
];

const ContactForms = () => {
  const [step, setStep] = useState(0);
  const CurrentForm = forms[step];
  const PrevForm = step > 0 ? forms[step - 1] : null;

  const handleNext = () => {
    if (step < forms.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="min-h-screen w-full flex justify-center m-auto overflow-hidden relative pt-56">
      
      {/* ⬅️ Ghost card of previous step */}
      {PrevForm && (
        <motion.div
          key={`ghost-${step}`}
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute w-full max-w-xl z-0 pointer-events-none"
          style={{
            filter: 'blur(2px)',
            transform: 'translateY(-50px) rotateY(25deg) scale(0.98)',
          }}
        >
          <PrevForm
            onNext={() => {}}
            onBack={() => {}}
            step={step}
            totalSteps={forms.length}
          />
        </motion.div>
      )}

      {/* ⬆️ Main animated form */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`form-${step}`}
          initial={{ opacity: .9, y: 100, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute w-full max-w-xl z-10"
        >
          <CurrentForm
            onNext={handleNext}
            onBack={handleBack}
            step={step + 1}
            totalSteps={forms.length}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ContactForms;

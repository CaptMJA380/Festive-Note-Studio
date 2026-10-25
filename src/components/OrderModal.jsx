import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, MessageCircle, Printer, ArrowRight, Shield } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderModal({ isOpen, onClose, initialData }) {
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [packSize, setPackSize] = useState('35 Cards (Festive Family Box) — ₹3,450');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Festive confetti explosion
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#F59E0B', '#FB7185', '#FBBF24', '#D97706', '#FFFFFF'],
      });
    } catch {
      // safe fallback
    }

    // Build WhatsApp message
    const designName = initialData?.design?.name || 'Sahasrara & Sacred Diya';
    const cardFormat = initialData?.cardType === 'flat' ? 'A6 Flat Card' : 'A6 One-Fold (Bi-fold) Card';
    const foilName = initialData?.foil?.name || '24K Regal Gold';
    const paperName = initialData?.paper?.name || '380 GSM Cotton Rag';
    const family = initialData?.senderName || 'Family';

    const text = encodeURIComponent(
      `Hello Swarna Deepa Studio!\n\nI would like to order personalised Diwali cards:\n` +
      `• Design: ${designName}\n` +
      `• Format: ${cardFormat}\n` +
      `• Foil Finish: ${foilName}\n` +
      `• Paper Stock: ${paperName}\n` +
      `• Sender / Family Name: ${family}\n` +
      `• Pack Option: ${packSize}\n` +
      `• Customer Name: ${customerName}\n` +
      `• City: ${city}\n\n` +
      `Please send me the digital proof on WhatsApp to approve before printing. Thank you!`
    );

    // Open WhatsApp in new tab after 1.5 seconds
    setTimeout(() => {
      window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl rounded-3xl bg-neutral-900 border border-amber-500/30 p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.95)] my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-300 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display font-bold text-white">
              Diwali Blessings! Proof Requested
            </h3>
            <p className="mt-3 text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              We have generated your custom configuration. You are being redirected to WhatsApp to review your digital proof with our master printer.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-black/40 border border-white/10 text-left text-xs space-y-1.5 text-neutral-300">
              <div><strong className="text-amber-300">Format:</strong> {initialData?.cardType === 'flat' ? 'A6 Flat Card' : 'A6 One-Fold Greeting Card'}</div>
              <div><strong className="text-amber-300">Family Name:</strong> {initialData?.senderName || 'Your Family'}</div>
              <div><strong className="text-amber-300">Pack:</strong> {packSize}</div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  window.print();
                }}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print / Save Summary</span>
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-black text-xs font-semibold hover:bg-amber-400"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="pr-8 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-[10px] font-semibold uppercase tracking-wider mb-2 font-indie-body">
                <Sparkles className="w-3 h-3 text-amber-400" />
                Bespoke Printing Request
              </div>
              <h3 className="text-2xl font-indie-display font-bold text-white">
                Finalise Your Personalised Cards
              </h3>
              <p className="text-xs text-neutral-400 mt-1 font-indie-body">
                Zero advance commitment. We craft your digital proof for WhatsApp approval before printing.
              </p>
            </div>

            {/* Selected Configuration Summary Pill */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 mb-6 text-xs space-y-1 text-neutral-300 font-indie-body">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Design Motif:</span>
                <span className="font-semibold text-white">{initialData?.design?.name || 'Sahasrara Diya'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Format:</span>
                <span className="text-amber-300 font-medium">{initialData?.cardType === 'flat' ? 'A6 Flat Card' : 'A6 One-Fold Greeting Card'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Foil Finish:</span>
                <span className="text-white">{initialData?.foil?.name || '24K Regal Gold'}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Family Name:</span>
                <span className="font-indie-script text-xl text-amber-200">{initialData?.senderName || 'Your Family'}</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleOrderSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Choose Presentation Box Size
                </label>
                <select
                  value={packSize}
                  onChange={(e) => setPackSize(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                >
                  <option value="15 Cards (The Intimate Circle) — ₹1,850">
                    15 Cards (The Intimate Circle) — ₹1,850
                  </option>
                  <option value="35 Cards (Festive Family Box) — ₹3,450">
                    35 Cards (Festive Family Box) — ₹3,450 (Most Popular)
                  </option>
                  <option value="75 Cards (The Grand Celebration) — ₹6,450">
                    75 Cards (The Grand Celebration) — ₹6,450
                  </option>
                  <option value="Custom 150+ Cards (Corporate Guild) — Contact Us">
                    Custom 150+ Cards (Corporate Guild) — Inquire
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Priyanshu Sharma"
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-neutral-300 block mb-1">
                    WhatsApp Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-neutral-300 block mb-1">
                  Delivery City & Pincode
                </label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Mumbai, 400050"
                  className="w-full px-3.5 py-2 rounded-xl bg-black/50 border border-white/15 text-white text-xs sm:text-sm focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Receive Digital Proof On WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-neutral-400 text-center pt-1">
                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                <span>You approve the high-res PDF proof before any printing begins</span>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
}

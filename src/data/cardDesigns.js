export const CARD_DESIGNS = [
  {
    id: 'ayodhya-mandala',
    name: 'Sahasrara & Sacred Diya',
    tagline: 'Timeless Filigree in 24K Gold Stamping',
    category: 'Regal Heritage',
    bgClass: 'bg-[#0E0716]',
    accentColor: '#F59E0B',
    paper: '380 GSM Cotton Charcoal',
    theme: {
      cardBg: 'from-[#170C24] via-[#0D0616] to-[#08030E]',
      borderBorder: 'border-amber-500/30',
      diyaGlow: 'rgba(245, 158, 11, 0.4)',
    },
    defaultTitle: 'शुभ दीपावली',
    defaultSubtitle: 'May the divine light illuminate your path with joy, wisdom & prosperity.',
    shloka: 'शुभं करोति कल्याणम् आरोग्यम् धनसंपदम् ।\nशत्रुबुद्धिविनाशाय दीपज्योतिर्नमोऽस्तुते ॥',
    shlokaMeaning: 'Salutations to the supreme light of the lamp, which brings auspiciousness, health, abundance and dispels darkness.',
    motifType: 'mandala',
  },
  {
    id: 'pichwai-lotus',
    name: 'Royal Pichwai & Golden Lotus',
    tagline: 'Vedic Grace Inspired by Mewar Art',
    category: 'Palace Classic',
    bgClass: 'bg-[#1C0815]',
    accentColor: '#FB7185',
    paper: '350 GSM Italian Laid Plum',
    theme: {
      cardBg: 'from-[#290B20] via-[#1A0615] to-[#0E030C]',
      borderBorder: 'border-rose-400/30',
      diyaGlow: 'rgba(251, 113, 133, 0.4)',
    },
    defaultTitle: 'Auspicious Diwali',
    defaultSubtitle: 'Wishing you & your beloved family a season of boundless light, peace & festive warmth.',
    shloka: 'दीपस्य प्रकाशः सर्वान् तमसो निवारयतु ।\nभवतां जीवने सुखशान्तिसमृद्धिः प्रवहतु ॥',
    shlokaMeaning: 'May the brilliance of lamps banish all shadows and fill your days with uninterrupted serenity and grace.',
    motifType: 'lotus',
  },
  {
    id: 'modern-arch',
    name: 'Sanctuary of Light (Jharokha)',
    tagline: 'Architectural Minimalist Luxury',
    category: 'Contemporary Modern',
    bgClass: 'bg-[#0F141C]',
    accentColor: '#38BDF8',
    paper: '380 GSM Deep Midnight Sapphire',
    theme: {
      cardBg: 'from-[#131E2E] via-[#0B1320] to-[#060B14]',
      borderBorder: 'border-sky-400/30',
      diyaGlow: 'rgba(245, 158, 11, 0.4)',
    },
    defaultTitle: 'Festival of Lights',
    defaultSubtitle: 'Here is to new beginnings, glowing memories, and hearts full of gratitude.',
    shloka: 'असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ।\nमृत्योर्मा अमृतं गमय ॥',
    shlokaMeaning: 'Lead us from the unreal to the real, from darkness to light, and from mortality to immortality.',
    motifType: 'arch',
  },
  {
    id: 'floral-rangoli',
    name: 'Mahalakshmi Rangoli Bloom',
    tagline: 'Sacred Floral Geometry & Prosperity',
    category: 'Festive Radiance',
    bgClass: 'bg-[#181106]',
    accentColor: '#F59E0B',
    paper: '360 GSM Forest Moss & Gilded Foil',
    theme: {
      cardBg: 'from-[#221707] via-[#140E04] to-[#0A0702]',
      borderBorder: 'border-amber-400/30',
      diyaGlow: 'rgba(245, 158, 11, 0.45)',
    },
    defaultTitle: 'Diwali Blessings',
    defaultSubtitle: 'Invoking the grace of Goddess Mahalakshmi for perpetual fortune, harmony and success.',
    shloka: 'नमस्तेऽस्तु महामाये श्रीपीठे सुरपूजिते ।\nशङ्खचक्रगदाहस्ते महालक्ष्मि नमोऽस्तुते ॥',
    shlokaMeaning: 'O Goddess Mahalakshmi, embodiment of cosmic energy and grace, we bow to your divine presence.',
    motifType: 'rangoli',
  }
];

export const FOIL_FINISHES = [
  {
    id: '24k-gold',
    name: '24K Regal Gold',
    label: 'Pure 24K Mirror Gold',
    color: '#F59E0B',
    class: 'gold-foil-text',
    gradient: 'from-[#FFEAA7] via-[#F59E0B] to-[#B45309]',
    borderClass: 'border-amber-400',
    specular: 'rgba(255, 235, 150, 0.65)',
    description: 'Deep mirror finish that reflects radiant candlelight.'
  },
  {
    id: 'rose-gold',
    name: 'Rose Gold Luster',
    label: 'Imperial Rose Gold',
    color: '#FB7185',
    class: 'rose-foil-text',
    gradient: 'from-[#FFE2E6] via-[#FB7185] to-[#9F1239]',
    borderClass: 'border-rose-400',
    specular: 'rgba(255, 200, 215, 0.65)',
    description: 'Subtle copper-pink hue with champagne undertones.'
  },
  {
    id: 'copper-brass',
    name: 'Antique Copper',
    label: 'Warm Antique Copper',
    color: '#F97316',
    class: 'copper-foil-text',
    gradient: 'from-[#FED7AA] via-[#EA580C] to-[#9A3412]',
    borderClass: 'border-orange-400',
    specular: 'rgba(255, 210, 180, 0.65)',
    description: 'Earthy, royal metallic sheen celebrating traditional brass diyas.'
  },
  {
    id: 'champagne-silver',
    name: 'Champagne Platinum',
    label: 'Frosted Platinum Silver',
    color: '#E2E8F0',
    class: 'silver-foil-text',
    gradient: 'from-[#FFFFFF] via-[#CBD5E1] to-[#64748B]',
    borderClass: 'border-slate-300',
    specular: 'rgba(255, 255, 255, 0.75)',
    description: 'Crisp, contemporary metallic brilliance for modern homes.'
  }
];

export const PAPER_STOCKS = [
  {
    id: 'cotton-380',
    name: '380 GSM Cotton Rag',
    sub: 'Soft pillowy matte with hand-torn deckle feel',
    bgStyle: '#0D0715',
    badge: 'Signature Choice'
  },
  {
    id: 'laid-linen',
    name: '350 GSM Italian Laid Linen',
    sub: 'Fine woven tactile texture that catches the fingertips',
    bgStyle: '#140D1D',
    badge: 'Artisanal'
  },
  {
    id: 'velvet-matte',
    name: '400 GSM Ultra Velvet Silk',
    sub: 'Deep velvety touch with scratch-resistant coating',
    bgStyle: '#160817',
    badge: 'Ultra Luxury'
  },
  {
    id: 'plantable-seed',
    name: '280 GSM Wildflower Seed Paper',
    sub: 'Biodegradable cotton embedded with marigold & tulsi seeds',
    bgStyle: '#11130D',
    badge: 'Eco-Spiritual'
  }
];

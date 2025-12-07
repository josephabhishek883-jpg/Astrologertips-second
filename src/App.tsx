import { useState, useEffect } from 'react';
import {
  Star,
  Shield,
  Users,
  Phone,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Check,
  Sparkles,
  Award,
  Clock,
  Plus,
  Minus,
  Menu,
  X,
  Moon,
  Sun,
  Zap
} from 'lucide-react';

const WHATSAPP_NUMBER = '918239554770';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;

function App() {
  const [currentAstrologer, setCurrentAstrologer] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [slotsRemaining, setSlotsRemaining] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentAstrologer(prev => {
        if (prev >= astrologers.length - 6) {
          return 0;
        }
        return prev + 1;
      });
    }, 4000);
    return () => clearInterval(autoScroll);
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitPopup(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const astrologers = [
    { name: 'Pandit Manasvi Mohal Shastri', exp: '15+ Years', spec: ['Love Specialist', 'Marriage Expert'], price: '₹15' },
    { name: 'Guruji Anil Kumar', exp: '20+ Years', spec: ['Kundli Expert', 'Vedic'], price: '₹20' },
    { name: 'Pt. Vikram Joshi', exp: '18+ Years', spec: ['Love Specialist', 'Vedic Expert'], price: '₹15' },
    { name: 'Acharya Suresh Pandey', exp: '22+ Years', spec: ['Marriage Expert', 'Kundli Milan'], price: '₹20' },
    { name: 'Pandit Ramesh Shastri', exp: '16+ Years', spec: ['Love Specialist', 'Family Issues'], price: '₹15' },
    { name: 'Pt. Deepak Dubey', exp: '17+ Years', spec: ['Marriage Expert', 'Love Specialist'], price: '₹15' },
    { name: 'Acharya Vinod Mishra', exp: '21+ Years', spec: ['Kundli Expert', 'Career'], price: '₹20' },
    { name: 'Pandit Sanjay Ojha', exp: '15+ Years', spec: ['Love Specialist', 'Vedic'], price: '₹15' },
    { name: 'Guruji Prakash Rao', exp: '23+ Years', spec: ['Marriage Expert', 'Family Issues'], price: '₹20' },
    { name: 'Pt. Ashok Tripathi', exp: '18+ Years', spec: ['Love Specialist', 'Kundli Milan'], price: '₹15' },
    { name: 'Acharya Ravi Upadhyay', exp: '20+ Years', spec: ['Vedic Expert', 'Love Back'], price: '₹20' },
    { name: 'Pandit Arjun Sharma', exp: '17+ Years', spec: ['Love Specialist', 'Marriage'], price: '₹15' },
    { name: 'Guruji Harish Mishra', exp: '19+ Years', spec: ['Kundli Milan', 'Vedic'], price: '₹20' },
    { name: 'Pt. Rajiv Nair', exp: '16+ Years', spec: ['Marriage Expert', 'Remedies'], price: '₹15' },
    { name: 'Acharya Mohan Sharma', exp: '21+ Years', spec: ['Love Specialist', 'Vedic'], price: '₹20' },
    { name: 'Pandit Nikhil Joshi', exp: '14+ Years', spec: ['Marriage Expert', 'Family'], price: '₹15' },
    { name: 'Guruji Sandeep Kumar', exp: '18+ Years', spec: ['Kundli Expert', 'Career'], price: '₹20' },
    { name: 'Pt. Vikram Reddy', exp: '15+ Years', spec: ['Love Specialist', 'Relationships'], price: '₹15' },
  ];

  const testimonials = [
    { name: 'Priya & Rahul', city: 'Mumbai', text: 'Our families were against our inter-caste marriage. After consulting, everything changed in 20 days! Now we\'re happily married.', rating: 5 },
    { name: 'Anjali Verma', city: 'Delhi', text: 'I lost my love 2 years ago. With their guidance and remedies, we reunited and got married!', rating: 5 },
    { name: 'Rohan & Neha', city: 'Bangalore', text: 'We were facing inter-caste marriage problems. After consulting, our families agreed within 15 days!', rating: 5 },
    { name: 'Sneha Patel', city: 'Ahmedabad', text: 'Constant fights with my husband almost ended our marriage. The astrologer\'s solutions saved our relationship!', rating: 5 },
    { name: 'Amit Sharma', city: 'Jaipur', text: 'Family was creating problems in our love marriage. Guruji\'s remedies worked like magic!', rating: 5 },
    { name: 'Divya & Karan', city: 'Pune', text: 'Lost love back in just 30 days! The remedies were powerful and effective.', rating: 5 },
    { name: 'Ritu Singh', city: 'Lucknow', text: 'My in-laws problems were solved peacefully. Thank you for bringing happiness back!', rating: 5 },
    { name: 'Vikram Gupta', city: 'Chandigarh', text: 'Got my ex-girlfriend back and now planning marriage. Highly recommended!', rating: 5 },
    { name: 'Meera Desai', city: 'Surat', text: 'Was facing career problems affecting my relationship. The astrologer helped me find balance and now everything is perfect!', rating: 5 },
    { name: 'Arjun & Pooja', city: 'Hyderabad', text: 'Different religions created huge barriers. After following the remedies, both families happily agreed to our marriage!', rating: 5 },
    { name: 'Kavita Reddy', city: 'Chennai', text: 'My fiancé broke up with me suddenly. Within 45 days of consulting, he came back and we got engaged again!', rating: 5 },
    { name: 'Sandeep Kumar', city: 'Indore', text: 'Love marriage seemed impossible due to financial issues. Guruji\'s guidance changed everything. Now happily settled!', rating: 5 },
    { name: 'Ishita & Varun', city: 'Kolkata', text: 'Manglik dosha was causing delays in marriage. After remedies, we found the perfect match and got married!', rating: 5 },
    { name: 'Rajesh Yadav', city: 'Patna', text: 'Ex-girlfriend married someone else but was unhappy. Consulted here, and we reunited within 2 months!', rating: 5 },
    { name: 'Anita Malhotra', city: 'Chandigarh', text: 'Husband was having affair. The astrologer\'s powerful remedies brought him back and saved our 10-year marriage!', rating: 5 },
    { name: 'Deepak & Swati', city: 'Nagpur', text: 'Caste difference and family opposition made us hopeless. Pt. Sharma\'s solutions worked miraculously in 3 weeks!', rating: 5 },
    { name: 'Nisha Kapoor', city: 'Ludhiana', text: 'Lost contact with my love for 3 years. After consultation, we reconnected and planning our wedding now!', rating: 5 },
    { name: 'Manish Jain', city: 'Bhopal', text: 'Parents fixed my marriage elsewhere. Desperate, I consulted here. My love marriage happened as I wished!', rating: 5 },
    { name: 'Simran & Karan', city: 'Amritsar', text: 'Inter-religious marriage seemed impossible. After powerful remedies and prayers, families agreed within 30 days!', rating: 5 },
    { name: 'Aarti Mishra', city: 'Varanasi', text: 'Constant misunderstandings with boyfriend. Astrological guidance helped us understand each other. Now engaged!', rating: 5 },
  ];

  const services = [
    { icon: '💑', title: 'Love Problem Solution', desc: 'Get your love life back on track' },
    { icon: '💕', title: 'Inter-caste Marriage', desc: 'Family approval guaranteed' },
    { icon: '💍', title: 'Love Marriage Approval', desc: 'Parents convince solutions' },
    { icon: '💔', title: 'Lost Love Back', desc: 'Reunite with your soulmate' },
    { icon: '👫', title: 'Husband Wife Dispute', desc: 'Restore marital harmony' },
    { icon: '👨‍👩‍👧', title: 'Family Issues', desc: 'Solve in-laws problems' },
    { icon: '📋', title: 'Kundli Milan', desc: 'Perfect match making' },
    { icon: '💼', title: 'Career & Finance', desc: 'Success in professional life' },
  ];

  const zodiacSigns = [
    { name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19' },
    { name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20' },
    { name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20' },
    { name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22' },
    { name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22' },
    { name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22' },
    { name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22' },
    { name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21' },
    { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21' },
    { name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19' },
    { name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18' },
    { name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20' },
  ];

  const faqs = [
    {
      question: 'How quickly can I see results from astrology consultation?',
      answer: 'Most clients see positive changes within 15-30 days. Results depend on your problem complexity and how sincerely you follow the remedies. For urgent cases, we provide instant solutions.'
    },
    {
      question: 'Is online consultation as effective as in-person?',
      answer: 'Yes! Our astrologers have helped thousands via phone and WhatsApp with the same success rate. We only need your birth details and problem description to provide accurate guidance.'
    },
    {
      question: 'Can astrology really bring my ex-love back?',
      answer: 'Yes, we have reunited thousands of couples. Our Vedic remedies and vashikaran techniques are highly effective for lost love cases. Success rate is over 90% when followed properly.'
    },
    {
      question: 'Will my family agree to inter-caste marriage?',
      answer: 'We specialize in convincing families for inter-caste and inter-religious marriages. Our remedies soften hearts and change minds. Most cases resolve within 20-45 days.'
    },
    {
      question: 'Is my personal information kept confidential?',
      answer: 'Absolutely! We maintain 100% privacy and confidentiality. Your personal details, problems, and conversations are completely secure and never shared with anyone.'
    },
    {
      question: 'What if the remedies don\'t work for me?',
      answer: 'Our remedies have 95%+ success rate. If followed correctly, they work. We provide continued support until your problem is solved. Your satisfaction is our priority.'
    },
    {
      question: 'Do I need to provide my birth chart?',
      answer: 'If you have it, great! If not, just provide your date, time, and place of birth. Our expert astrologers will create your detailed kundli and analyze it.'
    },
    {
      question: 'How much does a consultation cost?',
      answer: 'First consultation starts from ₹1500 depending on the astrologer. Remedies are suggested based on your budget. We believe in affordable spiritual guidance for all.'
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollAstrologers = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentAstrologer(prev => Math.max(0, prev - 1));
    } else {
      setCurrentAstrologer(prev => Math.min(astrologers.length - 1, prev + 1));
    }
  };

  const scrollTestimonials = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
    } else {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }
  };

  return (
    <div className={`min-h-screen overflow-x-hidden pb-20 transition-colors duration-300 ${darkMode ? 'bg-[#0F172A]' : 'bg-[#FFF7ED]'}`}>
      {/* Mobile Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${darkMode ? 'bg-[#1E293B]' : 'bg-white'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="text-2xl font-bold text-[#7C3AED] hover:text-[#FF6B35] transition-colors">Astrologer Tips</a>

            <div className="hidden md:flex items-center gap-8">
              <a href="#our-services" className={`font-semibold transition-colors ${darkMode ? 'text-gray-200 hover:text-[#FF6B35]' : 'text-[#1E293B] hover:text-[#FF6B35]'}`}>Services</a>
              <a href="#our-astrologers" className={`font-semibold transition-colors ${darkMode ? 'text-gray-200 hover:text-[#FF6B35]' : 'text-[#1E293B] hover:text-[#FF6B35]'}`}>Astrologers</a>
              <a href="#our-testimonials" className={`font-semibold transition-colors ${darkMode ? 'text-gray-200 hover:text-[#FF6B35]' : 'text-[#1E293B] hover:text-[#FF6B35]'}`}>Stories</a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-[#F3E8FF] hover:bg-[#E9D5FF] transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-[#F59E0B]" /> : <Moon className="w-5 h-5 text-[#7C3AED]" />}
              </button>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-[#F3E8FF] hover:bg-[#E9D5FF] transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-[#F59E0B]" /> : <Moon className="w-5 h-5 text-[#7C3AED]" />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#F3E8FF] hover:bg-[#E9D5FF]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#7C3AED]" /> : <Menu className="w-6 h-6 text-[#7C3AED]" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className={`md:hidden pb-4 space-y-3 border-t ${darkMode ? 'border-[#334155]' : 'border-[#E2E8F0]'}`}>
              <a href="#our-services" className={`block py-2 font-semibold transition-colors ${darkMode ? 'text-gray-200 hover:text-[#FF6B35]' : 'text-[#1E293B] hover:text-[#FF6B35]'}`} onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#our-astrologers" className={`block py-2 font-semibold transition-colors ${darkMode ? 'text-gray-200 hover:text-[#FF6B35]' : 'text-[#1E293B] hover:text-[#FF6B35]'}`} onClick={() => setMobileMenuOpen(false)}>Astrologers</a>
              <a href="#our-testimonials" className={`block py-2 font-semibold transition-colors ${darkMode ? 'text-gray-200 hover:text-[#FF6B35]' : 'text-[#1E293B] hover:text-[#FF6B35]'}`} onClick={() => setMobileMenuOpen(false)}>Stories</a>
            </div>
          )}
        </div>
      </nav>

      {/* Limited Slots Bar */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white py-3 px-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-semibold animate-pulse">
          <Zap className="w-5 h-5" />
          <span>Only {slotsRemaining} Slots Left Today - Book Now!</span>
          <Zap className="w-5 h-5" />
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className={`relative min-h-screen bg-gradient-to-br from-[#5B21B6] via-[#6D28D9] to-[#DC2626] overflow-hidden pt-32`}>
        {/* Zodiac Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl text-[#F59E0B] animate-pulse">♈</div>
          <div className="absolute top-32 right-20 text-5xl text-[#F59E0B] animate-pulse delay-100">♉</div>
          <div className="absolute top-64 left-1/4 text-7xl text-[#F59E0B] animate-pulse delay-200">♊</div>
          <div className="absolute top-96 right-1/3 text-6xl text-[#F59E0B] animate-pulse delay-300">♋</div>
          <div className="absolute bottom-32 left-20 text-5xl text-[#F59E0B] animate-pulse delay-500">♌</div>
          <div className="absolute bottom-64 right-16 text-7xl text-[#F59E0B] animate-pulse delay-700">♍</div>
          <div className="absolute top-1/2 left-10 text-6xl text-[#F59E0B] animate-pulse delay-1000">♎</div>
          <div className="absolute top-1/3 right-10 text-5xl text-[#F59E0B] animate-pulse delay-1200">♏</div>
          <div className="absolute bottom-1/3 left-1/3 text-6xl text-[#F59E0B] animate-pulse delay-1500">♐</div>
          <div className="absolute top-20 left-1/2 text-7xl text-[#F59E0B] animate-pulse delay-1700">♑</div>
          <div className="absolute bottom-20 right-1/4 text-5xl text-[#F59E0B] animate-pulse delay-2000">♒</div>
          <div className="absolute top-1/2 right-1/2 text-6xl text-[#F59E0B] animate-pulse delay-2200">♓</div>
        </div>

        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
                animationDelay: `${Math.random() * 2}s`,
                color: i % 2 === 0 ? '#7C3AED' : '#F59E0B'
              }}
            >
              ✨
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F59E0B] text-white rounded-full text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4" />
              <span>Trusted by 10,000+ Happy Couples</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight" style={{ textShadow: '0 2px 10px rgba(245, 158, 11, 0.5)' }}>
              Find Your Perfect Love Match
              <span className="block text-[#FFF7ED] mt-2">Through Vedic Astrology</span>
            </h1>

            <p className="text-xl sm:text-2xl text-[#FFF7ED] max-w-3xl mx-auto">
              Expert Astrologers Solving Love & Marriage Problems Since 2010
            </p>

            <a
              href={`${WHATSAPP_BASE}?text=Hi, I want to consult about love and marriage problems`}
              className="inline-flex items-center gap-3 px-8 py-4 sm:py-5 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white text-base sm:text-lg font-bold rounded-full hover:from-[#F97316] hover:to-[#D97706] transform hover:scale-105 transition-all shadow-lg border-2 border-[#F59E0B] active:scale-95"
              style={{ boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)' }}
            >
              <MessageCircle className="w-6 h-6" />
              <span>Consult Now</span>
            </a>

            <div className="flex flex-wrap justify-center gap-6 pt-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Award className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white">10,000+ Happy Couples</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
                <span className="text-white">24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Astrologers Carousel */}
      <section id="our-astrologers" className="py-16 bg-gradient-to-br from-[#FFF7ED] via-[#FEE2E2] to-[#F3E8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8] mb-4">
              Our Expert Astrologers
            </h2>
            <p className="text-lg text-[#64748B]">Certified Vedic astrologers with proven track record</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex gap-2 transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentAstrologer * (100 / 6)}%)` }}
              >
                {astrologers.map((astro, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/6 px-0.5">
                    <div className="bg-white border-2 border-[#FED7AA] rounded-lg p-3 hover:border-[#F59E0B] hover:shadow-lg transition-all" style={{ boxShadow: '0 1px 5px rgba(124, 58, 237, 0.08)' }}>
                      <div className="flex flex-col items-center text-center space-y-2">
                        <img src="/ChatGPT Image Nov 18, 2025, 10_12_19 AM copy.png" alt={astro.name} className="w-12 h-12 rounded-full object-cover shadow-md" onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }} />
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white text-lg font-bold shadow-md hidden">
                          {astro.name.split(' ')[1][0]}
                        </div>
                        <div>
                          <h3 className="font-bold text-xs text-[#1E293B] leading-tight">{astro.name}</h3>
                          <div className="flex items-center justify-center gap-0 mt-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-2 h-2 fill-[#F59E0B] text-[#F59E0B]" />
                            ))}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-0.5 justify-center">
                          <span className="px-1.5 py-0.25 bg-[#7C3AED] text-[#F59E0B] rounded-full text-xs font-semibold">
                            {astro.exp}
                          </span>
                        </div>
                        <a
                          href={`${WHATSAPP_BASE}?text=Hi, I want to consult with ${astro.name}`}
                          className="w-full py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white font-semibold text-xs rounded-md hover:from-[#F97316] hover:to-[#D97706] transition-all shadow-sm"
                        >
                          Consult
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollAstrologers('left')}
              disabled={currentAstrologer === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-white p-1.5 rounded-full shadow-lg hover:bg-[#F3E8FF] disabled:opacity-30 disabled:cursor-not-allowed z-10"
              style={{ boxShadow: '0 2px 10px rgba(124, 58, 237, 0.15)' }}
            >
              <ChevronLeft className="w-4 h-4 text-[#7C3AED]" />
            </button>

            <button
              onClick={() => scrollAstrologers('right')}
              disabled={currentAstrologer >= astrologers.length - 6}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-white p-1.5 rounded-full shadow-lg hover:bg-[#F3E8FF] disabled:opacity-30 disabled:cursor-not-allowed z-10"
              style={{ boxShadow: '0 2px 10px rgba(124, 58, 237, 0.15)' }}
            >
              <ChevronRight className="w-4 h-4 text-[#7C3AED]" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {[...Array(Math.ceil(astrologers.length / 6))].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentAstrologer(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentAstrologer === idx
                      ? 'bg-[#7C3AED] w-8'
                      : 'bg-[#D8B4FE] w-2 hover:bg-[#8B5CF6]'
                  }`}
                  title={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-gradient-to-r from-[#F3E8FF] via-white to-[#F3E8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-8 h-8 text-white fill-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#6B21A8]">4.9/5 Star Ratings</h3>
              <p className="text-[#1E293B]">Based on 5000+ Reviews</p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#6B21A8]">10,000+ Happy Clients</h3>
              <p className="text-[#1E293B]">Trusted Worldwide</p>
            </div>

            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#6B21A8]">100% Privacy Guaranteed</h3>
              <p className="text-[#1E293B]">Your Secrets Are Safe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Astrologers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8] mb-4">
              Recommended Astrologers
            </h2>
            <p className="text-lg text-[#64748B]">Connect with our top-rated specialists now</p>
          </div>

          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {astrologers.slice(0, 6).map((astro, idx) => (
                <div key={idx} className="w-64 bg-white border-2 border-[#8B5CF6] rounded-xl p-4 hover:border-[#7C3AED] hover:shadow-2xl transition-all" style={{ boxShadow: '0 4px 20px rgba(124, 58, 237, 0.15)' }}>
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className="relative">
                      <img src="/ChatGPT Image Nov 18, 2025, 10_12_19 AM copy.png" alt={astro.name} className="w-20 h-20 rounded-full object-cover shadow-lg" onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling.style.display = 'flex';
                      }} />
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white text-2xl font-bold shadow-lg hidden">
                        {astro.name.split(' ')[1][0]}
                      </div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#10B981] rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1E293B]">{astro.name}</h3>
                      <p className="text-sm text-[#FF6B35]">{astro.spec[0]}</p>
                    </div>
                    <a
                      href={`${WHATSAPP_BASE}?text=Hi, I want to consult with ${astro.name}`}
                      className="w-full py-2 bg-gradient-to-r from-[#FF6B35] to-[#F59E0B] text-white font-semibold rounded-lg hover:from-[#F59E0B] hover:to-[#D97706] transition-all flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Chat on WhatsApp
                    </a>
                    <span className="text-xs text-[#10B981] font-semibold">● Available Now</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section id="our-services" className="py-16 bg-gradient-to-br from-white via-[#F3E8FF] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-[#64748B]">Comprehensive astrology solutions for all your problems</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all border-2 border-[#FED7AA] hover:border-[#7C3AED]" style={{ boxShadow: '0 4px 20px rgba(124, 58, 237, 0.15)' }}>
                <div className="text-center space-y-4">
                  <div className="text-5xl">{service.icon}</div>
                  <h3 className="font-bold text-lg text-[#1E293B]">{service.title}</h3>
                  <p className="text-sm text-[#64748B]">{service.desc}</p>
                  <a
                    href={`${WHATSAPP_BASE}?text=Hi, I need help with ${service.title}`}
                    className="block w-full py-2 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white font-semibold rounded-lg hover:from-[#F97316] hover:to-[#D97706] transition-all shadow-lg"
                  >
                    Get Solution
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="our-testimonials" className="py-16 bg-gradient-to-br from-[#F3E8FF] via-white to-[#F3E8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8] mb-4">
              Real Success Stories
            </h2>
            <p className="text-lg text-[#64748B]">See how we've helped thousands find love and happiness</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((test, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full px-4">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#FED7AA]" style={{ boxShadow: '0 4px 20px rgba(124, 58, 237, 0.15)' }}>
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white text-2xl font-bold mx-auto shadow-lg">
                          {test.name[0]}
                        </div>
                        <div>
                          <h3 className="font-bold text-xl text-[#1E293B]">{test.name}</h3>
                          <p className="text-sm text-[#64748B]">{test.city}</p>
                        </div>
                        <div className="flex justify-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                          ))}
                        </div>
                        <p className="text-[#1E293B] text-lg leading-relaxed italic">"{test.text}"</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollTestimonials('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-[#FED7AA]"
            >
              <ChevronLeft className="w-6 h-6 text-[#7C3AED] hover:text-[#FF6B35]" />
            </button>

            <button
              onClick={() => scrollTestimonials('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-[#FED7AA]"
            >
              <ChevronRight className="w-6 h-6 text-[#7C3AED] hover:text-[#FF6B35]" />
            </button>
          </div>
        </div>
      </section>

      {/* Zodiac Signs */}
      <section className="py-16 bg-gradient-to-br from-white via-[#FFF7ED] to-[#F3E8FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8] mb-4">
              Consult Based on Your Zodiac Sign
            </h2>
            <p className="text-lg text-[#64748B]">Get personalized guidance for your zodiac</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {zodiacSigns.map((sign, idx) => (
              <a
                key={idx}
                href={`${WHATSAPP_BASE}?text=Hi, I'm ${sign.name} and need guidance`}
                className="bg-white rounded-xl p-6 text-center hover:bg-[#FF6B35] hover:scale-105 transition-all shadow-md hover:shadow-xl border-2 border-[#F59E0B] hover:border-[#7C3AED] cursor-pointer group"
              >
                <div className="text-5xl mb-3 text-[#7C3AED] group-hover:text-white transition-colors">{sign.symbol}</div>
                <h3 className="font-bold text-lg text-[#1E293B] mb-1 group-hover:text-white transition-colors">{sign.name}</h3>
                <p className="text-sm text-[#64748B] group-hover:text-white transition-colors">{sign.dates}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#6B21A8] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#64748B]">Get answers to common questions about our astrology services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border-2 border-[#F3E8FF] hover:border-[#8B5CF6] transition-all overflow-hidden"
                style={{ boxShadow: '0 4px 20px rgba(124, 58, 237, 0.1)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-[#F3E8FF] transition-colors"
                >
                  <span className="font-bold text-lg text-[#1E293B] pr-4">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#7C3AED] flex-shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-[#64748B] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#64748B] mb-4">Still have questions?</p>
            <a
              href={`${WHATSAPP_BASE}?text=Hi, I have a question about astrology consultation`}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white font-semibold rounded-lg hover:from-[#F97316] hover:to-[#D97706] transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#6B21A8] to-[#5B21B6] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#F59E0B]">Astrology Tips</h3>
              <p className="text-[#FFF7ED]">
                Providing authentic Vedic astrology consultations since 2010. We help solve love, marriage, and life problems with expert guidance.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#F59E0B]">Quick Links</h4>
              <ul className="space-y-2 text-[#FFF7ED]">
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-[#FF6B35] transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4 text-[#F59E0B]">Contact</h4>
              <div className="space-y-3 text-[#FFF7ED]">
                <p className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-[#F59E0B]" />
                  +91 8239554770
                </p>
                <p className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[#F59E0B]" />
                  support@astrologytips.com
                </p>
                <a
                  href={`${WHATSAPP_BASE}?text=Hi, I need astrology consultation`}
                  className="inline-block px-6 py-2 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white font-semibold rounded-lg hover:from-[#F59E0B] hover:to-[#D97706] transition-all shadow-lg"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#7C3AED] pt-8 text-center text-[#FFF7ED]">
            <p>© 2025 Astrology Tips. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Bottom CTAs */}
      <div className={`fixed bottom-0 left-0 right-0 ${darkMode ? 'bg-[#1E293B]' : 'bg-white'} border-t-2 ${darkMode ? 'border-[#334155]' : 'border-[#E2E8F0]'} z-40 py-3 px-4 safe-area-inset-bottom`} style={{ boxShadow: darkMode ? '0 -2px 10px rgba(0, 0, 0, 0.2)' : '0 -2px 10px rgba(0, 0, 0, 0.08)' }}>
        <div className="max-w-7xl mx-auto flex gap-3 justify-center">
          <a
            href={`tel:${WHATSAPP_NUMBER.replace(/\D/g, '')}`}
            className="bg-[#7C3AED] text-white font-bold rounded-2xl px-6 py-3 hover:bg-[#8B5CF6] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
            title="Call Astrologer"
          >
            <Phone className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Call Now</span>
          </a>
          <a
            href={`${WHATSAPP_BASE}?text=Hi, I want to consult about love and marriage problems`}
            className="bg-[#25D366] text-white font-bold rounded-2xl px-6 py-3 hover:bg-[#1ea853] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="hidden sm:inline text-sm">Chat Now</span>
          </a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={`${WHATSAPP_BASE}?text=Hi, I need astrology consultation`}
        className="fixed bottom-24 right-4 md:right-6 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center hover:scale-110 transition-transform z-50 animate-pulse border-2 border-[#F59E0B] active:scale-95"
        style={{ boxShadow: '0 8px 30px rgba(124, 58, 237, 0.3)' }}
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </a>

      {/* Exit Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4">
          <div className={`${darkMode ? 'bg-[#1E293B]' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 transform transition-all`}>
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-[#64748B] hover:text-[#FF6B35] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center space-y-4">
              <div className="text-5xl">💔</div>
              <h2 className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-white' : 'text-[#6B21A8]'}`}>
                Don't Leave Empty Handed!
              </h2>
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-[#64748B]'}`}>
                Get a FREE consultation with our expert astrologers before you go. Let us help solve your love problems!
              </p>

              <div className="space-y-3 pt-4">
                <a
                  href={`${WHATSAPP_BASE}?text=Hi, I want to book my free consultation`}
                  className="block w-full py-4 bg-gradient-to-r from-[#FF6B35] to-[#F97316] text-white font-bold rounded-lg hover:from-[#F97316] hover:to-[#D97706] transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95"
                  onClick={() => setShowExitPopup(false)}
                >
                  <MessageCircle className="w-5 h-5" />
                  Book Free Consultation Now
                </a>
                <button
                  onClick={() => setShowExitPopup(false)}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${darkMode ? 'bg-[#334155] text-gray-200 hover:bg-[#475569]' : 'bg-gray-200 text-[#1E293B] hover:bg-gray-300'}`}
                >
                  I'll Continue Exploring
                </button>
              </div>

              <p className="text-xs text-[#64748B] pt-2">
                ✨ Only 5 slots available today - Limited time offer!
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

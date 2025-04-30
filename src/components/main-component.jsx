// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
'use client';
import React, { useState, useEffect } from 'react';
import * as echarts from 'echarts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

const MainComponent = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const chartDom = document.getElementById('client-growth-chart');
    if (chartDom) {
      const myChart = echarts.init(chartDom);
      const option = {
        animation: false,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        xAxis: {
          type: 'category',
          data: ['2020', '2021', '2022', '2023', '2024', '2025'],
          axisLabel: {
            color: '#666',
          },
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            color: '#666',
          },
        },
        series: [
          {
            name: 'Projects Completed',
            type: 'bar',
            data: [12, 25, 48, 65, 82, 94],
            itemStyle: {
              color: '#4F46E5',
            },
          },
        ],
        color: ['#4F46E5'],
      };
      myChart.setOption(option);
      const handleResize = () => {
        myChart.resize();
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
        myChart.dispose();
      };
    }
  }, []);
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      client: 'GlobalShop Inc.',
      category: 'web-design',
      image:
        'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20with%20clean%20design%2C%20product%20grid%20layout%2C%20shopping%20cart%20functionality%2C%20displayed%20on%20laptop%20screen%20with%20soft%20ambient%20lighting%20and%20minimal%20background&width=600&height=400&seq=1&orientation=landscape',
    },
    {
      id: 2,
      title: 'Financial Dashboard Application',
      client: 'InvestSmart LLC',
      category: 'app-development',
      image:
        'https://readdy.ai/api/search-image?query=Financial%20dashboard%20application%20with%20charts%2C%20graphs%2C%20and%20data%20visualization%20tools%20showing%20market%20trends%20and%20investment%20analytics%20on%20dark%20themed%20interface%20with%20blue%20accent%20colors&width=600&height=400&seq=2&orientation=landscape',
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      client: 'MediCare Solutions',
      category: 'software',
      image:
        'https://readdy.ai/api/search-image?query=Healthcare%20management%20system%20interface%20showing%20patient%20records%2C%20appointment%20scheduling%2C%20and%20medical%20data%20visualization%20with%20clean%20white%20and%20blue%20color%20scheme%20on%20desktop%20screen&width=600&height=400&seq=3&orientation=landscape',
    },
    {
      id: 4,
      title: 'AI-Powered Recommendation Engine',
      client: 'TechInnovate',
      category: 'ai-solutions',
      image:
        'https://readdy.ai/api/search-image?query=Futuristic%20AI%20recommendation%20engine%20interface%20with%20neural%20network%20visualization%2C%20data%20flows%2C%20and%20personalized%20content%20suggestions%20in%20purple%20and%20blue%20gradient%20background&width=600&height=400&seq=4&orientation=landscape',
    },
    {
      id: 5,
      title: 'Mobile Banking Application',
      client: 'SecureBank',
      category: 'app-development',
      image:
        'https://readdy.ai/api/search-image?query=Mobile%20banking%20application%20shown%20on%20smartphone%20with%20transaction%20history%2C%20account%20balance%2C%20payment%20features%20in%20a%20professional%20blue%20and%20white%20interface%20with%20security%20elements&width=600&height=400&seq=5&orientation=landscape',
    },
    {
      id: 6,
      title: 'Corporate Website Overhaul',
      client: 'Enterprise Solutions',
      category: 'web-design',
      image:
        'https://readdy.ai/api/search-image?query=Corporate%20website%20with%20professional%20layout%20featuring%20hero%20section%2C%20service%20cards%2C%20team%20profiles%2C%20and%20contact%20information%20in%20elegant%20blue%20and%20gray%20color%20scheme%20on%20desktop%20display&width=600&height=400&seq=6&orientation=landscape',
    },
  ];
  const services = [
    {
      title: 'Web Design & Development',
      description:
        'Creating responsive, user-friendly websites that deliver exceptional experiences across all devices.',
      icon: 'fa-solid fa-code',
    },
    {
      title: 'Mobile App Development',
      description:
        'Building native and cross-platform mobile applications that engage users and drive business growth.',
      icon: 'fa-solid fa-mobile-screen',
    },
    {
      title: 'Custom Software Solutions',
      description:
        'Developing tailored software solutions to address your unique business challenges and requirements.',
      icon: 'fa-solid fa-gears',
    },
    {
      title: 'UI/UX Design',
      description:
        'Crafting intuitive, visually appealing interfaces that enhance user satisfaction and conversion rates.',
      icon: 'fa-solid fa-palette',
    },
    {
      title: 'AI & Machine Learning',
      description:
        'Implementing intelligent solutions that automate processes and deliver data-driven insights.',
      icon: 'fa-solid fa-brain',
    },
    {
      title: 'Cloud Services',
      description:
        'Providing scalable, secure cloud infrastructure and migration services for optimal performance.',
      icon: 'fa-solid fa-cloud',
    },
  ];
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Lead Strategist',
      expertise: 'Digital Transformation, Business Strategy',
      bio: '15+ years leading digital innovation projects for Fortune 500 companies.',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20confident%20female%20CEO%20in%20business%20attire%20with%20neutral%20background%2C%20warm%20smile%2C%20approachable%20yet%20authoritative%20expression%2C%20high%20quality%20portrait%20with%20soft%20lighting&width=300&height=300&seq=7&orientation=squarish',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      expertise: 'Software Architecture, AI Solutions',
      bio: 'Former Google engineer with expertise in scalable systems and machine learning.',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20Asian%20male%20tech%20executive%20in%20smart%20casual%20attire%20with%20neutral%20background%2C%20confident%20expression%2C%20glasses%2C%20technical%20leader%20appearance%20with%20soft%20lighting&width=300&height=300&seq=8&orientation=squarish',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      expertise: 'UI/UX Design, Brand Identity',
      bio: 'Award-winning designer with a passion for creating memorable digital experiences.',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20creative%20female%20director%20with%20artistic%20style%2C%20casual%20professional%20attire%2C%20neutral%20background%2C%20expressive%20and%20artistic%20appearance%20with%20soft%20lighting&width=300&height=300&seq=9&orientation=squarish',
    },
    {
      name: 'David Wilson',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development, DevOps',
      bio: 'Coding enthusiast who has contributed to multiple open-source projects.',
      image:
        'https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20male%20software%20developer%20with%20casual%20tech%20company%20style%2C%20neutral%20background%2C%20friendly%20approachable%20expression%2C%20tech%20professional%20appearance%20with%20soft%20lighting&width=300&height=300&seq=10&orientation=squarish',
    },
  ];
  const caseStudies = [
    {
      title: 'E-commerce Platform Transformation',
      client: 'GlobalShop Inc.',
      overview:
        'Redesigned and rebuilt an outdated e-commerce platform, resulting in 150% increase in conversion rates and 200% growth in mobile sales.',
      achievements: [
        '150% increase in conversion rates',
        '200% growth in mobile sales',
        '45% reduction in cart abandonment',
      ],
      testimonial:
        'The team delivered beyond our expectations. Our new platform has transformed our business and significantly improved our bottom line.',
      author: 'Jennifer Smith, CMO at GlobalShop',
      beforeImage:
        'https://readdy.ai/api/search-image?query=Outdated%20e-commerce%20website%20with%20cluttered%20interface%2C%20poor%20navigation%2C%20limited%20product%20visibility%20on%20old%20computer%20screen%20with%20neutral%20background%20and%20soft%20lighting&width=500&height=300&seq=11&orientation=landscape',
      afterImage:
        'https://readdy.ai/api/search-image?query=Modern%20sleek%20e-commerce%20website%20with%20intuitive%20navigation%2C%20beautiful%20product%20displays%2C%20mobile%20responsive%20design%20on%20contemporary%20devices%20with%20neutral%20background%20and%20soft%20lighting&width=500&height=300&seq=12&orientation=landscape',
    },
    {
      title: 'Financial Dashboard Optimization',
      client: 'InvestSmart LLC',
      overview:
        'Developed an intuitive financial dashboard that simplified complex data visualization, reducing decision-making time by 60% and increasing user engagement by 85%.',
      achievements: [
        '60% reduction in decision-making time',
        '85% increase in user engagement',
        '40% increase in customer retention',
      ],
      testimonial:
        "The dashboard has revolutionized how our clients interact with their financial data. It's intuitive, powerful, and has become our key competitive advantage.",
      author: 'Robert Chen, CEO at InvestSmart',
      beforeImage:
        'https://readdy.ai/api/search-image?query=Complicated%20financial%20dashboard%20with%20overwhelming%20data%2C%20confusing%20charts%2C%20poor%20organization%20on%20desktop%20screen%20with%20neutral%20background%20and%20soft%20lighting&width=500&height=300&seq=13&orientation=landscape',
      afterImage:
        'https://readdy.ai/api/search-image?query=Streamlined%20financial%20dashboard%20with%20clear%20data%20visualization%2C%20intuitive%20charts%2C%20organized%20information%20hierarchy%20on%20modern%20display%20with%20neutral%20background%20and%20soft%20lighting&width=500&height=300&seq=14&orientation=landscape',
    },
    {
      title: 'Healthcare Management System Integration',
      client: 'MediCare Solutions',
      overview:
        'Created a comprehensive healthcare management system that integrated patient records, appointment scheduling, and billing, reducing administrative work by 75%.',
      achievements: [
        '75% reduction in administrative tasks',
        '90% improvement in data accuracy',
        '50% faster patient processing',
      ],
      testimonial:
        'This system has transformed our daily operations. Our staff can now focus more on patient care rather than paperwork, and the data accuracy has improved significantly.',
      author: 'Dr. Lisa Johnson, Director at MediCare',
      beforeImage:
        'https://readdy.ai/api/search-image?query=Disorganized%20healthcare%20office%20with%20paper%20files%2C%20multiple%20disconnected%20computer%20systems%2C%20inefficient%20workflow%20with%20neutral%20background%20and%20soft%20lighting&width=500&height=300&seq=15&orientation=landscape',
      afterImage:
        'https://readdy.ai/api/search-image?query=Modern%20healthcare%20facility%20with%20integrated%20digital%20systems%2C%20streamlined%20workflow%2C%20organized%20patient%20management%20interface%20on%20tablets%20and%20displays%20with%20neutral%20background%20and%20soft%20lighting&width=500&height=300&seq=16&orientation=landscape',
    },
  ];
  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <div className="min-h-screen font-sans">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-indigo-600">TechNova</h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8">
                <li>
                  <a
                    href="#home"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
              Get in Touch
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none !rounded-button whitespace-nowrap cursor-pointer"
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? 'fa-times' : 'fa-bars'
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="container mx-auto px-6 py-4">
              <ul className="space-y-4">
                <li>
                  <a
                    href="#home"
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="block text-gray-700 hover:text-indigo-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                    Get in Touch
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20tech%20office%20environment%20with%20abstract%20digital%20elements%2C%20soft%20gradient%20blue%20background%20that%20transitions%20to%20white%20on%20the%20left%20side%2C%20creating%20space%20for%20text%20while%20maintaining%20a%20high-tech%20professional%20atmosphere%20with%20subtle%20technology%20motifs&width=1440&height=800&seq=17&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transforming Ideas Into{' '}
              <span className="text-indigo-600">Digital Reality</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We craft innovative software solutions that drive business growth
              and deliver exceptional user experiences. Our expert team turns
              your vision into powerful, scalable technology.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
                Explore Our Portfolio
              </button>
              <button className="bg-transparent border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-md hover:bg-indigo-50 transition-colors text-lg !rounded-button whitespace-nowrap cursor-pointer">
                Our Services
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <i className="fa-solid fa-chevron-down text-2xl"></i>
          </a>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive software solutions tailored to your
              specific business needs, helping you stay ahead in the digital
              landscape.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="text-indigo-600 mb-4">
                  <i className={`${service.icon} text-4xl`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href="#"
                  className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors cursor-pointer"
                >
                  Learn More <i className="fa-solid fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Project Showcase */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have helped
              businesses achieve their digital transformation goals.
            </p>
            <div className="flex flex-wrap justify-center mt-8 space-x-2 space-y-2">
              <button
                onClick={() => setActiveFilter('all')}
                className={`${
                  activeFilter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                } px-4 py-2 rounded-md transition-colors mt-2 !rounded-button whitespace-nowrap cursor-pointer`}
              >
                All Projects
              </button>
              <button
                onClick={() => setActiveFilter('web-design')}
                className={`${
                  activeFilter === 'web-design'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                } px-4 py-2 rounded-md transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                Web Design
              </button>
              <button
                onClick={() => setActiveFilter('app-development')}
                className={`${
                  activeFilter === 'app-development'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                } px-4 py-2 rounded-md transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                App Development
              </button>
              <button
                onClick={() => setActiveFilter('software')}
                className={`${
                  activeFilter === 'software'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                } px-4 py-2 rounded-md transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                Software
              </button>
              <button
                onClick={() => setActiveFilter('ai-solutions')}
                className={`${
                  activeFilter === 'ai-solutions'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-700'
                } px-4 py-2 rounded-md transition-colors !rounded-button whitespace-nowrap cursor-pointer`}
              >
                AI Solutions
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">
                    {project.category
                      .split('-')
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(' ')}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">Client: {project.client}</p>
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center transition-colors"
                  >
                    View Case Study{' '}
                    <i className="fa-solid fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dive deeper into our most impactful projects and discover how
              we've helped businesses overcome challenges and achieve remarkable
              results.
            </p>
          </div>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="case-studies-slider"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                      <div className="relative h-80 lg:h-full">
                        <div className="absolute inset-0 flex">
                          <div className="w-1/2 overflow-hidden">
                            <img
                              src={study.beforeImage}
                              alt={`${study.title} Before`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-sm font-semibold rounded">
                              Before
                            </div>
                          </div>
                          <div className="w-1/2 overflow-hidden">
                            <img
                              src={study.afterImage}
                              alt={`${study.title} After`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded">
                              After
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2 p-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {study.title}
                      </h3>
                      <p className="text-indigo-600 font-medium mb-4">
                        Client: {study.client}
                      </p>
                      <p className="text-gray-600 mb-6">{study.overview}</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2 mb-6">
                        {study.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <i className="fa-solid fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <span className="text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-gray-600 italic mb-2">
                          "{study.testimonial}"
                        </p>
                        <p className="text-gray-800 font-medium">
                          — {study.author}
                        </p>
                      </div>
                      <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer">
                        View Full Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Team Expertise */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet our talented team of experts who are passionate about
              creating innovative solutions that drive your business forward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-medium">Expertise:</span>{' '}
                    {member.expertise}
                  </p>
                  <p className="text-gray-600">{member.bio}</p>
                  <div className="mt-4 flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      <i className="fa-brands fa-linkedin text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      <i className="fa-brands fa-twitter text-lg"></i>
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer"
                    >
                      <i className="fa-solid fa-envelope text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-indigo-50 rounded-lg p-8">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Growth Journey
                </h3>
                <p className="text-gray-600 mb-6">
                  Since our founding in 2020, we've experienced exponential
                  growth in our client base and project portfolio. Our
                  commitment to excellence and innovation has enabled us to
                  deliver over 300 successful projects across various
                  industries.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      300+
                    </div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      150+
                    </div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      25+
                    </div>
                    <div className="text-gray-600">Team Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">
                      15+
                    </div>
                    <div className="text-gray-600">Industry Awards</div>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 h-80">
                <div id="client-growth-chart" className="w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Ready to start your project? Contact us today and let's discuss
              how we can help you achieve your digital goals.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row bg-white text-gray-900 rounded-lg shadow-2xl overflow-hidden">
            <div className="lg:w-1/2 p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      id="project-type"
                      className="appearance-none w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm bg-white"
                    >
                      <option value="">Select a project type</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="custom-software">Custom Software</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cloud">Cloud Services</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <i className="fa-solid fa-chevron-down"></i>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/2 bg-indigo-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-indigo-200 mr-4">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Location</h4>
                    <p>
                      123 Tech Avenue, Innovation District
                      <br />
                      San Francisco, CA 94107
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-indigo-200 mr-4">
                    <i className="fa-solid fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p>
                      info@technova.com
                      <br />
                      support@technova.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-indigo-200 mr-4">
                    <i className="fa-solid fa-phone text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p>
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-indigo-200 mr-4">
                    <i className="fa-solid fa-clock text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p>
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="#"
                    className="bg-white text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors cursor-pointer"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">
                TechNova
              </h3>
              <p className="text-gray-400 mb-6">
                Innovative software solutions that drive business growth and
                deliver exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#case-studies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mobile App Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Custom Software
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    AI & Machine Learning
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cloud Services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter to receive updates on our latest
                projects and industry insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 text-sm border-none flex-grow"
                />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
              <div className="mt-6">
                <h4 className="text-lg font-semibold mb-2">We Accept</h4>
                <div className="flex space-x-3">
                  <i className="fa-brands fa-cc-visa text-2xl text-gray-300"></i>
                  <i className="fa-brands fa-cc-mastercard text-2xl text-gray-300"></i>
                  <i className="fa-brands fa-cc-amex text-2xl text-gray-300"></i>
                  <i className="fa-brands fa-cc-paypal text-2xl text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between">
            <p className="text-gray-400 text-sm">
              &copy; 2025 TechNova. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Back to Top Button */}
      <a
        href="#home"
        className="fixed bottom-8 right-8 bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-colors !rounded-button cursor-pointer"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </a>
    </div>
  );
};
export default MainComponent;

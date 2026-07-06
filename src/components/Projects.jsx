import Reveal from './Reveal'
import './Projects.css'

const PROJECTS = [
  {
    icon: '🌿',
    title: 'Leaf Detect & Cure',
    subtitle: 'AI-Based Plant Disease Detection System',
    description:
      'A deep learning web application that detects plant diseases from leaf images using Convolutional Neural Networks. Predicts disease class, displays confidence scores, and surfaces disease information through an interactive interface — plus an AI chatbot and admin oversight panel.',
    tech: ['Python', 'TensorFlow', 'Keras', 'CNN', 'OpenCV', 'Streamlit'],
  },
  {
    icon: '🍃',
    title: 'Plant Disease Detection — MobileNetV2',
    subtitle: 'Lightweight Transfer-Learning Classifier',
    description:
      'A lightweight, efficient plant disease detection system built with MobileNetV2 transfer learning. Classifies leaf diseases with high accuracy after preprocessing, resizing, and normalization — tuned for fast, near real-time predictions.',
    tech: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV', 'Streamlit'],
  },
  {
    icon: '🤖',
    title: 'AI Chatbot Assistant',
    subtitle: 'Conversational AI via API Integration',
    description:
      'An AI-powered chatbot built by integrating external AI APIs to generate intelligent, context-aware responses — demonstrating API integration, prompt handling, and an interactive conversational interface.',
    tech: ['Python', 'AI API Integration', 'Streamlit', 'HTML', 'CSS'],
  },
  {
    icon: '🛒',
    title: 'E-Commerce Management System',
    subtitle: 'Full-Stack Web Application',
    description:
      'A web-based e-commerce application with user authentication, product management, shopping cart functionality, and an admin dashboard for managing inventory and orders.',
    tech: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'SQLite'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="vein-track"></div>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Selected work — from trained model to shipped product.</h2>
        </Reveal>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) + 1} as="article" className="project-card">
              <div className="project-card__icon">{p.icon}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

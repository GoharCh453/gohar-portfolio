import Reveal from './Reveal'
import TiltCard from './TiltCard'
import './Projects.css'

const PROJECTS = [
  {
    icon: '🍃',
    title: 'Plant Disease Detection — MobileNetV2',
    subtitle: 'Lightweight Transfer-Learning Classifier',
    description:
      'A lightweight, efficient plant disease detection system built with MobileNetV2 transfer learning. Classifies leaf diseases with high accuracy after preprocessing, resizing, and normalization — tuned for fast, near real-time predictions.',
    tech: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV', 'Streamlit'],
  },
  {
    icon: '👨\u200d🍳',
    title: 'ChefAI',
    subtitle: 'AI-Powered Recipe Generation Platform',
    description:
      'A full-stack app that uses Google Gemini to dynamically generate personalized recipes — complete with ingredients, instructions, and nutritional facts — from any dish a user types in. Includes a community "Explore" feed with trending cards, category filters, and social features like likes, bookmarks, and ratings that drive the trending feed.',
    tech: ['React (Vite)', 'Django REST', 'Google Gemini API', 'JWT Auth', 'PostgreSQL'],
  },
  {
    icon: '🎯',
    title: 'AI Interview Coach',
    subtitle: 'Premium Mock Interview Training Platform',
    description:
      'A full-stack mock interview platform where Google Gemini conducts realistic, role-specific interviews with dynamic follow-up questions, parses uploaded resumes to tailor questions, and evaluates every answer on technical accuracy, grammar, and communication — backed by a TensorFlow scoring engine and OpenCV-based webcam face monitoring. Wraps up with a polished ReportLab PDF scorecard.',
    tech: ['React (Vite)', 'Django REST', 'Gemini API', 'TensorFlow', 'OpenCV', 'ReportLab'],
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
            <TiltCard key={p.title} delay={(i % 4) + 1} className="project-card">
              <div className="project-card__icon">{p.icon}</div>
              <h3 className="project-card__title">{p.title}</h3>
              <p className="project-card__subtitle">{p.subtitle}</p>
              <p className="project-card__desc">{p.description}</p>
              <div className="project-card__tech">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}

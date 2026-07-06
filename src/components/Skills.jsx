import Reveal from './Reveal'
import './Skills.css'

const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    skills: ['Python', 'JavaScript (ES6)', 'HTML5', 'CSS3'],
  },
  {
    title: 'AI & Machine Learning',
    skills: [
      'TensorFlow', 'Keras', 'MobileNetV2', 'OpenCV', 'Computer Vision',
      'Deep Learning', 'CNN', 'NumPy', 'Pandas', 'Scikit-learn',
    ],
  },
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    skills: ['Django', 'Python', 'Streamlit'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'SQLite'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'GitHub', 'Google Colab', 'VS Code'],
  },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="vein-track"></div>
      <div className="container">
        <Reveal>
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">A toolkit spanning models, interfaces, and infrastructure.</h2>
        </Reveal>

        <div className="skills__grid">
          {SKILL_GROUPS.map((group, gi) => (
            <Reveal key={group.title} delay={(gi % 4) + 1} as="div" className="skills__card">
              <h3 className="skills__card-title">{group.title}</h3>
              <div className="skills__tags">
                {group.skills.map((s) => (
                  <span key={s} className="skills__tag">{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

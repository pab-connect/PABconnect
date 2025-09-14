
// Componente interno para os "pontos" da habilidade
const SkillDot = ({ active }) => (
  <span
    className={`block w-3 h-3 rounded-full border border-gray-300 ${
      active ? "bg-purple-600 border-purple-700" : "bg-gray-200"
    }`}
  ></span>
)

const Skills = ({ skills }) => {
  return (
    <ul className="space-y-3">
      {skills.map((skill) => (
        <li key={skill.name} className="flex justify-between items-center">
          <span className="text-gray-700 font-medium">{skill.name}</span>
          <div
            className="flex items-center gap-1.5"
            aria-label={`Nível de ${skill.name}: ${skill.level || 0} de 5`}
          >
            {[...Array(5)].map((_, i) => (
              <SkillDot key={i} active={i < skill.level || 0} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Skills

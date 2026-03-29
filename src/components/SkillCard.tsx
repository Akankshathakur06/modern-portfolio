interface SkillCardProps {
  name: string;
  icon?: React.ReactNode;
  category: string;
  proficiency: number; // 0-100
}

const SkillCard = ({ name, icon, category, proficiency }: SkillCardProps) => {
  return (
    <div className="glass-card group hover:scale-[1.02] transition-transform duration-300">
      <div className="flex items-center gap-4 mb-4">
        {icon && <div className="p-3 bg-accent-blue/10 text-accent-blue rounded-xl group-hover:bg-accent-blue/20 transition-colors">
          {icon}
        </div>}
        <div>
          <h3 className="text-lg font-bold text-white">{name}</h3>
          <p className="text-xs text-gray-400 uppercase tracking-widest">{category}</p>
        </div>
      </div>
      
      <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent-blue rounded-full transition-all duration-1000 group-hover:bg-accent-purple"
          style={{ width: `${proficiency}%` }}
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500">Proficiency</span>
        <span className="text-xs text-accent-blue font-bold">{proficiency}%</span>
      </div>
    </div>
  );
};

export default SkillCard;

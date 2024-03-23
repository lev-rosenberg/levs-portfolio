type SkillsProps = {
  skillList: string[];
  classes?: string;
};

export default function Skills({ skillList, classes }: SkillsProps) {
  return (
    <div className={`flex flex-wrap ${classes}`}>
      {skillList.map((skill, i) => (
        <p className="about skill" key={i}>
          {skill}
        </p>
      ))}
    </div>
  );
}

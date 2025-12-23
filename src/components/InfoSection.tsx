interface InfoSectionProps {
  title: string;
  description: string;
}

const InfoSection = ({ title, description }: InfoSectionProps) => {
  return (
    <div className="space-y-3">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground">
        {title}
      </h2>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default InfoSection;

import { motion } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Briefcase, Calendar } from 'lucide-react';

const experienceMeta = [
  { technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Docker', 'Prisma ORM'] },
  { technologies: ['React', 'Next.js', 'Python', 'Django', '.Net', 'C#', 'PostgreSQL', 'Flutter'] },
];

export function Experience() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const experiences = (t('experience.items', { returnObjects: true }) as Array<{
    company: string;
    position: string;
    period: string;
    location: string;
    type: string;
    description: string;
    responsibilities: string[];
  }>).map((item, i) => ({
    ...item,
    id: i + 1,
    technologies: experienceMeta[i]?.technologies ?? [],
  }));

  return (
    <section id="experience" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            {t('experience.label')}
          </span>
          <h2 className="mt-4 text-foreground">
            {t('experience.title')}
          </h2>
          <p className="mt-4">
            {t('experience.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? 'md:text-right' : 'md:grid-flow-dense'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1/2 hidden sm:block z-10" />

                {/* Empty column for alternating layout */}
                <div className="hidden md:block" />

                {/* Content */}
                <div
                  className={`relative ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'
                  }`}
                >
                  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                    {/* Header */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-primary">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-xs font-semibold uppercase tracking-wider">
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-foreground">
                        {exp.position}
                      </h3>
                      
                      <div className="text-lg font-semibold text-foreground">
                        {exp.company}
                      </div>
                      
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div>•</div>
                        <div>{exp.location}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <li 
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          {resp}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-md bg-muted text-xs font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Hover gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
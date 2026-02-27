import { motion } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const projectImages = [
  "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzA3MDAzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

const projectMeta = [
  {
    github: "https://github.com/lucaasnogueira/Gestao-Clinica",
    demo: "https://example.com",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Redis & Bull", "Docker", "TypeScript", "Tailwind CSS & Radix UI"],
  },
];

export function Projects() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const projects = (t('projects.items', { returnObjects: true }) as Array<{
    title: string;
    category: string;
    description: string;
    problem: string;
    solution: string;
    challenges: string[];
    results: string[];
  }>).map((item, i) => ({
    ...item,
    id: i + 1,
    image: projectImages[i] ?? '',
    github: projectMeta[i]?.github ?? '#',
    demo: projectMeta[i]?.demo ?? '#',
    stack: projectMeta[i]?.stack ?? [],
  }));

  return (
    <section
      id="projects"
      className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            {t('projects.label')}
          </span>
          <h2 className="mt-4 text-foreground">
            {t('projects.title')}
          </h2>
          <p className="mt-4">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-background">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-end justify-center gap-4 p-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-lg font-medium transition-all"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t('projects.problem')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t('projects.solution')}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {project.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t('projects.challenges')}
                    </h4>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      {t('projects.results')}
                    </h4>
                    <ul className="space-y-2">
                      {project.results.map((result, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-muted text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

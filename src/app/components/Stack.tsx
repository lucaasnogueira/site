import { motion } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Code2, 
  Database, 
  Cloud, 
  Blocks, 
  Server, 
  Smartphone,
  Lock,
  Zap
} from 'lucide-react';

export function Stack() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const stackCategories = [
    {
      icon: Code2,
      titleKey: 'stack.categories.frontend',
      color: 'from-blue-500 to-cyan-500',
      technologies: [
        'React & Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Redux & Zustand',
        'React Query',
        'Webpack & Vite'
      ]
    },
    {
      icon: Server,
      titleKey: 'stack.categories.backend',
      color: 'from-green-500 to-emerald-500',
      technologies: [
        'Node.js & NestJS',
        'Python & Django',
        '.NET Core',
        'GraphQL & REST',
        'Microservices',
        'Event-Driven Architecture'
      ]
    },
    {
      icon: Database,
      titleKey: 'stack.categories.database',
      color: 'from-purple-500 to-pink-500',
      technologies: [
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'Prisma ORM',
        'Elasticsearch',
        'Database Design'
      ]
    },
    {
      icon: Cloud,
      titleKey: 'stack.categories.infra',
      color: 'from-orange-500 to-red-500',
      technologies: [
        'AWS & Azure',
        'Docker & Kubernetes',
        'CI/CD Pipelines',
        'Terraform',
        'Nginx',
        'Monitoring & Logging'
      ]
    },
    {
      icon: Blocks,
      titleKey: 'stack.categories.architecture',
      color: 'from-indigo-500 to-blue-500',
      technologies: [
        'Clean Architecture',
        'Domain-Driven Design',
        'SOLID Principles',
        'Design Patterns',
        'System Design',
        'Scalability Strategy'
      ]
    },
    {
      icon: Zap,
      titleKey: 'stack.categories.performance',
      color: 'from-yellow-500 to-amber-500',
      technologies: [
        'Code Optimization',
        'Caching Strategies',
        'Load Balancing',
        'CDN Integration',
        'Performance Monitoring',
        'SEO Optimization'
      ]
    },
    {
      icon: Lock,
      titleKey: 'stack.categories.security',
      color: 'from-red-500 to-rose-500',
      technologies: [
        'OAuth & JWT',
        'API Security',
        'Penetration Testing',
        'OWASP Best Practices',
        'Encryption',
        'Compliance (LGPD/GDPR)'
      ]
    },
    {
      icon: Smartphone,
      titleKey: 'stack.categories.mobile',
      color: 'from-teal-500 to-cyan-500',
      technologies: [
        'React Native',
        'Flutter',
        'Progressive Web Apps',
        'Responsive Design',
        'Mobile-First',
        'Cross-Platform'
      ]
    }
  ];

  return (
    <section id="stack" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
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
            {t('stack.label')}
          </span>
          <h2 className="mt-4 text-foreground">
            {t('stack.title')}
          </h2>
          <p className="mt-4">
            {t('stack.subtitle')}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  {/* Icon with gradient background */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${category.color} mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-4 text-foreground">
                    {t(category.titleKey)}
                  </h3>

                  {/* Technologies */}
                  <ul className="space-y-2">
                    {category.technologies.map((tech) => (
                      <li 
                        key={tech}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
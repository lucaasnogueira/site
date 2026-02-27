import { motion } from 'motion/react';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Linkedin, Github, Send, MapPin } from 'lucide-react';

export function Contact() {
  const ref = useRef(null);
  const { t } = useTranslation();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'lucasnogueirasilva7@gmail.com',
      href: 'mailto:lucasnogueirasilva7@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/lucas-nogueira-b82102189',
      href: 'https://www.linkedin.com/in/lucas-nogueira-b82102189/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@lucaasnogueira',
      href: 'https://github.com/lucaasnogueira',
      color: 'from-gray-700 to-gray-500'
    }
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-wider uppercase">
            {t('contact.label')}
          </span>
          <h2 className="mt-4 text-foreground">
            {t('contact.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-foreground mb-4">
                {t('contact.infoTitle')}
              </h3>
              <p className="text-muted-foreground mb-6">
                {t('contact.infoSubtitle')}
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.02, x: 8 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-muted-foreground">
                        {method.label}
                      </div>
                      <div className="text-foreground font-medium">
                        {method.value}
                      </div>
                    </div>
                    <Send className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </motion.a>
                );
              })}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 pt-4"
            >
              <div className="p-2 rounded-lg bg-muted">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">{t('contact.location')}</div>
                <div className="font-medium text-foreground">{t('contact.locationValue')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative"
          >
            <div className="h-full p-8 md:p-10 rounded-2xl bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
              </div>

              {/* Content */}
              <div className="relative space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    {t('contact.ctaTitle')}
                  </h3>
                  <p className="text-white/90 text-lg">
                    {t('contact.ctaSubtitle')}
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{t('contact.quickReply')}</div>
                      <div className="text-sm text-white/80">
                        {t('contact.quickReplyDesc')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{t('contact.freeConsulting')}</div>
                      <div className="text-sm text-white/80">
                        {t('contact.freeConsultingDesc')}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">{t('contact.customProposal')}</div>
                      <div className="text-sm text-white/80">
                        {t('contact.customProposalDesc')}
                      </div>
                    </div>
                  </div>
                </div>

                <motion.a
                  href="mailto:lucasnogueirasilva7@gmail.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-xl font-semibold hover:shadow-xl transition-all duration-300 mt-8"
                >
                  <Mail className="w-5 h-5" />
                  {t('contact.sendEmail')}
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
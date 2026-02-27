import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const footerLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.stack'), href: '#stack' },
    { label: t('nav.projects'), href: '#projects' },
    { label: t('nav.experience'), href: '#experience' },
    { label: t('nav.contact'), href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/lucaasnogueira', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/lucas-nogueira-b82102189/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:lucasnogueirasilva7@gmail.com', label: 'Email' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <a href="#" className="inline-block text-2xl font-bold tracking-tight">
              <span className="text-foreground">{'<'}</span>
              <span className="text-primary">Luc4s</span>
              <span className="text-foreground">{'/>'}</span>
            </a>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.connect')}</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lucas Portfolio. {t('footer.rights')}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-2">
            {t('footer.madeWith')} <Heart className="w-4 h-4 text-primary fill-current" /> {t('footer.energy')}
          </p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { OVIS_KICKSTARTER_URL } from '../data/ovisData';

const OvisKickstarter: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const { t } = useTranslation();
  return (
    <div className={`ovis-kickstarter ${className}`}>
      <p className="ovis-kickstarter-label" dir="ltr">
        <span aria-hidden="true" />
        {t('ovis.kickstarter.available')}
      </p>
      <a
        className="ovis-kickstarter-button"
        href={OVIS_KICKSTARTER_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('ovis.kickstarter.action')}
        <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </div>
  );
};

export default OvisKickstarter;

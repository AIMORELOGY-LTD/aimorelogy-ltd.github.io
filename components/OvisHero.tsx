import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowDown,
  ArrowUpRight,
  Cable,
  CircuitBoard,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';
import { RoutePath } from '../types';
import { OVIS_ASSETS } from '../data/ovisData';
import OvisKickstarter from './OvisKickstarter';
import './ovis.css';

export const OvisHero: React.FC<{
  home?: boolean;
  primaryHeading?: boolean;
}> = ({ home = false, primaryHeading = true }) => {
  const { t } = useTranslation();
  const lang = useLang();
  const Heading = primaryHeading ? 'h1' : 'h2';
  if (home) {
    return (
      <div className="ovis-fullscreen">
        <Heading className="ovis-sr-only">OVIS {t('ovis.name')}</Heading>
        <Link
          className="ovis-fullscreen-link"
          to={withLang(lang, RoutePath.PRODUCT_OVIS)}
          aria-label={t('ovis.explore')}
        >
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${OVIS_ASSETS}product.webp`}
            />
            <img
              src={`${OVIS_ASSETS}banner-full.webp`}
              alt={t('ovis.heroAlt')}
              width="1920"
              height="1080"
              fetchPriority="high"
            />
          </picture>
          <div className="ovis-fullscreen-mobile" aria-hidden="true">
            <span>{t('ovis.series')}</span>
            <strong>OVIS</strong>
            <p>{t('ovis.name')}</p>
            <small>1.5 TOPS · 1080p @ 60 FPS</small>
          </div>
          <span className="ovis-fullscreen-cta" aria-hidden="true">
            {t('ovis.explore')}
            <ArrowUpRight size={18} />
          </span>
        </Link>
        <OvisKickstarter className="ovis-fullscreen-campaign" />
      </div>
    );
  }
  return (
    <div className={`ovis-hero ${home ? 'ovis-hero-home' : ''}`}>
      <div className="ovis-wrap ovis-hero-copy">
        <div>
          <span className="ovis-eyebrow">AIMORELOGY / EDGE VISION</span>
          <Heading>
            <span dir="ltr">OVIS</span>
            <span className="ovis-hero-name">{t('ovis.name')}</span>
          </Heading>
        </div>
        <div className="ovis-hero-intro">
          <p>{t('ovis.intro')}</p>
          <OvisKickstarter className="ovis-hero-campaign" />
          <div className="ovis-actions">
            {home ? (
              <Link
                className="ovis-button"
                to={withLang(lang, RoutePath.PRODUCT_OVIS)}
              >
                {t('ovis.explore')}
                <ArrowRight size={17} />
              </Link>
            ) : (
              <a className="ovis-button" href="#specs">
                {t('ovis.specsLink')}
                <ArrowDown size={17} />
              </a>
            )}
            <Link
              className="ovis-text-link"
              to={withLang(lang, RoutePath.CONTACT)}
            >
              {t('ovis.contact')}
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
      <picture className="ovis-hero-image">
        <source
          media="(max-width: 639px)"
          srcSet={`${OVIS_ASSETS}product-small.webp`}
        />
        <img
          src={`${OVIS_ASSETS}banner.webp`}
          alt={t('ovis.heroAlt')}
          width="1175"
          height="500"
          fetchPriority="high"
        />
      </picture>
    </div>
  );
};

export const OvisSpotlight: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const productPath = withLang(lang, RoutePath.PRODUCT_OVIS);
  const features = [
    {
      key: 'vision',
      image: 'people',
      target: 'demos',
      tag: 'DETECTION / TRACKING',
    },
    {
      key: 'imaging',
      image: 'ai-isp',
      target: 'lowlight',
      tag: 'ISP / AI-BNR',
    },
    {
      key: 'modular',
      image: 'stack',
      target: 'overview',
      tag: 'MODULAR HARDWARE',
    },
    {
      key: 'manager',
      image: 'manager-config',
      target: 'manager',
      tag: 'WEB MANAGER',
    },
  ];
  return (
    <section id="ovis" className="ovis-page ovis-section ovis-spotlight">
      <div className="ovis-feature-wrap">
        <div className="ovis-feature-heading">
          <div>
            <span className="ovis-eyebrow">
              {t('ovis.series')} / EDGE VISION
            </span>
            <h2>{t('ovis.homeTitle')}</h2>
          </div>
          <div>
            <p>{t('ovis.homeIntro')}</p>
            <OvisKickstarter className="ovis-feature-campaign" />
            <Link className="ovis-text-link" to={productPath}>
              {t('ovis.explore')}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <div className="ovis-feature-layout">
          <Link className="ovis-feature-product" to={productPath}>
            <div>
              <span className="ovis-eyebrow">AIMORELOGY / OVIS</span>
              <h3>OVIS</h3>
              <p>{t('ovis.name')}</p>
            </div>
            <img
              loading="lazy"
              src={`${OVIS_ASSETS}product.webp`}
              alt={t('ovis.productAlt')}
              width="900"
              height="900"
            />
            <div className="ovis-feature-product-specs">
              <div>
                <strong>
                  1.5 <small>TOPS</small>
                </strong>
                <span>{t('ovis.homeMetrics.compute')}</span>
              </div>
              <div>
                <strong>
                  1080p <small>60 FPS</small>
                </strong>
                <span>{t('ovis.homeMetrics.capture')}</span>
              </div>
              <div>
                <strong>F1.0</strong>
                <span>{t('ovis.homeMetrics.lens')}</span>
              </div>
              <div>
                <strong>
                  28 × 28 <small>mm</small>
                </strong>
                <span>{t('ovis.homeMetrics.size')}</span>
              </div>
            </div>
            <div className="ovis-feature-product-link">
              {t('ovis.explore')}
              <ArrowUpRight size={19} />
            </div>
          </Link>
          <div className="ovis-feature-cards">
            {features.map(({ key, image, target, tag }) => (
              <Link
                className={`ovis-feature-card ovis-feature-${key}`}
                to={`${productPath}#${target}`}
                key={key}
              >
                <div className="ovis-feature-media">
                  <img
                    loading="lazy"
                    src={`${OVIS_ASSETS}${image}.webp`}
                    alt={t(`ovis.homeFeatures.${key}.title`)}
                    width="800"
                    height="450"
                  />
                  <span>{tag}</span>
                </div>
                <div className="ovis-feature-copy">
                  <h3>
                    {t(`ovis.homeFeatures.${key}.title`)}
                    <ArrowUpRight size={18} />
                  </h3>
                  <p>{t(`ovis.homeFeatures.${key}.text`)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="ovis-feature-connections">
          <Link to={`${productPath}#specs`}>
            <Cable size={28} strokeWidth={1.4} />
            <div>
              <h3>{t('ovis.homeFeatures.connection.title')}</h3>
              <p>{t('ovis.homeFeatures.connection.text')}</p>
            </div>
            <ArrowUpRight size={18} />
          </Link>
          <Link to={`${productPath}#resources`}>
            <CircuitBoard size={28} strokeWidth={1.4} />
            <div>
              <h3>{t('ovis.homeFeatures.platform.title')}</h3>
              <p>{t('ovis.homeFeatures.platform.text')}</p>
            </div>
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

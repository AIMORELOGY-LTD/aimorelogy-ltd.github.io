import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Aperture,
  Cable,
  Layers3,
  Maximize2,
  X,
  BookOpen,
  Monitor,
  MessagesSquare,
  Code2,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Seo from '../components/Seo';
import { OvisHero } from '../components/OvisHero';
import {
  OVIS_ASSETS,
  ovisSpecs,
  ovisDemos,
  ovisBoards,
} from '../data/ovisData';
import { useLang, withLang } from '../i18n-routing';
import { RoutePath } from '../types';

const ProductDetail_OVIS: React.FC = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const location = useLocation();
  const [manager, setManager] = useState('discovery');
  const [boardIndex, setBoardIndex] = useState(0);
  const [zoom, setZoom] = useState<{ src: string; alt: string } | null>(null);
  const [detailZoom, setDetailZoom] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const page = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const board = ovisBoards[boardIndex];
  const icons = [Cpu, Aperture, Cable, Layers3];

  useEffect(() => {
    if (location.hash)
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
  }, [location.hash]);

  useEffect(() => {
    if (!zoom || !dialog.current) return;
    setDetailZoom(false);
    lastFocus.current = document.activeElement as HTMLElement;
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
      lastFocus.current?.focus();
    };
  }, [zoom]);

  const image = (name: string, alt: string, className = '') => (
    <button
      className={`ovis-zoom ${className}`}
      onClick={() => setZoom({ src: `${OVIS_ASSETS}${name}.webp`, alt })}
      aria-label={`${t('ovis.enlarge')}: ${alt}`}
    >
      <img
        src={`${OVIS_ASSETS}${name}.webp`}
        alt={alt}
        loading="lazy"
        width="1200"
        height="900"
      />
      <span className="ovis-zoom-icon">
        <Maximize2 size={18} />
      </span>
    </button>
  );

  const video = (id: string, title: string) => (
    <video
      controls
      playsInline
      preload="none"
      poster={`${OVIS_ASSETS}${id}.webp`}
      aria-label={title}
      onPlay={(event) =>
        page.current?.querySelectorAll('video').forEach((other) => {
          if (other !== event.currentTarget) other.pause();
        })
      }
    >
      <source src={`${OVIS_ASSETS}${id}.mp4`} type="video/mp4" />
      <a href={`${OVIS_ASSETS}${id}.mp4`}>{t('ovis.videoFallback')}</a>
    </video>
  );

  const heading = (number: string, key: string) => (
    <div className="ovis-section-heading">
      <div>
        <span className="ovis-eyebrow">
          {number} / {t(`ovis.sections.${key}.eyebrow`)}
        </span>
        <h2>{t(`ovis.sections.${key}.title`)}</h2>
      </div>
      <p>{t(`ovis.sections.${key}.intro`)}</p>
    </div>
  );

  return (
    <div className="ovis-page" ref={page}>
      <Seo
        title={`OVIS ${t('ovis.name')} | AIMORELOGY`}
        description={t('ovis.intro')}
        image={`${OVIS_ASSETS}banner.webp`}
        type="product"
        keywords="OVIS, CV1842H-P, SC235HAI, edge AI camera, 1.5 TOPS, USB UVC, AI ISP"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: 'AIMORELOGY OVIS',
          description: t('ovis.intro'),
          image: `https://aimorelogy.com${OVIS_ASSETS}product.webp`,
          brand: { '@type': 'Brand', name: 'AIMORELOGY' },
          model: 'OVIS',
          category: t('ovis.name'),
        }}
      />
      <OvisHero />
      <div className="ovis-statbar">
        <div className="ovis-wrap">
          {[
            ['1.5', 'TOPS', 'compute'],
            ['1080p', '60 FPS', 'capture'],
            ['28 × 28', 'mm', 'modular'],
            ['Web', 'Manager', 'manager'],
          ].map(([value, unit, key]) => (
            <div key={key}>
              <strong dir="ltr">
                {value} <small>{unit}</small>
              </strong>
              <span>{t(`ovis.highlights.${key}`)}</span>
            </div>
          ))}
        </div>
      </div>
      <nav className="ovis-subnav" aria-label={t('ovis.pageNav')}>
        <div className="ovis-wrap">
          <span className="ovis-subnav-brand">OVIS</span>
          {['overview', 'demos', 'specs', 'kits', 'resources'].map((id) => (
            <a key={id} href={`#${id}`}>
              {t(`ovis.nav.${id}`)}
            </a>
          ))}
          <Link to={withLang(lang, RoutePath.CONTACT)}>
            {t('ovis.contact')}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </nav>

      <section id="overview" className="ovis-section ovis-pale">
        <div className="ovis-wrap">
          {heading('01', 'modular')}
          <div className="ovis-split ovis-modular-grid">
            <div className="ovis-architecture-image">
              {image('stack', t('ovis.stackAlt'))}
              <div className="ovis-dimension-label" dir="ltr">
                28 × 28 × 31.7 mm
              </div>
            </div>
            <div className="ovis-architecture-list">
              {['sensor', 'core', 'extension'].map((key, i) => (
                <div key={key}>
                  <span className="ovis-number">0{i + 1}</span>
                  <div>
                    <h3>{t(`ovis.architecture.${key}.title`)}</h3>
                    <p>{t(`ovis.architecture.${key}.text`)}</p>
                  </div>
                </div>
              ))}
              <p className="ovis-note">{t('ovis.customNote')}</p>
            </div>
          </div>
          <div className="ovis-pipeline">
            {['capture', 'isp', 'inference', 'encode', 'transmit'].map(
              (key, i) => (
                <div key={key}>
                  <span>0{i + 1}</span>
                  <strong>{t(`ovis.pipeline.${key}`)}</strong>
                  {i < 4 && <ArrowRight size={16} />}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="demos" className="ovis-section ovis-dark">
        <div className="ovis-wrap">
          {heading('02', 'demos')}
          <div className="ovis-demo-grid">
            {ovisDemos.map(({ id, fps }) => (
              <article className="ovis-demo" key={id}>
                <div className="ovis-video-frame">
                  {video(id, t(`ovis.demos.${id}.title`))}
                </div>
                <div className="ovis-demo-info">
                  <div>
                    <h3>{t(`ovis.demos.${id}.title`)}</h3>
                    <p>{t(`ovis.demos.${id}.text`)}</p>
                  </div>
                  <div className="ovis-fps">
                    <strong dir="ltr">
                      {fps}
                      <small> FPS</small>
                    </strong>
                    <span>{t('ovis.reference')}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="ovis-note ovis-demo-note">
            {t('ovis.performanceNote')}
          </p>
          <div id="lowlight" className="ovis-lowlight">
            <div>
              <span className="ovis-eyebrow">ISP / AI-BNR</span>
              <h2>{t('ovis.lowlightTitle')}</h2>
              <p className="ovis-lead">{t('ovis.lowlightIntro')}</p>
            </div>
            <div className="ovis-lowlight-videos">
              {['lowlight', 'ai-isp'].map((id) => (
                <article key={id}>
                  <div className="ovis-video-frame">
                    {video(id, t(`ovis.videos.${id}`))}
                  </div>
                  <h3>{t(`ovis.videos.${id}`)}</h3>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="manager" className="ovis-section">
        <div className="ovis-wrap">
          {heading('03', 'manager')}
          <div
            className="ovis-tabs"
            role="group"
            aria-label={t('ovis.managerViews')}
          >
            {['discovery', 'config', 'models'].map((id, i) => (
              <button
                key={id}
                aria-pressed={manager === id}
                onClick={() => setManager(id)}
              >
                <span>0{i + 1}</span>
                {t(`ovis.manager.${id}.title`)}
              </button>
            ))}
          </div>
          <div className="ovis-manager-panel">
            <div className="ovis-manager-bar">
              <span className="ovis-window-dots">● ● ●</span>
              <span dir="ltr">OVIS / WEB MANAGER</span>
              <span>{t('ovis.interfacePreview')}</span>
            </div>
            {image(`manager-${manager}`, t(`ovis.manager.${manager}.title`))}
          </div>
          <div className="ovis-manager-caption">
            <p>{t(`ovis.manager.${manager}.text`)}</p>
            <a
              href="https://ovis.aimorelogy.com/"
              target="_blank"
              rel="noreferrer"
            >
              {t('ovis.openManager')}
              <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section id="specs" className="ovis-section ovis-pale">
        <div className="ovis-wrap">
          {heading('04', 'specs')}
          <div className="ovis-spec-grid">
            {ovisSpecs.map((group, i) => {
              const Icon = icons[i];
              return (
                <div className="ovis-spec-card" key={group.id}>
                  <div className="ovis-spec-title">
                    <Icon size={23} strokeWidth={1.6} />
                    <h3>{t(`ovis.groups.${group.id}`)}</h3>
                    <span>0{i + 1}</span>
                  </div>
                  <table>
                    <caption className="ovis-sr-only">
                      {t(`ovis.groups.${group.id}`)}
                    </caption>
                    <colgroup>
                      <col style={{ width: '34%' }} />
                      <col style={{ width: '66%' }} />
                    </colgroup>
                    <tbody>
                      {group.rows.map((row) => (
                        <tr key={row.key}>
                          <th scope="row">{t(`ovis.labels.${row.key}`)}</th>
                          <td>
                            {'value' in row ? (
                              <bdi dir="ltr">{row.value}</bdi>
                            ) : (
                              t(`ovis.${row.text}`)
                            )}
                            {'detail' in row && (
                              <small>{t(`ovis.${row.detail}`)}</small>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
          <p className="ovis-note ovis-spec-note">{t('ovis.specNote')}</p>
        </div>
      </section>

      <section className="ovis-section">
        <div className="ovis-wrap">
          {heading('05', 'interfaces')}
          <div className="ovis-board-layout">
            <div>
              <div
                className="ovis-board-buttons"
                role="group"
                aria-label={t('ovis.boardViews')}
              >
                {ovisBoards.map((item, i) => (
                  <button
                    key={item.id}
                    aria-pressed={boardIndex === i}
                    onClick={() => setBoardIndex(i)}
                  >
                    <span>0{i + 1}</span>
                    <strong>{t(`ovis.boards.${item.id}`)}</strong>
                    <ArrowUpRight size={18} />
                  </button>
                ))}
              </div>
              <table className="ovis-port-table">
                <caption className="ovis-sr-only">
                  {t('ovis.boardDetails')}
                </caption>
                <tbody>
                  <tr>
                    <th scope="row">{t('ovis.chip')}</th>
                    <td dir="ltr">{board.chip}</td>
                  </tr>
                  <tr>
                    <th scope="row">{t('ovis.connectors')}</th>
                    <td>
                      {board.ports.map((port) => (
                        <div dir="ltr" key={port}>
                          {port}
                        </div>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ovis-board-image">
              {image(`interface-${board.id}`, t(`ovis.boards.${board.id}`))}
              <span className="ovis-note">{t('ovis.enlargeHint')}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="kits" className="ovis-section ovis-pale">
        <div className="ovis-wrap">
          {heading('06', 'kits')}
          <div className="ovis-kits">
            {['dual', 'triple'].map((id, i) => (
              <article key={id}>
                <div className="ovis-kit-label">
                  <span>0{i + 1} / OVIS</span>
                  <span>{t(`ovis.kits.${id}.tag`)}</span>
                </div>
                {image(`kit-${id}`, t(`ovis.kits.${id}.title`))}
                <div className="ovis-kit-copy">
                  <h3>{t(`ovis.kits.${id}.title`)}</h3>
                  <p>{t(`ovis.kits.${id}.text`)}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ovis-kit-table-wrap">
            <table className="ovis-kit-table">
              <caption className="ovis-sr-only">
                {t('ovis.kitComparison')}
              </caption>
              <thead>
                <tr>
                  <th scope="col">{t('ovis.components')}</th>
                  <th scope="col">{t('ovis.kits.dual.title')}</th>
                  <th scope="col">{t('ovis.kits.triple.title')}</th>
                </tr>
              </thead>
              <tbody>
                {['sensor', 'core', 'cvbs'].map((id) => (
                  <tr key={id}>
                    <th scope="row">{t(`ovis.boards.${id}`)}</th>
                    <td>{id === 'cvbs' ? '—' : '1'}</td>
                    <td>1</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ovis-note ovis-spec-note">{t('ovis.kitNote')}</p>
        </div>
      </section>

      <section id="resources" className="ovis-section ovis-resources">
        <div className="ovis-wrap">
          {heading('07', 'resources')}
          <div className="ovis-resource-grid">
            {[
              {
                key: 'sdk',
                icon: Code2,
                href: 'https://github.com/aimorelogy-ovis/aimorelogy-ovis-sdk',
                external: true,
              },
              {
                key: 'docs',
                icon: BookOpen,
                href: 'https://docs.aimorelogy.com/',
                external: true,
              },
              {
                key: 'manager',
                icon: Monitor,
                href: 'https://ovis.aimorelogy.com/',
                external: true,
              },
              {
                key: 'forum',
                icon: MessagesSquare,
                href: 'https://forum.aimorelogy.com/',
                external: true,
              },
            ].map(({ key, icon: Icon, href, external }) => (
              <a
                className="ovis-resource"
                href={href}
                key={key}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
              >
                <Icon size={26} strokeWidth={1.5} />
                <ArrowUpRight className="ovis-resource-arrow" size={19} />
                <h3>{t(`ovis.resources.${key}.title`)}</h3>
                <p>{t(`ovis.resources.${key}.text`)}</p>
                <span>{t(`ovis.resources.${key}.action`)}</span>
              </a>
            ))}
          </div>
          <div className="ovis-end-cta">
            <div>
              <span className="ovis-eyebrow">BUILD WITH OVIS</span>
              <h2>{t('ovis.endTitle')}</h2>
              <p>{t('ovis.endText')}</p>
            </div>
            <Link
              className="ovis-button"
              to={withLang(lang, RoutePath.CONTACT)}
            >
              {t('ovis.contact')}
              <ArrowRight size={18} />
            </Link>
          </div>
          <p className="ovis-note">{t('ovis.civil')}</p>
        </div>
      </section>
      {zoom && (
        <dialog
          className="ovis-lightbox"
          ref={dialog}
          aria-label={zoom.alt}
          onClose={() => setZoom(null)}
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current?.close();
          }}
        >
          <button
            className="ovis-lightbox-close"
            autoFocus
            aria-label={t('ovis.close')}
            onClick={() => dialog.current?.close()}
          >
            <X size={24} />
          </button>
          <button
            className="ovis-lightbox-scale"
            aria-pressed={detailZoom}
            onClick={() => setDetailZoom(!detailZoom)}
          >
            <Maximize2 size={15} />
            {t(detailZoom ? 'ovis.fitImage' : 'ovis.actualSize')}
          </button>
          <div
            className={`ovis-lightbox-media ${detailZoom ? 'is-zoomed' : ''}`}
            tabIndex={0}
            aria-label={zoom.alt}
          >
            <img src={zoom.src} alt={zoom.alt} />
          </div>
          <p>{zoom.alt}</p>
        </dialog>
      )}
    </div>
  );
};

export default ProductDetail_OVIS;

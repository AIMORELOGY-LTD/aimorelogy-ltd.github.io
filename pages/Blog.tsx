import React from 'react';
import BlogCard from '../components/BlogCard';
import { useTranslation } from 'react-i18next';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../constants';
import Seo from '../components/Seo';

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const posts = t('blog.posts', { returnObjects: true, defaultValue: BLOG_POSTS }) as BlogPost[];
  const seoTitle = t('blog.metaTitle');
  const seoDescription = t('blog.metaDescription');
  const seoKeywords = 'AIMORELOGY, 爱谋科技, blog, insights, news, FPV, UAV, drone, edge AI';
  return (
    <div className="bg-white min-h-screen py-20">
      <Seo title={seoTitle} description={seoDescription} keywords={seoKeywords} />
      {/* Hero Header for Blog */}
      <div className="container mx-auto px-6 mb-20">
        <div className="bg-gray-100 border border-gray-200 p-12 md:p-20 relative overflow-hidden rounded-sm">
          <div className="relative z-10 max-w-4xl">
            <span className="text-[#4f4398] font-bold uppercase tracking-widest mb-4 block">{t('blog.kicker')}</span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase">
              {t('blog.titleLine1')} <br /> {t('blog.titleLine2')}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              {t('blog.subtitle')}
            </p>
          </div>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4f4398]/5 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
          {/* Duplicate for visual fullness */}
          {posts.map((post) => (
            <BlogCard key={`dup-${post.id}`} post={{...post, id: post.id + 10}} />
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="bg-transparent border-2 border-gray-900 text-gray-900 hover:bg-[#4f4398] hover:border-[#4f4398] hover:text-white font-bold py-3 px-10 uppercase tracking-widest transition-colors">
            {t('blog.loadMore')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

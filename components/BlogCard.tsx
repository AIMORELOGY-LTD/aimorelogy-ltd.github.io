
import React from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost, RoutePath } from '../types';
import { useTranslation } from 'react-i18next';
import { useLang, withLang } from '../i18n-routing';

interface BlogCardProps {
  post: BlogPost;
  hideImage?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, hideImage = false }) => {
  const { t } = useTranslation();
  const lang = useLang();
  return (
    <div className="group bg-white flex flex-col h-full border border-gray-200 hover:shadow-xl hover:border-[#4f4398] transition-all duration-300">
      {!hideImage && (
        <div className="h-48 overflow-hidden relative bg-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-xs text-[#4f4398] font-bold mb-3 uppercase tracking-wider">
          <Calendar size={12} />
          <span>{post.date}</span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 uppercase leading-tight group-hover:text-[#4f4398] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow text-sm leading-relaxed">
          {post.excerpt}
        </p>
        
        <Link to={withLang(lang, RoutePath.BLOG)} className="inline-block text-gray-900 font-bold text-sm uppercase hover:text-[#4f4398] transition-colors underline decoration-[#4f4398] decoration-2 underline-offset-4">
          {t('blog.readStory')}
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

import React from 'react';

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`avatar ${className}`} {...props}>
      {children}
    </div>
  );
};

interface AvatarImageProps {
  src?: string;
  alt?: string;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({ src, alt, ...props }) => {
  if (!src) return null;
  
  return (
    <img 
      src={src} 
      alt={alt} 
      className="avatar__image"
      {...props}
    />
  );
};

interface AvatarFallbackProps {
  className?: string;
  children: React.ReactNode;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`avatar__fallback ${className}`} {...props}>
      {children}
    </div>
  );
};

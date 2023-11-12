import React from 'react';

interface SectionTitleProps {
  title: string;
  caption?: string;
}

const Title = ({ title, caption }: SectionTitleProps) => {
  return (
    <div className="text-center py-8">
      <h1 className="text-3xl font-bold text-white lg:text-4xl">{title}</h1>
      {caption && <p className="text-gray-400 mt-2">{caption}</p>}
    </div>
  );
};

export default Title;

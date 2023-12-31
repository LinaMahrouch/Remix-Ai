import React from 'react';

interface SectionTitleProps {
  title: string;
  caption?: string;
}

const Title = ({ title, caption }: SectionTitleProps) => {
  return (
    <div className="text-center py-4 mt-3 lg:py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-zinc-300 lg:text-6xl ">{title}</h1>
      {caption && <p className="text-md lg:text-2xl  lg:pb-8 md:text-xl text-gray-400 mt-2">{caption}</p>}
    </div>
  );
};

export default Title;

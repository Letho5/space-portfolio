import Image from "next/image";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  category?: string;
  techStack?: string[];
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  category,
  techStack,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] card-glow bg-[#030014]/80 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] group">
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="category-badge">{category}</span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative overflow-hidden">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="relative p-5">
        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:subtitle-glow transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Tags */}
        {techStack && techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech) => (
              <span key={tech} className="tech-badge text-xs">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* View Live Button */}
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 py-2.5 px-5 button-glow rounded-lg text-white text-sm font-semibold mt-2"
        >
          <span>View Live</span>
          <HiOutlineExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
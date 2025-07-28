// components/ProjectGallery.js
'use client';

import Image from 'next/image'; // For Next.js optimized images
import WorkProjectCards from '../general/WorkProjectCards';
import { workProjectsData } from '@/data/workProjectsData';
import { motion } from 'framer-motion'; 
import Link from 'next/link';

const row1Projects = [workProjectsData[0], workProjectsData[1], workProjectsData[2]];
const row2projects = [workProjectsData[3], workProjectsData[4]];
const row3projects = [workProjectsData[5], workProjectsData[6], workProjectsData[7]];
const row4projects = [workProjectsData[8], workProjectsData[9]];
const row5projects = [workProjectsData[10]];

const WorkHeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="relative mx-auto pt-40 pb-58"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
        <div className="flex flex-col gap-4" style={{ opacity: 1, willChange: 'auto' }}>
          {/* Row 1 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-end">
            {row1Projects.map((data, index) => (
              <Link key={index} href={`/work/${data.slug}`} >
                <WorkProjectCards {...data} />
              </Link>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">
            {row2projects.map((data, index) => (
              <Link key={index} href={`/work/${data.slug}`}>
                <WorkProjectCards {...data} />
              </Link>
            ))}
          </div>

          {/* Row 3 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">
            {row3projects.map((data, index) => (
              <Link key={index} href={`/work/${data.slug}`} >
                <WorkProjectCards {...data} />
              </Link>
            
            ))}
          </div>

          {/* Row 4 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">
            {row4projects.map((data, index) => (
              <Link href={`/work/${data.slug}`} key={index} >
              <WorkProjectCards {...data} />
              </Link>
            ))}
          </div>

          {/* Row 5 */}
          <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-start">
            {row5projects.map((data, index) => (
              <Link href={`/work/${data.slug}`} key={index} >
              <WorkProjectCards {...data} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkHeroSection;

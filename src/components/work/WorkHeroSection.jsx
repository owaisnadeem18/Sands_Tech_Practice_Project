// components/ProjectGallery.js
import Image from 'next/image'; // For Next.js optimized images
import WorkProjectCards from '../general/WorkProjectCards';
import { workProjectsData } from '@/data/workProjectsData';

const row1Projects = [workProjectsData[0] , workProjectsData[1] , workProjectsData[2]] // Dropbox x McLaren, Adaline, Superpower
const row2projects = [workProjectsData[3] , workProjectsData[4]]
const row3projects = [workProjectsData[5] , workProjectsData[6] , workProjectsData[7]]
const row4projects = [workProjectsData[8] , workProjectsData[9]]
const row5projects = [workProjectsData[10]]

const WorkHeroSection = () => {
    return (
        <div className="relative mx-auto pt-32 md: pb-58">
            <div className="mx-auto flex max-w-[1400px] flex-col gap-8">
                <div className="flex flex-col gap-4" style={{ opacity: 1, willChange: 'auto' }}>
                    {/* Row 1 */}
                    <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-end">

                        {
                            row1Projects.map((data , index) => 
                                <WorkProjectCards key={index} {...data} />
                            )
                        }

                    </div>

                    {/* Row 2 */}
                    <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">


                        {
                            row2projects.map((data , index) => <WorkProjectCards key={index} {...data} />  )
                        }

                    </div>

                    {/* Row 3 */}
                    <div className="flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center">
                        {/* Uniswap Project (Video) */}
                       
                        {
                            row3projects.map(( data , index) => {
                             return   <WorkProjectCards key={index} {...data} />
                            })
                        }

                    </div>

                    {/* Row 04 */}

                    <div className='flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-center' >

                        {
                            row4projects.map((data , index) => {
                                return <WorkProjectCards key={index} {...data} />
                            })
                        }

                    </div>


                    {/* Last Row */}

                    <div className='flex w-full justify-center gap-[clamp(12px,2vw,16px)] items-start' >
                        {
                            row5projects.map((data , index) => {
                                return <WorkProjectCards key={index} {...data} />
                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorkHeroSection;
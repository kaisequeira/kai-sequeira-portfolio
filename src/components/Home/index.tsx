import React from 'react';
import ContactCircle from './IconCircle';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileArrowDown, faMailBulk, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import StickyButton from '../StickyItems/StickyButton';
import MotionShape from '../motionShape';
import '@/app/globals.css';

const Home: React.FC = () => {

  return (
    <div className="bg-bgr w-screen h-screen flex flex-col md:space-y-7 sm:space-y-4 space-y-2 items-center justify-center">
      <div className='absolute top-0 left-0 w-screen'>
        <StickyButton icon={<FontAwesomeIcon className='md:size-10 size-6 pl-0.5 absolute justify-center items-center' icon={faPlay} />}/>
      </div>
      <MotionShape className="absolute top-1/4 right-1/4 rotate-45 size-52 bg-shapes"/>
      <MotionShape className="absolute bottom-1/4 left-1/4 rotate-12 size-28 bg-shapes" reverse={true}/>
      <MotionShape className="absolute rounded-full top-1/10 right-1/6 rotate-45 size-28 bg-shapes" reverse={true}/>
      <h1 className="text-center z-10">
        Kai Sequeira
      </h1>
      <h4 className="text-center z-10">
        Full stack developer studying @ UNSW
      </h4>
      <div className='flex space-x-4 z-10'>
        <ContactCircle
          icon={<FontAwesomeIcon className='size-2/3' icon={faGithub} />}
          color='#4285F4'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-7/12' icon={faLinkedin} />}
          color='#34A853'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-5/12' icon={faFileArrowDown} />}
          color='#FBBC05'
        />
        <ContactCircle
          icon={<FontAwesomeIcon className='size-7/12' icon={faMailBulk} />}
          color='#EA4335'
        />
      </div>
    </div>
  );
};

export default Home;
import React from 'react';
import { useTranslation } from 'react-i18next';
import Vipps from '../assets/vipps.png';
import gras from '../assets/gras.jpg';

function SupportSection() {

  const { t, i18n } = useTranslation();

  return (
    <div className='max-w-[1940px] ease-in-out duration-500 text-white select-none mt-[-96px] w-full sm:h-screen md:h-screen h-[400px] mx-auto text-center flex-col justify-center py-16 px-4'>
        <h1 className='text-2xl md:text-4xl font-bold md:py-6 ease-in-out duration-500'>{t('Support')}</h1>
        <div className='flex justify-center space-x-4 py-6'>
          
          <div>
            <img className='rounded-md' src={Vipps} />
          </div>

          <div>
            <img className='w-[291px] rounded-md' src={gras} />
          </div>
          
        </div>
    </div>
  )
}

export default SupportSection
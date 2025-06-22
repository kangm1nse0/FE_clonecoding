import React from 'react';
import './Header.css';
import { Bars3Icon } from '@heroicons/react/24/outline';

import { CameraIcon } from '@heroicons/react/24/outline'; // 올바른 import

const Header = () => {
  return (
    <div className='header'>
      <div className='logo'><CameraIcon className="w-3 h-3 text-gray-500" /> Album</div>
     <Bars3Icon className="w-6 h-6 text-gray-800" />
    </div>
  );
}

export default Header;
import React from 'react';

import { Facebook, Twitter, Email, Reddit } from 'react-sharingbuttons'


const SharingButtons = () => {
  const url = 'https://eth-ter-i-die.rip/'
  const shareText = 'Check out Eth-ter-I-Die. Use it to guide your loved ones to your Ethereum assets after you have popped your clogs!'

  return (
    <div>

    <p>
    Share via: {'  '}
      <Email url={url} /> {'  '}
      <Twitter url={url} shareText={shareText} />{'  '}
      <Reddit url={url} />{'  '}
      <Facebook url={url} />
      </p>

    </div>
  )
}


export default SharingButtons;

// src/components/FAQ.js
import React from 'react';
import CTAbutton from '../../components/CTAbutton/CTAbutton';
import './CTA.css';
import Phone from '../../assets/apple-phone.svg';
import Text from '../../assets/imessage.svg';
import Whatsapp from '../../assets/Whatsapp.svg';
// import Messenger from '../../assets/Messenger.svg';

const CTA = () => (
  <div className="cta-full">
    <div className="cta-icons" id="cta-1">
      {/* <p>Let&apos;s iMessage</p> */}
      <CTAbutton svg={Text} href="SMS:+19052267054" />
    </div>
    <div className="cta-icons" id="cta-2">
      {/* <p>Or let&apos;s just talk...</p> */}
      <CTAbutton svg={Phone} href="https://m.me/236564709539737" />
    </div>
    <div className="cta-icons" id="cta-3">
      {/* <p>Or let&apos;s just talk...</p> */}
      <CTAbutton svg={Whatsapp} href="https://wa.me/+19052267054" />
    </div>
  </div>
);

export default CTA;

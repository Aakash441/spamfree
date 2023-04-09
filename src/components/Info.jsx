import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Info = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div className='container'>
    <div className='des' id='desc'>
      <div><p>Description</p></div>
    </div>
     <div className='head1' data-aos="fade-left">
     <div>
       <h1>What is Spam Email?</h1>
       <p>Spam email is unsolicited and unwanted junk email sent out in bulk to an indiscriminate recipient list. 
       Typically, spam is sent for commercial purposes. It can be sent in massive volume by botnets, networks of infected computers.</p>
     </div>
     </div>

     <div className='head2' data-aos="fade-left">
     <div>
       <h1>Why do people send out spam email?</h1>
       <p>Often, spam email is sent for commercial purposes. While some people view it as unethical, many businesses still use spam. The cost per email is incredibly low, and businesses 
       can send out mass quantities consistently. Spam email can also be a malicious attempt to gain access to your computer.</p>
      </div>
     </div>
     <div className='head3' data-aos="fade-right">
     <div>
       <h1>How do you stop spam email?</h1>
       <p>Spam email can be difficult to stop, as it can be sent from botnets. Botnets are a network of previously infected computers. As a result, the original spammer can be difficult to trace and stop.

      If you receive a message that appears to be spam--for example, if you don’t recognize the sender--mark the message as spam in your email application. Don't click any links or attached files, including opt-out or unsubscribe links. Spammers sometimes 
      include these links to confirm that your email address is legitimate, or the links may trigger malicious webpages or downloads.</p>
      </div>

     </div>
     <div className='head4' data-aos="fade-left">
     <div>
       <h1>Is spam email dangerous?</h1>
       <p>Spam email can be dangerous. It can include malicious links that can infect your computer with malware (see What is malware?). Do not click links in spam. 
       Dangerous spam emails often sound urgent, so you feel the need to act. Keep reading to learn about some of the basic spam types.</p>
     </div> 
    
     </div>
     
    </div>
  )
}

export default Info

import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MicrosoftClarityProps {
  projectId?: string;
}

const MicrosoftClarity: React.FC<MicrosoftClarityProps> = ({ 
  projectId = 'suqs3vfr0s' // Updated with your actual Clarity project ID
}) => {
  return (
    <Helmet>
      {/* Microsoft Clarity */}
      <script>
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${projectId}");
        `}
      </script>
    </Helmet>
  );
};

export default MicrosoftClarity;
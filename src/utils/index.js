export const regex_patterns = {
  url: `^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$`,
  full_name: `^[a-zA-Z]{2,60}(?: [a-zA-Z]{2,60}){0,3}$`,
  company: `^[a-zA-Z0-9]{2,100}(?: [a-zA-Z0-9]{2,100}){0,9}$`,
  role: `^[a-zA-Z0-9]{2,60}(?: [a-zA-Z0-9]{2,60}){0,3}$`,
  email: '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$',
  tel: `(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})`,
};

export const integrations = {
  // Google Tag Manager
  GTAG_CONFIG: `window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.GTAG_ID}');`,
  GTAG_EVENT: `gtag('event', 'conversion', {
    'send_to': '${process.env.GTAG_ID}/-KWlCKXz998BELewrIYD',
    'value': 2.0,
    'currency': 'USD'});`,
  // Intercom
  INTERCOM_SETTINGS: `window.intercomSettings = { app_id: "${process.env.INTERCOM_ID}" };`,
  INTERCOM_SCRIPT: `(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${process.env.INTERCOM_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();`,
  // Yandex
  YANDEX_SCRIPT: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(68251516, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true});`,
  FACEBOOK_PIXEL: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init', '3752305314819934');fbq('set','agent','tmgoogletagmanager', '3752305314819934');fbq('track', "PageView");`,
};

export const blog_post_image_sizes = {
  main: {
    retina: {
      width: 1462,
      height: 614,
    },
    normal: {
      width: 731,
      height: 307,
    },
  },
  other: {
    retina: {
      width: 702,
      height: 294,
    },
    normal: {
      width: 351,
      height: 147,
    },
  },
};

export const modalInputFieldsGenerator = (form) => [
  { id: 'ebook_full_name', name: 'full_name', type: 'text', label: 'Full name *', placeholder: 'Full name', required: true, pattern: regex_patterns.full_name, value: form.full_name },
  { id: 'ebook_email', name: 'email', type: 'email', label: 'Email *', placeholder: 'Email', required: true, pattern: regex_patterns.email, value: form.email },
  { id: 'ebook_company', name: 'company', type: 'text', label: 'Company *', placeholder: 'Company', required: true, value: form.company },
  { id: 'ebook_role', name: 'role', type: 'text', label: 'Role *', placeholder: 'Role', required: true, pattern: form.role, value: form.role },
];

export const calendly_url = 'https://calendly.com/buglance/30min';
export const hubspot_url = 'https://meetings.hubspot.com/buglance/demo-call';
export const mailer_url = 'https://website-mailer-t3kmsy7rgq-ew.a.run.app/request';
export const mailer_url_startups = 'https://website-mailer-t3kmsy7rgq-ew.a.run.app/startups';

export const GAEvent = ({ action, params }) => {
  console.log(`%c window.gtag(event, action: ${action}, params: ${JSON.stringify(params)})`, 'font-size:8px; background-color: #000; color: #6fb1ff');
  window.gtag('event', action, params);
};

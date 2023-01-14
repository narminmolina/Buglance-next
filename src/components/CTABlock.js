import RequestDemoSection from 'components/RequestDemo';
import SubscribeSection from 'components/SubscribeSection';
import TestMyAppSection from 'components/TestMyAppSection';
import LearnMoreSection from 'components/LearnMoreSection';

const CTABlock = ({ widgetType, title, placeholder, label, link, ...props }) => {
  switch (widgetType) {
    case 'requestdemo':
      return <RequestDemoSection title={title} buttonLabel={label} link={link} {...props} />;
    case 'testmyapp':
      return <TestMyAppSection title={title} placeholder={placeholder} cta={label} {...props} />;
    case 'subscription':
      return <SubscribeSection cta={label} placeholder={placeholder} title={title} {...props} />;
    case 'learnmore':
      return <LearnMoreSection cta={label} placeholder={placeholder} title={title} {...props} />;
    default:
      return null;
  }
};
export default CTABlock;

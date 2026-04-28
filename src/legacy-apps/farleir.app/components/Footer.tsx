import { GitHubIcon, LinkedInIcon, XIcon, FacebookIcon, InstagramIcon } from './icons/FeatureIcons';
import { useI18n } from '../i18n';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700 mt-12">
      <div className="container mx-auto px-6 py-8 text-center text-gray-500 dark:text-gray-400">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
          <a href="https://aistudio.google.com/apps?source=faq" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {t('footerConnectTitle')}
          </a>
        </h3>
        <p className="mt-2 max-w-lg mx-auto">
          {t('footerConnectText_part1')}
          <a href="https://support.google.com/drive/answer/2494822" target="_blank" rel="noopener noreferrer" className="font-semibold underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Google Drive
          </a>
          .
        </p>
        <div className="mt-6 mb-8">
            <a href="https://go.farleir.com/go"
               target="_blank" rel="noopener noreferrer" 
               className="inline-block bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 dark:bg-gray-200 dark:text-gray-900 dark:hover:bg-white">
                {t('otherApps')}
            </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://go.farleir.com/footer-github" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <GitHubIcon className="h-6 w-6" />
          </a>
          <a href="https://go.farleir.com/footer-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <LinkedInIcon className="h-6 w-6" />
          </a>
          <a href="https://go.farleir.com/footer-x" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <XIcon className="h-6 w-6" />
          </a>
          <a href="https://go.farleir.com/footer-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <InstagramIcon className="h-6 w-6" />
          </a>
           <a href="https://go.farleir.com/footer-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
            <FacebookIcon className="h-6 w-6" />
          </a>
        </div>

        <p className="text-sm">
          &copy; {new Date().getFullYear()}{' '}
          <a 
            href="https://go.farleir.com/dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-semibold underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Farleir
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import { ExternalLink } from "@/components/external-link";
import { EXTERNAL_LINKS } from "@/config/external-links";

export const MadeWithDyad = () => {
  return (
    <div className="p-4 text-center">
      <ExternalLink 
        href={EXTERNAL_LINKS.DYAD_HOME}
        className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      >
        Made with Dyad
      </ExternalLink>
    </div>
  );
};
import { LinkService } from "@/services/link-service";

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  href, 
  children, 
  ...props 
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    LinkService.redirectToExternal(href);
  };

  return (
    <a 
      href={href} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
};
import { isAllowedExternalLink } from "@/config/external-links";

export class LinkService {
  static redirectToExternal(url: string): void {
    // Validate the URL before redirecting
    if (!isAllowedExternalLink(url)) {
      console.warn("Blocked attempt to redirect to untrusted domain:", url);
      // Redirect to a safe page or show an error
      window.location.href = "/";
      return;
    }

    // Log the redirect for monitoring (in a real app, this would go to your analytics/monitoring service)
    console.log("Redirecting to external URL:", url);
    
    // Perform the redirect
    window.location.href = url;
  }
}
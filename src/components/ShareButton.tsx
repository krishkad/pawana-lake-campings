
import { Facebook, Twitter, Linkedin, Link, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShareButtonsProps {
  title: string;
  url: string;
}

const ShareButtons = ({ title, url }: ShareButtonsProps) => {
  // const copyToClipboard = async () => {
  //   try {
  //     await navigator.clipboard.writeText(url);
  //   //   toast({
  //   //     title: "Link Copied!",
  //   //     description: "The blog post link has been copied to your clipboard.",
  //   //   });
  //   } catch (err) {
  //   //   toast({
  //   //     title: "Copy Failed",
  //   //     description: "Unable to copy link. Please try again.",
  //   //     variant: "destructive",
  //   //   });
  //   }
  // };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
  };

  return (
    <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
      <span className="text-sm font-medium text-gray-600 mr-2">Share:</span>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareUrls.facebook, '_blank')}
        className="hover:bg-blue-50 hover:border-blue-300"
      >
        <Facebook className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareUrls.twitter, '_blank')}
        className="hover:bg-sky-50 hover:border-sky-300"
      >
        <Twitter className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareUrls.linkedin, '_blank')}
        className="hover:bg-blue-50 hover:border-blue-300"
      >
        <Linkedin className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(shareUrls.whatsapp, '_blank')}
        className="hover:bg-green-50 hover:border-green-300"
      >
        <MessageCircle className="w-4 h-4" />
      </Button>
      
      <Button
        variant="outline"
        size="sm"
        // onClick={copyToClipboard}
        className="hover:bg-gray-50 hover:border-gray-300"
      >
        <Link className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default ShareButtons;
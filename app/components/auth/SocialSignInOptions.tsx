import React from "react";
import {
  faGoogle,
  faFacebook,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TButtonLink } from "./common/ui/TLink";

export const SocialSignInOptions: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2">
      <TButtonLink
        icon={<FontAwesomeIcon icon={faGoogle} />}
        color="text-red-500"
        hoverColor="hover:text-red-600"
        href="http://localhost:3000/api/auth/google"
      />
      <TButtonLink
        icon={<FontAwesomeIcon icon={faFacebook} />}
        color="text-blue-500"
        hoverColor="hover:text-blue-600"
        href="http://localhost:3000/api/auth/facebook"
      />
      <TButtonLink
        icon={<FontAwesomeIcon icon={faXTwitter} />}
        color="text-gray-500"
        hoverColor="hover:text-gray-600"
        href="http://localhost:3000/api/auth/twitter"
      />
      <TButtonLink
        icon={<FontAwesomeIcon icon={faGithub} />}
        color="text-gray-500"
        hoverColor="hover:text-gray-600"
        href="http://localhost:3000/api/auth/github"
      />
    </div>
  );
};

import React from "react";
import {
  faGoogle,
  faFacebook,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { TLink } from "./common/ui/TLink";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

export const SocialSignInOptions: React.FC = () => {
  return (
    <div className="flex justify-center space-x-2">
      <TLink
        icon={<FontAwesomeIcon icon={faGoogle} />}
        color="text-red-500"
        hoverColor="hover:text-red-600"
        href="http://localhost:3000/api/auth/google"
        buttonStyle
      />
      <TLink
        icon={<FontAwesomeIcon icon={faFacebook} />}
        color="text-blue-500"
        hoverColor="hover:text-blue-600"
        href="http://localhost:3000/api/auth/facebook"
        buttonStyle
      />
      <TLink
        icon={<FontAwesomeIcon icon={faXTwitter} />}
        color="text-gray-500"
        hoverColor="hover:text-gray-600"
        href="http://localhost:3000/api/auth/twitter"
        buttonStyle
      />
      <TLink
        icon={<FontAwesomeIcon icon={faGithub} />}
        color="text-gray-500"
        hoverColor="hover:text-gray-600"
        href="http://localhost:3000/api/auth/github"
        buttonStyle
      />
    </div>
  );
};

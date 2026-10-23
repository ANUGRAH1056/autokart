
import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      const botScript = document.createElement("script");
      botScript.src =
        "https://files.bpcontent.cloud/2026/10/23/18/20261023184857-XOQGT5CN.js";
      botScript.async = true;

      document.body.appendChild(botScript);
    };

    document.body.appendChild(injectScript);

    return () => {
      injectScript.onload = null;
      injectScript.remove();
    };
  }, []);

  return null;
}

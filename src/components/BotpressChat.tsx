import { useEffect } from "react";

export default function BotpressChat() {
  useEffect(() => {
    const injectScript = document.createElement("script");
    injectScript.src =
      "https://cdn.botpress.cloud/webchat/v5.0/inject.js";
    injectScript.async = true;

    const botScript = document.createElement("script");
    botScript.src =
      "https://files.bpcontent.cloud/2026/10/23/18/20261023184857-XOQGT5CN.js";
    botScript.defer = true;

    document.body.appendChild(injectScript);
    document.body.appendChild(botScript);

    return () => {
      injectScript.remove();
      botScript.remove();
    };
  }, []);

  return null;
}

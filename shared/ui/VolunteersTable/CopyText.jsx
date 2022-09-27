import { IconButton, useClipboard } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { MdContentCopy } from "react-icons/md";
import normalizeName from "../../../utils/normalizeName";
import { url } from "../../../utils/apiClient";

const text = (name) => {
  return `
    Olá, ${normalizeName(name)}!

    Você conhece o #MeRepresenta?

    É uma plataforma de Direitos Humanos que da visibilidade a candidaturas vulneráveis ou invisivilizadas. O objetivo da plataforma é diminuir a distância entre eleitoras/es e candidatas/os comprometidas/os com os direitos sociais, civis e políticos da população.

    Gostaria que você se cadastrasse aqui: ${url}.

    Obrigada!
  `;
};

const CopyText = ({ NM_URNA_CANDIDATO }) => {
  const { t } = useTranslation("voluntarios", { keyPrefix: "table" });

  const { hasCopied, onCopy } = useClipboard(text(NM_URNA_CANDIDATO));
  return (
    <IconButton
      variant="ghost"
      icon={<MdContentCopy />}
      size="md"
      aria-label={t("copyText")}
      onClick={onCopy}
      colorScheme={hasCopied ? "green" : "default"}
      title={t("copyText")}
    />
  );
};

export default CopyText;

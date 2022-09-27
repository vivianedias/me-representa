import { Badge } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export const INVITED = "INVITED";
export const NOT_INVITED = "NOT_INVITED";

const StatusBadge = ({ status }) => {
  const { t } = useTranslation("voluntarios", { keyPrefix: "table.badges" });
  const colors = {
    [NOT_INVITED]: "purple",
    [INVITED]: "green",
    NA: "default",
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case INVITED:
        return t("invited");

      case NOT_INVITED:
        return t("notInvited");

      default:
        return "NA";
    }
  };

  return <Badge colorScheme={colors[status]}>{getStatusLabel(status)}</Badge>;
};

StatusBadge.defaultProps = {
  status: "NA",
};

export default StatusBadge;

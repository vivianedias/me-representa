import { Badge } from "@chakra-ui/react";

export const INVITED = "INVITED";
export const NOT_INVITED = "NOT_INVITED";

const StatusBadge = ({ status }) => {
  const colors = {
    [NOT_INVITED]: "purple",
    [INVITED]: "green",
    NA: "default",
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case INVITED:
        return "Contatado";

      case NOT_INVITED:
        return "Não contatado";

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

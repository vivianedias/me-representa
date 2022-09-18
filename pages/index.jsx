import Home from "../shared/ui/Home/Home";
import "../shared/locales/i18n";
import { Box } from "@chakra-ui/react";

export default function App({ children }) {
  return (
    <Box bgColor="red">
      {children({
        input: {
          onChange: () => "",
        },
      })}
    </Box>
  );
}

<App>
  {function children({ input }) {
    return <Box {...input}>{oi}</Box>;
  }}
</App>;

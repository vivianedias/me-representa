import { Flex, VStack } from "@chakra-ui/layout"
import { Heading, IconButton, Text } from "@chakra-ui/react"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"
import FieldCheckbox from "/shared/ui/components/FieldCheckbox"

const CountContext = React.createContext()

const MAX_POINTS = 5

function countReducer(state, action) {
  switch (action.type) {
    case "increment": {
      return { ...state, count: Math.min(state.count + 1, MAX_POINTS) }
    }
    case "decrement": {
      return { ...state, count: Math.max(state.count - 1, 0) }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function CountProvider({ children }) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: 0,
    maxCount: MAX_POINTS,
  })
  const value = { state, dispatch }
  return <CountContext.Provider value={value}>{children}</CountContext.Provider>
}

function useCount() {
  const context = React.useContext(CountContext)
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider")
  }
  return context
}

const PointsBox = ({ title }) => {
  return (
    <VStack background="pink.500" minH="80px">
      <Flex id="header" justifyContent="space-between" w="100%" padding={3}>
        <Heading size="sm" textTransform="uppercase" color="white">
          {title}
        </Heading>
        <FieldCheckbox name="titulo" />
      </Flex>

      <Flex justifyContent="space-between" w="100%" align="center" padding={3}>
        <CountProvider>
          <PointsBox.CounterBar />
          <PointsBox.ActionsBar />
        </CountProvider>
      </Flex>
    </VStack>
  )
}

PointsBox.CounterBar = function CounterBar() {
  const { state } = useCount()
  return (
    <Flex
      borderRadius={4}
      justifyContent="space-evenly"
      flexGrow={1}
      maxH="5px"
      marginRight={4}
      backgroundColor="white"
      overflow="hidden"
    >
      {Array.from({ length: state.maxCount }).map((_, index) => (
        <span
          key={`counter-key-${index}`}
          style={{
            flexGrow: 1,
            height: "5px",
            backgroundColor:
              index <= state.count - 1 ? "yellow" : "transparent",
            marginRight: "5px",
          }}
        />
      ))}
    </Flex>
  )
}

PointsBox.ActionsBar = function ActionsBar() {
  const { state, dispatch } = useCount()
  return (
    <Flex align="center">
      <IconButton
        aria-label={state.count + ""}
        icon={<FaCaretLeft />}
        onClick={() => dispatch({ type: "decrement" })}
        variant="ghost"
        color="white"
        size="sm"
      />
      <Text align="center" color="white" marginLeft={4} marginRight={4}>
        {state.count}
      </Text>
      <IconButton
        aria-label={state.count + ""}
        icon={<FaCaretRight />}
        onClick={() => dispatch({ type: "increment" })}
        variant="ghost"
        color="white"
        size="sm"
      />
    </Flex>
  )
}

export default PointsBox

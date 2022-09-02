import React from "react"
import styles from './styles.module.css'
import { useTheme } from "@chakra-ui/react"

const MosaicItem = ({children}) => {
    const theme = useTheme()
    const colors = {
        blue: theme.colors.blue['100'],
        pink: theme.colors.pink['100'],
        yellow: theme.colors.yellow['100']
    }
    const getBoxProps = () => {
        return {
            className: styles.box
        }
    }
    return children({colors, getBoxProps}) 
}

export default MosaicItem
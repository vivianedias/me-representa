import React from "react"
import styles from './styles.module.css'
import { useTheme } from "@chakra-ui/react"

const MosaicItem = ({children}) => {
    const theme = useTheme()
    const colors = {
        blue: theme.colors.teal['500'],
        pink: theme.colors.pink['500'],
        yellow: theme.colors.yellow['400']
    }
    const getBoxProps = () => {
        return {
            className: styles.box
        }
    }
    return children({colors, getBoxProps}) 
}

export default MosaicItem
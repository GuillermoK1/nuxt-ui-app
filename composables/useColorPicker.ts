export const useColorPicker = () => {
    const hexPrimaryColor = useState<string>('hexPrimaryColor', () => '#787878')
    const hexSecondaryColor = useState<string>('hexSecondaryColor', () => '#787878')

    const handleHexPrimaryChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        hexPrimaryColor.value = target.value
    }

    const handleHexSecondaryChange = (e: Event) => {
        const target = e.target as HTMLInputElement
        hexSecondaryColor.value = target.value
    }

    return {
        hexPrimaryColor,
        hexSecondaryColor,
        handleHexPrimaryChange,
        handleHexSecondaryChange
    }
}

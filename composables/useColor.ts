export const useColor = () => {
  const primaryColor = useState('primary-color', () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('color-A') || 'blue'
    }
    return 'indigo'
  })

  const secondaryColor = useState('secondary-color', () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('color-B') || 'teal'
    }
    return 'emerald'
  })

  const colorOptions = [
    { label: 'Gray', value: 'gray' },
    { label: 'Red', value: 'red' },
    { label: 'Orange', value: 'orange' },
    { label: 'Yellow', value: 'yellow' },
    { label: 'Green', value: 'green' },
    { label: 'Emerald', value: 'emerald' },
    { label: 'Teal', value: 'teal' },
    { label: 'Blue', value: 'blue' },
    { label: 'Indigo', value: 'indigo' },
    { label: 'Purple', value: 'purple' },
    { label: 'Pink', value: 'pink' }
  ]

  const setPrimaryColor = (newColor: string) => {
    primaryColor.value = newColor
    if (typeof window !== 'undefined') {
      localStorage.setItem('color-A', newColor)
    }
  }

  const setSecondaryColor = (newColor: string) => {
    secondaryColor.value = newColor
    if (typeof window !== 'undefined') {
      localStorage.setItem('color-B', newColor)
    }
  }

  const getColorClass = (color: string) => {
    return {
      [`bg-${color}-400`]: true
    }
  }

  return {
    primaryColor,
    secondaryColor,
    colorOptions,
    setPrimaryColor,
    setSecondaryColor,
    getColorClass
  }
}

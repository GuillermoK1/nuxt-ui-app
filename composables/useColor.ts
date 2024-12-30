export const useColor = () => {
  const color = useState('theme-color', () => 'blue')

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

  return {
    color,
    colorOptions
  }
}

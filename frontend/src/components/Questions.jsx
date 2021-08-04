import Cards from './Cards'
import Input from './Input'

export default function Questions() {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <Cards />
      <Cards />
      <Cards />
    </ul>
  )
}

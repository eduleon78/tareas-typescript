import { type FilterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  handleFilterChange: (filter: FilterValue) => void
  activeCount: number
  completedCount: number
  onClearCompleted: () => void
  filterSelected: FilterValue
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  onClearCompleted,
  filterSelected,
  handleFilterChange
}) => {
  const singleActiveCout = activeCount === 1
  const activeTodoWord = singleActiveCout ? 'tarea' : 'tareas'

  return (
    <footer className="footer">

      <span className="todo-count">
        <strong>{activeCount}</strong> {activeTodoWord} pendiente{!singleActiveCout && 's'}
      </span>

      <Filters
        filterSelected={filterSelected}
        handlerFilterChange={handleFilterChange}
      />
      {
        completedCount > 0 && (
          <button
            className='clear-completed'
            onClick={onClearCompleted}
          >
            Borrar Completadas
          </button>
        )
      }
    </footer>
  )
}

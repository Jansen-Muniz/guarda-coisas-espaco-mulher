import { useState } from "react"

const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

const App = () => {
  const [items, setItems] = useState([])

  const handleSubmit = e => {
    e.preventDefault()

    const { selectQtd, inputAdd } = e.target.elements

    setItems(prev => [
      ...prev,
      {
        id: crypto.randomUUID(),
        quantity: selectQtd.value,
        name: inputAdd.value,
        stored: false
      }
    ])
  }

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>O que deseja guardar?</h3>
        <select name="selectQtd">
          {ids.map((id, index) => (
            <option key={id} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <input name="inputAdd" placeholder="Manda aqui" autoFocus />
        <button className="add-btn">Adicionar</button>
      </form>

      <div className="list">
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <input type="checkbox" />
              <span>{item.quantity} {item.name}</span>
              <button>❌</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export { App }


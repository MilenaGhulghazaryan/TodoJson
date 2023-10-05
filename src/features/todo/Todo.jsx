
// import axios from "axios"
// import { useDispatch, useSelector } from "react-redux"
// import { addTodo, setValue } from "./TodoReducer"
// import { useEffect } from "react"

// const Todo = () => {
//     const url = 'http://localhost:3004/todo'
//     const dispatch = useDispatch()
//     const { todo, value } = useSelector(state => state.todo.todo)
//     const RenderTodo = () => {
//         axios.get(url).
//             then(response => dispatch(addTodo(response.data)))
//     }

//     useEffect(() => {
//         RenderTodo()
//     }, [])

//     return (
//         <div>
//             <input type="text" value={value} onChange={(e) => {
//                 dispatch(setValue(e.target.value))
//             }} />

//             <button onClick={() => {
//                 axios.post(url, { title: value, completed: false }).then(() => {
//                     RenderTodo()
//                 })
//             }}>
//                 Add
//             </button>
//             {
//                 todo?.map((obj) => {
//                     return (
//                         <div key={obj.id}>
//                             <input type="checkbox" checked={obj.completed} onChange={() => {
//                                 axios.patch(url + '/' + obj.id, { completed: !obj.completed }).then(() => {
//                                     RenderTodo()
//                                 })
//                             }} />
//                             {obj.title}
//                             <button onClick={() => {
//                                 axios.delete(url + '/' + obj.id).then(() => {
//                                     RenderTodo()
//                                 })
//                             }}>Delete</button>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// }
// export default Todo



import axios from "axios"
import { useEffect, useState } from "react"

const Todo = () => {
    const url = 'http://localhost:3004/todo'
    const [todo, setTodo] = useState([])
    const [value, setValue] = useState('')
    const RenderTodo = () => {
        axios.get(url).
            then(response => setTodo(response.data))

    }

    useEffect(() => {
        RenderTodo()
    }, [])

    return (
        <div>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />

            <button onClick={() => {
                axios.post(url, { title: value, completed: false }).then(() => {
                    RenderTodo()
                    setValue('')
                })
            }}>
                Add
            </button>

            {
                todo?.map(({ id, title, completed }) => {
                    return (
                        <div key={id}>
                            <input type="checkbox" checked={completed} onChange={() => {
                                axios.patch(url + '/' + id, { completed: !completed }).then(() => {
                                    RenderTodo()
                                })
                            }} />
                            {title}
                            <button onClick={() => {
                                axios.delete(url + '/' + id).then(() => {
                                    RenderTodo()
                                })
                            }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todo



import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
    id: TypedColumn,
    todos: Todo[],
    index: number
}

function Column({ id, todos, index }: Props) {
    return (
        <Draggable draggableId='id' index={index}>
            {
                (provided) => (
                    <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        {/* render droppable todos in the column  */}
                    </div>
                )
            }
        </Draggable>
    )
}

export default Column

// 1.51 https://www.youtube.com/watch?v=TI2AvfCj5oM&t=5351s&ab_channel=SonnySangha
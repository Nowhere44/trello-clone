import { DeleteBoard } from "@/actions/delete-board"
import { FormDelete } from "./form-delete"


interface BoardProps {
    id: string
    title: string
}

export const Board = ({ id, title }: BoardProps) => {

    const deleteBoardWithId = DeleteBoard.bind(null, id)

    return <form action={deleteBoardWithId} key={id} className="flex items-center gap-x-2">
        <p>Board title : {title}</p>
        <FormDelete />

    </form>
}
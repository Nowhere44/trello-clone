"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";


export const DeleteBoard = async (id: string) => {

    await db.board.delete({
        where: {
            id: id
        }
    })
    revalidatePath('/organization/org_2hyAzh8fhzWtubSXGmCN6GZgrjv')
}
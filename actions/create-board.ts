"use server"
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export type State = {
    errors?: {
        title?: string[];
    },
    message?: string | null
}


const CreateBoardSchema = z.object({
    title: z.string().min(3, {
        message: 'The title must be at least 3 characters long.'
    })
})

export async function create(prevState: State, formData: FormData) {

    const validatedFields = CreateBoardSchema.safeParse({
        title: formData.get('title')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: "Missing fields"
        }
    }

    const { title } = validatedFields.data

    try {
        await db.board.create({
            data: {
                title
            }
        })
    }
    catch (e) {
        return {
            message: "Database Error"
        }
    }
    revalidatePath('/organization/org_2hyAzh8fhzWtubSXGmCN6GZgrjv')
    redirect("/organization/org_2hyAzh8fhzWtubSXGmCN6GZgrjv")
}

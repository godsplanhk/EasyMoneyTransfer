const {z} = require("zod")

export const userValidator = z.object({
    username : z.string().email(),
    firstName: z.string(),
    lastName: z.string(),
    password: z.string().min(6)
})

export const signInBody = z.object({
    username: z.string().email(),
    password: z.string().min()
})
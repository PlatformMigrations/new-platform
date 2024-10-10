import { HTMLAttributes } from "react"

export type WrapperProps = {
    children: React.ReactNode
} & HTMLAttributes<HTMLElement>
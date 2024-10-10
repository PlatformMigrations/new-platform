export type navItemProps = {
    factorIcon: () => React.ReactNode
}

export function NavItem({ factorIcon }: navItemProps) {
    return (
        <div className="rounded-full bg-zinc-50 h-12 w-12 flex items-center justify-center cursor-pointer">
            {factorIcon()}
        </div>
    )
}
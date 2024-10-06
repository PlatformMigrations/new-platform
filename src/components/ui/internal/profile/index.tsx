
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuTrigger,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "../../dropdown-menu";

export function Profile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image className="rounded-full object-cover w-12 h-12" alt="" src={`/user.png`} width={400} height={400} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" sideOffset={8} className="rounded-xl pb-2">
        <DropdownMenuLabel>Astolfo Jose</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Account</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Language</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup>
                <DropdownMenuRadioItem value="pt-br">
                  pt-br
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="es">
                  es
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="en">
                  en
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuItem>Notifications</DropdownMenuItem>
      </DropdownMenuContent>

    </DropdownMenu>
  )
}

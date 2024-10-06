import Image from "next/image";
import { Header } from "../../header";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

import { GrAppsRounded } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";
import { Profile } from "./profile";

export function HeaderSimple() {

	return (
		<header className="flex justify-between p-4 md:max-w-[1400px] items-center w-full h-fit">
			<Header.left>
				logo
			</Header.left>
			<Header.center>
				<Popover>
					<PopoverTrigger>
						<div className="bg-zinc-200/70 p-2 rounded-full">
							<div className="bg-zinc-50 p-3 rounded-full">
								<GrAppsRounded />
							</div>
						</div>
					</PopoverTrigger>
					<PopoverContent className="rounded-xl grid grid-cols-3 gap-2">
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl">
							<span className="text-sm">Manager</span>
						</h3>
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl">
							<span className="text-sm">Sync</span>
						</h3>
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl">
							<span className="text-sm">Analytics</span>
						</h3>
						<h3 className="flex flex-col items-center bg-zinc-200/40 py-3 rounded-2xl col-start-2">
							<span className="text-sm">Monitor</span>
						</h3>
					</PopoverContent>
				</Popover>
			</Header.center>
			<Header.right>
				<div className="flex gap-4 items-center">
					<div className="bg-zinc-50 p-4 rounded-full">
						<RiSearchLine />
					</div>

					<Profile/>
					
				</div>
			</Header.right>
		</header>
	)

}
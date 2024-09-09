import Image from "next/image";
import { Header } from "../header";

import { GrAppsRounded } from "react-icons/gr";
import { RiSearchLine } from "react-icons/ri";

export function HeaderSimple() {

	return (
		<header className="flex justify-between p-4 px-12 items-center">
			<Header.left>
				logo
			</Header.left>
			<Header.center>
				<div className="bg-zinc-200/70 p-2 rounded-full">
					<div className="bg-zinc-50 p-3 rounded-full">
						<GrAppsRounded />
					</div>
				</div>
			</Header.center>
			<Header.right>
				<div className="flex gap-4 items-center">
					<div className="bg-zinc-50 p-4 rounded-full">
						<RiSearchLine />
					</div>
					<Image className="rounded-full object-cover w-12 h-12" alt="" src={`/user.png`} width={400} height={400}/>
				</div>
			</Header.right>
		</header>
	)

}
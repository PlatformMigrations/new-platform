import { useApi } from "@/hooks/use-api";
import { appType } from "./types/app";

export async function useGetApps() {

    const handler = useApi();

    const { data: apps } = await handler<appType[]>({
        url: '/apps',
        method: 'get'
    })

    return apps
}
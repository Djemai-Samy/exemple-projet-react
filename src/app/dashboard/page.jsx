import { Link, Outlet } from "react-router";

export default function DashboardLayout() {
    return (
        <div>
            <h1 className="text-4xl text-center p-4">Dashboard</h1>
            <div className="flex">
                <aside className="bg-neutral-200 w-1/4 h-screen flex flex-col p-2">
                    <Link to='/dashboard/settings'>Setting</Link>
                    <Link to='/dashboard/posts'>Posts</Link>
                </aside>
                <Outlet />
            </div>
        </div>
    )
}

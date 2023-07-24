import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
const Layout = () => {
    return (
        <div className="bg-neutral-100 h-screen w-screen overflow-hidden flex flex-row">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <Header/>
                <div className='p-4 text-lg leading-8 min-h-0 overflow-auto custom-scroll'>{<Outlet />}</div>
                {/* <div className='p-4 text-lg leading-8 min-h-0 overflow-auto'>{<Outlet />}</div> */}
            </div>
        </div>
    )
}

export default Layout

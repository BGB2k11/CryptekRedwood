import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const AdminpageLayout = ({ children }) => {
  /*** get necessary properties from useAuth() ***/
  const { logIn, logOut, isAuthenticated, userMetadata, hasRole } = useAuth()

  return (
    <>
      <span className="absolute text-white text-4xl top-5 left-4 cursor-pointer">
        <i className="bi bi-filter-left px-2 bg-gray-900 rounded-md"></i>
      </span>
      <div className="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
            <h1 className="font-bold text-gray-200 text-[15px] ml-3">
              Cryptek Admin Panel
            </h1>
            <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]"></div>
        </div>
        {hasRole('Cryptek - Admin') && (
          <>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Home
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                <Link to={routes.users()} className="rw-link">
                  Users
                </Link>
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Calls
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Cursus
              </span>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>
            <div className="p-2.5 mt-1 flex items-center">
              <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
              <h1 className="font-bold text-gray-200 text-[15px] ml-3">
                Jouw Profiel
              </h1>
              <i className="bi bi-x cursor-pointer ml-28 lg:hidden"></i>
            </div>
            <div className="my-2 bg-gray-600 h-[1px]"></div>

            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-house-door-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Profiel
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Cursus
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Calls
              </span>
            </div>
            <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
              <i className="bi bi-bookmark-fill"></i>
              <span className="text-[15px] ml-4 text-gray-200 font-bold">
                Market Updates
              </span>
            </div>
          </>
        )}
        <div className="my-2 bg-gray-600 h-[1px]"></div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-box-arrow-in-right"></i>
          <span
            className="text-[15px] ml-4 text-gray-200 font-bold"
            onClick={isAuthenticated ? logOut : logIn}
          >
            {isAuthenticated ? 'Log Out' : 'Log In'}
          </span>
        </div>
      </div>
    </>
  )
}

export default AdminpageLayout

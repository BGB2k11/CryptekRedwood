// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'
import UsersAdminLayout from 'src/layouts/UsersAdminLayout'
import AdminpageLayout from './layouts/AdminpageLayout/AdminpageLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import UserhubLayout from './layouts/UserhubLayout/UserhubLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={UserhubLayout}>
        <Private unauthenticated="home" roles={['Cryptek - Admin', 'Cryptek - Premium', 'Cryptek - Student', 'Cryptek - SubBasic']}>
          <Route path="/userhub" page={UserhubPage} name="userhub" />
        </Private>
      </Set>
      <Set wrap={UsersAdminLayout}>
        <Private unauthenticated="home" roles="Cryptek - Admin">
          <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/admin/users/{id}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/admin/users/{id}" page={UserUserPage} name="user" />
          <Route path="/admin/users" page={UserUsersPage} name="users" />
        </Private>
      </Set>
      <Set wrap={AdminpageLayout}>
        <Private unauthenticated="login" roles="Cryptek - Admin">
          <Route path="/admin" page={AdminPage} name="admin" />
        </Private>
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes

import React from 'react';
import Helmet from 'react-helmet'
import DashboradNavbar from './DashboradNavbar'
import Sidebar from './Sidebar';
import { Switch, Route } from "react-router-dom";
import DashboradIndex from './DashboradIndex';
import DashboradArticle from './DashboradArticle';
import ArticleAdd from './ArticleAdd';
import ArticleEdit from './ArticleEdit';
import AllCategory from './AllCategory';
import AddCategory from './AddCategory';
import EditCategory from './EditCategory';
import AllTag from './AllTag';
import AddTag from './AddTag';
import EditTag from './EditTag';
import AllSubAdmin from './AllSubAdmin';
import AllUser from './AllUser';
import SubadminProfile from './SubadminProfile';
import DashComments from './DashComments';

const Dashborad = () => {
  return (
    <div className='dashborad'>
      <Helmet>
        <title>Dashborad</title>
      </Helmet>
      <DashboradNavbar />
      <div className="dashborad-main-content">
        <Sidebar />
        <Switch>
          <Route path="/dashborad" component={DashboradIndex} exact />
          <Route path="/dashborad/all-article/:currentPage?" component={DashboradArticle} exact />
          <Route path="/dashborad/article-add" component={ArticleAdd} exact />
          <Route path="/dashborad/article/edit/:articleSlug" component={ArticleEdit} exact />
          <Route path="/dashborad/all-category/:currentPage?" component={AllCategory} exact />
          <Route path="/dashborad/add-category" component={AddCategory} exact />
          <Route path="/dashborad/category/edit/:cateSlug" component={EditCategory} exact />

          <Route path="/dashborad/all-tag/:currentPage?" component={AllTag} exact />
          <Route path="/dashborad/add-tag" component={AddTag} exact />
          <Route path="/dashborad/tag/edit/:tagSlug" component={EditTag} exact />

          <Route path="/dashborad/all-sub-admin/:currentPage?" component={AllSubAdmin} exact />

          <Route path="/dashborad/all-user/:currentPage?" component={AllUser} exact />

          <Route path="/dashborad/sub-admin-profile/:adminId" component={SubadminProfile} exact />

          <Route path="/dashborad/comments/:currentPage?" component={DashComments} exact />

        </Switch>
      </div>
    </div>
  )
}

export default Dashborad
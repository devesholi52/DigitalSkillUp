import React, { useEffect } from 'react'
import NavbarFile from './Components/Navbar/NavbarFile'
import Footer from './FooterComponent/Footer'
import { Provider, useSelector } from 'react-redux';
import { Store } from "./Redux/Store"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import IntroComponentFile from './Components/IntroComponent/IntroComponentFile'
import CourseTab from './Components/CourseScreenTab/CourseTab'
import AboutUsfile from './AboutUsPage/AboutUsfile'
import ContactUsfile from './ContactUs/ContactUsfile'
import Model from './ModelComponent/Model';
import DetailCourseFile from './Components/DeatilsCourseComponent/DetailCourseFile';
import Termandcondition from './Components/TermCondition/Termandcondition';
import PrivacyPolicyfile from './Components/PrivacyPolicy/PrivacyPolicyfile';
import ForgetPass from './Auth/ForgetPassComponent/ForgetPass';
import OtpFile from './Auth/OtpComponent/OtpFile';
import Login from './Auth/LoginComponent/Login';
import Signup from './Auth/SignupComponent/Signup';
import OurMission from './Components/Mission/OurMission';
import CEOfile from './Components/CEOComponent/CEOfile';
import Blogs from './Components/BlogsComponent/Blogs';
import BlogDetail from './Components/BlogDetailComponent/BlogDetail';
import JoinInstructor from './Components/JoinInstructorCompo/JoinInstructor';
import Courses from './Components/CoursesComponent/Courses';
import FooterNewFile from './Components/FooterNew/FooterNewFile';
import FreePageAdvance from './Components/FreePageAdvanceComp/FreePageAdvance';

function App() {
    return (
        <BrowserRouter>
            <Provider store={Store}>
                {/* <Login />
                <ForgetPass />
                <OtpFile />
                <Signup /> */}
                <NavbarFile />
                <Model />
                <Routes>
                    <Route path='/' element={<IntroComponentFile />} />
                    <Route path='/course/:Categoryid' element={<CourseTab />} />
                    <Route path='/AllAdvanceclasses' element={<FreePageAdvance />} />
                    <Route path='/courses' element={<Courses />} />
                    <Route path='/about' element={<AboutUsfile />} />
                    <Route path='/contact' element={<ContactUsfile />} />
                    <Route path='/blogs' element={<Blogs />} />
                    <Route path='/blogDetail/:id' element={<BlogDetail />} />
                    <Route path='/Mission' element={<OurMission />} />
                    <Route path='/CEO' element={<CEOfile />} />
                    <Route path='/Instructor' element={<JoinInstructor />} />
                    <Route path='/TermandConditions' element={<Termandcondition />} />
                    <Route path='/PrivacyPolicy' element={<PrivacyPolicyfile />} />
                    <Route path='/CourseDetail/:id' element={<DetailCourseFile />} />
                </Routes>
                {/* <Footer /> */}
                <FooterNewFile />
            </Provider>
        </BrowserRouter>
    )
}

export default App
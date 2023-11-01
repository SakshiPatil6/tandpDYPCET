import './App.css';
import { Routes,Route } from 'react-router-dom';
import LeftTabsExample from './Components/About/About';
import  Login  from './Components/Login/Login';
import { Contact } from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';
import { Navbar_b } from './Components/Navbar/Navbar_b';
import Registration from "./Components/Login/Registration";
import Coordinator from './Components/Coordinators/Coordinator';
import Recruiters from './Components/Recruiters/Recruiters';
import AddGallery from './Components/Admin/AddGallery';
import { Gallery } from './Components/Gallery/gallery';
import AdminVerification from './Components/Admin/AdminVerification';
import StudentDetails from './Components/Admin/StudentDetails';
import ReadStudent from './Components/Admin/read';
import AddStudents from './Components/Admin/AddStudents';
import AdminPage from './Components/Admin/AdminPage';
import StudentPlaced23 from './Components/StudentPlaced/StudentPlaced23';
import DropDown from './Components/StudentPlaced/Dropdown';
import AnnouncementSlider from './Components/Announcement/Announcement';
import AddAnnouncement from './Components/Admin/AddAnnouncement';
import StudentPlaced22 from './Components/StudentPlaced/StudentPlaced22';
import StudentPlaced21 from './Components/StudentPlaced/StudentPlaced21';
import Award from './Components/Award/award';
import dropDown from './Components/Admin/dropdown';
// import ImageSlider from './Components/Slider/ImageSlider';
function App() {
  return (
    <div className="App">
      <Navbar_b/>
      <Routes>
        <Route path="/about" element={<LeftTabsExample/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Registration />} />
        <Route path='/coordinator' element={<Coordinator />} />
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path="/" element={<Home />} />
        <Route path='/nav' element={<Navbar_b />} />
        <Route path='/adminVerify' element={<AdminVerification />} />
        <Route path='/StudentDetails' element={<StudentDetails />} />
        <Route path='/readStudent/:id' element={<ReadStudent />} />
        <Route path='/addStudents' element={<AddStudents />} />
        <Route path='/adminPage' element={<AdminPage />} />
        <Route path='/recruiters' element={<Recruiters />} />
        <Route path='/drop' element={<DropDown />} />
        <Route path='/addAnnouncememnt' element={<AddAnnouncement />} />
        <Route path='/announce' element={<AnnouncementSlider />} />
        <Route path='/studplacement23' element={<StudentPlaced23 />} />
        <Route path='/studplacement22' element={<StudentPlaced22 />} />
        <Route path='/studplacement21' element={<StudentPlaced21 />} />
        <Route path='/addGallery' element={<AddGallery />} />
        <Route path='/award' element={<Award />} />
        <Route path='/dd' element={<dropDown />}/>
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Admission from './pages/academic/Admission';
import Curriculam from './pages/academic/Curriculam';
import Program from './pages/academic/Program';
import StudentEngage from './pages/academic/StudentEngage';
import Activities from './pages/Activities';
import Alumni from './pages/Alumni';
import Announcements from './pages/Announcements';
import Awards from './pages/Awards';
import CCE from './pages/departments/CCE';
import CIT from './pages/departments/CIT';
import EEE from './pages/departments/EEE';
import Math from './pages/departments/Math';
import PHY from './pages/departments/PHY';
import HeadMessage from './pages/HeadMessage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import OfficeStuff from './pages/OfficeStuff';
import Research from './pages/Research';
import Teacher from './pages/Teacher';
import Student from './pages/Student';
import TeacherProfile from './pages/TeacherProfile';
import StudentProfile from './pages/StudentProfile';
import ResultUpload from './components/ResultUpload';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/academic/admission" component={Admission} />
				<Route exact path="/academic/curriculam" component={Curriculam} />
				<Route exact path="/academic/program" component={Program} />
				<Route
					exact
					path="/academic/student-engagement"
					component={StudentEngage}
				/>
				<Route exact path="/academic/" component={Activities} />
				<Route exact path="/alumni" component={Alumni} />
				<Route exact path="/announcements" component={Announcements} />
				<Route exact path="/activities" component={Activities} />
				<Route exact path="/awards" component={Awards} />
				<Route exact path="/research" component={Research} />
				<Route exact path="/office-stuff" component={OfficeStuff} />
				<Route exact path="/departments/CCE" component={CCE} />
				<Route exact path="/departments/CIT" component={CIT} />
				<Route exact path="/departments/EEE" component={EEE} />
				<Route exact path="/departments/Mathematics" component={Math} />
				<Route exact path="/departments/Physics" component={PHY} />
				<Route exact path="/message-from-head" component={HeadMessage} />
				<Route exact path="/student" component={Student} />
				<Route exact path="/student-profile" component={StudentProfile} />
				<Route exact path="/teacher-profile" component={TeacherProfile} />
				<Route exact path="/teacher" component={Teacher} />
				<Route exact path="/result" component={ResultUpload} />
				<Route exact path="/login" component={LoginPage} />
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;

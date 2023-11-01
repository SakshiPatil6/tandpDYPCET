import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
function dropDown() {
    return (
        <div className="container">
            <h1 className="heading">Upload Student Placed Record</h1>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='dropdown-basic'>
                    Choose Year
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <div >
                        <Dropdown.Item as={Link} to={"/addStudents"} className='drop-item' href="#">2023-24</Dropdown.Item>
                        </div>
                        <Dropdown.Item as={Link} to={"/addStudents"} className='drop-item' href="#">2022-23</Dropdown.Item>
                        <Dropdown.Item as={Link} to={"/addStudents"} className='drop-item' href="#">2021-22</Dropdown.Item>
                        
                    </Dropdown.Menu>
                
            </Dropdown>
        </div>
    );
}

export default dropDown;
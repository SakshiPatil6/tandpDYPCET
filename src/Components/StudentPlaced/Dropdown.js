import Dropdown from 'react-bootstrap/Dropdown';
import './dropdown.css';
import { Link } from 'react-router-dom';

function DropDown() {
    return (
        <div className="container">
            <h1 className="heading">Placement Record</h1>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='dropdown-basic'>
                    Choose Year
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div>
                        <Dropdown.Item as={Link} to={"/studplacement23"} className='drop-item' href="#">2023-24</Dropdown.Item>
                    </div>
                    <Dropdown.Item as={Link} to={"/studplacement22"} className='drop-item' href="#">2022-23</Dropdown.Item>
                    <Dropdown.Item as={Link} to={"/studplacement21"} className='drop-item' href="#">2021-22</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/* <div className='btn-grp'>
                <Button className='btn'>List of Placed Students- Batch 2022</Button>
                <Button className='btn'>Placement Record Batch 2022</Button>
                <Button className='btn'>Placement Report 2018-19</Button>
                <Button className='btn'>Placement Report 2019-20</Button>
                <Button className='btn'>DYPCET Placement Record 2020-2021</Button>
            </div> */}


            <Dropdown>
                <Dropdown.Toggle id="dropdown-basic" className='dropdown-basic'>
                    Choose PDF
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <div>
                        <Dropdown.Item className='drop-item' >
                            <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:00741428-a5c6-4c9b-beee-c6a55465c4b2'>Placement Record of Batch 2021-22</a>
                        </Dropdown.Item>
                    </div>
                    <Dropdown.Item className='drop-item'>
                        <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:634e6fee-b27f-4ee7-9766-c92f4ef1e256'>Placement Record Batch 2020-21</a>
                    </Dropdown.Item>
                    <Dropdown.Item className='drop-item'>
                        <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:b0c232bd-58df-4937-a1b7-0bca4bb0bb11'>Placement Record Batch 2019-20</a>
                    </Dropdown.Item>

                    <Dropdown.Item className='drop-item'>
                        <a href='https://acrobat.adobe.com/id/urn:aaid:sc:AP:7a2b90a8-e06c-4c67-bf24-55a5098370d3'>Placement Record Batch 2018-19</a>
                    </Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>
            


        </div>
    );
}
export default DropDown;
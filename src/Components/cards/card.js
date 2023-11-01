import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './card.css';



function BasicExample() {
  return (
    <>
      < div class='card1' Card style={{ width: '18rem' }}>
        <Card.Title>CONTACT</Card.Title>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/022/101/124/original/whatsapp-logo-transparent-free-png.png" class='wsp' />
        {/* <Button variant="primary" class='button'>via whatsapp</Button> */}
        <Card.Link href="">Via whatsapp</Card.Link>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bGEl9v47XieEtHyj0TqTr1tOXJmib-KHtw&usqp=CAU" class='linkdn' />
        {/* <Button variant="primary" class='button'>via linkedin</Button> */}
        <Card.Link class='link' href="">Via Linkedin</Card.Link>
        <Card.Body>
        </Card.Body>
      </div>
      < div class='card1' Card style={{ width: '18rem' }}>
        <Card.Title>EXPLORE</Card.Title>
        <Card.Img variant="top" src="https://www.tnpgndec.com/images/Records.png?be9acc85f95fa30cb8300c765f6fda13" class='img1' />
        {/* <Button variant="primary" class='button'>Placement Records</Button> */}
        <Card.Link class='' href="">Placement Records</Card.Link>
        <Card.Img variant="top" src="https://www.tnpgndec.com/images/recruiter.png?9effada8b0160020b74b8ff5e0a72a0c" class='img2' />
        {/* <Button variant="primary" class='button'>Majour recruitment</Button> */}
        <Card.Link class='' href="">Majour Recruitment</Card.Link>
        <Card.Body>
        </Card.Body>
      </div>

      < div class='card1' Card style={{ width: '18rem' }}>
        <Card.Title>NOTIFICATION</Card.Title>
        <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/002/594/675/small/alarm-bell-alert-caution-linear-icon-style-free-vector.jpg" class='img1' />
        <h4>Stay Upto Date</h4>
        <h6>Subscribe for latest news & updates.</h6>
      </div>

      < div class='card1' Card style={{ width: '18rem' }}>
        <Card.Title>Alumni</Card.Title>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDU3WQaFlgdMVIaTgBoYpICCaaEKHNW_kQGtY4U0J82GU2W88BxtZA7rX9PrPy27TSow&usqp=CAU" class='img1' />
        <h5>Alumni Assistance</h5>
        <h6>in Placement/internship</h6>
        <Card.Link class='' href="">Sumbit Details</Card.Link>
      </div>

      < div class='card1' Card style={{ width: '18rem' }}>
        <Card.Title>T&P Members</Card.Title>
        <Button class='btn' href="" target="_blank">Technical Members</Button>
        <Button class='btn' href="" target="_blank">Executive Members</Button>
        <Button class='btn' href="" target="_blank">Core Members</Button>
      </div>

      < div class='card1' Card style={{ width: '18rem' }}>
        <Card.Title>Useful Links</Card.Title>
        <h3>FOR APTITUDE</h3>
        <Button class='btn' href="https://www.indiabix.com/" target="_blank">IndiaBix</Button>
        <Button class='btn' href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjX27f6mJSBAxUV1BYFHWMgDzUYABAAGgJ0bA&gclid=CjwKCAjwo9unBhBTEiwAipC110waaqZJVFdc3Jan7wrUzd99izIMq0r9CgaoiQ248GoEnFbFyd73sRoCpQoQAvD_BwE&ohost=www.google.com&cid=CAESbOD2eyhal7SBsZGoYrkOujaQXoCa09ab1Rmmy8qBLj0OBG27Arnv5-3kmNNOjq0kYVnKiklBgpY1Xr98yOuF6SGefJTxHCipgNcLOYPKbM8VabZtCcNFlexdPw7cKAAPbkor31Y9VKkNii8tlQ&sig=AOD64_0fN586blWYflYQte7vEw1a9C5giA&q&adurl&ved=2ahUKEwjyy6_6mJSBAxXeQ_UHHcgdDCUQ0Qx6BAgGEAE" target="_blank">Indeed</Button>
        <Button class='btn' href="https://internshala.com/" target="_blank">Internshala</Button>
        <Button class='btn' href="https://www.gndec.ac.in/" target="_blank">GNDEC</Button>
        <Button class='btn' href="https://www.naukri.com/" target="_blank">Naukri.com</Button>
      </div>

      <div class='links'>
        <div class='img'></div>
        <div class='logo1'><h5>Interview-Corner</h5></div>
        <a class='tab' href='https://www.geeksforgeeks.org/company-interview-corner/'><i class="fa-solid fa-pen-to-square"></i></a>
      </div>

      <div class='links'>
        <div class='img'></div>
        <div class='logo1'><h5>MasterQuiz</h5></div>
        <a class='tab' href='https://www.geeksforgeeks.org/company-interview-corner/'><i class="fa-solid fa-pen-to-square"></i></a>
      </div>

      <div class='links'>
        <div class='img'></div>
        <div class='logo1'><h5>Interview Questions</h5></div>
        <a class='tab' href='https://www.geeksforgeeks.org/company-interview-corner/'><i class="fa-solid fa-pen-to-square"></i></a>
      </div>

      <div class='links'>
        <div class='img'></div>
        <div class='logo1'><h5>Stratergies</h5></div>
        <a class='tab' href='https://www.geeksforgeeks.org/company-interview-corner/'><i class="fa-solid fa-pen-to-square"></i></a>
      </div>

      <div class='links'>
        <div class='img'></div>
        <div class='logo1'><h5></h5></div>
        <a class='tab' href='https://www.geeksforgeeks.org/company-interview-corner/'><i class="fa-solid fa-pen-to-square"></i></a>
      </div>
    </>
  );
}

export default BasicExample;
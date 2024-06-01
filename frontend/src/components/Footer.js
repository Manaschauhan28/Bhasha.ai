import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MDBFooter, MDBContainer } from 'mdb-react-ui-kit';

function footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundImage: 'linear-gradient(to right, #347A86,#18CBCD)' }}>
      <MDBContainer className='p-4'></MDBContainer>

      <div className='text-center p-3 text-black' style={{ backgroundImage: 'linear-gradient(to right, #347A86,#18CBCD)' }}>
        © 2024 Copyright: 
        <a className='text-black' href='#'>
          Pari भाषा.ai 
        </a>
      </div>
    </MDBFooter>
  );
}

export default footer

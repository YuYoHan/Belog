import styled from "styled-components"

function RemoveBtn( ) {
   


   return (
      <Button>
         삭제
      </Button>
   )
}

export default RemoveBtn

const Button = styled.div`
   padding: 12px 20px;
   min-width: 60px;
   height: 40px;
   border-radius: 50px;
   font-weight: 700;
   font-size: 14px;
   background: #e9ecef;
   color: #272c32;
   margin-right: 1rem;
   cursor: pointer;
`

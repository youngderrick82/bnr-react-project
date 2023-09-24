import { Container } from "react-bootstrap";
import teamMembers from "../components/members";
import MemberCards from "../components/membercards";



const MeetTeam = () => {

    return (
    <Container> 

    <div>Black Nerd Rises Squad</div>
    
    {teamMembers.map((member) => (

        <MemberCards key={member.uname} data={member}/>
        
    ))}
    

    </Container>
    )
}

export default MeetTeam
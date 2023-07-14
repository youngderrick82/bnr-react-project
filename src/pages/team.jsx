import { Container } from "react-bootstrap";
import teamMembers from "../components/members";
import MemberCards from "../components/membercards";



const MeetTeam = () => {

    return (
    <Container> 

    <div>This is the Meet the Team page</div>
    
    {teamMembers.map((member) => (

        <MemberCards key={member.uname} data={member}/>
        
    ))}
    

    </Container>
    )
}

export default MeetTeam
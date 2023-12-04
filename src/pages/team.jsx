import { useEffect } from "react";
import { Grid } from "@mui/material";
import { Container } from "react-bootstrap";
import teamMembers from "../components/members";
import MemberCards from "../components/membercards";
import crewImage from "./assets/The_Crew_Nerd_Gang_1.png";


const MeetTeam = () => {
  useEffect(() => {
    document.title = "Black Nerd Rises - Meet the Team";
  }, []);

  return (
    <Container>
      <h1 className="team-header">
        Meet the <span className="nerd-gang-red">NerdGang</span>
      </h1>
      <div className="team-img-div">
        <img src={crewImage} alt="placeholder" className="team-img" />
      </div>
      <div className="team-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus
        nunc eget felis luctus, a laoreet massa blandit. Nam aliquam ex eget
        feugiat tincidunt. Nullam accumsan hendrerit justo, in dictum lectus
        sollicitudin non. Phasellus lorem elit, maximus vel sem at, dictum
        congue orci. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Maecenas tincidunt sit amet lacus sit
        amet ultricies. Maecenas vehicula nisi sit amet varius molestie. Sed
        dapibus viverra feugiat. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Nullam egestas sit amet
        ligula vel vulputate. Maecenas faucibus orci bibendum aliquet malesuada.
        Vivamus aliquet in lorem non suscipit. Suspendisse pulvinar tempor
        augue, id sollicitudin sem tempus et. Nunc eget lorem in urna luctus
        vehicula quis id velit. Morbi sapien tortor, rutrum vitae dolor ac,
        ornare cursus nisl. Proin vel cursus magna
      </div>
      <Grid container>
        {teamMembers.map((member) => (
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <MemberCards key={member.uname} data={member} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MeetTeam;

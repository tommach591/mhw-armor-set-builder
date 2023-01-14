import "./Status.css";
import AttackStatus from "../AttackStatus";
import DefenseStatus from "../DefenseStatus";
import SkillsStatus from "../SkillsStatus";
import { useMobile } from "../../utils/useMobile";

function Status({ changeWindow }) {
  const isMobile = useMobile();
  return (
    <div className="Status">
      <div
        className="StatusTitle"
        onClick={() => {
          if (isMobile) changeWindow();
        }}
      >
        <h1>Status</h1>
        {isMobile ? <div className="Right Arrow" /> : <div />}
      </div>
      <AttackStatus />
      <DefenseStatus />
      <SkillsStatus />
    </div>
  );
}

export default Status;

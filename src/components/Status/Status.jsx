import "./Status.css";
import AttackStatus from "../AttackStatus";
import DefenseStatus from "../DefenseStatus";
import SkillsStatus from "../SkillsStatus";

function Status() {
  return (
    <div className="Status">
      <div className="StatusTitle">
        <h1>Status</h1>
      </div>
      <AttackStatus />
      <DefenseStatus />
      <SkillsStatus />
    </div>
  );
}

export default Status;

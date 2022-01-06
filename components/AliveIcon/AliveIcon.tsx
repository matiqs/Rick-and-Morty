import * as VscIcons from "react-icons/vsc";
import { Status } from "../../models/models";
import { StatusIcon } from "./StyledAliveIcon";

const AliveIcon = ({ status }: { status: Status }) => {
  return (
    <>
      {status === "Alive" ? (
        <StatusIcon color="#3EF311">
          <VscIcons.VscDebugBreakpointLog />
        </StatusIcon>
      ) : status === "Dead" ? (
        <StatusIcon color="#F31111">
          <VscIcons.VscDebugBreakpointLog />
        </StatusIcon>
      ) : (
        ""
      )}
    </>
  );
};

export default AliveIcon;

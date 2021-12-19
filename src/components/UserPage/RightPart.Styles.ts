import styled from "styled-components";
import { Colors } from "../../styles/globalStyles";
import { FaReact, FaSearch, FaPowerOff, FaLock } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { MdAdminPanelSettings } from "react-icons/md";
export const PanelIcon = styled(MdAdminPanelSettings)`
  font-size: 30px;
  cursor: pointer;
`;
export const SearchIcon = styled(FaSearch)`
  font-size: 25px;
  cursor: pointer;
`;
export const LogoutIcon = styled(FaPowerOff)`
  font-size: 25px;
  cursor: pointer;
`;
export const AccountIcon = styled(FaLock)`
  font-size: 25px;
  cursor: pointer;
`;
export const SettingsIcon = styled(FcSettings)`
  font-size: 28px;
  cursor: pointer;
`;
export const DevModeCard = styled.div`
  margin-left: 10px;
  margin-right: 10px;
  p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RightCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Colors.cardGray};
  h1 {
    margin: 0;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 400;
  }
  h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
  }
`;

export const InfoContent = styled.div`
  width: 95%;
  margin-bottom: 20px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  color: rgba(230, 230, 230, 0.7);
  p {
    margin: 0;
    font-size: 14px;
    inline-size: 100%;
  }
`;

export const UserPanel = styled.div`
  width: 95%;
  display: grid;
  margin-bottom: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 10px;
  font-size: 15px;
`;
export const Divider = styled.hr`
  margin: 0;
  width: 100%;
  border: 0px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const IconBox = styled.div`
  height: 60px;
  //border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  p {
    margin: 0;
  }
  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export const StatusSpan = styled.span<{ status: string }>`
  font-size: 15px;
  margin-bottom: 5px;
  width: max-content;

  ${(props) => {
    if (props.status == "watching")
      return `background-color:#222222;color:#B3E283;opacity:0.85`;
    if (props.status == "on-hold")
      return `background-color:#222222;color:#F3C583;opacity:0.85`;
    if (props.status == "considering")
      return `background-color:#222222;color:#E8E46E;opacity:0.85`;
    if (props.status == "completed")
      return `background-color:#222222;color:#E99497;opacity:0.85`;
  }}
`;

import styled from 'styled-components';
export const ProfileCard = styled.div`
  width: 200px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-top: 10px;

  background-color: ${p => p.theme.colors.white};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const ProfileDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primaryText};
`;
export const ProfileAvatar = styled.img`
  margin-bottom: ${p => p.theme.space[3]}px;
  width: 160px;
  border-radius: ${p => p.theme.radii.round};
  outline: 1px solid ${p => p.theme.colors.backGroundColor};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;
export const ProfileUsername = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const ProfileTag = styled.p`
  margin-bottom: ${p => p.theme.space[2]}px;
`;
export const ProfileLocation = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const ProfileStatsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.secondaryText};
`;

export const StatsItem = styled.li`
  cursor: pointer;
  /* :not(:last-child) {
    margin-right: ${p => p.theme.space[3]}px;
  } */
  padding-bottom: 4px;
  padding-top: 4px;

  display: flex;
  align-items: center;
  flex-direction: column;
  width: ${p => p.theme.space[8]}px;
  /* padding: ${p => p.theme.space[4]}px; */
  border-top: 0.5px solid #e5eaf1;
  :not(:last-child) {
    border-right: 0.5px solid #e5eaf1;
  }
`;

export const Label = styled.p`
  font-size: ${p => p.theme.fontSizes.m};
`;
export const Quantity = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.primaryText};
`;

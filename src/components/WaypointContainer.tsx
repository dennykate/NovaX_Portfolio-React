import React from "react";
import { useDispatch } from "react-redux";
import { Waypoint } from "react-waypoint";
import { setActiveName } from "../redux/service/navbarItemSlice";

type WaypointContainerProps = {
  children: React.ReactNode;
  name: string;
};

const WaypointContainer = ({ children, name }: WaypointContainerProps) => {
  const dispatch = useDispatch();
  const onEnterHandler = () => dispatch(setActiveName(name));

  return <Waypoint onEnter={onEnterHandler}>{children}</Waypoint>;
};

export default WaypointContainer;

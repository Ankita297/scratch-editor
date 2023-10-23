import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { getComponent } from "./getComponents";
import {
  motionComponents,
  looksComponents,
  controlComponents,
  eventsComponents,
} from "./SidebarConstants";

export default function Sidebar() {
  return (
    <div className="flex">
      <div className="flex flex-col w-full gap-1 p-2 pt-10 bg-gray-100 border-r border-gray-300">
        <a className="my-2" href="#motion">
          <span className="text-xs bg-blue-500 border border-blue-400 rounded-full py-2 px-4"></span>
          <p className="text-xs mt-2">Motion</p>
        </a>
        <a className="my-2" href="#looks">
          <span className="text-xs bg-purple-500 border border-purple-400 rounded-full py-2 px-4"></span>
          <p className="text-xs mt-2">Looks</p>
        </a>
        <a className="my-2" href="#control">
          <span className="text-xs bg-red-500 border border-red-400 rounded-full py-2 px-4"></span>
          <p className="text-xs mt-2">Control</p>
        </a>
        <a className="my-2" href="#events">
          <span className="text-xs bg-yellow-500 border border-yellow-400 rounded-full py-2 px-4"></span>
          <p className="text-xs mt-2">Events</p>
        </a>
      </div>
      <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200">
        {/* Motion */}
        <div className="text-s" id="motion">
          {" "}
          {"Motion"}{" "}
        </div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {motionComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Looks */}
        <div className="text-s" id="looks">
          {" "}
          {"Looks"}{" "}
        </div>
        <Droppable droppableId="sideArea-looks" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-looks my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {looksComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Control */}
        <div className="text-s" id="control">
          {" "}
          {"Control"}{" "}
        </div>
        <Droppable droppableId="sideArea-control" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-control my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {controlComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>

        {/* Events */}
        <div className="text-s" id="events">
          {" "}
          {"Events"}{" "}
        </div>
        <Droppable droppableId="sideArea-motion" type="COMPONENTS">
          {(provided) => (
            <ul
              className="sideArea-motion my-3"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {eventsComponents.map((x, i) => {
                return (
                  <Draggable
                    key={`${x}-sideArea`}
                    draggableId={`${x}-sideArea`}
                    index={i}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="my-2"
                      >
                        {getComponent(x)}
                      </li>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </div>
  );
}

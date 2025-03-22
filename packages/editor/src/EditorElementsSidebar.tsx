import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  Typography,
} from "@easyblocks/design-system";
import React from "react";
import styled from "styled-components";
import { useEditorContext } from "./EditorContext";
import { parsePath } from "@easyblocks/core/_internals";
import { getAllComponentTypes } from "./getAllComponentTypes";

const ElementsSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px 20px;
  gap: 24px;

  width: 82px;
  height: 100%;

  background: #066050;
  box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`;

const BlocksIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 12H12M30 30H12M26.7143 26.7857H15.2857C14.1811 26.7857 13.2857 25.8903 13.2857 24.7857V17.8571C13.2857 16.7526 14.1811 15.8571 15.2857 15.8571H26.7143C27.8189 15.8571 28.7143 16.7526 28.7143 17.8571V24.7857C28.7143 25.8903 27.8189 26.7857 26.7143 26.7857Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

const FormsIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.125 11.625C11.125 11.3489 11.3489 11.125 11.625 11.125H30.625C30.9011 11.125 31.125 11.3489 31.125 11.625V18.625C31.125 18.9011 30.9011 19.125 30.625 19.125H11.625C11.3489 19.125 11.125 18.9011 11.125 18.625V11.625Z"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M11.125 23.625C11.125 23.3489 11.3489 23.125 11.625 23.125H30.625C30.9011 23.125 31.125 23.3489 31.125 23.625V30.625C31.125 30.9011 30.9011 31.125 30.625 31.125H11.625C11.3489 31.125 11.125 30.9011 11.125 30.625V23.625Z"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  );
};

const HeadingIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12V30M18 30H24M28 15V12H14V15"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const ParagraphIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 19H12M30 15H12M30 23H12M30 27H12"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const ButtonIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="9.75"
        y="16.75"
        width="22.5"
        height="8.5"
        rx="3.25"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M15 21H27"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </svg>
  );
};

const ImageIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_431_45073)">
        <path
          d="M23.5469 25.4297L21.6703 23.5688C20.7648 22.6707 20.312 22.2217 19.7924 22.0576C19.3355 21.9133 18.8443 21.9186 18.3905 22.0728C17.8746 22.2482 17.4317 22.7068 16.5458 23.6242L12.0496 28.0651M23.5469 25.4297L23.931 25.0489C24.8376 24.1498 25.2909 23.7002 25.8111 23.5361C26.2685 23.3918 26.76 23.3975 27.214 23.5523C27.7302 23.7282 28.1731 24.1881 29.0588 25.1078L30 26.0551M23.5469 25.4297L28.0594 29.9511M12.0496 28.0651C12.0845 28.3486 12.144 28.5727 12.2452 28.7715C12.4609 29.1948 12.8052 29.5391 13.2285 29.7547C13.7098 30 14.3399 30 15.6 30H26.4C27.1361 30 27.6573 30 28.0594 29.9511M12.0496 28.0651C12 27.6624 12 27.1397 12 26.4V15.6C12 14.3399 12 13.7098 12.2452 13.2285C12.4609 12.8052 12.8052 12.4609 13.2285 12.2452C13.7098 12 14.3399 12 15.6 12H26.4C27.6601 12 28.2902 12 28.7715 12.2452C29.1948 12.4609 29.5391 12.8052 29.7547 13.2285C30 13.7098 30 14.3399 30 15.6V26.0551M30 26.0551V26.4C30 27.6601 30 28.2902 29.7547 28.7715C29.5391 29.1948 29.1948 29.5391 28.7715 29.7547C28.5714 29.8568 28.3455 29.9163 28.0594 29.9511M26.625 17.6249C26.625 18.8676 25.6177 19.8749 24.375 19.8749C23.1323 19.8749 22.125 18.8676 22.125 17.6249C22.125 16.3822 23.1323 15.3749 24.375 15.3749C25.6177 15.3749 26.625 16.3822 26.625 17.6249Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_431_45073">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(9 9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

const CarouselIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 12.75H25C25.6888 12.75 26.25 13.3112 26.25 14V28C26.25 28.6888 25.6888 29.25 25 29.25H17C16.3112 29.25 15.75 28.6888 15.75 28V14C15.75 13.3112 16.3112 12.75 17 12.75ZM11.75 26V16C11.75 15.5923 11.9466 15.2293 12.25 15.0009V26.9991C11.9466 26.7707 11.75 26.4077 11.75 26ZM30.25 26C30.25 26.4077 30.0534 26.7707 29.75 26.9991V15.0009C30.0534 15.2293 30.25 15.5923 30.25 16V26Z"
        stroke="white"
        stroke-width="1.5"
      />
    </svg>
  );
};

const VideoIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6563 12H27.5938C29.5434 12 31.1367 13.526 31.2442 15.4488L31.25 15.6562V26.3438C31.25 28.2934 29.724 29.8867 27.8012 29.9942L27.5938 30H14.6563C12.7066 30 11.1133 28.474 11.0058 26.5512L11 26.3438V15.6562C11 13.7066 12.526 12.1133 14.4488 12.0058L14.6563 12ZM27.5938 13.6875H14.6563C13.6233 13.6875 12.7762 14.483 12.694 15.4948L12.6875 15.6562V26.3438C12.6875 27.3767 13.483 28.2238 14.4948 28.306L14.6563 28.3125H27.5938C28.6267 28.3125 29.4738 27.517 29.556 26.5052L29.5625 26.3438V15.6562C29.5625 14.6233 28.767 13.7762 27.7552 13.694L27.5938 13.6875ZM18.9344 18.2836C19.0579 18.0366 19.3386 17.9202 19.5946 17.9949L19.6891 18.032L24.6188 20.4969C24.7276 20.5513 24.8159 20.6396 24.8703 20.7484C24.9938 20.9954 24.9186 21.2898 24.7052 21.4498L24.6188 21.5031L19.6891 23.968C19.611 24.007 19.5248 24.0274 19.4375 24.0274C19.1614 24.0274 18.9317 23.8284 18.8841 23.566L18.875 23.4649V18.5351C18.875 18.4478 18.8953 18.3617 18.9344 18.2836Z"
        fill="white"
      />
    </svg>
  );
};

const ShapesIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4303 23.9976H13.4003C11.5803 23.9976 10.4203 22.0476 11.3003 20.4476L13.6303 16.2075L15.8103 12.2375C16.7203 10.5875 19.1003 10.5875 20.0103 12.2375L22.2003 16.2075L23.2503 18.1175L24.5303 20.4476C25.4103 22.0476 24.2503 23.9976 22.4303 23.9976Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31 24.5C31 28.09 28.09 31 24.5 31C20.91 31 18 28.09 18 24.5C18 24.33 18.01 24.17 18.02 24H22.43C24.25 24 25.41 22.05 24.53 20.45L23.25 18.12C23.65 18.04 24.07 18 24.5 18C28.09 18 31 20.91 31 24.5Z"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const TimerIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31.7 20.5L29.7005 22.5L27.7 20.5M29.9451 22C29.9814 21.6717 30 21.338 30 21C30 16.0294 25.9706 12 21 12C16.0294 12 12 16.0294 12 21C12 25.9706 16.0294 30 21 30C23.8273 30 26.35 28.6963 28 26.6573M21 16V21L24 23"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const HTMLIcon = () => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25 27L31 21L25 15M17 15L11 21L17 27"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
const buttons = [
  {
    id: "section",
    icon: <BlocksIcon />,
    label: "Blocks",
  },
  {
    id: "card",
    icon: <FormsIcon />,
    label: "Forms",
  },
  {
    id: "item",
    icon: <HeadingIcon />,
    label: "Heading",
  },
  {
    id: "item",
    icon: <ParagraphIcon />,
    label: "Paragraph",
  },
  {
    id: "button",
    icon: <ButtonIcon />,
    label: "Button",
  },
  {
    id: "item",
    icon: <ImageIcon />,
    label: "Image",
  },
  {
    id: "item",
    icon: <CarouselIcon />,
    label: "Carousel",
  },
  {
    id: "item",
    icon: <VideoIcon />,
    label: "Video",
  },
  {
    id: "item",
    icon: <ShapesIcon />,
    label: "Shapes",
  },
  // {
  //   id: "item",
  //   icon: <TimerIcon />,
  //   label: "Timer",
  // },
  {
    id: "@easyblocks/text-wrapper",
    icon: <HTMLIcon />,
    label: "HTML",
  },
];
const EditorElementsSidebar = () => {
  const editorContext = useEditorContext();
  const componentTypes = getAllComponentTypes(editorContext);
  const handler = async (id: string) => {
    let componentPickerPath = "data";
    if (editorContext.focussedField[0]) {
      const { parent } = parsePath(
        editorContext.focussedField[0],
        editorContext.form
      );
      componentPickerPath = parent?.path + "." + parent?.fieldName;
    }
    console.log({
      componentTypes,
    });
    const filteredComponentTypes = componentTypes.filter((c) => c.includes(id));
    const comp = await editorContext.actions.openComponentPicker({
      path: componentPickerPath,
      componentTypes:
        filteredComponentTypes.length > 0
          ? filteredComponentTypes
          : componentTypes,
    });
    console.log({
      comp,
      id,
    });
    if (comp) {
      editorContext.actions.pasteItems([comp]);
    }
  };
  return (
    <ElementsSidebarContainer>
      <div>
        {buttons.map((button) => (
          <Tooltip>
            <TooltipTrigger>
              <button onClick={() => handler(button.id)}>{button.icon}</button>
            </TooltipTrigger>
            <TooltipContent>
              <Typography variant="body" color="white">
                {button.label}
              </Typography>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </ElementsSidebarContainer>
  );
};

export default EditorElementsSidebar;
